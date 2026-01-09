interface Feature {
    icon: React.ReactNode;
    title: string;
    description: string;
    metric: string;
    metricLabel: string;
}

const ShieldIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-primary)]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

const BoltIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-secondary)]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const GlobeIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
);

const features: Feature[] = [
    {
        icon: <ShieldIcon />,
        title: 'Zero-Knowledge Proofs',
        description: 'Groth16 SNARKs enable privacy-preserving verification. Prove identity attributes without revealing personal data.',
        metric: '256 bytes',
        metricLabel: 'Proof Size'
    },
    {
        icon: <BoltIcon />,
        title: 'Light Protocol Integration',
        description: 'State compression reduces on-chain storage costs by 5000x. Only $0.0001 per identity verification.',
        metric: '5000x',
        metricLabel: 'Cost Reduction'
    },
    {
        icon: <GlobeIcon />,
        title: 'Aadhaar Infrastructure',
        description: 'Government-backed identity verification with 2048-bit RSA signatures. 1.4 billion verified identities.',
        metric: '1.4B',
        metricLabel: 'Potential Users'
    }
];

const Features = () => {
    return (
        <section id="features" className="py-24 md:py-32 relative">
            {/* Background Accent */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] opacity-10 blur-3xl pointer-events-none animate-[pulse-glow_8s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)' }}
            />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 animate-[fade-in_0.8s_ease-out]">
                        Core <span className="gradient-text">Features</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-[fade-in_0.8s_ease-out_0.1s_both]">
                        Privacy-first identity verification powered by cutting-edge cryptography
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 hover:scale-[1.03] transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.25)] group cursor-default animate-[slide-up_0.6s_ease-out_both]"
                            style={{ animationDelay: `${index * 0.15}s` }}
                        >
                            {/* Icon */}
                            <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                <div className="w-14 h-14 glass-light rounded-xl flex items-center justify-center group-hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-shadow duration-500">
                                    {feature.icon}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-bold font-[var(--font-heading)] mb-3 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                                {feature.title}
                            </h3>

                            {/* Description */}
                            <p className="text-[var(--color-text-secondary)] text-sm leading-relaxed mb-6 group-hover:text-[var(--color-text-primary)] transition-colors duration-300">
                                {feature.description}
                            </p>

                            {/* Metric */}
                            <div className="pt-6 border-t border-[var(--color-border)] group-hover:border-[var(--color-primary)]/30 transition-colors duration-300">
                                <div className="text-2xl font-bold gradient-text group-hover:scale-105 inline-block transition-transform duration-300">{feature.metric}</div>
                                <div className="text-xs text-[var(--color-text-muted)] uppercase tracking-wider mt-1">
                                    {feature.metricLabel}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
