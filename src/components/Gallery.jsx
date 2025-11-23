import { motion } from "framer-motion";

export default function Gallery() {
  const images = ["/gallery1.jpg", "/gallery2.jpg", "/gallery3.jpg"];

  return (
    <section
      id="gallery"
      className="py-24 bg-[var(--lux-cream)] dark:bg-gray-900 transition-colors"
    >
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="text-4xl md:text-5xl font-lux font-bold text-center text-[#000000] dark:text-gray-100 mb-4"
      >
        Gallery
      </motion.h2>

      {/* Gold Underline */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: "120px" }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="h-1 bg-[#BFA76F] mx-auto rounded-full mb-16"
      ></motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto px-6">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="
              group rounded-2xl overflow-hidden 
              shadow-luxury 
              hover:shadow-2xl hover:shadow-[#BFA76F]/40 
              transition-all duration-500 
              bg-white/80 dark:bg-gray-900/80 
              backdrop-blur-sm
            "
          >
            <div className="overflow-hidden">
              <img
                src={img}
                alt={`Gallery ${i + 1}`}
                className="
                  w-full h-72 object-cover 
                  group-hover:scale-110 
                  transition-transform duration-700
                "
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
