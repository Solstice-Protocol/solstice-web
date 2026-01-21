import { useRef } from 'react';

const IntegrationFlow = () => {
    return (
        <div className="w-full h-auto bg-black/20 backdrop-blur-md rounded-xl border border-white/5 p-6 md:p-10 font-mono text-xs md:text-sm">
            <svg viewBox="0 0 800 500" className="w-full h-full">

                {/* --- Layers --- */}
                {/* Top: Use Cases */}
                <g transform="translate(100, 20)">
                    <rect width="600" height="100" fill="transparent" stroke="#333" strokeDasharray="4 4" rx="8" />
                    <text x="300" y="-10" fill="#666" textAnchor="middle" className="uppercase tracking-widest text-[10px]">Sample Use Cases</text>

                    {/* Nodes */}
                    <g transform="translate(20, 20)">
                        <rect width="160" height="60" fill="#1e1e1e" stroke="#444" rx="4" />
                        <text x="80" y="25" fill="#fff" textAnchor="middle">DeFi</text>
                        <text x="80" y="45" fill="#666" textAnchor="middle">Age &gt; 18</text>
                    </g>
                    <g transform="translate(220, 20)">
                        <rect width="160" height="60" fill="#1e1e1e" stroke="#444" rx="4" />
                        <text x="80" y="25" fill="#fff" textAnchor="middle">Gaming</text>
                        <text x="80" y="45" fill="#666" textAnchor="middle">Uniqueness</text>
                    </g>
                    <g transform="translate(420, 20)">
                        <rect width="160" height="60" fill="#1e1e1e" stroke="#444" rx="4" />
                        <text x="80" y="25" fill="#fff" textAnchor="middle">Nation DAO</text>
                        <text x="80" y="45" fill="#666" textAnchor="middle">Nationality: IN</text>
                    </g>
                </g>

                {/* Middle: Integration Options */}
                <g transform="translate(100, 180)">
                    <rect width="600" height="120" fill="transparent" stroke="#333" strokeDasharray="4 4" rx="8" />
                    <text x="300" y="-10" fill="#666" textAnchor="middle" className="uppercase tracking-widest text-[10px]">Integration Surface</text>

                    {/* Direct Calls */}
                    <g transform="translate(20, 30)">
                        <rect width="160" height="60" fill="#2a2a2a" stroke="#fff" rx="4" />
                        <text x="80" y="25" fill="#fff" textAnchor="middle" fontWeight="bold">Direct CPI</text>
                        <text x="80" y="45" fill="#aaa" textAnchor="middle">Rust / Anchor</text>
                    </g>
                    {/* API */}
                    <g transform="translate(220, 30)">
                        <rect width="160" height="60" fill="#2a2a2a" stroke="#fff" rx="4" />
                        <text x="80" y="25" fill="#fff" textAnchor="middle" fontWeight="bold">REST API</text>
                        <text x="80" y="45" fill="#aaa" textAnchor="middle">/verify-identity</text>
                    </g>
                    {/* SDK */}
                    <g transform="translate(420, 30)">
                        <rect width="160" height="60" fill="#2a2a2a" stroke="#accent-grape" strokeWidth="2" rx="4" className="stroke-accent-grape" />
                        <text x="80" y="25" fill="#c084fc" textAnchor="middle" fontWeight="bold">Frontend SDK</text>
                        <text x="80" y="45" fill="#aaa" textAnchor="middle">React / TS</text>
                    </g>
                </g>

                {/* Bottom: Core */}
                <g transform="translate(250, 360)">
                    <rect width="300" height="100" fill="#111" stroke="#333" rx="8" />
                    <text x="150" y="-10" fill="#666" textAnchor="middle" className="uppercase tracking-widest text-[10px]">Solstice Core Protocol</text>

                    <g transform="translate(50, 20)">
                        <rect width="200" height="60" fill="#000" stroke="#666" rx="4" />
                        <text x="100" y="35" fill="#fff" textAnchor="middle" className="font-mono">verify_identity()</text>
                    </g>
                </g>

                {/* --- Connections --- */}
                <g fill="none" stroke="#666" strokeWidth="1.5">
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
        </div>
    );
};

export default IntegrationFlow;
