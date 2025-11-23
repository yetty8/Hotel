import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { useRef, useState } from "react";

export default function Booking() {
  const checkInRef = useRef(null);
  const checkOutRef = useRef(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });

  const [showReceipt, setShowReceipt] = useState(false);
  const [bookingTime, setBookingTime] = useState("");

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const allFilled = Object.values(formData).every(val => val.trim() !== "");
    if (!allFilled) {
      alert("Please fill in all fields.");
      return;
    }
    setBookingTime(new Date().toLocaleString());
    setShowReceipt(true);
  };

  const closeReceipt = () => setShowReceipt(false);

  return (
    <section id="booking" className="py-20 bg-[var(--lux-cream)] dark:bg-gray-900 transition-colors">
      <motion.div 
        className="max-w-6xl mx-auto px-6" 
        initial={{ opacity: 0, y: 30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-4xl md:text-5xl font-lux font-bold text-center text-[#000000] dark:text-[#E8E1D5] mb-4">
          Book Your Stay
        </h2>
        <p className="text-center text-gray-700 dark:text-gray-300 mb-12">
          Fill in your details below and we’ll reserve your room for you.
        </p>

        <form 
          onSubmit={handleSubmit} 
          className="max-w-2xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-3xl shadow-[0_8px_30px_rgba(191,167,111,0.25)] flex flex-col gap-6"
        >
          <input 
            type="text" 
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#BFA76F] focus:outline-none transition text-black dark:text-white" 
          />
          <input 
            type="email" 
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            className="p-4 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#BFA76F] focus:outline-none transition text-black dark:text-white" 
          />

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="relative flex-1">
              <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Check-in</label>
              <FaCalendarAlt 
                className="absolute top-12 right-4 text-gray-400 cursor-pointer" 
                onClick={() => checkInRef.current?.showPicker?.()} 
              />
              <input 
                ref={checkInRef} 
                type="date" 
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className="w-full p-4 pr-12 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#BFA76F] focus:outline-none transition text-black dark:text-white" 
              />
            </div>
            <div className="relative flex-1">
              <label className="block mb-1 text-sm text-gray-700 dark:text-gray-300">Check-out</label>
              <FaCalendarAlt 
                className="absolute top-12 right-4 text-gray-400 cursor-pointer" 
                onClick={() => checkOutRef.current?.showPicker?.()} 
              />
              <input 
                ref={checkOutRef} 
                type="date" 
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className="w-full p-4 pr-12 rounded-xl border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-[#BFA76F] focus:outline-none transition text-black dark:text-white" 
              />
            </div>
          </div>

          <button 
            type="submit" 
            className="rounded-full py-3 px-6 bg-[#BFA76F] text-black font-lux font-semibold shadow-lg hover:bg-[#D5C178] transition"
          >
            Reserve Now
          </button>
        </form>
      </motion.div>

      {/* Receipt Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6">
          <div className="bg-white dark:bg-gray-900 rounded-xl p-6 max-w-sm w-full shadow-lg relative">
            {/* Header */}
            <div className="border-b border-[#BFA76F] mb-4 pb-2 text-center">
              <h3 className="text-2xl font-bold text-[#BFA76F]">Aberdeen Hotel Addis</h3>
              <p className="text-sm text-black/70 dark:text-white/70">Booking Confirmation</p>
            </div>

            {/* Booking Details */}
            <div className="text-left space-y-2 mb-4">
              <p className="text-black dark:text-white"><strong>Name:</strong> {formData.name}</p>
              <p className="text-black dark:text-white"><strong>Email:</strong> {formData.email}</p>
              <p className="text-black dark:text-white"><strong>Check-in:</strong> {formData.checkIn}</p>
              <p className="text-black dark:text-white"><strong>Check-out:</strong> {formData.checkOut}</p>
              <p className="text-black dark:text-white"><strong>Booking Time:</strong> {bookingTime}</p>
            </div>

            <p className="text-black/70 dark:text-white/70 text-center mb-4">
              Thank you for booking with us! We look forward to hosting you.
            </p>

            <button
              onClick={closeReceipt}
              className="w-full py-3 rounded-full bg-[#BFA76F] text-black font-semibold hover:bg-[#D5C178]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
