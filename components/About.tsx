"use client";

import { motion } from "framer-motion";
import { Download, Camera } from "lucide-react";
import Image from "next/image";

const About = () => {
  return (
    <section className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="fade-up"
          >
            <Image
              src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?q=80&w=2070&auto=format&fit=crop"
              alt="Photographer"
              width={2070}
              height={500}
              className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              style={{ width: "100%", height: "500px" }}
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="fade-up"
          >
            <div className="mb-6">
              <span className="text-amber-500 font-[family-name:var(--font-aboreto)] text-sm font-medium tracking-wider uppercase">
                About the Photographer
              </span>
            </div>

            <h2 className="text-3xl md:text-4xl font-[family-name:var(--font-jost)] font-bold mb-6 text-white">
              Chellah Tukuta
            </h2>

            <div className="space-y-4 text-gray-300 font-[family-name:var(--font-jost)] mb-8">
              <p>
                With over a decade of experience in professional photography, I
                specialize in capturing authentic moments that tell compelling
                stories. My work spans across portraits, weddings, events, and
                commercial photography.
              </p>

              <p>
                Through my international background and diverse cultural
                experiences, I bring a unique perspective to every shoot. My
                approach combines technical excellence with creative vision to
                deliver images that resonate with emotion and artistry.
              </p>

              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center font-[family-name:var(--font-jost)] p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-amber-500 mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-400">Happy Clients</div>
                </div>
                <div className="text-center p-4 bg-gray-700 rounded-lg">
                  <div className="text-2xl font-bold text-amber-500 mb-1">
                    10+
                  </div>
                  <div className="text-sm text-gray-400">Years Experience</div>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-amber-500 text-black px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors"
              >
                <Download size={18} />
                Download CV
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border-2 border-amber-500 text-amber-500 px-6 py-3 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-amber-500 hover:text-black transition-colors"
              >
                <Camera size={18} />
                Hire Me
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
