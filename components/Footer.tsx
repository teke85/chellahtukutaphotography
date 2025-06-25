"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Heart,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initAnimations = () => {
      const footer = footerRef.current;
      if (!footer) {
        setTimeout(initAnimations, 100);
        return;
      }

      gsap.set(footer.querySelectorAll(".footer-item"), {
        opacity: 0,
        y: 30,
      });

      ScrollTrigger.create({
        trigger: footer,
        start: "top 90%",
        onEnter: () => {
          gsap.to(footer.querySelectorAll(".footer-item"), {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out",
          });
        },
      });
    };

    const timer = setTimeout(initAnimations, 200);

    return () => {
      clearTimeout(timer);
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <footer ref={footerRef} className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="footer-item lg:col-span-2">
            <Link href="/" className="flex items-center space-x-3 mb-6">
              <Camera className="h-10 w-10 text-[#D6B978]" />
              <div className="flex flex-col">
                <span className="font-[family-name:var(--font-cormorant)] text-2xl font-bold tracking-wider leading-none">
                  CHELLAH TUKUTA
                </span>
                <span className="text-[#D6B978] font-[family-name:var(--font-jost)] text-sm font-light tracking-[0.3em] leading-none">
                  PHOTOGRAPHY STUDIO
                </span>
              </div>
            </Link>
            <p className="font-[family-name:var(--font-jost)] text-gray-300 mb-6 max-w-md leading-relaxed">
              Capturing life&#39;s precious moments with artistic vision and
              technical excellence. With over 17 years of experience, we
              specialize in creating timeless memories that tell your unique
              story.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-[#D6B978] transition-colors duration-300"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D6B978] transition-colors duration-300"
                aria-label="Facebook"
              >
                <Facebook size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D6B978] transition-colors duration-300"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#D6B978] transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div className="footer-item">
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold mb-6 text-[#D6B978]">
              Services
            </h3>
            <ul className="space-y-3 font-[family-name:var(--font-jost)]">
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  Wedding Photography
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  Portrait Sessions
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  Cultural Photography
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  Fashion Shoots
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  Documentary Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer-item">
            <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold mb-6 text-[#D6B978]">
              Contact
            </h3>
            <div className="space-y-4 font-[family-name:var(--font-jost)]">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#D6B978] mt-1 flex-shrink-0" />
                <div className="text-gray-300">
                  <p>Chellah Tukuta Photography Studio</p>
                  <p>Lilay Lusaka</p>
                  <p>Zambia</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#D6B978] flex-shrink-0" />
                <a
                  href="tel:+1234567890"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  +260 77 4731992
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-[#D6B978] flex-shrink-0" />
                <a
                  href="mailto:hello@chellahtukuta.com"
                  className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
                >
                  hello@chellahtukuta.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="footer-item mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <nav className="flex flex-wrap justify-center md:justify-start gap-6 font-[family-name:var(--font-jost)]">
              <Link
                href="/"
                className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
              >
                About
              </Link>
              <Link
                href="/gallery"
                className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
              >
                Gallery
              </Link>
              <Link
                href="/services"
                className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-gray-300 hover:text-[#D6B978] transition-colors duration-300"
              >
                Privacy Policy
              </Link>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="footer-item mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="font-[family-name:var(--font-jost)] text-gray-400 flex items-center justify-center gap-2">
            © 2025 Chellah Tukuta Photography. Demo made with
            <Heart className="w-4 h-4 text-[#D6B978]" fill="currentColor" /> by
            tekmucreations.website All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
