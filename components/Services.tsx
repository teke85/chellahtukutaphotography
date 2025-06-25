import React, { useState } from "react";
import Image from "next/image";
import {
  Camera,
  Heart,
  Briefcase,
  ArrowRight,
  Star,
  Crown,
  PawPrint,
  Globe,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

interface Service {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  images: string[];
}

type ActiveImageIndex = {
  [serviceIndex: number]: number;
};

interface HandleDotClick {
  (serviceIndex: number, imageIndex: number): void;
}

const EnhancedServicesSection = () => {
  const [activeImageIndex, setActiveImageIndex] = useState<ActiveImageIndex>(
    {}
  );

  const services = [
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Corporate Photography",
      description:
        "Professional business photography that elevates your brand image and corporate presence with executive portraits and event coverage.",
      features: [
        "Executive Portraits",
        "Corporate Events",
        "Brand Photography",
      ],
      price: "From $400",
      images: [
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731561/SnapInsta.to_452306210_446084944999145_8456296560340050291_n_m2afpg.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731547/SnapInsta.to_452305716_1510831979823198_6332245363588993538_n_xpocwr.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731512/SnapInsta.to_452603409_1813167529086954_4777466610140860807_n_zh4koc.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731512/SnapInsta.to_452306210_446084944999145_8456296560340050291_n_mqwsix.jpg",
      ],
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Wedding & Events",
      description:
        "Comprehensive coverage for weddings, celebrations, and special occasions, creating timeless memories to treasure forever.",
      features: ["Full Day Coverage", "Cultural Ceremonies", "Online Gallery"],
      price: "From $800",
      images: [
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722303/SnapInsta.to_284367180_158284843351399_9161703844697090472_n_hq0l9e.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731511/SnapInsta.to_357411864_284144377611656_3095468352486613221_n_1_v1nnbh.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731511/SnapInsta.to_357443504_220593150927250_90022180799211790_n_yqwti3.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750731511/SnapInsta.to_357414574_1231686880868177_4671077661206273125_n_yqcrw5.jpg",
      ],
    },
    {
      icon: <Camera className="w-8 h-8" />,
      title: "Fashion & Portraits",
      description:
        "Artistic portrait sessions and fashion photography capturing personality, style, and elegance with professional precision.",
      features: ["Fashion Shoots", "Model Portfolios", "Personal Branding"],
      price: "From $250",
      images: [
        "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=500&h=600&fit=crop&crop=face",
        "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=500&h=600&fit=crop&crop=face",
      ],
    },
    {
      icon: <Crown className="w-8 h-8" />,
      title: "Celebrity & VIP",
      description:
        "Discrete, professional photography services for high-profile clients, red carpet events, and exclusive gatherings.",
      features: ["Red Carpet Events", "VIP Functions", "Media Coverage"],
      price: "From $600",
      images: [
        "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=600&fit=crop",
      ],
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Cultural & Documentary",
      description:
        "Preserving heritage and telling meaningful stories through authentic documentation of cultural events and traditions.",
      features: [
        "Cultural Events",
        "Heritage Photography",
        "Documentary Projects",
      ],
      price: "From $300",
      images: [
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722303/SnapInsta.to_501025895_1202851037749870_3171118827942514609_n_reanfm.jpg",
        "https://res.cloudinary.com/dpeg7wc34/image/upload/v1750722302/SnapInsta.to_500514081_1253766409512778_4093637560437803315_n_zb0qu2.jpg",
        "https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=600&fit=crop",
      ],
    },
    {
      icon: <PawPrint className="w-8 h-8" />,
      title: "Wildlife Photography",
      description:
        "Specialized photography celebrating the beauty and character of animals, from beloved pets to wildlife documentation.",
      features: ["Pet Portraits", "Wildlife Photography", "Equestrian Shoots"],
      price: "From $200",
      images: [
        "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1574144611937-0df059b5ef3e?w=500&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551717743-49959800b1f6?w=500&h=600&fit=crop",
      ],
    },
  ];

  const additionalServices = [
    {
      title: "Same-Day Delivery",
      description: "Rush processing for urgent requirements",
    },
    {
      title: "Professional Retouching",
      description: "Expert post-production and image enhancement",
    },
    {
      title: "Digital Galleries",
      description: "Secure online viewing and downloading",
    },
    {
      title: "Print Services",
      description: "High-quality prints and custom products",
    },
  ];

  const handleImageNavigation = (
    serviceIndex: number,
    direction: "next" | "prev"
  ) => {
    const currentIndex =
      (activeImageIndex as ActiveImageIndex)[serviceIndex] || 0;
    const totalImages = (services as Service[])[serviceIndex].images.length;

    let newIndex: number;
    if (direction === "next") {
      newIndex = (currentIndex + 1) % totalImages;
    } else {
      newIndex = currentIndex === 0 ? totalImages - 1 : currentIndex - 1;
    }

    setActiveImageIndex((prev: ActiveImageIndex) => ({
      ...prev,
      [serviceIndex]: newIndex,
    }));
  };

  const handleDotClick: HandleDotClick = (serviceIndex, imageIndex) => {
    setActiveImageIndex((prev: ActiveImageIndex) => ({
      ...prev,
      [serviceIndex]: imageIndex,
    }));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center font-[family-name:var(--font-jost)] gap-2 bg-amber-100 dark:bg-amber-900/30 text-amber-800 dark:text-amber-200 px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
            <Star className="w-4 h-4" />
            Professional Photography Services
          </div>
          <h2 className="text-4xl font-[family-name:var(--font-cormorant)] md:text-5xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-300">
            Capturing Life&#39;s Moments
          </h2>
          <p className="text-xl font-[family-name:var(--font-jost)] text-gray-600 dark:text-gray-300 max-w-3xl mx-auto transition-colors duration-300">
            From corporate events to cultural celebrations, fashion shoots to
            wildlife photography - we specialize in diverse photography services
            with artistic vision and technical excellence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, serviceIndex) => {
            const currentImageIndex = activeImageIndex[serviceIndex] || 0;
            return (
              <div
                key={serviceIndex}
                className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl dark:shadow-gray-900/50 transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700"
              >
                {/* Image Carousel and Overlays */}
                <div className="relative aspect-[4/5] w-full">
                  <Image
                    src={service.images[currentImageIndex]}
                    alt={`${service.title} ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover transition-all duration-300"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    style={{ objectFit: "cover" }}
                    priority={serviceIndex === 0 && currentImageIndex === 0}
                  />

                  {/* Navigation Arrows */}
                  <button
                    onClick={() => handleImageNavigation(serviceIndex, "prev")}
                    className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleImageNavigation(serviceIndex, "next")}
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-1 rounded-full transition-all opacity-0 group-hover:opacity-100 z-10"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Image Indicators */}
                  <div className="absolute top-3 right-3 flex gap-1 z-10">
                    {service.images.map((_, imageIndex) => (
                      <button
                        key={imageIndex}
                        onClick={() => handleDotClick(serviceIndex, imageIndex)}
                        className={`w-2 h-2 rounded-full transition-all ${
                          imageIndex === currentImageIndex
                            ? "bg-white"
                            : "bg-white/50 hover:bg-white/75"
                        }`}
                      />
                    ))}
                  </div>

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                  {/* Service Info Overlay */}
                  <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white z-10">
                    <div className="p-2 text-[#D6B978] rounded-lg">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-[family-name:var(--font-jost)]">
                        {service.title}
                      </h3>
                      <p className="dark:text-gold-50 text-gold-500 font-[family-name:var(--font-jost)] font-semibold">
                        {service.price}
                      </p>
                    </div>
                  </div>

                  {/* Image Counter */}
                  <div className="absolute top-3 left-3 bg-black/50 text-white text-xs px-2 py-1 rounded-full z-10">
                    {currentImageIndex + 1}/{service.images.length}
                  </div>
                </div>
                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 font-[family-name:var(--font-jost)] leading-relaxed transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li
                        key={idx}
                        className="flex items-center font-[family-name:var(--font-jost)] gap-2 text-sm text-gray-700 dark:text-gray-300 transition-colors duration-300"
                      >
                        <div className="w-1.5 h-1.5 bg-[#D6B978] rounded-full" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <button className="group/btn w-full font-[family-name:var(--font-jost)] bg-gray-900 dark:bg-gray-700 hover:bg-amber-500 dark:hover:bg-amber-500 text-white py-2 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Additional Services */}
        <div className="bg-white dark:bg-gray-800 dark:text-white rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700 mb-16 transition-colors duration-300">
          <div className="text-center mb-8">
            <div className="inline-flex font-[family-name:var(--font-jost)] items-center gap-2 bg-blue-100 dark:bg-blue-900/30 dark:text-[#D6B978] px-4 py-2 rounded-full text-sm font-medium mb-4 transition-colors duration-300">
              <Sparkles className="w-4 h-4" />
              Additional Services
            </div>
            <h3 className="text-2xl font-bold font-[family-name:var(--font-cormorant)] text-gray-900 dark:text-white mb-2 transition-colors duration-300">
              Complete Photography Solutions
            </h3>
            <p className="text-gray-600 dark:text-gray-300 transition-colors duration-300">
              Professional support services to enhance your photography
              experience
            </p>
          </div>

          <div className="grid grid-cols-1 font-[family-name:var(--font-jost)] md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="text-center p-4 border font-[family-name:var(--font-jost)] border-gray-100 dark:border-gray-600 rounded-lg hover:border-amber-300 dark:hover:border-amber-500 transition-colors duration-300"
              >
                <h4 className="font-semibold font-[family-name:var(--font-jost)] text-gray-900 dark:text-white mb-2 transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-300 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center font-[family-name:var(--font-jost)] bg-gray-900 dark:bg-gray-800 rounded-2xl p-8 text-white transition-colors duration-300">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Capture Your Story?
          </h3>
          <p className="text-gray-300 dark:text-gray-400 mb-6 max-w-2xl mx-auto transition-colors duration-300">
            Whether it&#39;s a corporate event, cultural celebration, fashion
            shoot, or wildlife adventure - let&#39;s discuss your photography
            needs and create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-[#D6B978] hover:bg-[#f5d288] text-black px-8 py-3 rounded-lg font-semibold transition-colors">
              Book Consultation
            </button>
            <button className="border border-gray-600 dark:border-gray-500 hover:border-white dark:hover:border-white text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              View Portfolio
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedServicesSection;
