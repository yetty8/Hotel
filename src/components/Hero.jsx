import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative h-screen w-full overflow-hidden">

      {/* BACKGROUND VIDEO */}
      <div className="absolute inset-0">
        <video
          src="/video.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          poster="/fallback.jpg"
          className="w-full h-full object-cover object-center brightness-110 contrast-120"
          style={{ filter: "contrast(1.2) brightness(1.1) saturate(1.1)" }}
        />

        {/* very light overlay for readability */}
        <div className="absolute inset-0 bg-black/5" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="tracking-[0.35em] text-[18px] uppercase text-[#FFFFFF]"
        >
          Welcome To
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-6xl md:text-7xl lg:text-8xl font-lux font-bold text-[#FFFFFF] drop-shadow-xl tracking-wide"
        >
          Aberdeen Hotel Addis
        </motion.h1>

        {/* Gold Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 1.2, delay: 0.3 }}
          className="mt-4 w-36 h-[3px] bg-[#BFA76F]"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.6 }}
          className="max-w-2xl text-[#FFFFFF] mt-6 text-lg md:text-xl leading-relaxed"
        >
          Experience timeless elegance, world-class comfort, 
          and Ethiopian hospitality in its most refined form.
        </motion.p>

        {/* Button */}
        <motion.a
          href="#rooms"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.9 }}
          className="mt-10 px-12 py-5 rounded-full font-lux font-semibold text-lg md:text-xl text-[#000000] shadow-xl"
          style={{
            background: "linear-gradient(180deg, #BFA76F, #E8E1D5)",
          }}
        >
          Explore Rooms
        </motion.a>

      </div>
    </section>
  );
}
