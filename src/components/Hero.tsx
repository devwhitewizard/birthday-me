import { motion } from 'framer-motion';

export default function Hero({ onStart }: { onStart: () => void }) {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] mix-blend-screen" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[120px] mix-blend-screen" />

            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h1 className="text-5xl md:text-8xl font-serif mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-purple-300 to-blue-300 text-glow">
                        Happy Birthday to Me!<br />Releasing v1.0.0 Stable
                    </h1>
                </motion.div>
                
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="text-xl md:text-2xl text-white/70 font-light mb-12 tracking-wide font-serif"
                >
                    A journey through 365 days of code, bugs, and coffee...
                </motion.p>

                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                    onClick={onStart}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-8 py-4 rounded-full glass-panel text-white border border-white/20 hover:bg-white/10 transition-all duration-300 group flex items-center gap-3 mx-auto shadow-[0_0_30px_rgba(59,130,246,0.3)] hover:shadow-[0_0_50px_rgba(59,130,246,0.5)]"
                >
                    <span className="tracking-widest uppercase text-sm font-medium">Launch Dashboard</span>
                </motion.button>
            </div>
        </div>
    );
}