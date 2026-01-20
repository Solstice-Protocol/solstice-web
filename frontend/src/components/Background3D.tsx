import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm'
import { useState, useRef, Suspense, useMemo } from 'react';
import * as THREE from 'three';

const ProtocolNetwork = (props: any) => {
    const groupRef = useRef<any>();
    const mouseGroupRef = useRef<any>();

    // Generate sphere points
    const points = useMemo(() => {
        return random.inSphere(new Float32Array(300), { radius: 1.8 }) as Float32Array;
    }, []);

    useFrame((state, delta) => {
        // Auto-rotation (The Network spinning)
        if (groupRef.current) {
            groupRef.current.rotation.y -= delta / 15;
            groupRef.current.rotation.x -= delta / 20;
        }

        // Mouse Reactivity (Parallax/Tilt effect)
        if (mouseGroupRef.current) {
            // Smoothly interpolate rotation towards mouse position
            // Mouse X affects Y rotation (left/right look)
            // Mouse Y affects X rotation (up/down look)
            mouseGroupRef.current.rotation.x = THREE.MathUtils.lerp(
                mouseGroupRef.current.rotation.x,
                state.pointer.y * 0.2, // vertical tilt amount
                0.1 // smoothing factor
            );
            mouseGroupRef.current.rotation.y = THREE.MathUtils.lerp(
                mouseGroupRef.current.rotation.y,
                state.pointer.x * 0.2, // horizontal tilt amount
                0.1
            );
        }
    });

    // Create connections for a subset of points to simulate "protocol links"
    const lines = useMemo(() => {
        const linePoints = [];
        const count = points.length / 3;
        for (let i = 0; i < 50; i++) {
            const indexA = Math.floor(Math.random() * count) * 3;
            const indexB = Math.floor(Math.random() * count) * 3;
            linePoints.push(new THREE.Vector3(points[indexA], points[indexA + 1], points[indexA + 2]));
            linePoints.push(new THREE.Vector3(points[indexB], points[indexB + 1], points[indexB + 2]));
        }
        return linePoints;
    }, [points]);

    return (
        <group ref={mouseGroupRef}>
            <group ref={groupRef} rotation={[0, 0, Math.PI / 4]}>
                {/* The Nodes (Identities) */}
                <Points positions={points} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial
                        transparent
                        color="#9384ae" // Vintage Grape
                        size={0.008}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.6}
                    />
                </Points>

                {/* The Connections (Proofs) */}
                <Line
                    worldUnits
                    points={lines}       // Array of Vector3
                    color="#bab4ab"      // Stone Brown
                    lineWidth={0.002}
                    transparent
                    opacity={0.15}
                />

                {/* Core "Solstice" visual - Inner dense core */}
                <Points positions={points.slice(0, 150)} stride={3} frustumCulled={false} {...props}>
                    <PointMaterial
                        transparent
                        color="#f4f3f1" // Stone Brown Light
                        size={0.012}
                        sizeAttenuation={true}
                        depthWrite={false}
                        opacity={0.8}
                    />
                </Points>
            </group>
        </group>
    );
};

const Background3D = () => {
    return (
        <div className="absolute inset-0 z-0 opacity-60 pointer-events-none fade-in-slow">
            <Canvas camera={{ position: [0, 0, 1] }} dpr={[1, 2]}>
                <Suspense fallback={null}>
                    <ambientLight intensity={0.5} />
                    <ProtocolNetwork />
                </Suspense>
            </Canvas>

            {/* Vignette Overlay for focus */}
            <div className="absolute inset-0 bg-radial-gradient from-transparent to-primary opacity-80" style={{ background: 'radial-gradient(circle at center, transparent 0%, var(--color-bg-primary) 100%)' }}></div>
        </div>
    );
};

export default Background3D;
