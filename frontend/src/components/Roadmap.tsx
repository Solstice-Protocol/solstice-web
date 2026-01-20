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
        <section id="roadmap" className="py-32 relative overflow-hidden">
            {/* Background accent */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] opacity-[0.03]">
                    <svg viewBox="0 0 1200 600" fill="none" className="w-full h-full">
                        <line x1="0" y1="300" x2="1200" y2="300" stroke="url(#roadmapGradient)" strokeWidth="2" />
                        <defs>
                            <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="transparent" />
                                <stop offset="50%" stopColor="#00d9ff" />
                                <stop offset="100%" stopColor="transparent" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-heading)] leading-[1.1] mb-6">
                        Development <span className="gradient-text">Roadmap</span>
                    </h2>
                    <p className="text-xl text-[var(--color-text-secondary)]">
                        Our journey from MVP to global identity infrastructure.
                    </p>
                </div>

                {/* Horizontal timeline for large screens */}
                <div className="hidden lg:block mb-16">
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute top-6 left-0 right-0 h-px bg-[var(--color-border)]">
                            <div
                                className="h-full bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)]"
                                style={{ width: '20%' }} // Progress based on current phase
                            />
                        </div>

                        {/* Phase markers */}
                        <div className="flex justify-between">
                            {phases.map((phase, index) => (
                                <div key={index} className="relative flex flex-col items-center" style={{ width: '20%' }}>
                                    {/* Dot */}
                                    <div className={`relative z-10 w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-500 ${phase.status === 'current'
                                        ? 'gradient-bg border-transparent shadow-[0_0_30px_rgba(0,217,255,0.5)]'
                                        : phase.status === 'completed'
                                            ? 'bg-green-500 border-transparent'
                                            : 'bg-[var(--color-bg-secondary)] border-[var(--color-border)] hover:border-[var(--color-primary)]/50'
                                        }`}>
                                        {phase.status === 'current' && (
                                            <div className="absolute inset-0 rounded-full gradient-bg animate-ping opacity-30" />
                                        )}
                                        <span className="text-sm font-bold">{index + 1}</span>
                                    </div>

                                    {/* Label */}
                                    <div className="mt-4 text-center">
                                        <div className="text-xs text-[var(--color-text-muted)] mb-1">{phase.timeline}</div>
                                        <div className={`font-semibold ${phase.status === 'current' ? 'text-white' : 'text-[var(--color-text-secondary)]'
                                            }`}>
                                            {phase.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {phases.slice(0, 3).map((phase, index) => (
                        <div
                            key={index}
                            className={`group relative rounded-3xl border transition-all duration-700 overflow-hidden cursor-default ${phase.status === 'current'
                                ? 'border-[var(--color-primary)]/40 bg-white/[0.03]'
                                : 'border-[var(--color-border)] hover:border-white/10 bg-white/[0.01] hover:bg-white/[0.02]'
                                }`}
                        >
                            {/* Glow for current */}
                            {phase.status === 'current' && (
                                <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-primary)]/10 to-transparent" />
                            )}

                            <div className="relative p-8">
                                {/* Header */}
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <span className="text-xs font-medium text-[var(--color-primary)] px-3 py-1 bg-[var(--color-primary)]/10 rounded-full">
                                            {phase.phase}
                                        </span>
                                        {phase.status === 'current' && (
                                            <span className="flex items-center gap-1.5 text-xs font-medium text-green-400 px-3 py-1 bg-green-400/10 rounded-full">
                                                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                                                Active
                                            </span>
                                        )}
                                    </div>
                                    <span className="text-sm text-[var(--color-text-muted)]">{phase.timeline}</span>
                                </div>

                                <h3 className="text-2xl font-bold font-[var(--font-heading)] mb-6 group-hover:text-white transition-colors">
                                    {phase.title}
                                </h3>

                                {/* Milestones */}
                                <ul className="space-y-3">
                                    {phase.milestones.map((milestone, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-text-primary)] transition-colors">
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`mt-0.5 flex-shrink-0 ${phase.status === 'current' ? 'text-green-400' : 'text-[var(--color-text-muted)]'
                                                }`}>
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

                {/* View all phases link */}
                <div className="mt-12 text-center">
                    <button className="inline-flex items-center gap-2 text-[var(--color-text-secondary)] hover:text-white transition-colors group">
                        <span>View all {phases.length} phases</span>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="group-hover:translate-x-1 transition-transform">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
