const BankIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-primary)]">
        <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
);

const GamepadIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-secondary)]">
        <rect x="2" y="6" width="20" height="12" rx="2" />
        <path d="M6 12h4M8 10v4M15 11h.01M18 13h.01" />
    </svg>
);

const VoteIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <polyline points="22 4 12 14.01 9 11.01" />
    </svg>
);

const ShieldCheckIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-primary-light)]">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="M9 12l2 2 4-4" />
    </svg>
);

interface UseCase {
    icon: React.ReactNode;
    title: string;
    problem: string;
    solution: string;
    example: string;
}

const useCases: UseCase[] = [
    {
        icon: <BankIcon />,
        title: 'DeFi KYC/AML Compliance',
        problem: 'Regulated protocols need user verification without centralized KYC',
        solution: 'Prove nationality ≠ sanctioned country + age ≥ 18',
        example: 'Compliant trading without data exposure'
    },
    {
        icon: <GamepadIcon />,
        title: 'Sybil-Resistant Airdrops',
        problem: 'Bots farm airdrops with fake accounts',
        solution: 'Require uniqueness proof (one Aadhaar = one account)',
        example: 'Fair token distribution to real users'
    },
    {
        icon: <VoteIcon />,
        title: 'Democratic DAO Voting',
        problem: 'Plutocratic voting (1 token = 1 vote)',
        solution: 'Quadratic voting with uniqueness proofs',
        example: 'True democratic governance'
    },
    {
        icon: <ShieldCheckIcon />,
        title: 'Age-Gated Content',
        problem: 'Platforms face liability for underage users',
        solution: 'Age proof requirement (≥13, ≥18, ≥21)',
        example: 'Compliance without identity collection'
    }
];

const UseCases = () => {
    return (
        <section id="use-cases" className="py-24 md:py-32 relative overflow-hidden">
            {/* Background Accent */}
            <div
                className="absolute bottom-0 right-0 w-[600px] h-[600px] opacity-10 blur-3xl pointer-events-none animate-[orb-float_25s_ease-in-out_infinite]"
                style={{ background: 'radial-gradient(ellipse, #3b82f6 0%, transparent 70%)' }}
            />

            {/* Floating particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-[var(--color-primary)]/20 animate-[float_4s_ease-in-out_infinite]"
                        style={{
                            left: `${15 + i * 15}%`,
                            top: `${20 + (i % 3) * 25}%`,
                            animationDelay: `${i * 0.5}s`
                        }}
                    />
                ))}
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 animate-[fade-in_0.8s_ease-out]">
                        Real-World <span className="gradient-text">Use Cases</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-[fade-in_0.8s_ease-out_0.1s_both]">
                        Privacy-preserving identity verification across DeFi, gaming, governance, and content platforms
                    </p>
                </div>

                {/* Use Cases Grid */}
                <div className="grid md:grid-cols-2 gap-6">
                    {useCases.map((useCase, index) => (
                        <div
                            key={index}
                            className="glass rounded-2xl p-8 hover:scale-[1.02] transition-all duration-500 hover:shadow-[0_0_50px_rgba(139,92,246,0.2)] group cursor-default animate-[slide-up_0.6s_ease-out_both]"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Header */}
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 glass-light rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-500">
                                    {useCase.icon}
                                </div>
                                <h3 className="text-xl font-bold font-[var(--font-heading)] group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                                    {useCase.title}
                                </h3>
                            </div>

                            {/* Content */}
                            <div className="space-y-4">
                                <div className="group-hover:translate-x-1 transition-transform duration-300">
                                    <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1 flex items-center gap-2">
                                        <div className="w-4 h-px bg-red-400/50" />
                                        Problem
                                    </div>
                                    <div className="text-sm text-[var(--color-text-secondary)]">
                                        {useCase.problem}
                                    </div>
                                </div>

                                <div className="group-hover:translate-x-1 transition-transform duration-300 delay-75">
                                    <div className="text-xs uppercase tracking-wider text-[var(--color-text-muted)] mb-1 flex items-center gap-2">
                                        <div className="w-4 h-px bg-green-400/50" />
                                        Solution
                                    </div>
                                    <div className="text-sm font-medium gradient-text">
                                        {useCase.solution}
                                    </div>
                                </div>
                            </div>

                            {/* Example Badge */}
                            <div className="mt-6 pt-6 border-t border-[var(--color-border)] group-hover:border-[var(--color-primary)]/30 transition-colors duration-300">
                                <div className="inline-flex items-center gap-2 text-sm text-[var(--color-text-accent)] group-hover:translate-x-1 transition-transform duration-300">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-green-400">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                    {useCase.example}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
