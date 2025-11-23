import { useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useTransform } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Track scroll position
  const scrollY = useMotionValue(0);

  useEffect(() => {
    const handleScroll = () => {
      scrollY.set(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrollY]);

  // Navbar background fade
  const navBg = useTransform(
    scrollY,
    [0, 150],
    ["rgba(17,17,17,0)", "rgba(17,17,17,0.9)"]
  );

  // Heading scale
  const headingScale = useTransform(scrollY, [0, 150], [1, 0.95]);

  // Heading color fade
  const headingColor = useTransform(scrollY, [0, 150], ["#FFFFFF", "#D5D5D7"]);

  // Shimmer opacity based on scroll
  const shimmerOpacity = useTransform(scrollY, [0, 150], [0.3, 1]); // 0.3 at top, 1 at 150px

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
      className="fixed top-0 w-full z-50 h-28 backdrop-blur-lg shadow-[0_4px_30px_rgba(0,0,0,0.6)] transition-all duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">

        {/* LOGO + BRAND */}
        <div className="flex items-center gap-4">
          <motion.img
            src="/logo.png"
            alt="Aberdeen Logo"
            className="object-contain w-16 h-16 transition-all"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          />

          {/* Shimmering heading */}
          <motion.h1
            style={{ scale: headingScale }}
            className="font-lux font-semibold text-2xl drop-shadow-lg relative overflow-hidden"
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
        <div className="hidden md:flex items-center gap-10">
          {links.map((link) => (
            <motion.a
              key={link.to}
              href={link.to}
              className="group relative text-white font-lux tracking-wide transition-all"
              whileHover={{ scale: 1.04, color: "#D5D5D7" }}
            >
              {link.label}
              <span className="
                absolute left-1/2 -translate-x-1/2 bottom-[-6px]
                h-[2px] w-0 bg-[#8E8E90]
                transition-all duration-300 group-hover:w-full
              "></span>
            </motion.a>
          ))}

          {/* RESERVE BUTTON */}
          <a
            href="#booking"
            className="ml-4 bg-[#D5D5D7] hover:bg-[#FFFFFF] text-[#111] px-6 py-2 rounded-full font-lux font-semibold shadow-[0_8px_20px_rgba(142,142,144,0.35)] transition"
          >
            Reserve Now
          </a>
        </div>

        {/* MOBILE MENU ICON */}
        <button
          className="md:hidden text-white text-4xl"
          onClick={() => setOpen(!open)}
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="md:hidden bg-[#111111]/90 backdrop-blur-lg text-white flex flex-col px-6 py-6 space-y-6 border-t border-[#8E8E90]/20"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
          >
            {links.map((link) => (
              <a
                key={link.to}
                href={link.to}
                className="text-xl tracking-wide font-lux font-light hover:text-[#D5D5D7] transition"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#booking"
              className="bg-[#D5D5D7] text-[#111] px-6 py-3 rounded-full text-center font-lux font-semibold shadow-lg"
            >
              Reserve Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tailwind shimmer animation */}
      <style jsx>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          background-size: 200% 100%;
          animation: shimmer 2.5s infinite linear;
        }
      `}</style>
    </motion.nav>
  );
}
