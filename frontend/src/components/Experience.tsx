import { useRef, useState, useEffect } from 'react';
import { useThree, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Html } from '@react-three/drei';
import Hero from './Hero';
import HowItWorks from './HowItWorks';
import Features from './Features';
import UseCases from './UseCases';
import Footer from './Footer';
import DeveloperSDK from './DeveloperSDK';
import Trust from './Trust';
import { ProtocolNetwork, WAYPOINTS } from './Background3D';
import DataStream from './DataStream';

const SECTIONS = [Hero, HowItWorks, Features, DeveloperSDK, UseCases, Trust, Footer];

const CameraController = ({ targetIndex }: { targetIndex: number }) => {
    const { camera } = useThree();

    useFrame((state, delta) => {
        const targetPoint = WAYPOINTS[targetIndex];

        // CENTERED STRATEGY:
        // Move to (Node + slight offset) and look AT Node.
        // Offset Z+6 puts us "in front" of the node assuming standard orientation
        const offset = new THREE.Vector3(0, 0, 6);
        const cameraTargetPos = targetPoint.clone().add(offset);

        // Smooth Motion - Slow and Heavy
        const POSITION_SPEED = 1.2;
        camera.position.lerp(cameraTargetPos, delta * POSITION_SPEED);

        // Look directly at the node
        state.camera.lookAt(targetPoint);
    });
    return null;
};

const Experience = () => {
    const [index, setIndex] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const timeoutRef = useRef<any>(null);

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return;
            if (Math.abs(e.deltaY) < 30) return;

            const direction = e.deltaY > 0 ? 1 : -1;
            const nextIndex = Math.min(Math.max(index + direction, 0), SECTIONS.length - 1);

            if (nextIndex !== index) {
                setIndex(nextIndex);
                setIsScrolling(true);
                clearTimeout(timeoutRef.current);
                timeoutRef.current = setTimeout(() => {
                    setIsScrolling(false);
                }, 1000);
            }
        };

        window.addEventListener('wheel', handleWheel);
        return () => window.removeEventListener('wheel', handleWheel);
    }, [index, isScrolling]);

    return (
        <>
            <CameraController targetIndex={index} />
            <ProtocolNetwork />
            <DataStream target={WAYPOINTS[index]} />

            {/* Render "Station" markers at each Waypoint in 3D space */}
            {WAYPOINTS.map((pos: THREE.Vector3, i: number) => (
                <group key={i} position={pos}>
                    {/* Glowing Core */}
                    <mesh>
                        <sphereGeometry args={[0.2, 32, 32]} />
                        <meshBasicMaterial
                            color="#fff"
                            transparent
                            opacity={i === index ? 0.9 : 0.5}
                        />
                    </mesh>
                    {/* Ring */}
                    <mesh rotation={[Math.PI / 2, 0, 0]}>
                        <ringGeometry args={[0.4, 0.45, 64]} />
                        <meshBasicMaterial
                            color={i === index ? "#fff" : "#666"}
                            transparent
                            opacity={i === index ? 0.8 : 0.2}
                            side={THREE.DoubleSide}
                        />
                    </mesh>
                </group>
            ))}

            {/* Content Overlay - FULLY CENTERED */}
            <Html fullscreen style={{ pointerEvents: 'none', zIndex: 10 }}>
                {SECTIONS.map((Component, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-in-out ${i === index
                            ? 'opacity-100 scale-100 pointer-events-auto blur-none'
                            : 'opacity-0 scale-95 pointer-events-none blur-sm'
                            }`}
                    >
                        {/* Centered Container for Text */}
                        <div className="w-full max-w-5xl px-6 flex flex-col justify-center items-center text-center">
                            {/* Semi-transparent Card */}
                            <div className="bg-black/30 backdrop-blur-md p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl">
                                <Component />
                            </div>
                        </div>
                    </div>
                ))}
            </Html>

            {/* Navigation Dots - Locked Right */}
            <Html fullscreen style={{ pointerEvents: 'none', zIndex: 20 }}>
                <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-6 pointer-events-auto items-center">
                    {SECTIONS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`w-3 h-3 rounded-full border transition-all duration-300 ${i === index
                                ? 'bg-accent-grape border-accent-grape scale-150'
                                : 'bg-transparent border-white/30 hover:bg-white/50'
                                }`}
                            aria-label={`Go to section ${i + 1}`}
                        />
                    ))}
                    <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-px bg-white/10 -z-10" />
                </div>
            </Html>
        </>
    );
};

export default Experience;
