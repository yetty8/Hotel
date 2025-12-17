import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => scrollY.set(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Toggle body class when menu is open
  useEffect(() => {
    if (open) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
    return () => document.body.classList.remove('menu-open');
  }, [open]);

  const navBg = useTransform(
    scrollY,
    [0, 150],
    ["rgba(17,17,17,0)", "rgba(17,17,17,0.95)"]
  );

  const headingScale = useTransform(scrollY, [0, 150], [1, 0.95]);
  const headingColor = useTransform(scrollY, [0, 150], ["#FFFFFF", "#D5D5D7"]);
  const shimmerOpacity = useTransform(scrollY, [0, 150], [0.3, 1]);

  const links = [
    { label: "Home", to: "#hero" },
    { label: "Rooms", to: "#rooms" },
    { label: "Food & Dining", to: "#food" },
    { label: "Amenities", to: "#amenities" },
    { label: "About", to: "#about" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor: navBg }}
      className="fixed top-0 w-full z-50 h-20 md:h-24 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center justify-between">
        {/* LOGO + BRAND */}
        <div className="flex items-center gap-3">
          <motion.img
            src="/logo.png"
            alt="Aberdeen Logo"
            className="object-contain w-12 h-12 md:w-16 md:h-16 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          <motion.h1
            style={{ scale: headingScale }}
            className="font-lux font-semibold text-xl md:text-2xl drop-shadow-lg relative overflow-hidden"
          >
            <motion.span
              style={{ opacity: shimmerOpacity, color: headingColor }}
              className="bg-gradient-to-r from-white via-[#D5D5D7] to-white bg-clip-text text-transparent animate-shimmer"
            >
              Aberdeen Hotel Addis
            </motion.span>
          </motion.h1>
        </div>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {links.map((link) => (
            <motion.a
              key={link.to}
              href={link.to}
              className="group relative text-white font-lux tracking-wide transition-all py-2 px-1"
              whileHover={{ scale: 1.04, color: "#D5D5D7" }}
            >
              {link.label}
              <span className="
                absolute left-1/2 -translate-x-1/2 bottom-0
                h-[2px] w-0 bg-[#8E8E90]
                transition-all duration-300 group-hover:w-full
              "></span>
            </motion.a>
          ))}

          <a
            href="#booking"
            className="ml-2 bg-[#D5D5D7] hover:bg-white text-[#111] px-6 py-2 rounded-full font-lux font-semibold shadow-[0_8px_20px_rgba(142,142,144,0.35)] transition whitespace-nowrap"
          >
            Reserve Now
          </a>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white text-3xl p-2 -mr-2 focus:outline-none"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#111111]/95 backdrop-blur-lg text-white flex flex-col px-6 py-4 space-y-4 border-t border-[#8E8E90]/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-xl py-3 px-2 font-lux hover:text-lux-gold transition-colors border-b border-gray-800"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#booking"
              className="bg-lux-gold hover:bg-lux-gold-600 text-white px-6 py-3 rounded-full text-center font-lux font-semibold shadow-lg mt-4 transition-colors"
              onClick={() => setOpen(false)}
            >
              Reserve Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}