import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight, FaTimes } from "react-icons/fa";

export default function Rooms() {
  const rooms = [
    {
      title: "Premier One-Bedroom Suite",
      description:
        "Natural light and spacious living combine with skyline vistas for maximum comfort and privacy. Relax in your own residential-style quarters.",
      images: ["/room1.png","/room2.png","/room3.png","/room4.png","/room5.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Executive Suite",
      description:
        "Experience luxury with refined interiors, workspace, and sweeping city views. Perfect for business or leisure stays.",
      images: ["/room3.png","/room4.png","/room6.png","/room7.png","/room8.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Family Room",
      description:
        "Elegant design meets modern comfort. Enjoy premium amenities and a relaxing atmosphere.",
      images: ["/room5.png","/room6.png","/room4.png","/room3.png","/room2.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Luxury Room",
      description:
        "A spacious and comfortable room with a private balcony and a view of the city.",
      images: ["/room2.png","/room6.png","/room6.png","/room7.png","/room8.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Standard Room",
      description:
        "A comfortable room with a private balcony and a view of the city.",
      images: ["/room4.png","/room6.png","/room6.png","/room7.png","/room8.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Single Room",
      description:
        "Luxury design meets modern comfort. Enjoy premium amenities and a relaxing atmosphere.",
      images: ["/room6.png","/room2.png","/room3.png","/room4.png","/room5.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Twin Room",
      description:
        "Executive design meets modern comfort. Enjoy premium amenities and a relaxing atmosphere.",
      images: ["/room7.png","/room2.png","/room3.png","/room4.png","/room5.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
    {
      title: "Presidential Suite",
      description:
        "Best design meets modern comfort. Enjoy premium amenities and a relaxing atmosphere.",
      images: ["/room8.png","/room6.png","/room7.png","/room8.png","/room9.png"],
      ratesLink: "#",
      detailsLink: "#"
    },
  ];

  const sliderRef = useRef(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImages, setCurrentImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const slideLeft = () => sliderRef.current.scrollBy({ left: -400, behavior: "smooth" });
  const slideRight = () => sliderRef.current.scrollBy({ left: 400, behavior: "smooth" });

  const openModal = (images) => {
    setCurrentImages(images);
    setCurrentIndex(0);
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);
  const prevImage = () =>
    setCurrentIndex(i => (i === 0 ? currentImages.length - 1 : i - 1));
  const nextImage = () =>
    setCurrentIndex(i => (i === currentImages.length - 1 ? 0 : i + 1));

  return (
    <section id="rooms" className="py-24 bg-[#E8E1D5] dark:bg-black relative">
      <div className="max-w-6xl mx-auto px-6 mb-12 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#000000] dark:text-[#E8E1D5]">
          Our <span className="text-[#BFA76F]">Rooms</span>
        </h2>
        <div className="w-24 h-1 bg-[#BFA76F] mx-auto rounded-full mb-10"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Arrows */}
        <button
          onClick={slideLeft}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#BFA76F] text-black p-4 rounded-full shadow-lg hover:bg-[#E8E1D5] z-50"
        >
          <FaChevronLeft size={20} />
        </button>
        <button
          onClick={slideRight}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#BFA76F] text-black p-4 rounded-full shadow-lg hover:bg-[#E8E1D5] z-50"
        >
          <FaChevronRight size={20} />
        </button>

        {/* Slider */}
        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto scroll-smooth py-4 px-2 cursor-grab"
        >
          {rooms.map((room, idx) => {
            const x = useMotionValue(0);
            const y = useMotionValue(0);
            const rotateX = useTransform(y, val => -val / 20);
            const rotateY = useTransform(x, val => val / 20);

            return (
              <motion.div
                key={idx}
                className="min-w-[380px] max-w-[380px] relative cursor-pointer perspective-1000"
                style={{ rotateX, rotateY }}
                onMouseMove={e => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  x.set(e.clientX - rect.left - rect.width / 2);
                  y.set(e.clientY - rect.top - rect.height / 2);
                }}
                onMouseLeave={() => {
                  x.set(0);
                  y.set(0);
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 200, damping: 20 }}
                  className="rounded-3xl overflow-hidden p-[1px] bg-white/20 dark:bg-white/5 backdrop-blur-xl border border-white/20 shadow-[0_18px_40px_rgba(0,0,0,0.25)] flex flex-col h-[560px]"
                >
                  <img
                    src={room.images[0]}
                    alt={room.title}
                    className="w-full h-72 object-cover rounded-t-2xl flex-shrink-0"
                  />
                  <div className="p-5 bg-white/30 dark:bg-black/20 backdrop-blur-md rounded-b-2xl flex-1 flex flex-col justify-between">
                    <div>
                      <h3 className="text-xl font-semibold mb-2 text-black dark:text-white border-b-2 border-[#BFA76F] pb-1">
                        {room.title}
                      </h3>
                      <p className="text-sm text-black/80 dark:text-white/80 line-clamp-4 mb-4">
                        {room.description}
                      </p>
                    </div>
                    <div className="flex justify-center gap-3 mt-2">
                      <button
                        onClick={() => openModal(room.images)}
                        className="px-4 py-2 rounded-full border border-[#BFA76F] hover:bg-[#BFA76F] hover:text-black text-black font-semibold"
                      >
                        Details
                      </button>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Modal for Details Images */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-sm">
          <div className="relative max-w-5xl w-full">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImages[currentIndex]}
                className="w-full h-[650px] md:h-[750px] object-cover rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              />
            </AnimatePresence>

            {/* Controls */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 bg-black p-2 rounded-full text-white text-3xl hover:text-[#BFA76F] transition-colors"
            >
              <FaTimes />
            </button>
            <button
              onClick={prevImage}
              className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl hover:text-[#BFA76F]"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={nextImage}
              className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl hover:text-[#BFA76F]"
            >
              <FaChevronRight />
            </button>

            {/* Thumbnails */}
            <div className="flex justify-center gap-3 mt-5 flex-wrap">
              {currentImages.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt=""
                  onClick={() => setCurrentIndex(i)}
                  className={`w-20 h-20 md:w-24 md:h-24 object-cover rounded-lg cursor-pointer ${
                    i === currentIndex ? "ring-4 ring-[#BFA76F]" : "opacity-70 hover:opacity-100"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
