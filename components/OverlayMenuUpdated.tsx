"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import {
  X,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Camera,
  MapPin,
} from "lucide-react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/about", label: "About" },
  { path: "/services", label: "Services" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const portfolioLinks = [
  { path: "/weddings", label: "Wedding Photography" },
  { path: "/portraits", label: "Portrait Sessions" },
  { path: "/events", label: "Event Photography" },
  { path: "/commercial", label: "Commercial Work" },
  { path: "/lifestyle", label: "Lifestyle & Fashion" },
];

type OverlayMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const PhotographyOverlayMenu = ({ isOpen, onClose }: OverlayMenuProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<gsap.core.Timeline | undefined>(undefined);

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";
    } else {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.width = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const tl = gsap.timeline({ paused: true });

    tl.set(containerRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
    })
      .set(".menu-link-item-holder", { y: 75, opacity: 0 })
      .to(containerRef.current, {
        duration: 1.35,
        clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
        ease: "power3.inOut",
      })
      .to(".menu-link-item-holder", {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: "power2.inOut",
        delay: 0.1,
        stagger: 0.05,
      });

    timelineRef.current = tl;

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    if (timelineRef.current) {
      if (isOpen) {
        timelineRef.current.play();
      } else {
        timelineRef.current.reverse();
      }
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className={`fixed inset-0 z-50 flex h-screen w-full bg-gradient-to-br from-gray-900 via-black to-gray-800 overflow-hidden`}
      style={{
        clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
      }}
    >
      {/* Close Button - Top Right */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-8 sm:right-8 flex items-center gap-2 sm:gap-3 text-white/90 hover:text-white text-xs sm:text-sm p-2 rounded-full transition-all duration-300 hover:bg-white/10 z-10"
      >
        <div className="flex items-center justify-center p-1.5 sm:p-2 border border-white/30 rounded-full w-8 h-8 sm:w-10 sm:h-10 hover:border-white/60 transition-all duration-300">
          <X size={16} className="sm:w-[18px] sm:h-[18px]" />
        </div>
        <span className="font-[family-name:var(--font-jost)] font-medium hidden sm:inline">
          CLOSE
        </span>
      </button>

      {/* Scrollable Content Container */}
      <div className="flex items-start justify-center h-full w-full overflow-y-auto">
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-16 py-16 sm:py-20 min-h-full flex items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-8 sm:gap-12 lg:gap-16 max-w-7xl mx-auto">
            {/* Column 1 - Main Navigation */}
            <div className="flex flex-col gap-4 sm:gap-6 md:col-span-2 lg:col-span-1">
              <span className="text-xs sm:text-sm opacity-0 menu-link-item-holder font-semibold font-[family-name:var(--font-jost)] text-white/70 tracking-wider">
                NAVIGATION
              </span>
              {menuLinks.map((link, index) => (
                <div className="menu-link-item w-max" key={index}>
                  <div className="menu-link-item-holder flex opacity-0 relative">
                    <Link
                      href={link.path}
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-4xl font-[family-name:var(--font-playfair)] text-white hover:text-[#D6B978] transition-colors duration-300 border-b-2 border-transparent hover:border-[#D6B978] pb-1 sm:pb-2 leading-tight"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 - Portfolio Categories */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="opacity-0 menu-link-item-holder font-[family-name:var(--font-playfair)] text-xl sm:text-2xl lg:text-3xl text-white font-semibold flex items-center gap-3">
                <Camera size={24} className="text-[#D6B978]" />
                Portfolio
              </h3>
              {portfolioLinks.map((link, index) => (
                <div className="opacity-0 menu-link-item-holder" key={index}>
                  <Link
                    href={link.path}
                    className="font-[family-name:var(--font-jost)] text-base sm:text-lg lg:text-xl text-white/90 hover:text-[#D6B978] leading-relaxed pl-2 border-l-2 border-transparent hover:border-[#D6B978] hover:pl-4 transition-all duration-300"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}

              {/* Featured Work */}
              <div className="opacity-0 menu-link-item-holder mt-4">
                <Link
                  href="/featured"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-[#D6B978] text-black font-[family-name:var(--font-jost)] font-semibold hover:bg-[#af9762] transition-all duration-300 text-sm"
                  onClick={onClose}
                >
                  <Camera size={16} />
                  Featured Work
                </Link>
              </div>
            </div>

            {/* Column 3 - Contact & Info */}
            <div className="flex flex-col opacity-0 menu-link-item-holder gap-4 sm:gap-6">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                Let&#39;s Connect
              </h4>

              {/* Contact Info */}
              <div className="flex flex-col gap-3 text-white/90">
                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    className="text-[#D6B978] sm:w-[18px] sm:h-[18px]"
                  />
                  <p className="font-[family-name:var(--font-jost)] text-sm sm:text-base lg:text-lg">
                    +260 977 4731992
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    className="text-[#D6B978] sm:w-[18px] sm:h-[18px]"
                  />
                  <p className="font-[family-name:var(--font-jost)] text-sm sm:text-base lg:text-lg break-all">
                    hello@chellahtukuta.com
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin
                    size={16}
                    className="text-[#D6B978] sm:w-[18px] sm:h-[18px]"
                  />
                  <p className="font-[family-name:var(--font-jost)] text-sm sm:text-base lg:text-lg">
                    Lusaka, Zambia
                  </p>
                </div>
              </div>

              {/* Booking CTA */}
              <div className="mt-4">
                <Link
                  href="/booking"
                  className="inline-block px-6 py-3 bg-gradient-to-r from-[#D6B978] to-[#d8b15c] text-black font-[family-name:var(--font-jost)] font-semibold hover:from-[#D6B978] hover:to-[#dfbc71] transition-all duration-300 text-sm"
                  onClick={onClose}
                >
                  Book a Session
                </Link>
              </div>

              {/* Social Links */}
              <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-4">
                <Link
                  href="https://www.instagram.com/chellahtukuta"
                  className="p-2 sm:p-3 border border-white/30 rounded-full hover:border-[#D6B978] hover:bg-amber-400/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={18}
                    className="text-white hover:text-[#D6B978] sm:w-5 sm:h-5"
                  />
                </Link>
                <Link
                  href="https://web.facebook.com/chellahtukuta"
                  className="p-2 sm:p-3 border border-white/30 rounded-full hover:border-[#D6B978] hover:bg-amber-400/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={18}
                    className="text-white hover:text-[#D6B978] sm:w-5 sm:h-5"
                  />
                </Link>
              </div>

              {/* Photographer Tag */}
              <div className="mt-6 pt-4 border-t border-white/20">
                <p className="font-[family-name:var(--font-playfair)] text-lg text-[#D6B978] font-semibold">
                  Chellah Tukuta
                </p>
                <p className="font-[family-name:var(--font-jost)] text-sm text-white/70 mt-1">
                  Professional Photographer
                </p>
                <p className="font-[family-name:var(--font-jost)] text-xs text-white/60 mt-2 italic">
                  &quot;Capturing life&#39;s beautiful moments&quot;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotographyOverlayMenu;
