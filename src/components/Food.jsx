import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaTimes } from "react-icons/fa";

export default function Food() {
  const foods = [
    { 
      title: "Chicken Tikka", 
      img: "/food1.jpg", 
      description: "Juicy chicken pieces marinated in aromatic spices, grilled to perfection. Our signature dish features tender chicken breast marinated overnight in a blend of yogurt and traditional spices, then cooked in our tandoor for that authentic smoky flavor.",
      notes: ["Chicken breast pieces", "Yogurt marinade", "Garam masala", "Grilled to perfection"] 
    },
    { 
      title: "Special Pizza", 
      img: "/food2.jpg", 
      description: "Handcrafted pizza with premium cheese, fresh vegetables, and savory toppings. Our 12-inch thin crust pizza is made with homemade dough, San Marzano tomato sauce, and a blend of mozzarella and parmesan cheeses.",
      notes: ["Mozzarella cheese", "Tomato sauce", "Bell peppers", "Olives", "Fresh herbs"] 
    },
    { 
      title: "Egg Sandwich", 
      img: "/food3.jpg", 
      description: "Soft bread layered with perfectly cooked eggs and a touch of spice. Our breakfast favorite features free-range eggs, melted cheddar, and our house-made aioli on freshly baked sourdough bread.",
      notes: ["Fresh eggs", "Whole wheat bread", "Butter", "Seasoning"] 
    },
    { 
      title: "Samosas Platter", 
      img: "/food4.jpg", 
      description: "Crispy golden samosas served with a flavorful chutney. Each order comes with four pieces of our signature samosas, filled with spiced potatoes, peas, and herbs, served with tamarind and mint chutneys.",
      notes: ["Potato & peas filling", "Flaky pastry", "Mint chutney", "Tamarind chutney"] 
    },
    { 
      title: "Special Drinks", 
      img: "/food5.jpg", 
      description: "Signature cocktails and mocktails for a refreshing experience. Try our house specials like the Mango Tango or the Spicy Margarita, made with fresh ingredients and premium spirits.",
      notes: ["Seasonal fruits", "Herbal infusions", "Sparkling water", "Cocktail syrup"] 
    },
    { 
      title: "Fresh Juice Bar", 
      img: "/food6.jpg", 
      description: "Juices prepared from seasonal fruits for a healthy delight. We press our juices fresh daily, with no added sugars or preservatives. Choose from orange, carrot, apple, or our special green detox blend.",
      notes: ["Orange juice", "Carrot juice", "Apple juice", "No added sugar"] 
    }
  ];

  const [open, setOpen] = useState(false);
  const [food, setFood] = useState(null);

  const openModal = (f) => {
    setFood(f);
    setOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setOpen(false);
    document.body.style.overflow = 'unset';
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    if (open) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [open]);

  // Scroll to section if URL has #food hash
  useEffect(() => {
    if (window.location.hash === "#food") {
      setTimeout(() => {
        document.getElementById("food")?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }, []);

  return (
    <section
      id="food"
      className="py-24 bg-lux-cream dark:bg-black transition-colors"
    >
      {/* Heading */}
      <div className="max-w-6xl mx-auto px-6 text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-lux-midnight dark:text-lux-cream">
          Food & <span className="text-lux-gold">Dining</span>
        </h2>
        <div className="w-24 h-1 bg-lux-gold mx-auto rounded-full mt-4"></div>
      </div>

      {/* Food Grid */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {foods.map((f, i) => (
          <motion.div
            key={i}
            className="food-card"
            onClick={() => openModal(f)}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <div className="card-image">
              <img
                src={f.img}
                alt={f.title}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="card-content">
              <h3 className="text-xl font-semibold text-lux-midnight dark:text-lux-cream text-center">
                {f.title}
              </h3>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {open && food && (
        <div 
          className="modal-overlay" 
          onClick={closeModal}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative">
              <img
                src={food.img}
                alt={food.title}
                className="modal-image"
              />
              <button
                onClick={closeModal}
                className="modal-close"
                aria-label="Close modal"
              >
                <FaTimes size={20} />
              </button>
            </div>
            
            <div className="modal-details">
              <h3>{food.title}</h3>
              <p>{food.description}</p>

              {food.notes?.length > 0 && (
                <div>
                  <h4 className="text-lg font-semibold mb-3 text-lux-midnight dark:text-lux-cream">
                    Ingredients:
                  </h4>
                  <div className="ingredients-list">
                    {food.notes.map((note, idx) => (
                      <div key={idx} className="ingredient-item">
                        <span></span>
                        <span>{note}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}