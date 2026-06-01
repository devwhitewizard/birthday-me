import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function HoldHeart() {
  const [holding, setHolding] = useState(false);
  const [progress, setProgress] = useState(0);
  const [filled, setFilled] = useState(false);

  useEffect(() => {
    let interval: any;
    if (holding && progress < 100) {
      interval = setInterval(() => {
        setProgress(p => {
          if (p >= 95) {
            setFilled(true);
            return 100;
          }
          return p + 2;
        });
      }, 50);
    } else if (!holding && progress < 100) {
      setProgress(0);
    }
    return () => clearInterval(interval);
  }, [holding, progress]);

  return (
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center z-10 relative">
        <AnimatePresence mode="wait">
          {!filled ? (
            <motion.div key="unfilled" exit={{ opacity: 0, scale: 0 }}>
              <h2 className="text-3xl md:text-5xl font-mono mb-12 text-white/80">Press & Hold to Deploy Success</h2>
              <motion.div
                className="relative w-48 h-48 mx-auto cursor-pointer flex items-center justify-center"
                onMouseDown={() => setHolding(true)}
                onMouseUp={() => setHolding(false)}
                onMouseLeave={() => setHolding(false)}
                onTouchStart={() => setHolding(true)}
                onTouchEnd={() => setHolding(false)}
                animate={{ scale: holding ? 1.1 : 1 }}
              >
                <div className="absolute inset-0 rounded-full border-2 border-blue-500/30" />
                <motion.div 
                  className="absolute bottom-0 w-full bg-blue-500/20 rounded-full blur-md"
                  style={{ height: `${progress}%` }}
                />
                <motion.div
                  className={`w-24 h-24 flex items-center justify-center transition-colors duration-300 ${holding ? 'text-blue-400' : 'text-blue-400/50'}`}
                  style={{ filter: `drop-shadow(0 0 ${progress / 2}px rgba(59,130,246,0.8))` }}
                >
                    <Sparkles className="w-full h-full" />
                </motion.div>
              </motion.div>
            </motion.div>
          ) : (
            <motion.div 
              key="filled"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <div className="w-32 h-32 mx-auto text-green-500 animate-pulse drop-shadow-[0_0_50px_rgba(34,197,94,1)] flex items-center justify-center">
                  <Sparkles className="w-full h-full" />
              </div>
              <motion.h3 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-8 text-4xl md:text-6xl font-serif text-glow text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-400"
              >
                Deployment Successful!
              </motion.h3>
            </motion.div>

          )}
        </AnimatePresence>
      </div>

      {/* Explosion particles when filled */}
      {filled && (
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute top-1/2 left-1/2 w-4 h-4"
              initial={{ x: 0, y: 0, scale: 0, opacity: 1 }}
              animate={{
                x: (Math.random() - 0.5) * window.innerWidth,
                y: (Math.random() - 0.5) * window.innerHeight,
                scale: Math.random() * 2 + 0.5,
                opacity: 0,
                rotate: Math.random() * 360
              }}
              transition={{ duration: 2 + Math.random() * 2, ease: "easeOut" }}
            >
              <Sparkles className="text-blue-400 w-full h-full" />
            </motion.div>
          ))}
        </div>
      )}
    </section>
  );
}