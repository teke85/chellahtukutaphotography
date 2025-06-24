"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Camera } from "lucide-react";
import Image from "next/image";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const IMAGES = {
  main: {
    src: "https://static.wixstatic.com/media/62b59b_ab9714d79cf14a7c9618a74f4c882a5f~mv2.png/v1/crop/x_0,y_92,w_1932,h_1104/fill/w_550,h_310,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/164A6411_edited_edited.png",
    alt: "Chellah Tukuta - Photographer",
  },
  secondary: {
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750725977/SnapInsta.to_431239524_7320540264699553_3796327563678901094_n_zrvpib.jpg",
    alt: "Photography work showcase",
  },
};

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subheadingRef = useRef<HTMLParagraphElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const secondaryImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const section = sectionRef.current;

    if (section) {
      // Set initial states
      gsap.set([headingRef.current, subheadingRef.current, textRef.current], {
        opacity: 0,
        y: 30,
      });

      gsap.set(imageRef.current, {
        opacity: 0,
        scale: 1.1,
      });

      gsap.set(secondaryImageRef.current, {
        opacity: 0,
        y: 50,
      });

      // Create timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      tl.to(headingRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
      })
        .to(
          subheadingRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          textRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          imageRef.current,
          {
            opacity: 1,
            scale: 1,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          secondaryImageRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        );

      // Button hover animations
      const buttons = gsap.utils.toArray<HTMLButtonElement>(".about-button");
      buttons.forEach((button) => {
        const onEnter = () =>
          gsap.to(button, { scale: 1.05, duration: 0.3, ease: "power2.out" });
        const onLeave = () =>
          gsap.to(button, { scale: 1, duration: 0.3, ease: "power2.out" });

        button.addEventListener("mouseenter", onEnter);
        button.addEventListener("mouseleave", onLeave);
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-24 px-4">
      <div className="container mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="mb-6 p-4 rounded-lg inline-block">
            <span className="text-black dark:text-white font-[family-name:var(--font-jost)] text-sm font-medium tracking-wider uppercase">
              About the Photographer
            </span>
          </div>
          <h2
            ref={headingRef}
            className="text-4xl md:text-5xl font-[family-name:var(--font-cormorant)] font-bold text-black dark:text-white mb-6"
          >
            Chellah Tukuta
          </h2>
          <div className="w-24 h-px bg-[#D6B978] mx-auto mb-6"></div>
          <p
            ref={subheadingRef}
            className="text-lg text-black dark:text-white font-[family-name:var(--font-jost)] max-w-3xl mx-auto leading-relaxed"
          >
            Capturing authentic moments through creative vision and technical
            excellence
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div ref={textRef} className="space-y-6">
            <div className="space-y-6 dark:text-white text-black font-[family-name:var(--font-jost)] leading-relaxed">
              <p>
                With over 17 years of experience in professional photography, I
                specialize in capturing authentic moments that tell compelling
                stories. My work spans across portraits, weddings, events, and
                commercial photography, earning recognition through 7
                international awards for excellence in visual storytelling.
              </p>
              <p>
                Through my international background and diverse cultural
                experiences, I bring a unique perspective to every shoot. My
                approach combines technical excellence with creative vision to
                deliver images that resonate with emotion and artistry, creating
                timeless memories for my clients.
              </p>
              <p>
                Each photograph I create is a collaboration between vision and
                moment, where technical precision meets creative intuition.
                Whether it&#39;s an intimate portrait session or a grand
                celebration, I ensure every image captures the essence of the
                story being told.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 py-8 border-t border-gray-600">
              <div className="text-center">
                <div className="text-2xl font-[family-name:var(--font-jost)] text-[#D6B978] dark:text-white font-bold mb-1">
                  17+
                </div>
                <div className="text-sm text-black dark:text-white font-[family-name:var(--font-jost)]">
                  Years Experience
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-[family-name:var(--font-jost)] text-[#D6B978] dark:text-white font-bold mb-1">
                  7
                </div>
                <div className="text-sm text-black dark:text-white font-[family-name:var(--font-jost)]">
                  International Awards
                </div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-[family-name:var(--font-jost)] text-[#D6B978] font-bold mb-1">
                  500+
                </div>
                <div className="text-sm text-black dark:text-white font-[family-name:var(--font-jost)]">
                  Happy Clients
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              {/* <button className="about-button bg-[#D6B978] text-black px-6 py-1 rounded-full font-semibold flex items-center justify-center gap-2 hover:bg-amber-400 transition-colors flex-1 sm:flex-none cursor-pointer font-[family-name:var(--font-jost)]">
                <Download size={18} />
                Download CV
              </button> */}
              <button className="about-button border-2 border-[#D6B978] text-[#D6B978] px-6 py-1 font-semibold flex items-center justify-center gap-2 hover:bg-[#D6B978] hover:text-black transition-colors flex-1 sm:flex-none cursor-pointer font-[family-name:var(--font-jost)]">
                <Camera size={18} />
                Book a Session
              </button>
            </div>
          </div>

          {/* Images */}
          <div className="relative">
            {/* Main Image */}
            <div ref={imageRef} className="relative">
              <div className="aspect-[3/3] rounded-lg overflow-hidden shadow-lg">
                <Image
                  src={IMAGES.main.src}
                  alt={IMAGES.main.alt}
                  fill
                  className="object-cover transition-transform duration-700"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </div>

            {/* Secondary Image */}
            <div
              ref={secondaryImageRef}
              className="absolute -bottom-8 -left-8 w-48 h-32 lg:w-56 lg:h-36"
            >
              <div className="relative w-full h-full rounded-lg overflow-hidden shadow-xl border-4 border-gray-800">
                <Image
                  src={IMAGES.secondary.src}
                  alt={IMAGES.secondary.alt}
                  fill
                  className="object-cover"
                  sizes="224px"
                />
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-500/20 rounded-full -z-10"></div>
            <div className="absolute -bottom-12 -right-6 w-16 h-16 bg-gray-700 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
