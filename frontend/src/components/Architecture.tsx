import { useState } from 'react';

interface Layer {
    id: string;
    title: string;
    description: string;
    color: string;
    components: { name: string; desc: string }[];
}

const layers: Layer[] = [
    {
        id: 'chain',
        title: 'Chain',
        description: 'Solana-based smart contracts with Anchor framework for high-speed identity operations.',
        color: '#00d9ff',
        components: [
            { name: 'Smart Contracts', desc: 'Rust/Anchor Programs' },
            { name: 'Groth16 Verifier', desc: 'BN254 Pairing Check' },
            { name: 'Identity Registry', desc: 'PDA-based Storage' }
        ]
    },
    {
        id: 'compute',
        title: 'Compute Network',
        description: 'Browser-based ZK proving with Groth16 SNARKs for client-side proof generation.',
        color: '#0ea5e9',
        components: [
            { name: 'ZK Prover', desc: 'Browser WASM' },
            { name: 'Circuit Compiler', desc: 'Circom Integration' },
            { name: 'Witness Generator', desc: 'Client-side Compute' }
        ]
    },
    {
        id: 'storage',
        title: 'Storage',
        description: 'Light Protocol compression reduces storage costs by 5000x using Merkle trees.',
        color: '#06b6d4',
        components: [
            { name: 'Merkle Trees', desc: 'Compressed State' },
            { name: 'Poseidon Hash', desc: 'ZK-Friendly' },
            { name: 'Nullifier System', desc: 'Sybil Prevention' }
        ]
    },
    {
        id: 'identity',
        title: 'Identity Layer',
        description: 'Aadhaar infrastructure integration with 2048-bit RSA signature verification.',
        color: '#10b981',
        components: [
            { name: 'QR Scanner', desc: 'mAadhaar Integration' },
            { name: 'RSA Verifier', desc: '2048-bit Signatures' },
            { name: 'Data Extractor', desc: 'Privacy-Preserving' }
        ]
    }
];

const Architecture = () => {
    const [activeLayer, setActiveLayer] = useState<string>('chain');

    const activeData = layers.find(l => l.id === activeLayer);

    return (
        <section id="architecture" className="py-32 relative overflow-hidden">
            {/* Background accent */}
            <div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] opacity-5 blur-[150px] pointer-events-none"
                style={{ background: `radial-gradient(circle, ${activeData?.color || '#8b5cf6'} 0%, transparent 60%)`, transition: 'background 0.5s ease' }}
            />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="max-w-3xl mb-20">
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-heading)] leading-[1.1] mb-6">
                        Technical <span className="gradient-text">Architecture</span>
                    </h2>
                    <p className="text-xl text-[var(--color-text-secondary)]">
                        Modular infrastructure combining ZK proofs, Solana blockchain, and Light Protocol compression.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Left - Interactive Layers */}
                    <div className="space-y-3">
                        {layers.map((layer) => (
                            <button
                                key={layer.id}
                                onClick={() => setActiveLayer(layer.id)}
                                className={`w-full text-left p-6 rounded-2xl border transition-all duration-500 group ${activeLayer === layer.id
                                    ? 'bg-white/[0.03] border-[var(--color-primary)]/30 shadow-[0_0_40px_rgba(0,217,255,0.1)]'
                                    : 'bg-transparent border-[var(--color-border)] hover:border-white/10 hover:bg-white/[0.01]'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div
                                            className={`w-3 h-3 rounded-full transition-all duration-500 ${activeLayer === layer.id ? 'scale-125' : ''
                                                }`}
                                            style={{
                                                backgroundColor: layer.color,
                                                boxShadow: activeLayer === layer.id ? `0 0 20px ${layer.color}` : 'none'
                                            }}
                                        />
                                        <span className={`text-xl font-semibold transition-colors duration-300 ${activeLayer === layer.id ? 'text-white' : 'text-[var(--color-text-secondary)] group-hover:text-white'
                                            }`}>
                                            {layer.title}
                                        </span>
                                    </div>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        className={`transition-all duration-500 ${activeLayer === layer.id ? 'text-[var(--color-primary)] rotate-0' : 'text-[var(--color-text-muted)] -rotate-90'
                                            }`}
                                    >
                                        <path d="M6 9l6 6 6-6" />
                                    </svg>
                                </div>

                                {/* Expanded content */}
                                <div className={`overflow-hidden transition-all duration-500 ${activeLayer === layer.id ? 'max-h-40 opacity-100 mt-4' : 'max-h-0 opacity-0'
                                    }`}>
                                    <p className="text-[var(--color-text-secondary)] mb-4">
                                        {layer.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right - Component Details */}
                    <div className="glass rounded-3xl p-8 lg:p-10 relative overflow-hidden">
                        {/* Decorative gradient */}
                        <div
                            className="absolute top-0 right-0 w-64 h-64 opacity-20 blur-3xl pointer-events-none transition-all duration-500"
                            style={{ background: `radial-gradient(circle, ${activeData?.color || '#8b5cf6'} 0%, transparent 70%)` }}
                        />

                        <div className="relative z-10">
                            <div className="flex items-center gap-3 mb-6">
                                <div
                                    className="w-4 h-4 rounded-full"
                                    style={{ backgroundColor: activeData?.color, boxShadow: `0 0 20px ${activeData?.color}` }}
                                />
                                <h3 className="text-2xl font-bold font-[var(--font-heading)]">
                                    {activeData?.title}
                                </h3>
                            </div>

                            <div className="grid gap-4">
                                {activeData?.components.map((comp, idx) => (
                                    <div
                                        key={idx}
                                        className="bg-white/[0.02] hover:bg-white/[0.05] border border-[var(--color-border)] hover:border-white/10 rounded-xl p-5 transition-all duration-300 group cursor-default"
                                        style={{ animationDelay: `${idx * 100}ms` }}
                                    >
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <div className="font-semibold text-white mb-1 group-hover:text-[var(--color-primary-light)] transition-colors">
                                                    {comp.name}
                                                </div>
                                                <div className="text-sm text-[var(--color-text-muted)]">
                                                    {comp.desc}
                                                </div>
                                            </div>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] group-hover:translate-x-1 transition-all">
                                                <path d="M5 12h14M12 5l7 7-7 7" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Code snippet */}
                            <div className="mt-8 bg-[var(--color-bg-primary)] rounded-xl overflow-hidden border border-[var(--color-border)]">
                                <div className="flex items-center justify-between px-4 py-3 border-b border-[var(--color-border)]">
                                    <div className="flex gap-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                                        <div className="w-3 h-3 rounded-full bg-green-500/60" />
                                    </div>
                                    <span className="text-xs text-[var(--color-text-muted)] font-mono">solstice.rs</span>
                                </div>
                                <pre className="p-4 text-sm overflow-x-auto">
                                    <code className="text-[var(--color-text-secondary)] font-mono">
                                        {`pub fn verify_identity(
    proof: &[u8; 256],
    public_inputs: &[u8],
    attribute: IdentityAttribute,
) -> Result<bool>`}
                                    </code>
                                </pre>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Architecture;
