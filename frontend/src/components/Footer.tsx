import anime from 'animejs/lib/anime.es.js';

const Footer = () => {
    const handleEnter = (e: React.MouseEvent) => {
        anime({
            targets: e.target,
            scale: 1.1,
            color: '#f4f3f1', // stone-brown-50
            duration: 400
        });
    };

    const handleLeave = (e: React.MouseEvent) => {
        anime({
            targets: e.target,
            scale: 1,
            color: '#bab4ab', // stone-brown-300
            duration: 400
        });
    };

    return (
        <footer className="py-12 px-6 bg-transparent text-center relative z-10">
            <div className="text-text-muted font-serif text-sm tracking-widest uppercase mb-4">
                Solstice Protocol © 2026
            </div>
            <div className="flex justify-center gap-6 text-text-secondary font-serif italic text-sm">
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
