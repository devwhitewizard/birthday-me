
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const snips = [
  { 
    text: "First Line of Code", 
    x: "5%", y: "5%", delay: 0.1, 
    image: new URL('../assets/pic5.jpeg', import.meta.url).href, 
    rotate: -4,
    zIndex: 10
  },
  { 
    text: "Debugging Masterclass", 
    x: "55%", y: "15%", delay: 0.3, 
    image: new URL('../assets/pic6.jpeg', import.meta.url).href, 
    rotate: 6,
    zIndex: 20
  },
  { 
    text: "Infinite Learn Loop", 
    x: "30%", y: "35%", delay: 0.5, 
    image: new URL('../assets/pic7.jpeg', import.meta.url).href, 
    rotate: -2,
    zIndex: 40
  },
  { 
    text: "Productive Focus", 
    x: "10%", y: "55%", delay: 0.7, 
    image: new URL('../assets/pic8.jpeg', import.meta.url).href, 
    rotate: 3,
    zIndex: 30
  },
  { 
    text: "System Architect", 
    x: "50%", y: "65%", delay: 0.9, 
    image: new URL('../assets/pic9.jpeg', import.meta.url).href, 
    rotate: -5,
    zIndex: 15
  },
];

export default function Moodboard() {
  return (
    <section className="relative min-h-[140vh] py-24 overflow-hidden flex flex-col items-center justify-start bg-black">
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');
          .font-cursive { font-family: 'Alex Brush', cursive; }
        `}
      </style>

      {/* Cinematic Background Effects */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black mix-blend-screen" />
        <div className="absolute top-[20%] left-[10%] w-[50vw] h-[50vw] bg-pink-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-[20%] right-[10%] w-[60vw] h-[60vw] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute inset-0 opacity-20 mix-blend-overlay" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}} />
        <div className="absolute inset-0 shadow-[inset_0_0_150px_rgba(0,0,0,1)] z-10" />
      </div>

      {/* Floating Particles */}
      <div className="absolute inset-0 pointer-events-none z-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-pink-300"
            style={{
              width: Math.random() * 3 + 1 + 'px',
              height: Math.random() * 3 + 1 + 'px',
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
              boxShadow: '0 0 10px rgba(236,72,153,0.8)'
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [0, 0.8, 0],
              scale: [0.8, 1.5, 0.8]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 5
            }}
          />
        ))}
      </div>

      {/* Title Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="relative z-20 text-center mt-12 mb-16"
      >
        <h2 className="text-4xl md:text-7xl font-serif text-white tracking-[0.2em] uppercase drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]">
          Moodboard
        </h2>
        <div className="flex items-center justify-center gap-4 -mt-2 md:-mt-6">
          <Heart className="w-5 h-5 text-pink-400 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] fill-pink-400/20" />
          <span className="text-5xl md:text-7xl text-pink-400 font-cursive tracking-wider drop-shadow-[0_0_20px_rgba(236,72,153,0.8)]">
            of my growth
          </span>
          <Heart className="w-5 h-5 text-pink-400 animate-pulse drop-shadow-[0_0_15px_rgba(236,72,153,0.8)] fill-pink-400/20" />
        </div>
      </motion.div>

      {/* Collage Area */}
      <div className="relative w-full max-w-6xl h-[1000px] z-30 perspective-1000 px-4 md:px-0">
        {snips.map((snip, i) => (
          <motion.div
            key={i}
            className="absolute group cursor-pointer"
            style={{ left: snip.x, top: snip.y, zIndex: snip.zIndex }}
            initial={{ opacity: 0, filter: "blur(20px)", scale: 0.8, rotate: snip.rotate - 10 }}
            whileInView={{ 
              opacity: 1, 
              filter: "blur(0px)", 
              scale: 1,
              rotate: snip.rotate
            }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{
              opacity: { duration: 1.2, delay: snip.delay },
              filter: { duration: 1.2, delay: snip.delay },
              scale: { duration: 1.2, delay: snip.delay, type: "spring", bounce: 0.3 },
              rotate: { duration: 1.2, delay: snip.delay, type: "spring" }
            }}
            whileHover={{ 
              scale: 1.08, 
              zIndex: 100, 
              rotateX: 10,
              rotateY: -10,
              rotate: 0,
              transition: { duration: 0.4, ease: "easeOut" }
            }}
          >
            {/* Floating Animation Wrapper */}
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [snip.rotate, snip.rotate + 1, snip.rotate - 1, snip.rotate]
              }}
              transition={{
                duration: 6 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: snip.delay
              }}
            >
              <motion.div 
                className="relative w-48 h-64 md:w-72 md:h-96 rounded-2xl overflow-hidden glass-panel p-2 shadow-[0_15px_35px_rgba(0,0,0,0.5)] border border-white/10"
                animate={{
                  boxShadow: [
                    '0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(236,72,153,0.1)',
                    '0 15px 35px rgba(0,0,0,0.5), 0 0 35px rgba(168,85,247,0.3)',
                    '0 15px 35px rgba(0,0,0,0.5), 0 0 20px rgba(236,72,153,0.1)'
                  ]
                }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: i }}
              >
                <div className="w-full h-full rounded-xl overflow-hidden relative group-hover:shadow-[0_0_30px_rgba(236,72,153,0.5)] transition-shadow duration-500">
                  <img 
                    src={snip.image} 
                    alt={snip.text} 
                    className="w-full h-full object-cover group-hover:scale-115 transition-transform duration-1000 ease-out opacity-90 group-hover:opacity-100" 
                  />
                  {/* Subtle Image Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                </div>
                
                {/* Glowing Caption Pill */}
                <div className="absolute inset-x-0 bottom-6 flex justify-center pointer-events-none z-20">
                  <div className="px-5 py-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/20 transform group-hover:-translate-y-2 group-hover:bg-white/10 transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.5)] flex items-center justify-center">
                    <span className="font-serif text-xs md:text-sm tracking-widest text-white/95 text-center drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] whitespace-nowrap uppercase">
                      {snip.text}
                    </span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}