"use client";

import type React from "react";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Camera, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { cn } from "@/lib/utils";
import { gsap } from "gsap";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import OverlayMenu from "./OverlayMenu1";
import OverlayMenu2 from "./OverlayMenuUpdated";

// Custom modern menu icon for photography
const ModernMenuIcon = ({ className }: { className?: string }) => (
  <div
    className={cn(
      "relative w-7 h-7 flex flex-col justify-center items-center",
      className
    )}
  >
    <span className="block h-0.5 w-6 bg-current mb-1.5 transition-all duration-300"></span>
    <span className="block h-0.5 w-4 bg-current mb-1.5 transition-all duration-300"></span>
    <span className="block h-0.5 w-6 bg-current transition-all duration-300"></span>
  </div>
);

// Theme Toggle Component
const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="bg-amber-500/20 backdrop-blur-sm border-amber-500/30 text-[#D6B978] hover:text-[#D6B978] hover:bg-amber-500/30 hover:border-amber-500/40 transition-all duration-300"
        >
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="bg-white/90 backdrop-blur-md border-amber-500/30 dark:text-white dark:bg-gray-900/90 dark:border-gray-700"
      >
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="hover:bg-[#D6B978]/20 hover:text-[#D6B978] focus:bg-amber-500/20 focus:text-[#D6B978"
        >
          Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="hover:bg-amber-500/20 hover:text-[#D6B978] focus:bg-amber-500/20 focus:text-[#D6B978]"
        >
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="hover:bg-amber-500/20 hover:text-[#D6B978] focus:bg-amber-500/20 focus:text-[#D6B978]"
        >
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

type NavbarProps = {
  isDarkMode?: boolean;
};

const Navbar = ({ isDarkMode = false }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  // Animation for the navbar
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        navRef.current,
        {
          y: -100,
        },
        {
          y: 0,
          duration: 1,
          delay: 2.5,
          ease: "power3.out",
        }
      );
    });

    return () => ctx.revert();
  }, []);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial check
    handleScroll();

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 w-full z-40 shadow-sm transform -translate-y-full transition-all duration-500 h-16 md:h-20",
          scrolled
            ? "bg-black/90 backdrop-blur-md py-2 dark:bg-gray-900/90"
            : isDarkMode
            ? "bg-black/50 backdrop-blur-sm py-4 dark:bg-gray-900/50"
            : "bg-transparent py-4 dark:bg-gray-900/30"
        )}
      >
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center h-full">
          <Link
            href="/"
            className="mb-4 md:mb-0 flex items-center relative group"
          >
            {scrolled ? (
              <div className="flex items-center space-x-3">
                <Camera className="h-8 w-8 text-[#D6B978] group-hover:text-amber-400 transition-colors duration-300" />
                <div className="flex flex-col">
                  <span className="text-white font-[family-name:var(--font-cormorant)] text-base font-bold tracking-wider leading-none dark:text-gray-100">
                    CHELLAH
                  </span>
                  <span className="text-[#D6B978] font-[family-name:var(--font-jost)] text-xs font-light tracking-[0.2em] leading-none">
                    PHOTOGRAPHY
                  </span>
                </div>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Camera className="h-10 w-10 text-[#D6B978] transition-colors duration-300" />
                <span
                  className={cn(
                    "flex flex-col text-2xl md:text-3xl font-serif font-bold transition-colors duration-500",
                    isDarkMode && !scrolled
                      ? "text-white dark:text-gray-100"
                      : "text-white dark:text-gray-100"
                  )}
                >
                  <span className="leading-none font-[family-name:var(--font-playfair)] text-base tracking-wider">
                    CHELLAH TUKUTA
                  </span>
                  <span className="text-[#D6B978] text-sm md:text-base font-[family-name:var(--font-jost)] font-light tracking-[0.3em] leading-none">
                    STUDIO
                  </span>
                </span>
              </div>
            )}
          </Link>

          <div className="flex items-center space-x-3">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Menu Button */}
            <>
              <OverlayMenu2
                isOpen={isMenuOpen}
                onClose={() => setIsMenuOpen(false)}
              />

              <button
                onClick={toggleMenu}
                className={cn(
                  "flex items-center cursor-pointer text-sm justify-center p-1 rounded-full transition-all duration-300 group",
                  scrolled
                    ? "bg-amber-500/20 backdrop-blur-sm text-[#D6B978] hover:text-amber-400 hover:bg-amber-500/30 shadow-lg"
                    : "bg-amber-500/20 backdrop-blur-sm text-[#D6B978] hover:text-amber-400 hover:bg-amber-500/30"
                )}
                aria-label="Toggle menu"
              >
                <ModernMenuIcon className="group-hover:scale-110 text-sm transition-transform duration-300" />
              </button>
            </>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
