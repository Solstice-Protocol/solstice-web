import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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

    return (
        <>
            <nav
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-4' : 'py-6'
                    }`}
            >
                <div className={`max-w-7xl mx-auto px-6 transition-all duration-500 ${isScrolled ? 'bg-[var(--color-bg-primary)]/80 backdrop-blur-xl rounded-full border border-[var(--color-border)] mx-4 px-4' : ''
                    }`}>
                    <div className={`flex items-center justify-between ${isScrolled ? 'py-3' : 'py-0'}`}>
                        {/* Logo */}
                        <div className="flex items-center gap-3">
                            <div className="relative w-10 h-10">
                                <div className="absolute inset-0 gradient-bg rounded-xl opacity-80" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white" />
                                    </svg>
                                </div>
                            </div>
                            <span className="text-xl font-bold font-[var(--font-heading)] tracking-tight">
                                Solstice
                            </span>
                        </div>

                        {/* Desktop Nav Links */}
                        <div className="hidden md:flex items-center gap-1">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="relative px-5 py-2.5 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300 group"
                                >
                                    {link.label}
                                    <span className="absolute bottom-1 left-5 right-5 h-px bg-[var(--color-primary)] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                                </button>
                            ))}
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex items-center gap-3">
                            <a
                                href="#docs"
                                className="hidden sm:block text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors px-4 py-2"
                            >
                                Docs
                            </a>
                            <a
                                href="#launch"
                                className="gradient-bg px-6 py-2.5 rounded-full text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-105 transition-all duration-300"
                            >
                                Launch App
                            </a>

                            {/* Mobile Menu Button */}
                            <button
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                                className="md:hidden p-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                    {isMobileMenuOpen ? (
                                        <path d="M18 6L6 18M6 6l12 12" />
                                    ) : (
                                        <path d="M4 6h16M4 12h16M4 18h16" />
                                    )}
                                </svg>
                            </button>
                        </div>
                    </div>
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
                            <div className="mt-4 pt-4 border-t border-[var(--color-border)]">
                                <a
                                    href="#launch"
                                    className="block w-full text-center gradient-bg px-6 py-4 rounded-xl text-lg font-semibold text-white"
                                >
                                    Launch App
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
