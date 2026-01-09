const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Animated Background */}
            <div className="absolute inset-0 overflow-hidden">
                {/* Gradient Orbs */}
                <div
                    className="absolute top-1/4 -left-32 w-96 h-96 rounded-full opacity-30 blur-3xl animate-[orb-float_20s_ease-in-out_infinite]"
                    style={{ background: 'radial-gradient(circle, #8b5cf6 0%, transparent 70%)' }}
                />
                <div
                    className="absolute top-1/2 -right-32 w-[500px] h-[500px] rounded-full opacity-25 blur-3xl animate-[orb-float_25s_ease-in-out_infinite_reverse]"
                    style={{ background: 'radial-gradient(circle, #3b82f6 0%, transparent 70%)' }}
                />
                <div
                    className="absolute -bottom-32 left-1/3 w-80 h-80 rounded-full opacity-20 blur-3xl animate-[orb-float_22s_ease-in-out_infinite_2s]"
                    style={{ background: 'radial-gradient(circle, #06b6d4 0%, transparent 70%)' }}
                />

                {/* Grid Overlay */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `
                            linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(139, 92, 246, 0.5) 1px, transparent 1px)
                        `,
                        backgroundSize: '60px 60px'
                    }}
                />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-3 glass-light px-5 py-2.5 rounded-full mb-8 animate-[fade-in_0.8s_ease-out] hover:scale-105 transition-transform cursor-default">
                    <div className="w-5 h-5 gradient-bg rounded-md flex items-center justify-center">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                        </svg>
                    </div>
                    <span className="text-sm font-medium text-[var(--color-text-secondary)]">
                        Zero-Knowledge Identity Verification
                    </span>
                </div>

                {/* Title */}
                <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-[var(--font-heading)] leading-tight mb-6 animate-[slide-up_0.8s_ease-out]">
                    Privacy-Preserving
                    <br />
                    <span className="gradient-text animate-[gradient-shift_8s_ease_infinite] bg-[length:200%_200%]">Identity for Web3</span>
                </h1>

                {/* Subtitle */}
                <p className="text-lg md:text-xl text-[var(--color-text-secondary)] max-w-3xl mx-auto mb-12 animate-[slide-up_0.8s_ease-out_0.1s_both]">
                    Prove your age, nationality, and uniqueness without revealing personal data.
                    <br className="hidden md:block" />
                    Built on Solana with Groth16 SNARKs and Light Protocol compression.
                </p>

                {/* Stats */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-16 mb-12 animate-[slide-up_0.8s_ease-out_0.2s_both]">
                    {[
                        { value: '1.4B', label: 'Potential Users' },
                        { value: '5000x', label: 'Cost Reduction' },
                        { value: '256B', label: 'Proof Size' }
                    ].map((stat, index) => (
                        <div key={index} className="text-center group">
                            <div className="text-3xl md:text-4xl font-bold gradient-text group-hover:scale-110 transition-transform duration-300">
                                {stat.value}
                            </div>
                            <div className="text-sm text-[var(--color-text-muted)] mt-1">{stat.label}</div>
                            {index < 2 && (
                                <div className="hidden md:block absolute -right-8 top-1/2 -translate-y-1/2 w-px h-12 bg-[var(--color-border)]" />
                            )}
                        </div>
                    ))}
                </div>

                {/* CTAs */}
                <div className="flex flex-wrap justify-center gap-4 animate-[slide-up_0.8s_ease-out_0.3s_both]">
                    <a
                        href="#whitepaper"
                        className="group gradient-bg px-8 py-4 rounded-full font-semibold text-white shadow-lg hover:shadow-[0_0_40px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 flex items-center gap-2"
                    >
                        <span>Read Whitepaper</span>
                        <svg
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            <path d="M4 10h12m0 0l-4-4m4 4l-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </a>
                    <a
                        href="#demo"
                        className="glass px-8 py-4 rounded-full font-semibold text-white hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(139,92,246,0.3)]"
                    >
                        View Demo
                    </a>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-[fade-in_1s_ease-out_1s_both]">
                    <div className="w-6 h-10 border-2 border-[var(--color-border)] rounded-full flex justify-center pt-2 hover:border-[var(--color-primary)] transition-colors">
                        <div className="w-1.5 h-3 bg-[var(--color-primary)] rounded-full animate-[float_1.5s_ease-in-out_infinite]" />
                    </div>
                    <span className="text-xs text-[var(--color-text-muted)] animate-[pulse-glow_2s_ease-in-out_infinite]">Scroll to explore</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;
