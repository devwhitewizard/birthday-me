import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Terminal, Cpu, Heart } from 'lucide-react';

export default function FlowerEffect() {
  const [flowers, setFlowers] = useState<{ id: number; x: number; y: number; type: number }[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const newFlower = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY,
        type: Math.floor(Math.random() * 8),
      };
      setFlowers((prev) => [...prev, newFlower]);

      setTimeout(() => {
        setFlowers((prev) => prev.filter((f) => f.id !== newFlower.id));
      }, 4000);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none z-[100] overflow-hidden">
      <AnimatePresence>
        {flowers.map((flower) => (
          <motion.div
            key={flower.id}
            initial={{ scale: 0, opacity: 0, rotate: -45 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            exit={{ scale: 0.5, opacity: 0, y: -50 }}
            transition={{ type: 'spring', damping: 15, stiffness: 200 }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: flower.x, top: flower.y }}
          >
            {flower.type === 0 && <span className="text-4xl drop-shadow-[0_0_10px_rgba(59,130,246,0.8)] filter">💻</span>}
            {flower.type === 1 && <span className="text-4xl drop-shadow-[0_0_10px_rgba(34,197,94,0.8)] filter">🚀</span>}
            {flower.type === 2 && <Code2 className="w-10 h-10 text-blue-400 drop-shadow-[0_0_10px_rgba(59,130,246,0.8)]" />}
            {flower.type === 3 && <span className="text-4xl drop-shadow-[0_0_10px_rgba(168,85,247,0.8)] filter">👾</span>}
            {flower.type === 4 && <Terminal className="w-10 h-10 text-green-400 drop-shadow-[0_0_10px_rgba(34,197,94,0.8)]" />}
            {flower.type === 5 && <Cpu className="w-10 h-10 text-purple-400 drop-shadow-[0_0_10px_rgba(168,85,247,0.8)]" />}
            {flower.type === 6 && <Heart className="w-10 h-10 text-pink-400 fill-pink-400 drop-shadow-[0_0_10px_rgba(236,72,153,0.8)]" />}
            {flower.type === 7 && <span className="text-4xl drop-shadow-[0_0_10px_rgba(236,72,153,0.8)] filter">💖</span>}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
