import { motion } from 'framer-motion';
import ArchitectureFlow from './diagrams/ArchitectureFlow';

const HowItWorks = () => {
    return (
        <section id="architecture" className="py-32 px-6 bg-transparent">
            <div className="max-w-6xl mx-auto">
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-5xl font-normal mb-16 italic text-text-primary"
                >
                    Architecture
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
                    {/* Text Content */}
                    <motion.div 
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8 font-serif leading-relaxed text-text-secondary"
                    >
                        <div className="group">
                            <div className="flex items-start gap-4 mb-3">
                                <span className="text-3xl font-light text-accent-grape">01</span>
                                <strong className="text-text-primary text-2xl font-normal mt-1">Client-Side Generation</strong>
                            </div>
                            <p className="pl-16">
                                Users generate zero-knowledge proofs locally. PII from Aadhaar never leaves the device. Complete privacy preservation at the source.
                            </p>
                        </div>

                        <div className="group">
                            <div className="flex items-start gap-4 mb-3">
                                <span className="text-3xl font-light text-accent-grape">02</span>
                                <strong className="text-text-primary text-2xl font-normal mt-1">Compressed State</strong>
                            </div>
                            <p className="pl-16">
                                Leveraging Light Protocol to compress identity state trees, reducing storage costs by 5000x on Solana.
                            </p>
                        </div>

                        <div className="group">
                            <div className="flex items-start gap-4 mb-3">
                                <span className="text-3xl font-light text-accent-grape">03</span>
                                <strong className="text-text-primary text-2xl font-normal mt-1">On-Chain Verification</strong>
                            </div>
                            <p className="pl-16">
                                Native BPF verification using Groth16 SNARKs. Sub-millisecond finality with minimal transaction costs.
                            </p>
                        </div>
                    </motion.div>

                    {/* Diagram */}
                    <motion.div 
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-full"
                    >
                        <ArchitectureFlow />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
