import { useFrame, useThree, extend } from '@react-three/fiber';
import { useMemo, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { shaderMaterial } from '@react-three/drei';

// -----------------------------------------------------------------------------
// SHADERS
// -----------------------------------------------------------------------------

// Simulation Vertex Shader (Standard pass-through)
const simVertexShader = `
varying vec2 vUv;
void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`;

// Simulation Fragment Shader (The Physics Engine)
const simFragmentShader = `
uniform sampler2D uPositions;
uniform float uTime;
uniform vec3 uTarget;
uniform float uSpeed;

varying vec2 vUv;

// Random function
float rand(vec2 co){
    return fract(sin(dot(co.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

void main() {
    // Read current position from texture
    vec3 pos = texture2D(uPositions, vUv).rgb;
    
    // Calculate direction to target
    vec3 dir = uTarget - pos;
    float dist = length(dir);
    
    // Normalized direction
    vec3 nDir = normalize(dir);
    
    // Flocking / Flow noise
    vec3 noise = vec3(
        rand(vUv + uTime * 0.1) - 0.5,
        rand(vUv + uTime * 0.1 + 1.0) - 0.5,
        rand(vUv + uTime * 0.1 + 2.0) - 0.5
    );
    
    // Move towards target with some noise
    vec3 vel = nDir * uSpeed * 0.1;
    
    // Add swirl/orbit if close
    if(dist < 2.0) {
        vec3 crossDir = cross(nDir, vec3(0.0, 1.0, 0.0));
        vel += crossDir * 0.05;
    }
    
    pos += vel + noise * 0.02;
    
    // Respawn logic: If too close to target or too far away
    if (dist < 0.2 || dist > 25.0) {
        // Respawn at a random position relative to target to create a "cycle" or stream
        // For a continuous stream effect, typically you spawn at "start" and move to "end".
        // Here we just re-perturb them to keep the cloud alive.
        float theta = rand(vUv + uTime) * 6.28;
        float phi = rand(vUv + uTime + 1.0) * 3.14;
        float r = 5.0 + rand(vUv) * 5.0; // Respawn radius
        
        pos = uTarget + vec3(
            r * sin(phi) * cos(theta),
            r * sin(phi) * sin(theta),
            r * cos(phi)
        ) * 0.5; // Respawn somewhere around the target but far out
    }

    gl_FragColor = vec4(pos, 1.0);
}
`;

// Render Vertex Shader (Reads position from FBO)
const renderVertexShader = `
uniform sampler2D uPositions;
uniform float uPointSize;

varying vec3 vColor;

void main() {
    // Read position from the simulation texture using UV coordinates
    vec3 pos = texture2D(uPositions, position.xy).rgb;
    
    vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPosition;
    
    // Size attenuation
    gl_PointSize = uPointSize * (1.0 / -mvPosition.z);
    
    // Color based on position or speed (optional)
    vColor = vec3(0.6, 0.5, 0.9); // Base lavender
}
`;

// Render Fragment Shader (Draws the particle)
const renderFragmentShader = `
varying vec3 vColor;

void main() {
    // Circle shape calculation
    vec2 cxy = 2.0 * gl_PointCoord - 1.0;
    float r = dot(cxy, cxy);
    if (r > 1.0) discard;
    
    // Soft glow
    float alpha = 1.0 - r;
    alpha = pow(alpha, 2.0);
    
    gl_FragColor = vec4(vColor, alpha);
}
`;


// -----------------------------------------------------------------------------
// COMPONENT
// -----------------------------------------------------------------------------

const SimulationMaterial = shaderMaterial(
    { uPositions: null, uTime: 0, uTarget: new THREE.Vector3(0, 0, 0), uSpeed: 1.0 },
    simVertexShader,
    simFragmentShader
);

const RenderMaterial = shaderMaterial(
    { uPositions: null, uPointSize: 2.0 },
    renderVertexShader,
    renderFragmentShader
);

extend({ SimulationMaterial, RenderMaterial });

const SIZE = 128; // Texture size (128x128 = 16k particles). Increase to 256 for 65k, 512 for 262k if powerful.

const DataStream = ({ target }: { target: THREE.Vector3 }) => {
    const { gl } = useThree();
    const pointsRef = useRef<THREE.Points>(null);
    const simMatRef = useRef<any>(null);
    const renderMatRef = useRef<any>(null);

    // FBO Setup
    const scene = new THREE.Scene();
    const cameraOrtho = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

    const [currRenderTarget, nextRenderTarget] = useMemo(() => {
        const createTarget = () => new THREE.WebGLRenderTarget(SIZE, SIZE, {
            minFilter: THREE.NearestFilter,
            magFilter: THREE.NearestFilter,
            format: THREE.RGBAFormat,
            type: THREE.FloatType, // Important for storing positions
            stencilBuffer: false,
        });
        return [createTarget(), createTarget()];
    }, []);

    // Initial Positions Texture
    const initialPositions = useMemo(() => {
        const data = new Float32Array(SIZE * SIZE * 4);
        for (let i = 0; i < SIZE * SIZE; i++) {
            const i4 = i * 4;
            // Random sphere distribution
            const r = 10 * Math.sqrt(Math.random());
            const theta = Math.random() * 2 * Math.PI;
            const phi = Math.acos(2 * Math.random() - 1);

            data[i4] = r * Math.sin(phi) * Math.cos(theta);
            data[i4 + 1] = r * Math.sin(phi) * Math.sin(theta);
            data[i4 + 2] = r * Math.cos(phi);
            data[i4 + 3] = 1.0;
        }
        const tex = new THREE.DataTexture(data, SIZE, SIZE, THREE.RGBAFormat, THREE.FloatType);
        tex.needsUpdate = true;
        return tex;
    }, []);

    // Geometry for the FBO quad (a simple plane to run the shader)
    const simGeometry = useMemo(() => new THREE.PlaneGeometry(2, 2), []);
    // Geometry for the particles (vertices correspond to pixels in the FBO)
    const particlesGeometry = useMemo(() => {
        const geo = new THREE.BufferGeometry();
        const positions = new Float32Array(SIZE * SIZE * 3);
        // We store UVs in the "position" attribute of the particle geometry
        // so the vertex shader knows which pixel to read from the FBO
        for (let i = 0; i < SIZE; i++) {
            for (let j = 0; j < SIZE; j++) {
                const k = (i * SIZE + j) * 3;
                positions[k] = j / SIZE;     // u
                positions[k + 1] = i / SIZE; // v
                positions[k + 2] = 0;
            }
        }
        geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        return geo;
    }, []);

    // Cyclic References for Ping-Pong
    const rtA = useRef(currRenderTarget);
    const rtB = useRef(nextRenderTarget);

    useFrame((state) => {
        // -----------------------
        // 1. Simulation Pass
        // -----------------------
        if (!simMatRef.current) return;

        // Update Uniforms
        if (simMatRef.current.uniforms) {
            simMatRef.current.uniforms.uTime.value = state.clock.elapsedTime;
            if (target) {
                simMatRef.current.uniforms.uTarget.value.lerp(target, 0.05);
            }
            simMatRef.current.uniforms.uPositions.value = rtA.current.texture;
        }

        // Render to off-screen buffer (rtB)
        gl.setRenderTarget(rtB.current);
        gl.render(scene, cameraOrtho);
        gl.setRenderTarget(null);

        // -----------------------
        // 2. Render Pass
        // -----------------------
        if (renderMatRef.current) {
            renderMatRef.current.uPositions = rtB.current.texture;
        }

        // Swap buffers
        const temp = rtA.current;
        rtA.current = rtB.current;
        rtB.current = temp;
    });

    // Create the simulation mesh (scene used for FBO rendering only)
    const simMesh = useMemo(() => {
        const mesh = new THREE.Mesh(simGeometry, new THREE.ShaderMaterial({
            uniforms: {
                uPositions: { value: initialPositions },
                uTime: { value: 0 },
                uTarget: { value: new THREE.Vector3() },
                uSpeed: { value: 2.0 },
            },
            vertexShader: simVertexShader,
            fragmentShader: simFragmentShader
        }));
        // We need to keep a ref to the material to update uniforms
        // But since we created it manually, we'll assign it in a useEffect or reuse the ref
        return mesh;
    }, [simGeometry, initialPositions]);

    // Hack: Assign the material from the mesh to our ref
    useEffect(() => {
        if (simMesh) simMatRef.current = simMesh.material;
        scene.add(simMesh); // Add to the isolated FBO scene
        return () => { scene.remove(simMesh); }
    }, [simMesh, scene]);


    return (
        <points ref={pointsRef} geometry={particlesGeometry}>
            {/* The material that draws the dots */}
            <shaderMaterial
                ref={renderMatRef}
                uniforms={{
                    uPositions: { value: null }, // Will be set in useFrame
                    uPointSize: { value: 6.0 } // Increased size for visibility
                }}
                vertexShader={renderVertexShader}
                fragmentShader={renderFragmentShader}
                transparent={true}
                depthWrite={false}
                blending={THREE.AdditiveBlending}
            />
        </points>
    );
};

export default DataStream;
