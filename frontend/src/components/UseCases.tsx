import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const cases = [
    { title: "Sybil Resistance", desc: "Unique humans, not bots." },
    { title: "Private Governance", desc: "Anonymous voting." },
    { title: "Lending", desc: "Reputation without doxxing." },
    { title: "Compliance", desc: "Regulatory proof." }
];

const UseCases = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.use-case-card',
                        scale: [0.9, 1],
                        opacity: [0, 1],
                        duration: 600,
                        delay: anime.stagger(150),
                        easing: 'easeOutCubic'
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="py-32 px-6 bg-transparent">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-normal mb-12 italic text-text-primary">
                    Applications
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cases.map((c, i) => (
                        <div key={i} className="use-case-card opacity-0 bg-primary/30 backdrop-blur-md p-8 hover:bg-secondary/50 transition-colors duration-300 border border-white/5 rounded-xl">
                            <h3 className="text-2xl mb-2 font-normal text-text-primary font-serif italic">
                                {c.title}
                            </h3>
                            <p className="text-text-secondary font-serif">
                                {c.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
