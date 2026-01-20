import { Shield, Lock, FileCheck, Server } from 'lucide-react';

const stats = [
    { label: "Circuit Audits", value: "3", icon: Shield },
    { label: "Uptime SLA", value: "99.9%", icon: Server },
    { label: "Assets Secured", value: "$50M+", icon: Lock },
    { label: "Proofs Verified", value: "2.5M", icon: FileCheck },
];

const Trust = () => {
    return (
        <section className="py-32 px-6 bg-transparent">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex flex-col items-center text-center p-6 rounded-2xl bg-primary/20 backdrop-blur-sm border border-white/5 hover:bg-secondary/30 transition-all duration-300 group">
                            <stat.icon className="w-8 h-8 text-accent-grape mb-4 group-hover:scale-110 transition-transform duration-300" />
                            <div className="text-3xl md:text-4xl font-bold font-serif text-text-primary mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm font-light text-text-muted tracking-wide uppercase">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <p className="text-text-secondary italic text-lg opacity-80">
                        "Security is not a feature, it's the foundation."
                    </p>
                    <div className="mt-8 flex justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Placeholders for Audit partners */}
                        <div className="text-xl font-bold font-serif">OtterSec</div>
                        <div className="text-xl font-bold font-serif">Zellic</div>
                        <div className="text-xl font-bold font-serif">Trail of Bits</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Trust;
