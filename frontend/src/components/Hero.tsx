import { motion } from 'framer-motion';
import { useState } from 'react';

// Grid cube component with flip animation
const GridCube = ({ delay }: { delay: number }) => {
    const [isFlipped, setIsFlipped] = useState(false);

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay }}
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}
            className="relative w-full h-full"
            style={{ perspective: '1000px' }}
        >
            <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, ease: 'easeInOut' }}
                className="relative w-full h-full"
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front face */}
                <div
                    className="absolute inset-0 border border-white/5 bg-secondary/20"
                    style={{ backfaceVisibility: 'hidden' }}
                />
                {/* Back face */}
                <div
                    className="absolute inset-0 border border-accent-grape/30 bg-accent-grape/10"
                    style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                />
            </motion.div>
        </motion.div>
    );
};

const Hero = () => {
    // Create grid of cubes (10x6 grid)
    const gridRows = 6;
    const gridCols = 10;
    const totalCubes = gridRows * gridCols;

    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-transparent px-4 relative overflow-hidden">
            {/* Grid background with flip cubes */}
            <div className="absolute inset-0 grid grid-cols-10 grid-rows-6 gap-0 opacity-30">
                {Array.from({ length: totalCubes }).map((_, i) => (
                    <GridCube key={i} delay={i * 0.01} />
                ))}
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center max-w-6xl mx-auto">
                {/* Main title - SOLSTICE centered */}
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

                {/* Minimal button - matching the style from image */}
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
