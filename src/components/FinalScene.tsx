import { motion } from 'framer-motion';
import { Sparkles, Heart } from 'lucide-react';

export default function FinalScene() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Stars Background */}
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white"
            style={{
              width: Math.random() * 3 + 'px',
              height: Math.random() * 3 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
            animate={{
              opacity: [0.1, 1, 0.1],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Fireflies/Lanterns */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`lantern-${i}`}
            className="absolute w-4 h-4 rounded-full bg-yellow-500/50 blur-[4px]"
            style={{
              left: Math.random() * 100 + '%',
              bottom: '-10%',
            }}
            animate={{
              y: ['0vh', '-110vh'],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              ease: "linear",
              delay: Math.random() * 10,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 text-center flex flex-col items-center">
        <div className="flex gap-4 mb-8">
          <Sparkles className="w-24 h-24 text-blue-400 drop-shadow-[0_0_30px_rgba(59,130,246,0.8)]" />
          <Heart className="w-24 h-24 text-red-500 fill-red-500 drop-shadow-[0_0_30px_rgba(239,68,68,0.8)]" />
        </div>

        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.5 }}
          className="text-5xl md:text-7xl font-serif text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-blue-500 text-glow"
        >
          The Journey Has Just Begun. Keep Coding.
        </motion.h1>
      </div>
    </section>
  );
}