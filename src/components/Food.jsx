import { useState } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Food() {
  const foods = [
    { 
      title: "Chicken Tikka", 
      img: "/food1.jpg", 
      description: "Juicy chicken pieces marinated in aromatic spices, grilled to perfection.",
      notes: ["Chicken breast pieces", "Yogurt marinade", "Garam masala", "Grilled to perfection"] 
    },
    { 
      title: "Special Pizza", 
      img: "/food2.jpg", 
      description: "Handcrafted pizza with premium cheese, fresh vegetables, and savory toppings.",
      notes: ["Mozzarella cheese", "Tomato sauce", "Bell peppers", "Olives", "Fresh herbs"] 
    },
    { 
      title: "Egg Sandwich", 
      img: "/food3.jpg", 
      description: "Soft bread layered with perfectly cooked eggs and a touch of spice.",
      notes: ["Fresh eggs", "Whole wheat bread", "Butter", "Seasoning"] 
    },
    { 
      title: "Samosas Platter", 
      img: "/food4.jpg", 
      description: "Crispy golden samosas served with a flavorful chutney.",
      notes: ["Potato & peas filling", "Flaky pastry", "Mint chutney", "Tamarind chutney"] 
    },
    { 
      title: "Special Drinks", 
      img: "/food5.jpg", 
      description: "Signature cocktails and mocktails for a refreshing experience.",
      notes: ["Seasonal fruits", "Herbal infusions", "Sparkling water", "Cocktail syrup"] 
    },
    { 
      title: "Fresh Juice Bar", 
      img: "/food6.jpg", 
      description: "Juices prepared from seasonal fruits for a healthy delight.",
      notes: ["Orange juice", "Carrot juice", "Apple juice", "No added sugar"] 
    }
  ];

  const [open, setOpen] = useState(false);
  const [food, setFood] = useState(null);

  const openModal = (f) => { setFood(f); setOpen(true); };
  const closeModal = () => setOpen(false);

  return (
    <section id="food" className="py-24 bg-lux-cream dark:bg-black transition-colors">
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-lux-midnight dark:text-lux-cream">
          Food & <span className="text-lux-gold">Dining</span>
        </h2>
        <div className="w-24 h-1 bg-lux-gold mx-auto rounded-full mt-4"></div>
      </div>

      {/* Food Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        {foods.map((f, i) => (
          <motion.div
            key={i}
            className="rounded-2xl overflow-hidden shadow-luxury bg-white dark:bg-gray-900 cursor-pointer hover:scale-105 transition-transform duration-300"
            onClick={() => openModal(f)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08 }}
          >
            <img src={f.img} alt={f.title} className="w-full h-60 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-xl font-semibold text-lux-midnight dark:text-lux-cream">{f.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {open && food && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-6 backdrop-blur-sm">
          <motion.div
            className="relative max-w-3xl w-full bg-white dark:bg-gray-900 rounded-2xl shadow-2xl overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <img src={food.img} alt={food.title} className="w-full h-96 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-lux-midnight dark:text-lux-cream">{food.title}</h3>
              <p className="mt-3 text-gray-700 dark:text-gray-300">{food.description}</p>

              {/* Ingredients / Notes */}
              {food.notes && food.notes.length > 0 && (
                <ul className="mt-4 list-disc list-inside text-gray-700 dark:text-gray-300">
                  {food.notes.map((note, idx) => (
                    <li key={idx}>{note}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Close button with black background and hover scale */}
            <motion.button 
              onClick={closeModal} 
              className="absolute top-4 right-4 bg-black text-white p-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FaTimes />
            </motion.button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
