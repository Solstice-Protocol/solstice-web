const Footer = () => {
    const footerLinks = {
        resources: [
            { label: 'Whitepaper', href: '#whitepaper' },
            { label: 'Documentation', href: '#documentation' },
            { label: 'GitHub', href: '#github' },
            { label: 'SDK', href: '#sdk' }
        ],
        community: [
            { label: 'Discord', href: '#discord' },
            { label: 'Twitter', href: '#twitter' },
            { label: 'Blog', href: '#blog' },
            { label: 'Grants', href: '#grants' }
        ],
        legal: [
            { label: 'Privacy Policy', href: '#privacy' },
            { label: 'Terms of Service', href: '#terms' },
            { label: 'Security', href: '#security' },
            { label: 'Audits', href: '#audits' }
        ]
    };

    return (
        <footer className="border-t border-[var(--color-border)] bg-[var(--color-bg-secondary)]/50">
            <div className="max-w-6xl mx-auto px-6 py-16">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Logo & Description */}
                    <div className="col-span-2 md:col-span-1">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 gradient-bg rounded-xl flex items-center justify-center shadow-lg">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white" />
                                </svg>
                            </div>
                            <span className="text-xl font-bold font-[var(--font-heading)] gradient-text">
                                Solstice
                            </span>
                        </div>
                        <p className="text-sm text-[var(--color-text-secondary)] mb-6">
                            Privacy-preserving identity verification for Web3. Built on Solana with zero-knowledge proofs.
                        </p>

                        {/* Social Links */}
                        <div className="flex gap-3">
                            <a
                                href="https://twitter.com"
                                className="w-10 h-10 glass-light rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-white/10 transition-all"
                                aria-label="Twitter"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                                </svg>
                            </a>
                            <a
                                href="https://github.com"
                                className="w-10 h-10 glass-light rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-white/10 transition-all"
                                aria-label="GitHub"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
                                </svg>
                            </a>
                            <a
                                href="https://discord.com"
                                className="w-10 h-10 glass-light rounded-lg flex items-center justify-center text-[var(--color-text-secondary)] hover:text-white hover:bg-white/10 transition-all"
                                aria-label="Discord"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Resources */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white">Resources</h4>
                        <ul className="space-y-3">
                            {footerLinks.resources.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Community */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white">Community</h4>
                        <ul className="space-y-3">
                            {footerLinks.community.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h4 className="text-sm font-semibold mb-4 text-white">Legal</h4>
                        <ul className="space-y-3">
                            {footerLinks.legal.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-sm text-[var(--color-text-secondary)] hover:text-white transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom */}
                <div className="pt-8 border-t border-[var(--color-border)] text-center md:text-left md:flex md:items-center md:justify-between">
                    <p className="text-sm text-[var(--color-text-muted)]">
                        © 2025 Solstice Protocol. All rights reserved.
                    </p>
                    <p className="text-xs text-[var(--color-text-muted)] mt-2 md:mt-0">
                        This website is for informational purposes only and does not constitute financial advice.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
