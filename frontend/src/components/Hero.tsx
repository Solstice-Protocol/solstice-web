import { motion } from 'framer-motion';
import { useState, useMemo } from 'react';

// 2D Grid Cube with directional color trail
const GridCube = ({
    size,
}: {
    size: number;
}) => {
    const [hoverState, setHoverState] = useState<{
        active: boolean;
        direction: 'top' | 'bottom' | 'left' | 'right' | null;
    }>({ active: false, direction: null });

    const handleMouseEnter = (e: React.MouseEvent<HTMLLIElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        // Calculate angle and determine direction
        const angle = Math.atan2(y, x);
        const normalizedAngle = (angle * 180 / Math.PI + 180) % 360;

        // 45-135: Bottom, 135-225: Left, 225-315: Top, 315-45: Right
        let direction: 'top' | 'bottom' | 'left' | 'right';

        if (normalizedAngle >= 45 && normalizedAngle < 135) {
            direction = 'bottom';
        } else if (normalizedAngle >= 135 && normalizedAngle < 225) {
            direction = 'left';
        } else if (normalizedAngle >= 225 && normalizedAngle < 315) {
            direction = 'top';
        } else {
            direction = 'right';
        }

        setHoverState({ active: true, direction });
    };

    const handleMouseLeave = () => {
        setHoverState(prev => ({ ...prev, active: false }));
    };

    const getBackgroundColor = () => {
        if (!hoverState.direction) return 'transparent'; // Default state

        switch (hoverState.direction) {
            case 'top': return 'var(--color-vintage-grape-500)';
            case 'bottom': return '#60a5fa'; // Blue
            case 'left': return '#f472b6'; // Pink
            case 'right': return '#facc15'; // Yellow
            default: return 'transparent';
        }
    };

    return (
        <li
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="inline-block relative"
            style={{
                width: `${size}px`,
                height: `${size}px`,
            }}
        >
            <div
                className="absolute inset-0"
                style={{
                    backgroundColor: hoverState.active ? getBackgroundColor() : 'transparent',
                    opacity: hoverState.active ? 0.6 : 0, // Fade opacity for trail
                    border: '1px solid rgba(255, 255, 255, 0.03)',
                    // Instant in, slow out (trail effect)
                    transition: hoverState.active
                        ? 'background-color 0s, opacity 0s'
                        : 'background-color 0.8s, opacity 0.8s',
                }}
            />
        </li>
    );
};

// Cube Grid - high density
const CubeGrid = () => {
    // Calculate grid dimensions based on viewport
    const cubeSize = 25; // Smaller size = more cubes
    const cols = Math.ceil(window.innerWidth / cubeSize) + 2;
    const rows = Math.ceil(window.innerHeight / cubeSize) + 2;
    const totalCubes = cols * rows;

    const cubes = useMemo(() =>
        Array.from({ length: totalCubes }).map((_, i) => i),
        [totalCubes]
    );

    return (
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            {/* pointer-events-none on container, auto on children to allow clicks pass through gaps if needed, 
                but here we want hover. 
            */}
            <ul
                className="list-none p-0 m-0 flex flex-wrap pointer-events-auto"
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
            {/* Grid background with trail effect */}
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
