"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import IntroOverlay from "@/components/IntroOverlay";
import Navbar from "@/components/Navbar";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize ScrollTrigger for all sections
    const sections = document.querySelectorAll("section");

    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: "top 80%",
        onEnter: () => section.classList.add("revealed"),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div ref={mainRef} className="relative overflow-x-hidden">
      <IntroOverlay />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
      </main>
    </div>
  );
}
