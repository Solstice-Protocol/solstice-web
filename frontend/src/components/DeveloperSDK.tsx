import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const DeveloperSDK = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.sdk-code',
                        opacity: [0, 1],
                        translateY: [20, 0],
                        duration: 800,
                        easing: 'easeOutExpo'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif italic text-text-primary mb-6">
                        Built for <span className="text-accent-grape">Developers</span>
                    </h2>
                    <p className="text-xl text-text-secondary leading-relaxed mb-8">
                        Integrate privacy-preserving identity verification in minutes. Our Rust and TypeScript SDKs provide simple interfaces for complex ZK operations.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center shrink-0 border border-white/5">
                                <span className="text-accent-grape font-bold">01</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text-primary mb-1">Install SDK</h3>
                                <p className="text-text-muted">npm install @solstice/sdk</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-secondary/40 flex items-center justify-center shrink-0 border border-white/5">
                                <span className="text-accent-grape font-bold">02</span>
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-text-primary mb-1">Initialize Client</h3>
                                <p className="text-text-muted">Connect connection to Solstice Network</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="sdk-code opacity-0 bg-primary/80 backdrop-blur-md rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
                    <div className="flex items-center px-4 py-3 border-b border-white/5 bg-black/20">
                        <div className="flex gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500/50" />
                            <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                            <div className="w-3 h-3 rounded-full bg-green-500/50" />
                        </div>
                        <span className="ml-4 text-xs font-mono text-text-muted">verify.ts</span>
                    </div>
                    <div className="p-6 overflow-x-auto">
                        <pre className="font-mono text-sm leading-relaxed">
                            <span className="text-pink-400">import</span> <span className="text-text-primary">{`{`} Solstice {`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'@solstice/sdk'</span>;{`

`}
                            <span className="text-blue-400">const</span> <span className="text-yellow-300">client</span> = <span className="text-pink-400">new</span> <span className="text-yellow-300">Solstice</span>({`{`}
                            <span className="text-text-secondary">network:</span> <span className="text-green-300">'mainnet'</span>,
                            <span className="text-text-secondary">rpc:</span> <span className="text-green-300">'https://api.mainnet-beta.solana.com'</span>
                            {`}`});{`
`}
                            <span className="text-gray-500">// Verify generic ZK proof</span>{`
`}
                            <span className="text-blue-400">const</span> <span className="text-yellow-300">proof</span> = <span className="text-pink-400">await</span> <span className="text-yellow-300">client</span>.<span className="text-blue-300">verifyIdentity</span>({`{`}
                            <span className="text-text-secondary">user:</span> <span className="text-green-300">'Alice'</span>,
                            <span className="text-text-secondary">scope:</span> [<span className="text-green-300">'age &gt; 18'</span>, <span className="text-green-300">'residency'</span>]
                            {`}`});
                        </pre>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DeveloperSDK;
