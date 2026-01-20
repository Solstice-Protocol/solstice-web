import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const Hero = () => {
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subRef = useRef<HTMLParagraphElement>(null);

    useEffect(() => {
        // Wrap letters in spans for stagger effect
        const title = titleRef.current;
        if (title) {
            title.innerHTML = title.textContent?.replace(/\S/g, "<span class='letter'>$&</span>") || '';

            anime.timeline({ loop: false })
                .add({
                    targets: '.hero-title .letter',
                    scale: [4, 1],
                    opacity: [0, 1],
                    translateZ: 0,
                    easing: "easeOutExpo",
                    duration: 950,
                    delay: anime.stagger(70)
                }).add({
                    targets: '.hero-sub',
                    opacity: [0, 1],
                    translateY: [20, 0],
                    duration: 1200,
                    offset: '-=700'
                });
        }
    }, []);

    return (
        <section className="h-screen flex flex-col items-center justify-center bg-[var(--color-bg-primary)] px-4">
            <h1
                ref={titleRef}
                className="hero-title text-6xl md:text-8xl lg:text-9xl font-normal tracking-tighter text-[var(--color-text-primary)] mb-4 text-center"
            >
                Solstice Protocol
            </h1>
            <p
                ref={subRef}
                className="hero-sub text-lg md:text-xl font-normal italic text-[var(--color-text-secondary)] tracking-widest opacity-0"
            >
                Empowering Private On-Chain Identity on Solana.
            </p>

            <div className="absolute bottom-12 text-[var(--color-text-muted)] text-sm tracking-widest uppercase">
                Scroll Down
            </div>

            <style>{`
                .hero-title .letter {
                    display: inline-block;
                    line-height: 1em;
                }
            `}</style>
        </section>
    );
};

export default Hero;
