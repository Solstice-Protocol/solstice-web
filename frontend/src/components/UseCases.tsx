import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';

const cases = [
    {
        id: "DEFI_COMPLIANCE",
        title: "DeFi Compliance",
        desc: "Enable permissioned pools and under-collateralized lending. Verify user age (>18) and residency (Non-Sanctioned) without handling sensitive KYC data.",
        tags: ["KYC_AML", "LENDING", "RISK_SCORE"]
    },
    {
        id: "SYBIL_RESIST",
        title: "Sybil Resistance",
        desc: "Protect DAO governance and airdrops from bot attacks using unique identity nullifiers derived from Aadhaar. One Person = One Account.",
        tags: ["GOVERNANCE", "AIRDROPS", "VOTING"]
    },
    {
        id: "WEB3_GAMING",
        title: "Web3 Gaming",
        desc: "Enforce age restrictions (18+) and regional compliance for on-chain games while preserving player anonymity and preventing multi-accounting.",
        tags: ["AGE_GATE", "FAIR_PLAY", "COMPLIANCE"]
    },
    {
        id: "SOCIAL_ID",
        title: "Social Identity",
        desc: "Bootstrap reputation systems with verifiable \"proof of humanity\" badges that don't dox the user. Allow pseudonymous yet verified interactions.",
        tags: ["REPUTATION", "SOCIAL_GRAPH", "PRIVACY"]
    }
];

const UseCases = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isHovering, setIsHovering] = useState(false);
    const descRef = useRef<HTMLParagraphElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);

    // Auto-cycle (Terminal Scan Mode)
    useEffect(() => {
        if (isHovering) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % cases.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [isHovering]);

    // Text "Decryption" Animation on change
    useEffect(() => {
        if (descRef.current) {
            anime({
                targets: descRef.current,
                opacity: [0, 1],
                translateY: [10, 0],
                duration: 600,
                easing: 'easeOutExpo'
            });
        }
        if (titleRef.current) {
            anime({
                targets: titleRef.current,
                opacity: [0, 1],
                translateX: [20, 0],
                duration: 500,
                easing: 'easeOutExpo'
            });
        }
    }, [activeIndex]);

    return (
        <section className="py-32 px-6 bg-transparent w-full">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-normal mb-12 italic text-text-primary text-center">
                    Ecosystem Applications
                </h2>

                <div className="flex flex-col md:flex-row gap-8 bg-black/40 backdrop-blur-xl border border-white/5 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden relative">
                    {/* Decorative Scan Line */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-grape to-transparent opacity-50 animate-pulse" />

                    {/* Left: Terminal Menu */}
                    <div className="w-full md:w-1/3 flex flex-col gap-2 relative z-10" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
                        <div className="text-xs font-mono text-text-muted mb-4 tracking-widest uppercase">
                            // Select Protocol
                        </div>
                        {cases.map((c, i) => (
                            <button
                                key={i}
                                onClick={() => setActiveIndex(i)}
                                className={`group text-left p-4 rounded-xl transition-all duration-300 font-mono text-sm border ${i === activeIndex
                                        ? 'bg-secondary/40 border-accent-grape text-accent-grape scale-105 shadow-lg'
                                        : 'bg-transparent border-transparent text-text-secondary hover:bg-white/5 hover:text-text-primary'
                                    }`}
                            >
                                <div className="flex items-center justify-between">
                                    <span>{`> ${c.id}`}</span>
                                    {i === activeIndex && <span className="animate-pulse">_</span>}
                                </div>
                            </button>
                        ))}
                    </div>

                    {/* Right: Data Viewport */}
                    <div className="w-full md:w-2/3 relative z-10 pl-0 md:pl-8 border-l border-white/5 flex flex-col justify-center min-h-[300px]">
                        <div className="absolute top-0 right-0 text-text-muted text-[10px] font-mono tracking-widest opacity-50">
                            STATUS: VERIFIED
                        </div>


                        <h3 ref={titleRef} className="text-3xl md:text-5xl font-serif italic text-text-primary mb-6">
                            {cases[activeIndex].title}
                        </h3>

                        <p ref={descRef} className="text-lg text-text-secondary leading-relaxed font-light mb-8">
                            {cases[activeIndex].desc}
                        </p>

                        <div className="flex flex-wrap gap-3">
                            {cases[activeIndex].tags.map((tag, i) => (
                                <span key={i} className="text-xs font-mono text-accent-grape bg-accent-grape/10 border border-accent-grape/20 px-3 py-1 rounded-md">
                                    {tag}
                                </span>
                            ))}
                        </div>

                        {/* Background Decor for Active Pane */}
                        <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-accent-grape/10 blur-[100px] rounded-full pointer-events-none" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UseCases;
