import { TextHoverEffect, FooterBackgroundGradient } from './ui/hover-footer';

const Footer = () => {
    return (
        <footer className="relative py-24 px-6 bg-transparent overflow-hidden">
            <FooterBackgroundGradient />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Big Hover Text */}
                <div className="h-32 md:h-48 lg:h-64 mb-12">
                    <TextHoverEffect
                        text="SOLSTICE"
                        duration={0.15}
                        className="w-full h-full"
                    />
                </div>

                {/* Links */}
                <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
                    {[
                        { name: 'Documentation', href: '/documentation' },
                        { name: 'GitHub', href: 'https://github.com/solstice-protocol' },
                        { name: 'Twitter', href: 'https://twitter.com/solstice' },
                    ].map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-vintage-grape-300 hover:text-vintage-grape-100 font-futuristic text-sm tracking-[0.2em] uppercase transition-all duration-300 hover:tracking-[0.3em] relative group"
                        >
                            {link.name}
                            <span className="absolute -bottom-1 left-0 w-0 h-px bg-vintage-grape-400 group-hover:w-full transition-all duration-300" />
                        </a>
                    ))}
                </div>

                {/* Divider */}
                <div className="w-full h-px bg-gradient-to-r from-transparent via-vintage-grape-400/30 to-transparent mb-8" />

                {/* Copyright */}
                <div className="text-center">
                    <p className="text-vintage-grape-400 font-futuristic text-xs tracking-[0.3em] uppercase">
                        Solstice Protocol © {new Date().getFullYear()}
                    </p>
                    <p className="text-vintage-grape-600 font-futuristic text-xs tracking-wider mt-2">
                        Zero-Knowledge Identity on Solana
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
