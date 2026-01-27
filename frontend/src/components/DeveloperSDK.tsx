import { useEffect, useRef, useState } from 'react';
import anime from 'animejs/lib/anime.es.js';
import IntegrationFlow from './diagrams/IntegrationFlow';

const DeveloperSDK = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const [activeTab, setActiveTab] = useState<'install' | 'initialize'>('install');

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.sdk-code',
                        opacity: [0, 1],
                        translateY: [10, 0],
                        duration: 600,
                        easing: 'easeOutExpo'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    const tabs = [
        { id: 'install' as const, label: 'Install SDK' },
        { id: 'initialize' as const, label: 'Initialize' }
    ];

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
                {/* LEFT SIDE: Text content + Terminal (stacked) */}
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold font-serif italic text-text-primary mb-4">
                        Built for <span className="text-accent-grape">Developers</span>
                    </h2>
                    <p className="text-lg text-text-secondary leading-relaxed mb-6">
                        Integrate privacy-preserving identity verification in minutes. Our Rust and TypeScript SDKs provide simple interfaces for complex ZK operations.
                    </p>

                    {/* Tab buttons */}
                    <div className="flex gap-1 mb-3">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-3 py-1.5 text-xs font-futuristic tracking-wide transition-all duration-300 border-b ${activeTab === tab.id
                                        ? 'text-text-primary border-vintage-grape-400'
                                        : 'text-text-muted border-transparent hover:text-text-secondary'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Compact Terminal */}
                    <div className="sdk-code opacity-0 bg-black/50 rounded border border-white/10 overflow-hidden">
                        <div className="flex items-center px-3 py-1.5 border-b border-white/5 bg-black/40">
                            <div className="flex gap-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/40" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/40" />
                                <div className="w-2 h-2 rounded-full bg-green-500/40" />
                            </div>
                            <span className="ml-2 text-[10px] font-mono text-text-muted/50">verify.ts</span>
                        </div>
                        <div className="p-3 overflow-x-auto">
                            <pre className="font-mono text-xs leading-relaxed">
                                <span className="text-pink-400">import</span> <span className="text-text-primary">{`{`} Solstice {`}`}</span> <span className="text-pink-400">from</span> <span className="text-green-300">'@solstice/sdk'</span>;{`
`}<span className="text-blue-400">const</span> <span className="text-yellow-300">client</span> = <span className="text-pink-400">new</span> <span className="text-yellow-300">Solstice</span>({`{`} network: <span className="text-green-300">'mainnet'</span> {`}`});{`
`}<span className="text-blue-400">const</span> <span className="text-yellow-300">proof</span> = <span className="text-pink-400">await</span> client.<span className="text-blue-300">verifyIdentity</span>({`{`}user: <span className="text-green-300">'Alice'</span>{`}`});
                            </pre>
                        </div>
                    </div>
                </div>

                {/* RIGHT SIDE: Diagram only */}
                <div className="flex items-center justify-center">
                    <IntegrationFlow />
                </div>
            </div>
        </section>
    );
};

export default DeveloperSDK;
