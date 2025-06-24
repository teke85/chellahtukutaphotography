"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";

if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [animationReady, setAnimationReady] = useState(false);

  useEffect(() => {
    // Delay animation start to prevent flash
    const timer = setTimeout(() => {
      setAnimationReady(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined" || !animationReady) return;

    const ctx = gsap.context(() => {
      // Set initial states to prevent flash
      gsap.set(".hero-bg", { scale: 1.2, opacity: 0 });
      gsap.set(".hero-title span", { y: 100, opacity: 0 });
      gsap.set(".hero-subtitle", { y: 50, opacity: 0 });
      gsap.set(".hero-description", { y: 30, opacity: 0 });
      gsap.set(".hero-cta", { y: 30, opacity: 0 });

      // Hero background animation
      gsap.to(".hero-bg", {
        scale: 1,
        opacity: 1,
        duration: 2,
        ease: "power2.out",
      });

      // Text reveal animation
      gsap.to(".hero-title span", {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      });

      gsap.to(".hero-subtitle", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.2,
        ease: "power2.out",
      });

      gsap.to(".hero-description", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.5,
        ease: "power2.out",
      });

      gsap.to(".hero-cta", {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 1.8,
        ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, [animationReady]);

  const titleWords = "Every image has a story.".split(" ");

  return (
    <section
      ref={heroRef}
      className="relative h-screen flex items-center justify-center overflow-hidden w-full"
    >
      {/* Background Image */}
      <div className="hero-bg absolute inset-0 z-0 w-full h-full">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722303/SnapInsta.to_425385148_1061142308332003_4387177139689535753_n_ox2pfz.jpg')`,
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: animationReady ? 1 : 0 }}
          transition={{ delay: 0.3 }}
          className="hero-subtitle mb-6"
        >
          <span className="text-amber-500 text-sm font-[family-name:var(--font-jost)] font-medium tracking-wider uppercase">
            Photography
          </span>
        </motion.div>

        <h1 className="hero-title font-[family-name:var(--font-cormorant)] text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          {titleWords.map((word, index) => (
            <span key={index} className="inline-block mr-4">
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
        animate={{ opacity: animationReady ? 1 : 0, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <motion.div
            animate={animationReady ? { y: [0, 12, 0] } : { y: 0 }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
