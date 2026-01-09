import { useState, useEffect } from 'react';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
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
                className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ${isScrolled
                        ? 'glass-strong shadow-2xl'
                        : 'glass-light'
                    } rounded-full px-2 py-2 md:px-4`}
            >
                <div className="flex items-center gap-2 md:gap-6">
                    {/* Logo */}
                    <div className="flex items-center gap-2 pl-2">
                        <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center shadow-lg">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                                <path d="M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5z" fill="white" />
                            </svg>
                        </div>
                        <span className="text-lg font-bold font-[var(--font-heading)] hidden sm:block">
                            Solstice
                        </span>
                    </div>

                    {/* Desktop Nav Links */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className="px-4 py-2 text-sm font-medium text-[var(--color-text-secondary)] hover:text-white transition-colors duration-300 rounded-full hover:bg-white/5"
                            >
                                {link.label}
                            </button>
                        ))}
                    </div>

                    {/* Launch Button */}
                    <a
                        href="#launch"
                        className="gradient-bg px-5 py-2 rounded-full text-sm font-semibold text-white shadow-lg hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105"
                    >
                        Launch App
                    </a>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors"
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
            </nav>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="fixed inset-0 z-40 md:hidden">
                    <div
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsMobileMenuOpen(false)}
                    />
                    <div className="absolute top-20 left-4 right-4 glass rounded-2xl p-4 animate-[slide-up_0.3s_ease-out]">
                        <div className="flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    onClick={() => scrollToSection(link.id)}
                                    className="w-full text-left px-4 py-3 text-[var(--color-text-secondary)] hover:text-white hover:bg-white/5 rounded-xl transition-colors"
                                >
                                    {link.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Navigation;
