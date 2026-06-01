import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Terminal, Sparkles, Heart } from 'lucide-react';

export default function SecretLetter() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-serif text-glow mb-4">A Secret For You</h2>
        <p className="text-white/50">Click the envelope to open</p>
      </motion.div>

      <AnimatePresence mode="wait">
        {!isOpen ? (
          <motion.div
            key="envelope"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0, rotateX: 90 }}
            transition={{ duration: 0.5 }}
            onClick={() => setIsOpen(true)}
            className="cursor-pointer group relative"
          >
            <div className="absolute inset-0 bg-primary/20 blur-[60px] rounded-full group-hover:bg-primary/40 transition-all duration-500" />
            <div className="glass-panel p-12 rounded-3xl relative z-10 border border-primary/30 shadow-[0_0_40px_rgba(236,72,153,0.3)] flex flex-col items-center gap-6 group-hover:scale-105 transition-transform duration-500">
              <Mail className="w-24 h-24 text-primary drop-shadow-[0_0_15px_rgba(236,72,153,0.8)]" />
              <Terminal className="w-8 h-8 text-accent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" />
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="letter"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-2xl bg-[#fdfbf7] p-8 md:p-16 rounded-sm shadow-[0_0_50px_rgba(255,255,255,0.1)] relative"
            style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/cream-paper.png")' }}
          >
            <div className="absolute top-4 left-4 right-4 bottom-4 border border-gray-300/50 pointer-events-none" />
            
            <div className="font-mono text-gray-800 space-y-6">
              <h1 className="text-2xl font-bold border-b border-gray-300 pb-2"># Project: My_Coding_v1.0.0</h1>
              
              <div className="space-y-4 text-sm md:text-base leading-relaxed">
                <p><strong>## Description</strong></p>
                <p>
                  Today marks one full year of exploration into the world of code. 
                  I've transformed from a novice to a builder, learning to ship 
                  stable releases of my own ideas and solving the complex puzzles 
                  that once seemed impossible.
                </p>
                
                <p><strong>## Core Stats</strong></p>
                <ul className="list-disc ml-6 space-y-1">
                  <li>365 days of continuous uptime</li>
                  <li>1000+ bugs encountered and resolved</li>
                  <li>v1.0.0 Architecture: Rock Solid</li>
                </ul>

                <p><strong>## Roadmap</strong></p>
                <p>
                  I built this dashboard to remind myself of how far I've come. 
                  Year 2 is about scaling the dream, mastering new stacks, and 
                  building even more wonderful things.
                </p>
              </div>
            </div>

            <div className="mt-12 flex flex-col items-center gap-2">
              <span className="font-serif text-gray-800 text-xl">White Wizard,</span>
              <div className="flex items-center gap-2 mt-2">
                <Sparkles className="w-6 h-6 text-blue-500 animate-pulse" />
                <Heart className="w-6 h-6 text-red-500 fill-red-500 animate-pulse" />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}