"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface IntroOverlayProps {
  onComplete?: () => void;
}

const IntroOverlay = ({ onComplete }: IntroOverlayProps) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const cameraRef = useRef<HTMLDivElement>(null);
  const loadingBarRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLDivElement>(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    // Ensure other content is hidden during intro
    document.body.style.overflow = "hidden";

    // Counter animation
    const counterAnimation = gsap.to(
      {},
      {
        duration: 3,
        onUpdate: function () {
          const progress = Math.floor(this.progress() * 100);
          setCounter(progress);
        },
      }
    );

    const tl = gsap.timeline({
      onComplete: () => {
        if (onComplete) onComplete();
      },
    });

    // Initial setup - hide all elements
    gsap.set(
      [
        logoRef.current,
        taglineRef.current,
        cameraRef.current,
        loadingBarRef.current,
        counterRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    // Animate camera icon first
    tl.to(cameraRef.current, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      // Animate loading bar
      .to(
        loadingBarRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.3"
      )
      // Animate counter
      .to(
        counterRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
        },
        "-=0.4"
      )
      // Animate loading bar fill
      .to(
        loadingBarRef.current &&
          loadingBarRef.current.querySelector(".loading-fill")
          ? loadingBarRef.current.querySelector(".loading-fill")
          : [],
        {
          width: "100%",
          duration: 3,
          ease: "power2.inOut",
        },
        "-=0.3"
      )
      // Show logo and tagline
      .to(
        logoRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .to(
        taglineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.8"
      )
      // Hold for a moment
      .to({}, { duration: 0.8 })
      // Exit animation
      .to(
        [
          logoRef.current,
          taglineRef.current,
          cameraRef.current,
          loadingBarRef.current,
          counterRef.current,
        ],
        {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: "power3.in",
          stagger: 0.1,
        }
      )
      .to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 1.6,
          ease: "power3.inOut",
          onComplete: () => {
            if (overlayRef.current) {
              overlayRef.current.style.display = "none";
            }
            document.body.style.overflow = "";
          },
        },
        "-=0.3"
      );

    return () => {
      tl.kill();
      counterAnimation.kill();
      document.body.style.overflow = "";
    };
  }, [onComplete]);

  return (
    <div
      ref={overlayRef}
      className="overlay bg-gradient-to-br from-slate-900 via-slate-800 to-black w-full h-screen fixed top-0 left-0 z-[100] flex flex-col items-center justify-center"
    >
      {/* Animated Camera SVG */}
      <div ref={cameraRef} className="opacity-0 mb-8">
        <div className="relative">
          <svg
            width="80"
            height="80"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-white animate-pulse"
          >
            <path
              d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="12"
              cy="13"
              r="4"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="animate-spin"
              style={{ animationDuration: "3s" }}
            />
            <circle
              cx="12"
              cy="13"
              r="2"
              fill="currentColor"
              className="animate-pulse"
            />
            {/* Flash effect */}
            <circle
              cx="17"
              cy="6.5"
              r="1"
              fill="currentColor"
              className="animate-ping"
            />
          </svg>

          {/* Shutter effect */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 border-2 border-white rounded-full animate-ping opacity-20"></div>
          </div>
        </div>
      </div>

      {/* Loading Bar */}
      <div ref={loadingBarRef} className="opacity-0 w-64 mb-4">
        <div className="w-full bg-gray-700 rounded-full h-1 overflow-hidden">
          <div className="loading-fill h-full bg-gradient-to-r from-[#D6B978] to-[#ecc46d] rounded-full w-0 transition-all duration-300"></div>
        </div>
      </div>

      {/* Counter */}
      <div ref={counterRef} className="opacity-0 mb-12">
        <span className="text-white text-2xl font-mono font-bold tracking-wider">
          {counter}%
        </span>
      </div>

      {/* Logo */}
      <div ref={logoRef} className="opacity-0 mb-4">
        <h1 className="text-white text-center font-serif text-4xl md:text-4xl font-bold tracking-tight">
          Chellah Tukuta Photography
        </h1>
      </div>

      {/* Tagline */}
      <div ref={taglineRef} className="opacity-0 max-w-[70%] text-center">
        <p className="text-gray-300 text-lg md:text-2xl italic font-light">
          &quot;Capturing moments, creating memories&quot;
        </p>
      </div>

      {/* Decorative elements */}
      <div
        className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full animate-spin"
        style={{ animationDuration: "20s" }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-16 h-16 border border-white/10 rounded-full animate-spin"
        style={{ animationDuration: "15s" }}
      ></div>
      <div className="absolute top-1/2 left-5 w-2 h-2 bg-white/30 rounded-full animate-ping"></div>
      <div className="absolute top-1/4 right-5 w-1 h-1 bg-white/40 rounded-full animate-pulse"></div>
    </div>
  );
};

export default IntroOverlay;
