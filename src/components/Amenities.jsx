import { motion } from "framer-motion";
import { FaSwimmingPool, FaWifi, FaDumbbell, FaConciergeBell, FaSpa, FaCocktail } from "react-icons/fa";

export default function Amenities() {
  const amenities = [
    { title: "Swimming Pool", icon: <FaSwimmingPool className="w-10 h-10 text-[#BFA76F]" /> },
    { title: "Free Wi-Fi", icon: <FaWifi className="w-10 h-10 text-[#BFA76F]" /> },
    { title: "Fitness Center", icon: <FaDumbbell className="w-10 h-10 text-[#BFA76F]" /> },
    { title: "24/7 Concierge", icon: <FaConciergeBell className="w-10 h-10 text-[#BFA76F]" /> },
    { title: "Spa & Wellness", icon: <FaSpa className="w-10 h-10 text-[#BFA76F]" /> },
    { title: "Bar & Lounge", icon: <FaCocktail className="w-10 h-10 text-[#BFA76F]" /> },
  ];

  return (
    <section id="amenities" className="py-20 bg-[var(--lux-cream)] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-lux font-bold text-[#000000]">
          Our <span className="text-[#BFA76F]">Amenities</span>
        </h2>
        <div className="w-24 h-1 bg-[#BFA76F] mx-auto rounded-full mt-4"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {amenities.map((a, i)=>(
          <motion.div 
            key={i} 
            initial={{ opacity:0, y:20 }} 
            whileInView={{ opacity:1, y:0 }} 
            viewport={{ once:true }} 
            transition={{ delay: i*0.08 }} 
            className="p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-luxury text-center transition hover:shadow-[0_10px_25px_rgba(191,167,111,0.35)]"
          >
            <div className="flex items-center justify-center mb-4">{a.icon}</div>
            <h3 className="text-xl font-lux font-semibold mb-2 text-[#111111]">{a.title}</h3>
            <p className="text-[#111111] dark:text-gray-300">Premium service included with every stay.</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
