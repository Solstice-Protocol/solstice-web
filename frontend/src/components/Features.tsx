import { useRef } from 'react';
import { motion } from 'framer-motion';

const features = [
    { 
        number: "01",
        title: "Client-Side Generation", 
        desc: "Proofs generated locally. PII never leaves device." 
    },
    { 
        number: "02",
        title: "Light Protocol", 
        desc: "5000x state compression via Merkle Trees." 
    },
    { 
        number: "03",
        title: "Groth16 Verifier", 
        desc: "Native BPF verification. <1ms finality." 
    }
];

const Features = () => {
    const sectionRef = useRef<HTMLElement>(null);

    return (
        <section id="features" ref={sectionRef} className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-normal mb-16 italic text-text-primary"
                >
                    Protocol Features
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {features.map((f, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="group relative p-8 rounded-2xl border border-white/10 bg-secondary/20 backdrop-blur-sm hover:border-accent-grape/50 transition-all duration-500"
                        >
                            {/* Number */}
                            <div className="mb-6">
                                <span className="text-5xl font-light text-text-muted/30 group-hover:text-accent-grape/50 transition-colors duration-500">
                                    {f.number}
                                </span>
                                <div className="w-16 h-px bg-gradient-to-r from-accent-grape/50 to-transparent mt-4"></div>
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl mb-4 font-normal text-text-primary font-serif group-hover:text-accent-grape transition-colors duration-500">
                                {f.title}
                            </h3>

                            {/* Description */}
                            <p className="text-text-secondary font-serif leading-relaxed">
                                {f.desc}
                            </p>

                            {/* Hover effect gradient */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-grape/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
