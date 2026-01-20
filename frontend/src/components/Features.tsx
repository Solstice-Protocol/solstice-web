import { useEffect, useRef } from 'react';
import anime from 'animejs/lib/anime.es.js';

const features = [
    { title: "I. Client-Side Generation", desc: "Proofs generated locally." },
    { title: "II. Light Protocol", desc: "5000x state compression." },
    { title: "III. Groth16 Verifier", desc: "Native BPF verification." }
];

const Features = () => {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    anime({
                        targets: '.feature-card',
                        translateY: [50, 0],
                        opacity: [0, 1],
                        duration: 800,
                        delay: anime.stagger(200),
                        easing: 'easeOutQuad'
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
                    Protocol Features
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {features.map((f, i) => (
                        <div key={i} className="feature-card opacity-0 p-6 hover:bg-secondary/30 transition-colors duration-500 rounded-lg backdrop-blur-sm border border-white/5">
                            <h3 className="text-xl mb-4 font-normal text-text-primary font-serif">
                                {f.title}
                            </h3>
                            <p className="text-text-secondary font-serif leading-relaxed">
                                {f.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
