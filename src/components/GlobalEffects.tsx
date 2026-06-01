import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function GlobalEffects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Noise Texture */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-20 mix-blend-overlay" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
      
      {/* Aurora Background */}
      <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/10 rounded-full blur-[150px] mix-blend-screen"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60vw] h-[60vw] bg-purple-500/10 rounded-full blur-[150px] mix-blend-screen"
        />
      </div>

      {/* Cursor Glow */}
      <motion.div
        className="fixed top-0 left-0 w-32 h-32 bg-primary/30 rounded-full blur-[40px] pointer-events-none z-50 mix-blend-screen"
        animate={{
          x: mousePos.x - 64,
          y: mousePos.y - 64,
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.5 }}
      />
    </>
  );
}
