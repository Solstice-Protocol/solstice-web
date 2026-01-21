import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const PrivacyArchitecture = () => {
    // Refs for animation groups
    const svgRef = useRef<SVGSVGElement>(null);
    const zonesRef = useRef<SVGGElement>(null);
    const nodesRef = useRef<SVGGElement>(null);
    const connectionsRef = useRef<SVGGElement>(null);

    useEffect(() => {
        // --- 1. Lines Entry (Zones + Paths) ---
        // Drawing the environment first
        const elements = [
            zonesRef.current?.querySelectorAll('rect'),
            connectionsRef.current?.querySelectorAll('path')
        ].filter(el => el !== undefined && el !== null);

        // Ensure initial state
        if (elements.length > 0) {
            anime.set(elements, { strokeDashoffset: anime.setDashoffset });

            anime({
                targets: elements,
                strokeDashoffset: 0,
                easing: 'easeInOutSine',
                duration: 4000,
                delay: anime.stagger(100),
                loop: false
            });
        }


        // --- 2. Nodes Staggered Entry ---
        // Populating the environment
        anime({
            targets: nodesRef.current?.querySelectorAll('.anim-target') || [],
            opacity: [0, 1],
            scale: [0.9, 1],
            delay: anime.stagger(150, { start: 500 }),
            easing: 'easeOutQuad',
            duration: 800
        });

        // --- 3. Organic Floating Loop ---
        // Keeping it alive
        const animateFloating = () => {
            const nodes = nodesRef.current?.querySelectorAll('.anim-target');
            if (nodes) {
                Array.from(nodes).forEach((node) => {
                    anime({
                        targets: node,
                        translateY: [
                            { value: -4 + Math.random() * 8, duration: 4000 + Math.random() * 2000 },
                            { value: 0, duration: 4000 + Math.random() * 2000 }
                        ],
                        easing: 'easeInOutSine',
                        loop: true,
                        direction: 'alternate'
                    });
                });
            }
        };
        setTimeout(animateFloating, 1500);

        // --- 4. Pulse Animation (Subtle) ---
        // Replaces the old rigid pulse with a softer glow effect
        anime({
            targets: '.node-active-border',
            opacity: [0.2, 0.6],
            easing: 'easeInOutSine',
            duration: 2000,
            loop: true,
            direction: 'alternate'
        });

    }, []);

    return (
        <div className="w-full h-auto bg-black/20 backdrop-blur-md rounded-xl border border-white/5 p-6 md:p-10 font-mono text-xs md:text-sm">
            <svg ref={svgRef} viewBox="0 0 800 500" className="w-full h-full">

                {/* --- ZONES --- */}
                <g ref={zonesRef}>
                    {/* Privacy Zone (Left) */}
                    <rect x="20" y="20" width="300" height="460" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="4 4" rx="8" />
                    <text x="40" y="45" fill="#a1a1aa" className="tracking-widest uppercase text-xs font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>Privacy Zone (Client)</text>

                    {/* Public Zone (Center) */}
                    <rect x="340" y="20" width="200" height="460" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="4 4" rx="8" />
                    <text x="360" y="45" fill="#a1a1aa" className="tracking-widest uppercase text-xs font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>Public Zone (Proof)</text>

                    {/* Storage Zone (Right) */}
                    <rect x="560" y="20" width="220" height="460" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="4 4" rx="8" />
                    <text x="580" y="45" fill="#a1a1aa" className="tracking-widest uppercase text-xs font-bold opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>Storage / Chain</text>
                </g>

                {/* --- NODES --- */}
                <g ref={nodesRef}>

                    {/* 1. mAadhaar Source */}
                    <g transform="translate(50, 200)">
                        <g className="anim-target">
                            <rect width="240" height="100" fill="#1e1e1e" stroke="#666" rx="4" className="node-box" />
                            <text x="120" y="30" fill="#fff" textAnchor="middle" fontWeight="bold" className="text-sm">mAadhaar QR Data</text>
                            <text x="120" y="55" fill="#9ca3af" textAnchor="middle" className="text-xs">Name: John Doe</text>
                            <text x="120" y="75" fill="#9ca3af" textAnchor="middle" className="text-xs">DOB: 1990-05-15</text>
                        </g>
                    </g>

                    {/* 2. Private Circuit Inputs (Top Left) */}
                    <g transform="translate(100, 80)">
                        <g className="anim-target">
                            <rect width="200" height="80" fill="#1e1e1e" stroke="#666" rx="4" />
                            <text x="100" y="25" fill="#a1a1aa" textAnchor="middle" className="text-xs uppercase font-bold">Circuit Inputs</text>
                            <text x="100" y="50" fill="#fff" textAnchor="middle" className="text-sm">age: 33</text>
                            <text x="100" y="68" fill="#fff" textAnchor="middle" className="text-sm">nationality: IN</text>
                        </g>
                    </g>

                    {/* 3. ZK Proof (Center Top) */}
                    <g transform="translate(360, 80)">
                        <g className="anim-target">
                            <rect width="160" height="100" fill="#2a2a2a" stroke="#fff" strokeWidth="1" rx="4" />
                            <text x="80" y="30" fill="#fff" textAnchor="middle" fontWeight="bold" className="text-sm">ZK Proof</text>
                            <text x="80" y="55" fill="#9ca3af" textAnchor="middle" className="text-xs">256 bytes</text>
                            <text x="80" y="75" fill="#9ca3af" textAnchor="middle" className="text-xs">Groth16</text>
                        </g>
                    </g>

                    {/* 4. Identity Commitment (Center Mid) */}
                    <g transform="translate(360, 240)">
                        <g className="anim-target">
                            <rect width="160" height="80" fill="#2a2a2a" stroke="#aaa" rx="4" />
                            <text x="80" y="30" fill="#fff" textAnchor="middle" fontWeight="bold" className="text-sm">Commitment</text>
                            <text x="80" y="55" fill="#9ca3af" textAnchor="middle" className="text-xs">Poseidon(Hash)</text>
                        </g>
                    </g>

                    {/* 5. Merkle Root (Center Low) */}
                    <g transform="translate(360, 380)">
                        <g className="anim-target">
                            <rect width="160" height="60" fill="#2a2a2a" stroke="#aaa" rx="4" />
                            <text x="80" y="35" fill="#fff" textAnchor="middle" fontWeight="bold" className="text-sm">Merkle Root</text>
                        </g>
                    </g>

                    {/* 6. Storage Nodes (Right) */}
                    <g transform="translate(600, 80)">
                        <g className="anim-target">
                            <rect width="140" height="60" fill="#111" stroke="#444" rx="4" />
                            <text x="70" y="35" fill="#9ca3af" textAnchor="middle" className="text-xs font-medium">IndexedDB</text>
                        </g>
                    </g>
                    <g transform="translate(600, 240)">
                        <g className="anim-target">
                            <rect width="140" height="60" fill="#111" stroke="#444" rx="4" />
                            <text x="70" y="35" fill="#9ca3af" textAnchor="middle" className="text-xs font-medium">Identities Table</text>
                        </g>
                    </g>
                    <g transform="translate(600, 340)">
                        <g className="anim-target">
                            {/* Glow Border for PDA */}
                            <rect width="140" height="100" fill="transparent" stroke="#c084fc" strokeWidth="4" rx="4" className="node-active-border opacity-0 blurred" style={{ filter: 'blur(8px)' }} />
                            <rect width="140" height="100" fill="#1a1a1a" stroke="#c084fc" strokeWidth="2" rx="4" />
                            <text x="70" y="40" fill="#c084fc" textAnchor="middle" fontWeight="bold" className="text-sm">Identity PDA</text>
                            <text x="70" y="65" fill="#9ca3af" textAnchor="middle" className="text-xs">(Solana)</text>
                        </g>
                    </g>
                </g>

                {/* --- CONNECTIONS (Lines) --- */}
                <g fill="none" stroke="#666" strokeWidth="1.5" ref={connectionsRef}>
                    {/* QR -> Inputs */}
                    <path d="M 170 200 L 170 180 L 200 160" markerEnd="url(#arrow)" />
                    {/* Inputs -> Proof */}
                    <path d="M 300 120 L 360 120" markerEnd="url(#arrow)" />

                    {/* QR -> Commitment */}
                    <path d="M 290 250 L 360 280" markerEnd="url(#arrow)" />

                    {/* Proof -> PDA */}
                    <path d="M 520 130 C 560 130, 560 360, 600 390" markerEnd="url(#arrow)" />

                    {/* Commitment -> PDA */}
                    <path d="M 520 280 L 600 360" markerEnd="url(#arrow)" />

                    {/* Root -> PDA */}
                    <path d="M 520 410 L 600 410" markerEnd="url(#arrow)" />
                </g>

                {/* --- ARROWHEAD DEF --- */}
                <defs>
                    <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto" markerUnits="strokeWidth">
                        <path d="M0,0 L0,6 L9,3 z" fill="#666" />
                    </marker>
                </defs>

            </svg>
            <style>{`
                @keyframes fade-in {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default PrivacyArchitecture;
