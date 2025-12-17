import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle, FaExclamationTriangle } from 'react-icons/fa';

export default function Booking() {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: 1,
    roomType: 'standard',
    name: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: null,
    showModal: false
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!formData.checkIn) newErrors.checkIn = 'Check-in date is required';
    if (!formData.checkOut) {
      newErrors.checkOut = 'Check-out date is required';
    } else if (formData.checkIn && new Date(formData.checkOut) <= new Date(formData.checkIn)) {
      newErrors.checkOut = 'Check-out date must be after check-in date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value, 10) : value
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus({ submitting: true, success: false, error: null, showModal: true });

    try {
      // Simulate API call with delay
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Mock successful response
      setStatus({
        submitting: false,
        success: true,
        error: null,
        showModal: true
      });

      // Reset form after successful submission
      setFormData(prev => ({
        ...prev,
        checkIn: '',
        checkOut: '',
        guests: 1,
        roomType: 'standard',
        name: '',
        email: '',
        phone: '',
        specialRequests: ''
      }));

    } catch (error) {
      setStatus({
        submitting: false,
        success: false,
        error: 'Booking failed. Please try again later.',
        showModal: true
      });
    }
  };

  const closeModal = () => {
    setStatus(prev => ({ ...prev, showModal: false }));
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getRoomTypeName = (type) => {
    const types = {
      standard: 'Standard Room',
      deluxe: 'Deluxe Room',
      suite: 'Suite',
      executive: 'Executive Suite'
    };
    return types[type] || type;
  };

  return (
    <section id="booking" className="py-16 md:py-24 px-4 sm:px-6 lg:px-8 bg-lux-cream dark:bg-lux-deep">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          className="text-3xl md:text-4xl font-lux text-center mb-12 text-lux-deep dark:text-lux-cream"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Book Your Stay
        </motion.h2>
        
        <motion.form 
          onSubmit={handleSubmit} 
          className="space-y-6 bg-white dark:bg-gray-800 p-6 md:p-8 rounded-xl shadow-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="checkIn" className="block text-lux-deep dark:text-lux-cream font-medium">
                Check-in Date
              </label>
              <input
                type="date"
                id="checkIn"
                name="checkIn"
                value={formData.checkIn}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.checkIn ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-lux-gold focus:border-transparent`}
                required
                min={new Date().toISOString().split('T')[0]}
              />
              {errors.checkIn && <p className="text-red-500 text-sm mt-1">{errors.checkIn}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="checkOut" className="block text-lux-deep dark:text-lux-cream font-medium">
                Check-out Date
              </label>
              <input
                type="date"
                id="checkOut"
                name="checkOut"
                value={formData.checkOut}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.checkOut ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-lux-gold focus:border-transparent`}
                required
                min={formData.checkIn || new Date().toISOString().split('T')[0]}
                disabled={!formData.checkIn}
              />
              {errors.checkOut && <p className="text-red-500 text-sm mt-1">{errors.checkOut}</p>}
            </div>

            <div className="space-y-2">
              <label htmlFor="guests" className="block text-lux-deep dark:text-lux-cream font-medium">
                Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lux-gold focus:border-transparent"
                required
              >
                {[1, 2, 3, 4, 5, 6].map(num => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="roomType" className="block text-lux-deep dark:text-lux-cream font-medium">
                Room Type
              </label>
              <select
                id="roomType"
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lux-gold focus:border-transparent"
                required
              >
                <option value="standard">Standard Room</option>
                <option value="deluxe">Deluxe Room</option>
                <option value="suite">Suite</option>
                <option value="executive">Executive Suite</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-lux-deep dark:text-lux-cream font-medium">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-lg border ${
                  errors.name ? 'border-red-500' : 'border-gray-300'
                } focus:ring-2 focus:ring-lux-gold focus:border-transparent`}
                required
                placeholder="John Doe"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-lux-deep dark:text-lux-cream font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.email ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-lux-gold focus:border-transparent`}
                  required
                  inputMode="email"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>

              <div>
                <label htmlFor="phone" className="block text-lux-deep dark:text-lux-cream font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${
                    errors.phone ? 'border-red-500' : 'border-gray-300'
                  } focus:ring-2 focus:ring-lux-gold focus:border-transparent`}
                  required
                  inputMode="tel"
                  placeholder="+1 (555) 123-4567"
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="specialRequests" className="block text-lux-deep dark:text-lux-cream font-medium">
                Special Requests (Optional)
              </label>
              <textarea
                id="specialRequests"
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleChange}
                rows="3"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-lux-gold focus:border-transparent"
                placeholder="Any special requirements or requests?"
              ></textarea>
            </div>
          </div>

          <div className="pt-4">
            <motion.button
              type="submit"
              className="w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              disabled={status.submitting}
            >
              {status.submitting ? 'Processing...' : 'Book Now'}
            </motion.button>
          </div>
        </motion.form>
      </div>

      <AnimatePresence>
        {status.showModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <motion.div 
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full mx-4 shadow-xl"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <div className="text-center">
                {status.success ? (
                  <>
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 dark:bg-green-900/30 mb-4">
                      <FaCheckCircle className="h-10 w-10 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Booking Confirmed!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      Thank you for your booking. We've sent a confirmation to {formData.email}.
                    </p>
                    <div className="bg-gray-50 dark:bg-gray-700/50 p-4 rounded-lg text-left mb-6">
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        <span className="font-medium">Check-in:</span> {formatDate(formData.checkIn)}<br />
                        <span className="font-medium">Check-out:</span> {formatDate(formData.checkOut)}<br />
                        <span className="font-medium">Guests:</span> {formData.guests}<br />
                        <span className="font-medium">Room Type:</span> {getRoomTypeName(formData.roomType)}
                      </p>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 dark:bg-red-900/30 mb-4">
                      <FaExclamationTriangle className="h-10 w-10 text-red-600 dark:text-red-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                      Booking Failed
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">
                      {status.error || 'An error occurred. Please try again.'}
                    </p>
                  </>
                )}
                <button
                  onClick={closeModal}
                  className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                >
                  {status.success ? 'Done' : 'Try Again'}
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}