"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { X, ChevronLeft, ChevronRight, Camera } from "lucide-react";
import Navbar from "./Navbar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  category: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722303/SnapInsta.to_284367180_158284843351399_9161703844697090472_n_hq0l9e.jpg",
    alt: "Wedding Photography",
    category: "Weddings",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731561/SnapInsta.to_452306210_446084944999145_8456296560340050291_n_m2afpg.jpg",
    alt: "Corporate Photography",
    category: "Corporate",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722303/SnapInsta.to_501025895_1202851037749870_3171118827942514609_n_reanfm.jpg",
    alt: "Cultural Photography",
    category: "Cultural",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731511/SnapInsta.to_357411864_284144377611656_3095468352486613221_n_1_v1nnbh.jpg",
    alt: "Event Photography",
    category: "Events",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731547/SnapInsta.to_452305716_1510831979823198_6332245363588993538_n_xpocwr.jpg",
    alt: "Portrait Photography",
    category: "Portraits",
  },
  {
    id: 6,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731512/SnapInsta.to_452603409_1813167529086954_4777466610140860807_n_zh4koc.jpg",
    alt: "Professional Photography",
    category: "Professional",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722302/SnapInsta.to_500514081_1253766409512778_4093637560437803315_n_zb0qu2.jpg",
    alt: "Documentary Photography",
    category: "Documentary",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731511/SnapInsta.to_357443504_220593150927250_90022180799211790_n_yqwti3.jpg",
    alt: "Celebration Photography",
    category: "Celebrations",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731511/SnapInsta.to_357414574_1231686880868177_4671077661206273125_n_yqcrw5.jpg",
    alt: "Special Moments",
    category: "Special Moments",
  },
];

const categories = [
  "All",
  "Weddings",
  "Corporate",
  "Cultural",
  "Events",
  "Portraits",
  "Professional",
  "Documentary",
  "Celebrations",
  "Special Moments",
];

const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [filteredImages, setFilteredImages] = useState(galleryImages);

  const heroRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredImages(galleryImages);
    } else {
      setFilteredImages(
        galleryImages.filter((img) => img.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const initAnimations = () => {
      const hero = heroRef.current;
      const gallery = galleryRef.current;

      if (!hero || !gallery) {
        setTimeout(initAnimations, 100);
        return;
      }

      // Hero animations
      gsap.set([hero.querySelector("h1"), hero.querySelector("p")], {
        opacity: 0,
        y: 30,
      });

      gsap.to([hero.querySelector("h1"), hero.querySelector("p")], {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.5,
      });

      // Gallery animations
      gsap.set(gallery.querySelectorAll(".gallery-item"), {
        opacity: 0,
        y: 50,
      });

      ScrollTrigger.create({
        trigger: gallery,
        start: "top 80%",
        onEnter: () => {
          gsap.to(gallery.querySelectorAll(".gallery-item"), {
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

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (!selectedImage) return;

    const currentIndex = filteredImages.findIndex(
      (img) => img.id === selectedImage.id
    );
    let newIndex;

    if (direction === "prev") {
      newIndex =
        currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    } else {
      newIndex =
        currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1;
    }

    setSelectedImage(filteredImages[newIndex]);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Navbar />
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://static.wixstatic.com/media/62b59b_49e9f114599c475da145a3d78451cc5c~mv2.jpg/v1/fill/w_1351,h_580,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/62b59b_49e9f114599c475da145a3d78451cc5c~mv2.jpg')`,
          }}
        />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h1 className="font-[family-name:var(--font-cormorant)] text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
            Gallery
          </h1>
          <p className="font-[family-name:var(--font-jost)] text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
            Explore our stunning visual collection capturing life&#39;s most
            precious moments through artistic vision and technical excellence
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <section ref={galleryRef} className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-6 transition-colors duration-300">
              <Camera className="w-4 h-4" />
              Our Portfolio
            </div>
            <h2 className="font-[family-name:var(--font-cormorant)] text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
              Our Gallery
            </h2>
            <div className="w-24 h-px bg-[#D6B978] mx-auto mb-8"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-[family-name:var(--font-jost)] font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-[#D6B978] text-black"
                    : "bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-[#D6B978] hover:text-black"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                className="gallery-item group cursor-pointer"
                onClick={() => openLightbox(image)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="text-white text-center">
                      <h3 className="font-[family-name:var(--font-cormorant)] text-xl font-bold mb-2">
                        {image.alt}
                      </h3>
                      <p className="font-[family-name:var(--font-jost)] text-sm text-[#D6B978]">
                        {image.category}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#D6B978] transition-colors z-10"
          >
            <X size={32} />
          </button>

          <button
            onClick={() => navigateImage("prev")}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#D6B978] transition-colors z-10"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={() => navigateImage("next")}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-[#D6B978] transition-colors z-10"
          >
            <ChevronRight size={32} />
          </button>

          <div className="relative max-w-4xl max-h-[80vh] w-full h-full">
            <Image
              src={selectedImage.src || "/placeholder.svg"}
              alt={selectedImage.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>

          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center text-white">
            <h3 className="font-[family-name:var(--font-cormorant)] text-2xl font-bold mb-2">
              {selectedImage.alt}
            </h3>
            <p className="font-[family-name:var(--font-jost)] text-[#D6B978]">
              {selectedImage.category}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryPage;
