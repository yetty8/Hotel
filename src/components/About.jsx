import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="py-24 bg-[var(--lux-cream)] dark:bg-gray-900 transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Image */}
        <motion.div
          className="md:w-1/2 rounded-2xl overflow-hidden shadow-luxury"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/hotel2.jpg"
            alt="Aberdeen Hotel Addis"
            className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
          />
        </motion.div>

        {/* Text */}
        <motion.div
          className="md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Title + Gold Underline */}
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-lux font-bold leading-tight text-[#000000]">
              Welcome to{" "}
              <span className="text-[#BFA76F]">Aberdeen Hotel Addis</span>
            </h2>

            <div className="mt-3 w-24 h-1 bg-[#BFA76F] rounded-full"></div>
          </div>

          <p className="text-lg text-[#111111] dark:text-gray-300 mb-6 leading-relaxed">
            Located in the heart of Addis Ababa, Aberdeen Hotel offers an
            exceptional stay blending modern luxury with traditional Ethiopian
            charm. Our beautifully designed rooms, exquisite dining, and
            top-notch amenities ensure an unforgettable experience.
          </p>

          <p className="text-lg text-[#111111] dark:text-gray-300 leading-relaxed">
            Whether you're visiting for business or leisure, our dedicated staff
            is committed to providing world-class hospitality. From relaxing in
            our spa to enjoying fine cuisine, every moment at Aberdeen Hotel
            Addis is crafted with elegance and comfort.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
