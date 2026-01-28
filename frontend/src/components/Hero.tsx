import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

// CSS 3D Cube that flips on hover - only the hovered cube flips
const GridCube = ({
    size,
}: {
    size: number;
}) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-block"
            style={{
                perspective: '1000px',
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <span
                className="relative inline-block w-full h-full"
                style={{
                    transformStyle: 'preserve-3d',
                    transformOrigin: '50% 0',
                    transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                    transform: isHovered
                        ? `rotateX(90deg) translateY(-${size * 0.55}px)`
                        : 'rotateX(0deg)',
                }}
            >
                {/* Front face - very subtle */}
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.015)',
                        border: '1px solid rgba(255, 255, 255, 0.03)',
                    }}
                />
                {/* Bottom face (revealed on flip) */}
                <div
                    className="absolute left-0 w-full"
                    style={{
                        top: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(80, 80, 80, 0.5)',
                        border: '1px solid rgba(100, 100, 100, 0.6)',
                        boxShadow: '0 0 15px rgba(80, 80, 80, 0.4)',
                        transform: 'rotateX(-90deg)',
                        transformOrigin: '50% 0',
                    }}
                />
            </span>
        </li>
    );
};

// Cube Grid - simple, no cascade effect
const CubeGrid = () => {
    // Calculate grid dimensions based on viewport
    const cubeSize = 40; // Fixed square cube size
    const cols = Math.ceil(window.innerWidth / cubeSize) + 2;
    const rows = Math.ceil(window.innerHeight / cubeSize) + 2;
    const totalCubes = cols * rows;

    const cubes = useMemo(() =>
        Array.from({ length: totalCubes }).map((_, i) => i),
        [totalCubes]
    );

    return (
        <div className="absolute inset-0 z-0 overflow-hidden">
            <ul
                className="list-none p-0 m-0 flex flex-wrap"
                style={{
                    width: `${cols * cubeSize}px`,
                }}
            >
                {cubes.map((index) => (
                    <GridCube
                        key={index}
                        size={cubeSize}
                    />
                ))}
            </ul>
        </div>
    );
};

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 relative overflow-hidden">
            {/* Grid background with 3D flip cubes */}
            <CubeGrid />

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
                {/* Main title - simple, no animation */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: 'easeOut' }}
                    className="mb-8"
                >
                    <h1 className="text-7xl md:text-9xl lg:text-[10rem] font-futuristic font-bold tracking-tighter text-text-primary text-center">
                        SOLSTICE
                    </h1>
                </motion.div>

                {/* Subtitle */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="text-center mb-12"
                >
                    <p className="text-sm md:text-base font-futuristic font-light text-text-muted tracking-[0.3em] uppercase">
                        Private Identity Protocol
                    </p>
                    <p className="text-xs md:text-sm font-futuristic font-light text-text-muted tracking-[0.2em] uppercase mt-2">
                        Zero-Knowledge • Solana • Decentralized
                    </p>
                </motion.div>

                {/* Minimal button */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                >
                    <a
                        href="/documentation"
                        className="group inline-flex items-center gap-3 px-10 py-4 border border-white/10 hover:border-accent-grape/50 bg-transparent hover:bg-white/5 text-text-muted hover:text-text-primary transition-all duration-300 font-futuristic text-sm tracking-[0.2em] uppercase"
                    >
                        Documentation
                        <svg
                            className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
