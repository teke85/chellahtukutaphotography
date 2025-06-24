"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { X, Phone, Mail, Instagram, Facebook, Twitter } from "lucide-react";

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/accomodations", label: "Accommodations" },
  { path: "/conferences", label: "Conferences" },
  { path: "/gallery", label: "Gallery" },
  { path: "/contact", label: "Contact" },
];

const informationLinks = [
  { path: "/rates", label: "Rates & Offers" },
  { path: "/services", label: "Resort Services" },
  { path: "/booking", label: "Book Your Stay" },
  { path: "/gallery", label: "Photo Gallery" },
];

type OverlayMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

const OverlayMenu2 = ({ isOpen, onClose }: OverlayMenuProps) => {
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
      className={`fixed inset-0 z-50 flex h-screen w-full bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900 overflow-hidden`}
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
                      className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-[family-name:var(--font-playfair)] text-white hover:text-[#B5860C] transition-colors duration-300 border-b-2 border-transparent hover:border-[#B5860C] pb-1 sm:pb-2 leading-tight"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 - Information Links */}
            <div className="flex flex-col gap-4 sm:gap-6">
              <h3 className="opacity-0 menu-link-item-holder font-[family-name:var(--font-playfair)] text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                Information
              </h3>
              {informationLinks.map((link, index) => (
                <div className="opacity-0 menu-link-item-holder" key={index}>
                  <Link
                    href={link.path}
                    className="font-[family-name:var(--font-jost)] text-base sm:text-lg lg:text-xl text-white/90 hover:text-[#B5860C] transition-colors duration-300 leading-relaxed"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
            </div>

            {/* Column 3 - Contact & Socials */}
            <div className="flex flex-col opacity-0 menu-link-item-holder gap-4 sm:gap-6">
              <h4 className="font-[family-name:var(--font-playfair)] text-xl sm:text-2xl lg:text-3xl text-white font-semibold">
                Contact
              </h4>

              <div className="flex flex-col gap-3 text-white/90">
                <div className="flex items-center gap-3">
                  <Phone
                    size={16}
                    className="text-[#B5860C] sm:w-[18px] sm:h-[18px]"
                  />
                  <p className="font-[family-name:var(--font-jost)] text-sm sm:text-2xl lg:text-base">
                    +260972852498 / +260763587299
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <Mail
                    size={16}
                    className="text-[#B5860C] sm:w-[18px] sm:h-[18px]"
                  />
                  <p className="font-[family-name:var(--font-jost)] text-sm sm:text-base lg:text-lg break-all">
                    info@sakae-paradise.com
                  </p>
                </div>
              </div>

              {/* Socials */}
              <div className="flex gap-3 sm:gap-4 mt-2 sm:mt-4">
                <Link
                  href="https://www.instagram.com/sakaeparadiseresort/"
                  className="p-2 sm:p-3 border border-white/30 rounded-full hover:border-[#B5860C] hover:bg-[#B5860C]/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram
                    size={18}
                    className="text-white hover:text-[#B5860C] sm:w-5 sm:h-5"
                  />
                </Link>
                <Link
                  href="https://web.facebook.com/sakaeparadiseresort"
                  className="p-2 sm:p-3 border border-white/30 rounded-full hover:border-[#B5860C] hover:bg-[#B5860C]/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook
                    size={18}
                    className="text-white hover:text-[#B5860C] sm:w-5 sm:h-5"
                  />
                </Link>
                <Link
                  href="https://www.twitter.com/sakae-paradise"
                  className="p-2 sm:p-3 border border-white/30 rounded-full hover:border-[#B5860C] hover:bg-[#B5860C]/10 transition-all duration-300"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter
                    size={18}
                    className="text-white hover:text-[#B5860C] sm:w-5 sm:h-5"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayMenu2;
