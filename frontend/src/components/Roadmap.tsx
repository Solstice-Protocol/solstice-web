interface Phase {
    phase: string;
    title: string;
    timeline: string;
    status: 'completed' | 'current' | 'upcoming';
    milestones: string[];
}

const phases: Phase[] = [
    {
        phase: 'Phase 1',
        title: 'MVP',
        timeline: 'Q4 2025',
        status: 'current',
        milestones: [
            'Core smart contracts (Rust/Anchor)',
            'Age, nationality, uniqueness circuits',
            'Frontend QR scanner + prover',
            'Light Protocol compression',
            'Testnet deployment'
        ]
    },
    {
        phase: 'Phase 2',
        title: 'Security Hardening',
        timeline: 'Q1 2026',
        status: 'upcoming',
        milestones: [
            'Professional smart contract audit',
            'ZK circuit security review',
            'Penetration testing',
            'Bug bounty program ($100K pool)',
            'Mainnet beta launch'
        ]
    },
    {
        phase: 'Phase 3',
        title: 'Ecosystem Growth',
        timeline: 'Q2-Q3 2026',
        status: 'upcoming',
        milestones: [
            'SDK releases (JavaScript, Rust, Python)',
            '10+ dApp integrations',
            'Developer grants program ($1M)',
            'Hackathon sponsorships',
            'Marketing campaigns (100K users)'
        ]
    },
    {
        phase: 'Phase 4',
        title: 'Decentralization',
        timeline: 'Q4 2026',
        status: 'upcoming',
        milestones: [
            'Token launch (governance + utility)',
            'DAO formation',
            'Decentralized sequencer network',
            'Cross-chain bridges',
            'Mobile app (iOS + Android)'
        ]
    },
    {
        phase: 'Phase 5',
        title: 'Global Expansion',
        timeline: '2027+',
        status: 'upcoming',
        milestones: [
            'Additional ID systems (Passport, eID)',
            'Biometric proofs (FaceID, fingerprint)',
            'AI agent verification',
            'Compliance framework (GDPR, CCPA)',
            'Enterprise partnerships'
        ]
    }
];

const Roadmap = () => {
    return (
        <section id="roadmap" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div
                className="absolute top-1/2 left-0 w-[500px] h-[500px] opacity-10 blur-3xl pointer-events-none -translate-y-1/2 animate-[orb-float_30s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(ellipse, #8b5cf6 0%, transparent 70%)' }}
            />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 animate-[fade-in_0.8s_ease-out]">
                        Development <span className="gradient-text">Roadmap</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-[fade-in_0.8s_ease-out_0.1s_both]">
                        Our journey from MVP to global identity infrastructure
                    </p>
                </div>

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical Line */}
                    <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px overflow-hidden">
                        <div className="w-full h-full bg-gradient-to-b from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-border)] animate-[pulse-glow_3s_ease-in-out_infinite]" />
                    </div>

                    <div className="space-y-8">
                        {phases.map((phase, index) => (
                            <div
                                key={index}
                                className="relative pl-12 md:pl-16 animate-[slide-up_0.6s_ease-out_both]"
                                style={{ animationDelay: `${index * 0.1}s` }}
                            >
                                {/* Dot */}
                                <div
                                    className={`absolute left-2 md:left-4 top-6 w-4 h-4 rounded-full border-2 transition-all duration-500 ${phase.status === 'current'
                                            ? 'gradient-bg border-transparent shadow-[0_0_20px_rgba(139,92,246,0.6)]'
                                            : phase.status === 'completed'
                                                ? 'bg-green-500 border-transparent shadow-[0_0_15px_rgba(34,197,94,0.5)]'
                                                : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)]'
                                        }`}
                                >
                                    {phase.status === 'current' && (
                                        <div className="absolute inset-0 rounded-full gradient-bg animate-ping opacity-50" />
                                    )}
                                </div>

                                {/* Card */}
                                <div className={`glass rounded-2xl p-6 transition-all duration-500 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] hover:scale-[1.01] group cursor-default ${phase.status === 'current' ? 'border-[var(--color-primary)]/50' : ''
                                    }`}>
                                    {/* Header */}
                                    <div className="flex flex-wrap items-center gap-3 mb-4">
                                        <span className="text-xs font-medium text-[var(--color-primary)] px-3 py-1 bg-[var(--color-primary)]/10 rounded-full group-hover:bg-[var(--color-primary)]/20 transition-colors duration-300">
                                            {phase.phase}
                                        </span>
                                        <span className="text-xs text-[var(--color-text-muted)]">
                                            {phase.timeline}
                                        </span>
                                        {phase.status === 'current' && (
                                            <span className="text-xs font-medium text-green-400 px-3 py-1 bg-green-400/10 rounded-full flex items-center gap-1.5">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                In Progress
                                            </span>
                                        )}
                                    </div>

                                    <h3 className="text-xl font-bold font-[var(--font-heading)] mb-4 group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                                        {phase.title}
                                    </h3>

                                    {/* Milestones */}
                                    <ul className="space-y-2">
                                        {phase.milestones.map((milestone, idx) => (
                                            <li
                                                key={idx}
                                                className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors duration-300"
                                                style={{ transitionDelay: `${idx * 50}ms` }}
                                            >
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    className={`mt-0.5 flex-shrink-0 ${phase.status === 'current' || phase.status === 'completed'
                                                            ? 'text-green-400'
                                                            : 'text-[var(--color-text-muted)]'
                                                        }`}
                                                >
                                                    <polyline points="20 6 9 17 4 12" />
                                                </svg>
                                                {milestone}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
