import { motion } from "framer-motion";

export default function VideoSection() {
  return (
    <section id="video" className="py-20">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-6" initial={{opacity:0,y:-10}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}>
          Discover Aberdeen Hotel Addis
        </motion.h2>

        <motion.div className="relative rounded-3xl overflow-hidden shadow-2xl" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} transition={{duration:0.7}}>
          <video src="/video.mp4" autoPlay loop muted playsInline className="w-full h-[420px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
        </motion.div>
      </div>
    </section>
  );
}
