
import { motion } from 'framer-motion';

const reasons = [
  "The thrill of solving complex logic puzzles",
  "Building creative worlds from pure text",
  "Continuous learning and daily growth",
  "The power to turn ideas into reality",
  "Joining the global developer community"
];

export default function ReasonsSection() {
  return (
    <section className="relative min-h-screen py-32 px-4 flex flex-col items-center justify-center">
      <motion.h2 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-serif text-glow mb-16 text-center"
      >
        Why I Love Coding
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-8 max-w-5xl perspective-1000">
        {reasons.map((reason, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50, rotateX: -20 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            whileHover={{ scale: 1.05, rotateY: 10, rotateX: 10 }}
            className="glass-panel p-8 rounded-2xl w-64 h-64 flex items-center justify-center text-center cursor-pointer relative group overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <p className="font-serif text-xl relative z-10">{reason}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}