import { useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const HowItWorks = () => {
    useEffect(() => {
        // Complex Path Animation
        const tl = anime.timeline({
            easing: 'linear',
            loop: true
        });

        tl.add({
            targets: '.data-node',
            scale: [1, 1.2, 1],
            duration: 1000,
            delay: anime.stagger(200)
        });

        anime({
            targets: '.connection-line',
            strokeDashoffset: [anime.setDashoffset, 0],
            easing: 'easeInOutSine',
            duration: 1500,
            delay: function (_el: any, i: number) { return i * 250 },
            direction: 'alternate',
            loop: true
        });
    }, []);

    return (
        <section className="py-24 px-6 border-t border-[var(--color-border)] bg-[var(--color-bg-primary)]">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-normal mb-12 italic text-[var(--color-text-primary)] border-b border-[var(--color-border)] pb-4 inline-block">
                    Architecture
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                    {/* Text Content */}
                    <div className="space-y-8 font-serif leading-relaxed text-[var(--color-text-secondary)]">
                        <p>
                            <strong className="text-[var(--color-text-primary)] block mb-2 text-xl">1. Client-Side Generation</strong>
                            Users generate zero-knowledge proofs locally. PII from Aadhaar/Passport never leaves the device.
                        </p>
                        <p>
                            <strong className="text-[var(--color-text-primary)] block mb-2 text-xl">2. Compressed State</strong>
                            Leveraging Light Protocol to compress identity state trees, reducing storage costs by 5000x on Solana.
                        </p>
                    </div>

                    {/* Animated Diagram Area */}
                    <div className="relative h-80 w-full border border-[var(--color-border)] bg-[var(--color-bg-secondary)] flex items-center justify-center p-8">
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 400 300">
                            <line className="connection-line" x1="100" y1="150" x2="300" y2="150" stroke="#444" strokeWidth="2" fill="none" />
                            <circle className="connection-line" cx="200" cy="150" r="40" stroke="#444" strokeWidth="2" fill="none" />
                        </svg>

                        <div className="relative w-full flex justify-between px-12">
                            <div className="data-node w-12 h-12 bg-[var(--color-bg-tertiary)] border border-[var(--color-text-muted)] flex items-center justify-center text-xs text-[var(--color-text-secondary)] rounded-full z-10">
                                User
                            </div>
                            <div className="data-node w-16 h-16 bg-[var(--color-bg-tertiary)] border border-[var(--color-text-muted)] flex items-center justify-center text-xs text-[var(--color-text-primary)] rounded-full z-10 shadow-2xl">
                                ZK
                            </div>
                            <div className="data-node w-12 h-12 bg-[var(--color-bg-tertiary)] border border-[var(--color-text-muted)] flex items-center justify-center text-xs text-[var(--color-text-secondary)] rounded-full z-10">
                                Chain
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
