import { useRef, useEffect } from 'react';
import anime from 'animejs/lib/anime.es.js';

const PrivacyArchitecture = () => {
    const svgRef = useRef<SVGSVGElement>(null);

    useEffect(() => {
        const tl = anime.timeline({
            easing: 'easeInOutSine',
            loop: true
        });

        // Data Flow Animation (Lines)
        tl.add({
            targets: '.connection-path',
            strokeDashoffset: [anime.setDashoffset, 0],
            duration: 2500,
            delay: anime.stagger(500)
        });

        // Pulse Animation (Nodes) - Runs concurrently
        anime({
            targets: '.node-box',
            scale: [1, 1.05, 1],
            borderColor: ['#444', '#804dee', '#444'], // Glow purple
            duration: 2000,
            loop: true,
            easing: 'easeInOutQuad',
            delay: anime.stagger(200)
        });
    }, []);

    return (
        <div className="w-full h-auto bg-black/20 backdrop-blur-md rounded-xl border border-white/5 p-6 md:p-10 font-mono text-xs md:text-sm">
            <svg ref={svgRef} viewBox="0 0 800 500" className="w-full h-full">

                {/* --- ZONES --- */}
                {/* Privacy Zone (Left) */}
                <rect x="20" y="20" width="300" height="460" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="4 4" rx="8" />
                <text x="40" y="50" fill="#888" className="tracking-widest uppercase text-[10px]">Privacy Zone (Client)</text>

                {/* Public Zone (Center) */}
                <rect x="340" y="20" width="200" height="460" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="4 4" rx="8" />
                <text x="360" y="50" fill="#888" className="tracking-widest uppercase text-[10px]">Public Zone (Proof)</text>

                {/* Storage Zone (Right) */}
                <rect x="560" y="20" width="220" height="460" fill="transparent" stroke="#444" strokeWidth="1" strokeDasharray="4 4" rx="8" />
                <text x="580" y="50" fill="#888" className="tracking-widest uppercase text-[10px]">Storage / Chain</text>

                {/* --- NODES --- */}

                {/* 1. mAadhaar Source */}
                <g transform="translate(50, 200)">
                    <rect width="240" height="100" fill="#1e1e1e" stroke="#666" rx="4" className="node-box" />
                    <text x="120" y="30" fill="#fff" textAnchor="middle" fontWeight="bold">mAadhaar QR Data</text>
                    <text x="120" y="55" fill="#888" textAnchor="middle">Name: John Doe</text>
                    <text x="120" y="75" fill="#888" textAnchor="middle">DOB: 1990-05-15</text>
                </g>

                {/* 2. Private Circuit Inputs (Top Left) */}
                <g transform="translate(100, 80)">
                    <rect width="200" height="80" fill="#1e1e1e" stroke="#666" rx="4" />
                    <text x="100" y="25" fill="#aaa" textAnchor="middle" className="text-[10px] uppercase">Circuit Inputs</text>
                    <text x="100" y="50" fill="#fff" textAnchor="middle">age: 33</text>
                    <text x="100" y="65" fill="#fff" textAnchor="middle">nationality: IN</text>
                </g>

                {/* 3. ZK Proof (Center Top) */}
                <g transform="translate(360, 80)">
                    <rect width="160" height="100" fill="#2a2a2a" stroke="#fff" strokeWidth="1" rx="4" />
                    <text x="80" y="30" fill="#fff" textAnchor="middle" fontWeight="bold">ZK Proof</text>
                    <text x="80" y="55" fill="#aaa" textAnchor="middle">256 bytes</text>
                    <text x="80" y="75" fill="#aaa" textAnchor="middle">Groth16</text>
                </g>

                {/* 4. Identity Commitment (Center Mid) */}
                <g transform="translate(360, 240)">
                    <rect width="160" height="80" fill="#2a2a2a" stroke="#aaa" rx="4" />
                    <text x="80" y="30" fill="#fff" textAnchor="middle" fontWeight="bold">Commitment</text>
                    <text x="80" y="55" fill="#aaa" textAnchor="middle">Poseidon(Hash)</text>
                </g>

                {/* 5. Merkle Root (Center Low) */}
                <g transform="translate(360, 380)">
                    <rect width="160" height="60" fill="#2a2a2a" stroke="#aaa" rx="4" />
                    <text x="80" y="35" fill="#fff" textAnchor="middle" fontWeight="bold">Merkle Root</text>
                </g>

                {/* 6. Storage Nodes (Right) */}
                <g transform="translate(600, 80)">
                    <rect width="140" height="60" fill="#111" stroke="#444" rx="4" />
                    <text x="70" y="35" fill="#888" textAnchor="middle">IndexedDB</text>
                </g>
                <g transform="translate(600, 240)">
                    <rect width="140" height="60" fill="#111" stroke="#444" rx="4" />
                    <text x="70" y="35" fill="#888" textAnchor="middle">Identities Table</text>
                </g>
                <g transform="translate(600, 340)">
                    <rect width="140" height="100" fill="#1a1a1a" stroke="#accent-grape" strokeWidth="2" rx="4" className="stroke-accent-grape" />
                    <text x="70" y="45" fill="#c084fc" textAnchor="middle" fontWeight="bold">Identity PDA</text>
                    <text x="70" y="70" fill="#666" textAnchor="middle">(Solana)</text>
                </g>


                {/* --- CONNECTIONS (Lines) --- */}
                <g fill="none" stroke="#666" strokeWidth="1.5">
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
        </div>
    );
};

export default PrivacyArchitecture;
