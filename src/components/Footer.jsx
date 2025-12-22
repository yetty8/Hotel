import { motion } from "framer-motion";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const fadeIn = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({ opacity: 1, y: 0, transition: { delay: i * 0.15, duration: 0.7 } }),
  };

  return (
    <footer className="bg-[#111111] text-[#E8E1D5] py-20">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Logo & Description */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={0}
          className="p-4 rounded-xl hover:shadow-[0_8px_30px_rgba(191,167,111,0.35)] transition-shadow"
        >
          <div className="flex items-center gap-3 mb-4">
            <motion.img
              src="/logo.png"
              alt="Logo"
              className="w-10 h-10 object-contain rounded-md"
              whileHover={{ scale: 1.15, y: -2 }}
              transition={{ type: "spring", stiffness: 200 }}
            />
            <h3 className="text-2xl font-lux font-bold text-[#BFA76F]">Aberdeen Hotel Addis</h3>
          </div>
          <p className="text-[#E8E1D5]/80 leading-relaxed">
            Experience luxury and comfort in the heart of Addis Ababa. Our commitment is to provide world-class service and unforgettable experiences.
          </p>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={1}
          className="p-4 rounded-xl hover:shadow-[0_8px_30px_rgba(191,167,111,0.35)] transition-shadow"
        >
          <h3 className="text-xl font-lux font-semibold mb-4 text-[#BFA76F]">Quick Links</h3>
          <ul className="space-y-3">
            <li><a href="#rooms" className="hover:text-[#BFA76F]">Rooms</a></li>
            <li><a href="#amenities" className="hover:text-[#BFA76F]">Amenities</a></li>
            <li><a href="#food" className="hover:text-[#BFA76F]">Food</a></li>
            <li><a href="#gallery" className="hover:text-[#BFA76F]">Gallery</a></li>
            <li><a href="#about" className="hover:text-[#BFA76F]">About</a></li>
          </ul>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={2}
          className="p-4 rounded-xl hover:shadow-[0_8px_30px_rgba(191,167,111,0.35)] transition-shadow"
        >
          <h3 className="text-xl font-lux font-semibold mb-4 text-[#BFA76F]">Contact Us</h3>

          <p className="leading-relaxed mb-4">
            <strong className="text-[#BFA76F]">Phone:</strong><br />
            +251 11 123 4567
          </p>

          <p className="leading-relaxed mb-6">
            <strong className="text-[#BFA76F]">Email:</strong><br />
            <a href="mailto:info@aberdeenhoteladdis.com" className="hover:text-[#BFA76F]">
              info@aberdeenhoteladdis.com
            </a>
          </p>

          <div className="flex gap-4">
            <a href="#" className="p-2 rounded-full bg-[#111111] hover:bg-[#222222]"><FaFacebookF /></a>
            <a href="#" className="p-2 rounded-full bg-[#111111] hover:bg-[#222222]"><FaTwitter /></a>
            <a href="#" className="p-2 rounded-full bg-[#111111] hover:bg-[#222222]"><FaInstagram /></a>
            <a href="#" className="p-2 rounded-full bg-[#111111] hover:bg-[#222222]"><FaLinkedinIn /></a>
          </div>
        </motion.div>

        {/* Address */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          custom={3}
          className="p-4 rounded-xl hover:shadow-[0_8px_30px_rgba(191,167,111,0.35)] transition-shadow"
        >
          <h3 className="text-xl font-lux font-semibold mb-4 text-[#BFA76F]">Address</h3>
          <p className="leading-relaxed">
            2R85+4FX, Megenagna,<br />
            Amce Around Bole Egziabherab Church,<br />
            Addis Ababa 1000, Ethiopia
          </p>
        </motion.div>
      </div>

      <div className="text-center text-[#E8E1D5]/70 text-sm mt-16 border-t border-[#BFA76F]/30 pt-6">
        &copy; {new Date().getFullYear()} Aberdeen Hotel Addis. All rights reserved.
      </div>
    </footer>
  );
}
