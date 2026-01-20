import { useEffect, useRef, useState } from 'react';

interface AnimatedCounterProps {
    end: number;
    suffix?: string;
    duration?: number;
    className?: string;
}

const AnimatedCounter = ({ end, suffix = '', duration = 2000, className = '' }: AnimatedCounterProps) => {
    const [count, setCount] = useState(0);
    const countRef = useRef<HTMLSpanElement>(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated.current) {
                        hasAnimated.current = true;
                        animateCount();
                    }
                });
            },
            { threshold: 0.5 }
        );

        if (countRef.current) {
            observer.observe(countRef.current);
        }

        return () => observer.disconnect();
    }, []);

    const animateCount = () => {
        const startTime = performance.now();

        const updateCount = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);

            // Easing function (ease-out-expo)
            const easeOutExpo = 1 - Math.pow(2, -10 * progress);

            setCount(Math.floor(easeOutExpo * end));

            if (progress < 1) {
                requestAnimationFrame(updateCount);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(updateCount);
    };

    return (
        <span ref={countRef} className={className}>
            {count.toLocaleString()}{suffix}
        </span>
    );
};

export default AnimatedCounter;
