const DeviceIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-primary)]">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
        <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
);

const ChainIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-secondary)]">
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
    </svg>
);

const ZapIcon = () => (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-accent)]">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
);

const Architecture = () => {
    const layers = [
        {
            icon: <DeviceIcon />,
            title: 'User Device',
            components: [
                { name: 'mAadhaar App', desc: 'QR Code Generation' },
                { name: 'QR Scanner', desc: 'Frontend Interface' },
                { name: 'ZK Prover', desc: 'Browser-based Groth16' }
            ]
        },
        {
            icon: <ChainIcon />,
            title: 'Solana Blockchain',
            components: [
                { name: 'Smart Contracts', desc: 'Rust/Anchor Programs' },
                { name: 'Groth16 Verifier', desc: 'BN254 Pairing Check' },
                { name: 'Identity Registry', desc: 'PDA-based Storage' }
            ]
        },
        {
            icon: <ZapIcon />,
            title: 'Light Protocol Compression',
            components: [
                { name: 'Merkle Trees', desc: 'Compressed State Roots' },
                { name: 'Poseidon Hash', desc: 'ZK-Friendly Hashing' },
                { name: 'Nullifier System', desc: 'Sybil Prevention' }
            ]
        }
    ];

    return (
        <section id="architecture" className="py-24 md:py-32 relative overflow-hidden">
            {/* Animated background lines */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-primary)] to-transparent animate-[pulse-glow_3s_ease-in-out_infinite]" />
                <div className="absolute top-0 left-1/2 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-secondary)] to-transparent animate-[pulse-glow_3s_ease-in-out_infinite_0.5s]" />
                <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[var(--color-accent)] to-transparent animate-[pulse-glow_3s_ease-in-out_infinite_1s]" />
            </div>

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-[var(--font-heading)] mb-4 animate-[fade-in_0.8s_ease-out]">
                        Technical <span className="gradient-text">Architecture</span>
                    </h2>
                    <p className="text-lg text-[var(--color-text-secondary)] max-w-2xl mx-auto animate-[fade-in_0.8s_ease-out_0.1s_both]">
                        Three-layer system combining user devices, Solana blockchain, and Light Protocol compression
                    </p>
                </div>

                {/* Architecture Diagram */}
                <div className="space-y-4 max-w-3xl mx-auto mb-12">
                    {layers.map((layer, index) => (
                        <div key={index}>
                            <div
                                className="glass rounded-2xl p-6 hover:shadow-[0_0_40px_rgba(139,92,246,0.2)] transition-all duration-500 group animate-[slide-up_0.6s_ease-out_both]"
                                style={{ animationDelay: `${index * 0.15}s` }}
                            >
                                {/* Layer Header */}
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="w-12 h-12 glass-light rounded-xl flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(139,92,246,0.3)] transition-all duration-500">
                                        {layer.icon}
                                    </div>
                                    <h3 className="text-xl font-bold font-[var(--font-heading)] group-hover:text-[var(--color-primary-light)] transition-colors duration-300">
                                        {layer.title}
                                    </h3>
                                </div>

                                {/* Components */}
                                <div className="grid grid-cols-3 gap-3">
                                    {layer.components.map((comp, idx) => (
                                        <div
                                            key={idx}
                                            className="bg-[var(--color-bg-tertiary)] rounded-xl p-4 text-center hover:bg-[var(--color-bg-secondary)] transition-all duration-300 border border-transparent hover:border-[var(--color-border)] hover:scale-[1.02] hover:shadow-lg cursor-default"
                                        >
                                            <div className="text-sm font-semibold text-white mb-1">
                                                {comp.name}
                                            </div>
                                            <div className="text-xs text-[var(--color-text-muted)]">
                                                {comp.desc}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Arrow */}
                            {index < layers.length - 1 && (
                                <div className="flex justify-center py-2">
                                    <div className="flex flex-col items-center">
                                        <div className="w-px h-4 bg-gradient-to-b from-[var(--color-primary)] to-[var(--color-secondary)] animate-[pulse-glow_2s_ease-in-out_infinite]" />
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[var(--color-primary)] animate-[float_1.5s_ease-in-out_infinite]">
                                            <path d="M12 5v14M19 12l-7 7-7-7" />
                                        </svg>
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Code Example */}
                <div
                    className="glass rounded-2xl overflow-hidden max-w-3xl mx-auto hover:shadow-[0_0_40px_rgba(139,92,246,0.15)] transition-shadow duration-500 animate-[slide-up_0.6s_ease-out_0.5s_both]"
                >
                    <div className="flex items-center justify-between px-6 py-4 border-b border-[var(--color-border)]">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-2">
                                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                <div className="w-3 h-3 rounded-full bg-green-500/80" />
                            </div>
                            <div className="text-sm font-medium text-[var(--color-text-secondary)]">
                                Core Smart Contract Functions
                            </div>
                        </div>
                        <div className="px-3 py-1 bg-[var(--color-bg-tertiary)] rounded-full text-xs text-[var(--color-primary)] font-medium">
                            Rust
                        </div>
                    </div>
                    <pre className="p-6 overflow-x-auto text-sm">
                        <code className="text-[var(--color-text-secondary)] font-[var(--font-mono)]">
                            {`pub fn register_identity(
    ctx: Context<RegisterIdentity>,
    identity_commitment: [u8; 32],
    merkle_root: [u8; 32],
) -> Result<()>

pub fn verify_identity(
    ctx: Context<VerifyIdentity>,
    proof: Vec<u8>,              // 256-byte Groth16 proof
    public_inputs: Vec<u8>,      // Public signals
    attribute_type: u8,          // 1=age, 2=nationality
) -> Result<()>`}
                        </code>
                    </pre>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
