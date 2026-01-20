const TrustedBy = () => {
    // Partner/technology logos
    const partners = [
        { name: 'Solana', icon: '◎' },
        { name: 'Ethereum', icon: '⟠' },
        { name: 'Google Cloud', icon: '☁' },
        { name: 'AWS', icon: '◢' },
        { name: 'Aadhaar', icon: '⬡' },
        { name: 'Groth16', icon: '∑' },
        { name: 'Light Protocol', icon: '◐' },
        { name: 'zkSNARKs', icon: 'Ƶ' },
    ];

    // Duplicate for seamless loop
    const duplicatedPartners = [...partners, ...partners];

    return (
        <section className="py-16 relative overflow-hidden border-y border-[var(--color-border)]">
            {/* Background subtle gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-bg-primary)] via-[var(--color-bg-secondary)] to-[var(--color-bg-primary)]" />

            <div className="relative z-10">
                {/* Header */}
                <p className="text-center text-sm uppercase tracking-[0.2em] text-[var(--color-text-muted)] mb-10">
                    Trusted by the best
                </p>

                {/* Marquee container */}
                <div className="relative">
                    {/* Fade edges */}
                    <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[var(--color-bg-primary)] to-transparent z-10 pointer-events-none" />

                    {/* Scrolling logos */}
                    <div className="flex overflow-hidden">
                        <div className="flex animate-[marquee_30s_linear_infinite] gap-16 pr-16">
                            {duplicatedPartners.map((partner, index) => (
                                <div
                                    key={index}
                                    className="flex items-center gap-3 group cursor-default whitespace-nowrap"
                                >
                                    <span className="text-3xl text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)] transition-colors duration-300">
                                        {partner.icon}
                                    </span>
                                    <span className="text-lg font-semibold text-[var(--color-text-muted)] group-hover:text-white transition-colors duration-300">
                                        {partner.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;
