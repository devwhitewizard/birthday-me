import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Heart className="w-16 h-16 text-primary fill-primary mx-auto mb-6 animate-pulse" />
        <h1 className="text-6xl font-serif text-glow mb-4">404</h1>
        <p className="text-white/60 text-xl">This page doesn't exist, but our love does. ✨</p>
        <a
          href="/"
          className="mt-8 inline-block px-6 py-3 rounded-full glass-panel border border-white/20 text-white hover:bg-white/10 transition-all duration-300"
        >
          Go Home
        </a>
      </motion.div>
    </div>
  );
}
