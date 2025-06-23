"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const ctx = gsap.context(() => {
      // Hero background animation
      gsap.fromTo(
        ".hero-bg",
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Text reveal animation
      gsap.fromTo(
        ".hero-title span",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.1,
          ease: "power2.out",
          delay: 0.5,
        }
      );

      gsap.fromTo(
        ".hero-subtitle",
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.2, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-description",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.5, ease: "power2.out" }
      );

      gsap.fromTo(
        ".hero-cta",
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, delay: 1.8, ease: "power2.out" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const titleWords = "Every image has a story.".split(" ");

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?q=80&w=2070&auto=format&fit=crop')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <span className="text-amber-500 text-sm font-[family-name:var(--font-cormorant)] font-medium tracking-wider uppercase">
            Photography
          </span>
        </motion.div>

        <h1 className="hero-title font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {titleWords.map((word, index) => (
            <span key={index} className="inline-block mr-4 text-reveal">
              <span>{word}</span>
            </span>
          ))}
        </h1>

        <p className="hero-description font-[family-name:var(--font-jost)] text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Capturing life&#39;s precious moments with artistic vision and
          technical excellence. Every frame tells a unique story that deserves
          to be preserved forever.
        </p>

        <div className="hero-cta flex flex-col font-[family-name:var(--font-cormorant)] sm:flex-row gap-4 justify-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-500 text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 transition-colors"
          >
            Let&#39;s Talk
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-colors"
          >
            View Portfolio
          </motion.button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
