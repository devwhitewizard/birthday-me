import { motion } from 'framer-motion';

const events = [
  { title: "git init", desc: "Initializing my coding journey. The first commit that started a whole new world of logic and creation.", glow: "rgba(59,130,246,0.5)", image: "/src/assets/pic1.jpeg" },
  { title: "First Stack Update", desc: "Learning new frameworks, solving complex bugs, and building the foundations of my career.", glow: "rgba(168,85,247,0.5)", image: "/src/assets/pic2.jpeg" },
  { title: "Deploying Success", desc: "My first production release. Seeing my code live for the first time was an unforgettable milestone.", glow: "rgba(234,179,8,0.5)", image: "/src/assets/pic3.jpeg" },
  { title: "v1.0.0 Stable", desc: "One year of growth, 1000s of commits, and a lifetime of learning ahead. Ready for Year 2!", glow: "rgba(34,197,94,0.5)", image: "/src/assets/pic4.jpeg" },
];

export default function Timeline() {
  return (
    <section className="relative min-h-screen py-32 px-4 max-w-5xl mx-auto">
      {/* Center Line */}
      <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-primary/50 to-transparent -translate-x-1/2 hidden md:block" />

      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-6xl font-serif text-center mb-24 text-glow"
      >
        My Coding Journey
      </motion.h2>

      <div className="space-y-24">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={index} className={`relative flex flex-col md:flex-row items-center ${isEven ? 'md:justify-start' : 'md:justify-end'}`}>
              
              {/* Timeline Dot */}
              <motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true, margin: "-20%" }}
                className="absolute left-[20px] md:left-1/2 w-4 h-4 rounded-full bg-primary -translate-x-1/2 shadow-[0_0_15px_rgba(236,72,153,1)] z-10 hidden md:block"
              />

              <motion.div
                initial={{ opacity: 0, x: isEven ? -50 : 50, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true, margin: "-20%" }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className={`glass-panel p-8 rounded-2xl md:w-[45%] w-full relative z-10 ml-8 md:ml-0 overflow-hidden group`}
                style={{ boxShadow: `0 0 30px ${event.glow}` }}
              >
                <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/60" />
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-serif mb-4 text-white">{event.title}</h3>
                  <p className="text-white/70 leading-relaxed font-light">{event.desc}</p>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}