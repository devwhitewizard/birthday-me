import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const memories = [
  { id: 1, url: new URL('../assets/pic1.jpeg', import.meta.url).href, caption: 'Initial commit: Where the passion started 🚀', rotation: -6 },
  { id: 2, url: new URL('../assets/pic2.jpeg', import.meta.url).href, caption: 'Mastering the fundamentals 🌿', rotation: 4 },
  { id: 3, url: new URL('../assets/pic3.jpeg', import.meta.url).href, caption: 'Solving my first complex bug 🛠️', rotation: -3 },
  { id: 4, url: new URL('../assets/pic4.jpeg', import.meta.url).href, caption: 'Learning something new every single day ✨', rotation: 5 },
  { id: 10, url: new URL('../assets/pic10.jpeg', import.meta.url).href, caption: 'Clean code, clear mind 🤝', rotation: 7 },
  { id: 11, url: new URL('../assets/pic11.jpeg', import.meta.url).href, caption: 'Infinite loops of creative logic ♾️', rotation: -8 },
  { id: 12, url: new URL('../assets/pic12.jpeg', import.meta.url).href, caption: 'v1.0.0 released: The best is yet to come ❤️', rotation: 2 },
];

export default function MemoryGallery() {
  const [selectedId, setSelectedId] = useState<number | null>(null);

  const selectedMemory = memories.find((m) => m.id === selectedId);

  return (
    <section className="relative min-h-screen py-24 px-4 flex flex-col items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className="text-center mb-16 z-10"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-glow mb-4">My Coding Highlights</h2>
        <p className="text-white/60 font-light text-lg">Click to open our memories</p>
      </motion.div>

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto z-10">
        {memories.map((memory, index) => (
          <motion.div
            key={memory.id}
            layoutId={`card-container-${memory.id}`}
            onClick={() => setSelectedId(memory.id)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ scale: 1.05, rotate: 0, zIndex: 20 }}
            className="relative cursor-pointer glass-panel p-4 rounded-xl shadow-2xl"
            style={{ rotate: memory.rotation }}
          >
            <motion.div layoutId={`card-image-${memory.id}`} className="w-64 h-80 overflow-hidden rounded-lg">
              <img src={memory.url} alt="Memory" className="w-full h-full object-cover" />
            </motion.div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4"
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`card-container-${selectedMemory.id}`}
              className="relative bg-white p-6 rounded-2xl max-w-lg w-full shadow-[0_0_50px_rgba(236,72,153,0.3)]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-4 -right-4 bg-primary text-white p-2 rounded-full shadow-lg"
                onClick={() => setSelectedId(null)}
              >
                <X className="w-5 h-5" />
              </button>
              <motion.div layoutId={`card-image-${selectedMemory.id}`} className="w-full h-96 overflow-hidden rounded-xl mb-6">
                <img src={selectedMemory.url} alt="Memory" className="w-full h-full object-cover" />
              </motion.div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-center text-gray-800 font-serif text-2xl"
              >
                {selectedMemory.caption}
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
