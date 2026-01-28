import { motion, useScroll, useTransform } from 'framer-motion';

const ScrollLogo = () => {
    const { scrollYProgress } = useScroll();
    // Rotate 10 full circles (3600 degrees) over the entire page height
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 360 * 10]);

    return (
        <div className="fixed top-6 left-6 z-50 pointer-events-none">
            <motion.div
                style={{ rotate }}
                className="w-12 h-12 md:w-14 md:h-14"
            >
                <img
                    src="/loaderlogo.png"
                    alt="Solstice Logo"
                    className="w-full h-full object-contain opacity-90 drop-shadow-lg"
                />
            </motion.div>
        </div>
    );
};

export default ScrollLogo;
