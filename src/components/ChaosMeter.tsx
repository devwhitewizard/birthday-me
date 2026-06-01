import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ChaosMeter() {
  const [level, setLevel] = useState(0);

  const triggerChaos = () => {
    setLevel(100);
  };

  return (
    <section className="relative min-h-[70vh] py-24 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center w-full max-w-2xl"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-glow mb-12">Skill Progression Meter</h2>
        
        <div className="glass-panel p-8 rounded-3xl relative overflow-hidden cursor-pointer" onClick={triggerChaos}>
          <div className="w-full h-8 bg-black/50 rounded-full overflow-hidden border border-white/10 relative">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-purple-500 to-green-500 relative"
              initial={{ width: "0%" }}
              animate={{ width: `${level}%` }}
              transition={{ type: "spring", stiffness: 50, damping: 10 }}
            >
              {level > 0 && (
                <motion.div 
                  className="absolute inset-0 bg-white/50"
                  animate={{ opacity: [0, 0.5, 0] }}
                  transition={{ repeat: Infinity, duration: 0.2 }}
                />
              )}
            </motion.div>
          </div>
          
          <div className="mt-8 h-12">
            {level === 0 ? (
              <p className="text-white/50 animate-pulse">Calculate experience...</p>
            ) : (
              <motion.p 
                initial={{ scale: 0 }}
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 0.5 }}
                className="text-2xl font-mono text-glow text-green-400 font-bold"
              >
                SUCCESS: Expert Level Reached!
              </motion.p>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}