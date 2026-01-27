import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
    {
        question: "Who can use Solstice Protocol?",
        answer: "Anyone building or planning to build on Solana and aiming to create privacy-preserving identity verification systems. Whether you're developing DeFi applications, voting systems, or gaming platforms, Solstice provides the tools you need."
    },
    {
        question: "Do I need prior ZK knowledge to integrate?",
        answer: "No. You don't need deep zero-knowledge cryptography expertise. Our SDK abstracts the complexity, providing simple APIs for proof generation and verification. We welcome developers at all levels, from beginners to experts."
    },
    {
        question: "What stage should my project be at?",
        answer: "We accept projects at any stage: idea, prototype, or already live. The goal is to accelerate your development with privacy-preserving identity verification, regardless of your current progress."
    },
    {
        question: "How does the verification process work?",
        answer: "The protocol uses Groth16 SNARKs for zero-knowledge proofs. Users generate proofs client-side from their Aadhaar QR codes, which are then verified on-chain in under 1ms. The entire process ensures that personal information never leaves the user's device."
    },
    {
        question: "What are the performance characteristics?",
        answer: "Proof generation takes approximately 5 seconds on modern hardware. Proofs are compressed to just 256 bytes, making them efficient to store on-chain. On-chain verification completes in under 1 millisecond with minimal transaction costs."
    },
    {
        question: "Is the protocol audited?",
        answer: "Yes, our smart contracts and cryptographic implementations have undergone comprehensive security audits. We follow industry best practices and maintain transparency through open-source development."
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-32 px-6 bg-transparent">
            <div className="max-w-5xl mx-auto">
                <div className="grid md:grid-cols-[200px_1fr] gap-12 md:gap-20">
                    {/* Left: FAQ Title */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-5xl md:text-6xl font-light text-text-primary sticky top-32">
                            FAQ
                        </h2>
                    </motion.div>

                    {/* Right: FAQ Items */}
                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="border-t border-white/10 last:border-b"
                            >
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full py-8 flex items-start justify-between gap-6 text-left group hover:text-accent-grape transition-colors duration-300"
                                >
                                    <span className="text-xl md:text-2xl font-normal text-text-primary group-hover:text-accent-grape transition-colors duration-300">
                                        {faq.question}
                                    </span>
                                    <motion.div
                                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="shrink-0 mt-1"
                                    >
                                        <ChevronDown className="w-6 h-6 text-text-muted group-hover:text-accent-grape transition-colors duration-300" />
                                    </motion.div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 pr-12">
                                                <p className="text-text-secondary leading-relaxed font-serif">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
