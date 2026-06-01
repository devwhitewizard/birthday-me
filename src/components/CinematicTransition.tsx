import { motion } from 'framer-motion';

export default function CinematicTransition() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden py-32 bg-transparent">
      {/* Cinematic Lighting & Bloom */}
      <div className="absolute inset-0 pointer-events-none z-0 flex items-center justify-center">
        <div className="w-[80vw] h-[20vh] bg-pink-500/5 blur-[100px] rounded-full" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(25)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/70 blur-[1px]"
            style={{
              width: Math.random() * 4 + 1 + 'px',
              height: Math.random() * 4 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              y: [0, -60, 0],
              x: [0, (Math.random() - 0.5) * 30, 0],
              opacity: [0, 0.6, 0],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 6 + 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 3
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
        whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        viewport={{ once: true, margin: "-150px" }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="text-center z-20 px-4 relative"
      >
        <p className="text-3xl md:text-5xl font-serif text-white/90 leading-relaxed max-w-4xl mx-auto drop-shadow-[0_0_20px_rgba(255,255,255,0.4)] tracking-wide">
          "Every quiet moment, every memory...<br/>
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1 }}
            className="text-pink-300 italic font-light mt-6 block drop-shadow-[0_0_25px_rgba(236,72,153,0.6)]"
          >
            it all means everything to me."
          </motion.span>
        </p>
      </motion.div>
    </section>
  );
}
