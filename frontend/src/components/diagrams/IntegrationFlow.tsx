import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const IntegrationFlow = () => {
    // Refs for animated elements
    const borderRef = useRef<SVGGElement>(null);
    const border2Ref = useRef<SVGGElement>(null);
    const nodesRef = useRef<SVGGElement>(null);
    const linesRef = useRef<SVGGElement>(null);
    const flowRef = useRef<SVGGElement>(null);

    useEffect(() => {
        // --- 1. Entry Animation: Validated "Line Drawing" ---
        // Mimicking svg-line-drawing example: long duration, specific easing
        const borderElements = [
            borderRef.current?.querySelectorAll('rect'),
            border2Ref.current?.querySelectorAll('rect'),
            linesRef.current?.querySelectorAll('path')
        ].filter(el => el !== undefined && el !== null);

        // Ensure starting state is handled by anime.js specifically
        if (borderElements.length > 0) {
            anime.set(borderElements, { strokeDashoffset: anime.setDashoffset });

            anime({
                targets: borderElements,
                strokeDashoffset: 0,
                easing: 'easeInOutSine', // Close to inOut(4) but smoother for these lengths
                duration: 4000,
                delay: function (_el: any, i: number) { return i * 250 },
                direction: 'normal',
                loop: false
            });
        }

        // --- 2. Entry Animation: "Staggered Fade-In" ---
        // Validated against advanced-grid-staggering
        anime({
            targets: nodesRef.current?.querySelectorAll('.anim-target') || [],
            opacity: [0, 1],
            translateY: [20, 0],
            delay: anime.stagger(200, { start: 1000 }),
            easing: 'easeOutQuad',
            duration: 800
        });

        // --- 3. Loop Animation: "Organic Floating" ---
        // Validated against layered-css-transforms: random durations for "breathing" feel
        const animateFloating = () => {
            const nodes = nodesRef.current?.querySelectorAll('.anim-target');
            if (nodes) {
                Array.from(nodes).forEach((node) => {
                    anime({
                        targets: node,
                        translateY: [
                            { value: -5 + Math.random() * 10, duration: 3000 + Math.random() * 3000 },
                            { value: 0, duration: 3000 + Math.random() * 3000 }
                        ],
                        easing: 'easeInOutSine',
                        loop: true,
                        direction: 'alternate'
                    });
                });
            }
        };
        // Start floating after initial entry
        setTimeout(animateFloating, 2500);

        // --- 4. Flow Animation: Continuous Data Stream ---
        if (flowRef.current) {
            anime({
                targets: flowRef.current.querySelectorAll('path'),
                strokeDashoffset: [anime.setDashoffset, 0],
                easing: 'linear',
                duration: 3000,
                loop: true
            });
        }

    }, []);

    return (
        <div className="w-full h-auto bg-black/20 backdrop-blur-md rounded-xl border border-white/5 p-6 md:p-10 font-mono text-xs md:text-sm overflow-hidden">
            <svg viewBox="0 0 800 500" className="w-full h-full">

                {/* --- Layers --- */}
                {/* Top: Use Cases */}
                <g transform="translate(100, 20)">
                    {/* Dashed Border - Animated separately */}
                    <g ref={borderRef}>
                        <rect width="600" height="100" fill="transparent" stroke="#333" strokeDasharray="4 4" rx="8" />
                    </g>
                    <text x="300" y="-15" fill="#888" textAnchor="middle" className="uppercase tracking-widest text-xs font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>Sample Use Cases</text>

                    {/* Nodes Container for Stagger */}
                    <g ref={nodesRef}>
                        <g transform="translate(20, 20)">
                            <g className="anim-target">
                                <rect width="160" height="60" fill="#1e1e1e" stroke="#444" rx="4" />
                                <text x="80" y="25" fill="#fff" textAnchor="middle" className="text-sm font-bold">DeFi</text>
                                <text x="80" y="45" fill="#9ca3af" textAnchor="middle" className="text-xs">Age &gt; 18</text>
                            </g>
                        </g>
                        <g transform="translate(220, 20)">
                            <g className="anim-target">
                                <rect width="160" height="60" fill="#1e1e1e" stroke="#444" rx="4" />
                                <text x="80" y="25" fill="#fff" textAnchor="middle" className="text-sm font-bold">Gaming</text>
                                <text x="80" y="45" fill="#9ca3af" textAnchor="middle" className="text-xs">Uniqueness</text>
                            </g>
                        </g>
                        <g transform="translate(420, 20)">
                            <g className="anim-target">
                                <rect width="160" height="60" fill="#1e1e1e" stroke="#444" rx="4" />
                                <text x="80" y="25" fill="#fff" textAnchor="middle" className="text-sm font-bold">Nation DAO</text>
                                <text x="80" y="45" fill="#9ca3af" textAnchor="middle" className="text-xs">Nationality: IN</text>
                            </g>
                        </g>

                        {/* Middle: Integration Options */}
                        <g transform="translate(0, 160)">
                            {/* Middle Nodes */}
                            {/* Direct Calls */}
                            <g transform="translate(20, 30)">
                                <g className="anim-target">
                                    <rect width="160" height="60" fill="#2a2a2a" stroke="#fff" rx="4" />
                                    <text x="80" y="25" fill="#fff" textAnchor="middle" fontWeight="bold" className="text-sm">Direct CPI</text>
                                    <text x="80" y="45" fill="#9ca3af" textAnchor="middle" className="text-xs">Rust / Anchor</text>
                                </g>
                            </g>
                            {/* API */}
                            <g transform="translate(220, 30)">
                                <g className="anim-target">
                                    <rect width="160" height="60" fill="#2a2a2a" stroke="#fff" rx="4" />
                                    <text x="80" y="25" fill="#fff" textAnchor="middle" fontWeight="bold" className="text-sm">REST API</text>
                                    <text x="80" y="45" fill="#9ca3af" textAnchor="middle" className="text-xs">/verify-identity</text>
                                </g>
                            </g>
                            {/* SDK */}
                            <g transform="translate(420, 30)">
                                <g className="anim-target">
                                    <rect width="160" height="60" fill="#2a2a2a" stroke="#accent-grape" strokeWidth="2" rx="4" className="stroke-accent-grape" />
                                    <text x="80" y="25" fill="#c084fc" textAnchor="middle" fontWeight="bold" className="text-sm">Frontend SDK</text>
                                    <text x="80" y="45" fill="#9ca3af" textAnchor="middle" className="text-xs">React / TS</text>
                                </g>
                            </g>
                        </g>

                        {/* Bottom: Core */}
                        <g transform="translate(150, 340)">
                            <g className="anim-target">
                                <rect width="300" height="100" fill="#111" stroke="#333" rx="8" />
                                <text x="150" y="-15" fill="#888" textAnchor="middle" className="uppercase tracking-widest text-xs font-bold">Solstice Core Protocol</text>

                                <g transform="translate(50, 20)">
                                    <rect width="200" height="60" fill="#000" stroke="#666" rx="4" />
                                    <text x="100" y="35" fill="#fff" textAnchor="middle" className="font-mono text-sm tracking-wide">verify_identity()</text>
                                </g>
                            </g>
                        </g>
                    </g>
                </g>

                {/* Integration Surface Border - Adjusted Y */}
                <g transform="translate(100, 180)" ref={border2Ref}>
                    <rect width="600" height="120" fill="transparent" stroke="#333" strokeDasharray="4 4" rx="8" />
                </g>
                <text x="400" y="165" fill="#888" textAnchor="middle" className="uppercase tracking-widest text-xs font-bold opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>Integration Surface</text>


                {/* --- Connections --- */}
                <g fill="none" stroke="#666" strokeWidth="1.5" ref={flowRef}>
                    {/* DeFi -> CPI */}
                    <path d="M 180 120 L 180 210" markerEnd="url(#arrow-int)" />
                    {/* Gaming -> API */}
                    <path d="M 380 120 L 380 210" markerEnd="url(#arrow-int)" />
                    {/* DAO -> SDK */}
                    <path d="M 580 120 L 580 210" markerEnd="url(#arrow-int)" />

                    {/* CPI -> Core */}
                    <path d="M 180 270 C 180 320, 400 320, 400 380" markerEnd="url(#arrow-int)" />
                    {/* API -> Core */}
                    <path d="M 380 270 L 400 380" markerEnd="url(#arrow-int)" />
                    {/* SDK -> Core */}
                    <path d="M 580 270 C 580 320, 400 320, 400 380" markerEnd="url(#arrow-int)" />
                </g>

                {/* --- ARROWHEAD DEF --- */}
                <defs>
                    <marker id="arrow-int" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#666" />
                    </marker>
                </defs>

            </svg>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default IntegrationFlow;
