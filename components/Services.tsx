"use client";

import { motion } from "framer-motion";
import { Camera, Users, Zap, Film } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Camera,
      title: "Portrait Photography",
      description:
        "Professional portrait sessions capturing your personality and essence with artistic flair and technical precision.",
    },
    {
      icon: Users,
      title: "Wedding Photography",
      description:
        "Documenting your special day with candid moments and posed perfection, creating timeless memories to treasure.",
    },
    {
      icon: Zap,
      title: "Event Photography",
      description:
        "Dynamic event coverage from corporate functions to private celebrations, ensuring every important moment is captured.",
    },
    {
      icon: Film,
      title: "Commercial Photography",
      description:
        "High-quality commercial imagery for brands, products, and marketing materials that make your business stand out.",
    },
  ];

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 fade-up"
        >
          <span className="text-amber-500 text-sm font-medium tracking-wider uppercase">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-4 mb-6 text-white">
            What We Offer
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Professional photography services tailored to capture your most
            important moments with creativity, precision, and artistic vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="fade-up bg-gray-800 p-8 rounded-lg hover:bg-gray-700 transition-all duration-300 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center group-hover:bg-amber-400 transition-colors">
                    <service.icon className="w-6 h-6 text-black" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-amber-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12 fade-up"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-colors"
          >
            Book a Session
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
