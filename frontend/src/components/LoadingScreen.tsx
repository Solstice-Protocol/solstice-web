import { motion } from 'framer-motion';

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#1a1a1a]">
            <motion.div
                animate={{ rotate: 360 }}
                transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="w-32 h-32 md:w-48 md:h-48"
            >
                <img
                    src="/loaderlogo.png"
                    alt="Loading..."
                    className="w-full h-full object-contain"
                />
            </motion.div>
        </div>
    );
};

export default LoadingScreen;
