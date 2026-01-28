import { useState } from 'react';
import { useWallet } from '@solana/wallet-adapter-react';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { isOnboardingComplete } from '../lib/onboarding';

const Navigation = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const wallet = useWallet();

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsMobileMenuOpen(false);
    };

    const navLinks = [
        { id: 'features', label: 'Features' },
        { id: 'architecture', label: 'Architecture' },
        { id: 'use-cases', label: 'Use Cases' },
        { id: 'roadmap', label: 'Roadmap' },
    ];

    // Handle wallet button click - redirect based on verification status
    const handleLaunchApp = () => {
        if (wallet.connected && wallet.publicKey) {
            const isVerified = isOnboardingComplete(wallet.publicKey.toString());
            
            if (isVerified) {
                // User is verified, redirect to app
                window.location.href = 'https://app.solsticeprotocol.dev';
            } else {
                // User is not verified, redirect to onboarding (skip welcome and wallet steps)
                window.location.href = 'https://app.solsticeprotocol.dev/onboarding?skip=true';
            }
        }
    };

    return (
        <>
            <nav className="fixed top-0 right-0 z-50 p-6 flex justify-end items-start pointer-events-none">
                <div className="pointer-events-auto flex items-center gap-4 bg-primary/10 backdrop-blur-md border border-white/5 rounded-full px-5 py-2">
                    <a
                        href="/documentation"
                        className="hidden sm:block text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors relative group"
                    >
                        Documentation
                        <span className="absolute bottom-[-4px] left-0 right-0 h-px bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>

                    <div className="hidden sm:flex items-center gap-3 border-l border-white/10 pl-4">
                        <a
                            href="https://github.com/Solstice-Protocol"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-secondary)] hover:text-white transition-colors"
                            aria-label="GitHub"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                            </svg>
                        </a>
                        <a
                            href="https://www.npmjs.com/package/@solsticeprotocol/sdk"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[var(--color-text-secondary)] hover:text-white transition-colors"
                            aria-label="NPM"
                        >
                            <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M6 22h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2z"></path>
                                <path d="M6 12h5v4h2v-4h5"></path>
                                <path d="M6 8h12"></path>
                                <path d="M6 16h12"></path>
                            </svg>
                        </a>
                    </div>

                    {/* Wallet Button - Shows connected wallet or allows connection */}
                    <div className="ml-2" onClick={handleLaunchApp}>
                        <WalletMultiButton className="!bg-gradient-to-r !from-cyan-500 !to-purple-600 !px-4 !py-1.5 !rounded-full !text-[11px] !font-semibold !text-white !shadow-md !shadow-cyan-500/20 hover:!shadow-cyan-500/40 hover:!scale-105 !transition-all !duration-300 !border-0 !h-auto !min-h-0" />
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors border-l border-white/10 ml-1"
                    >
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            {isMobileMenuOpen ? (
                                <path d="M18 6L6 18M6 6l12 12" />
                            ) : (
                                <path d="M4 6h16M4 12h16M4 18h16" />
                            )}
                        </svg>
                    </button>
                </div>
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute top-24 left-4 right-4 glass-strong rounded-2xl p-6 animate-[slide-up_0.3s_ease-out]">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="w-full text-left px-4 py-4 text-lg text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                            <div className="mt-4 pt-4 border-t border-[var(--color-border)]" onClick={handleLaunchApp}>
                                <WalletMultiButton className="!w-full !text-center !bg-gradient-to-r !from-cyan-500 !to-purple-600 !px-6 !py-3 !rounded-xl !text-base !font-semibold !text-white !border-0" />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
