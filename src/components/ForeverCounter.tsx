import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function ForeverCounter() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Fake a large starting number for dramatic effect, then increment
    const start = 0; // Starting afresh for Year 2
    setSeconds(start);
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-[50vh] flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="text-center relative z-10"
      >
        <p className="text-white/50 uppercase tracking-widest text-sm mb-6">Uptime since first connection</p>
        <div className="relative">
          <motion.div
            className="absolute -inset-10 bg-primary/20 blur-[50px] rounded-full"
            animate={{ opacity: [0.5, 0.8, 0.5], scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <h2 className="text-6xl md:text-8xl font-mono text-glow text-white relative z-10 font-bold tracking-tighter">
            {seconds.toLocaleString()}
          </h2>
        </div>
      </motion.div>
    </section>
  );
}