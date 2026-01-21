import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const specs = [
    { label: "Proving System", value: "Groth16 (snarkjs)" },
    { label: "Curve", value: "BN254 (alt_bn128)" },
    { label: "State Compression", value: "Light Protocol v0.3+" },
    { label: "Merkle Tree Depth", value: "26 (67M Capacity)" },
    { label: "Compression Ratio", value: "~5000x Reduction" },
    { label: "Verification Cost", value: "< 0.00001 SOL" }
];

const TechnicalSpecs = () => {
    const tableRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.spec-row',
                        opacity: [0, 1],
                        translateY: [10, 0],
                        duration: 600,
                        delay: anime.stagger(100),
                        easing: 'easeOutSine'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (tableRef.current) observer.observe(tableRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="py-32 px-6 bg-transparent">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-3xl font-normal mb-12 italic text-text-primary text-center">
                    Technical Specifications
                </h2>

                <div ref={tableRef} className="bg-primary/40 backdrop-blur-md rounded-xl overflow-hidden p-4 border border-white/5">
                    {specs.map((spec, i) => (
                        <div key={i} className="spec-row opacity-0 flex justify-between items-center py-4 border-b border-custom last:border-b-0 px-4 hover:bg-tertiary transition-colors">
                            <span className="text-text-secondary font-serif italic">
                                {spec.label}
                            </span>
                            <span className="text-text-primary font-serif font-bold tracking-wide">
                                {spec.value}
                            </span>
                        </div>
                    ))}
                </div>

                <div className="mt-8 text-center text-xs text-text-muted font-serif uppercase tracking-widest">
                    * Benchmarked on Solana Mainnet-Beta
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecs;
