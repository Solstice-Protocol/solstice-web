import anime from 'animejs/lib/anime.es.js';

const Footer = () => {
    const handleEnter = (e: React.MouseEvent) => {
        anime({
            targets: e.target,
            scale: 1.1,
            color: '#ffffff',
            duration: 400
        });
    };

    const handleLeave = (e: React.MouseEvent) => {
        anime({
            targets: e.target,
            scale: 1,
            color: '#a0a0a0',
            duration: 400
        });
    };

    return (
        <footer className="py-12 px-6 bg-[var(--color-bg-primary)] border-t border-[var(--color-border)] text-center">
            <div className="text-[var(--color-text-muted)] font-serif text-sm tracking-widest uppercase mb-4">
                Solstice Protocol © 2026
            </div>
            <div className="flex justify-center gap-6 text-[var(--color-text-secondary)] font-serif italic text-sm">
                {['Documentation', 'GitHub', 'Twitter'].map((link) => (
                    <a
                        key={link}
                        href="#"
                        onMouseEnter={handleEnter}
                        onMouseLeave={handleLeave}
                        className="transition-colors"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
