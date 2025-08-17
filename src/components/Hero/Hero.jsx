import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";

// Example slides with background images
const slides = [
  {
    title: "Powering Progress with Innovation",
    subtitle: "Oil & Gas Infrastructure",
    description:
      "From refineries to pipelines, we deliver reliable engineering solutions that fuel industries worldwide.",
    stats: { projects: "500+", countries: "5", experience: "40+" },
    cta: "Explore Our Projects",
    background: "/logos/refinery-night.jpg",
  },
  {
    title: "Shaping a Sustainable Future",
    subtitle: "Solar & Wind Energy",
    description:
      "Harnessing clean energy with advanced solar and wind projects to power the next generation.",
    stats: { projects: "120+", countries: "3", experience: "15+" },
    cta: "View Renewable Initiatives",
    background: "/logos/solar-wind.jpg",
  },
  {
    title: "Reliable Energy for Communities",
    subtitle: "Natural Gas & Power Plants",
    description:
      "Supplying safe, efficient, and sustainable power through state-of-the-art LNG plants and infrastructure.",
    stats: { projects: "80+", countries: "4", experience: "25+" },
    cta: "Discover Our Impact",
    background: "/logos/lng-plant.jpg",
  },
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  // Mouse move parallax
  const handleMouseMove = (e) => {
    setMousePosition({
      x: (e.clientX / window.innerWidth - 0.5) * 2,
      y: (e.clientY / window.innerHeight - 0.5) * 2,
    });
  };

  const currentSlideData = slides[currentSlide];

  return (
    <section
      className="relative h-screen overflow-hidden bg-slate-900"
      onMouseMove={handleMouseMove}
    >
      {/* Background image per slide */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${currentSlideData.background})`,
            transform: `translate(${mousePosition.x * 15}px, ${
              mousePosition.y * 15
            }px)`,
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
        />
      </AnimatePresence>

      {/* Gradient overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/80 via-slate-900/70 to-slate-900/40"></div>

      {/* Animated particle accents */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-orange-400 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              y: [null, Math.random() * window.innerHeight],
              opacity: [0.3, 1, 0.3],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-40 md:pt-48">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 60 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
              {currentSlideData.title}
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold text-orange-400 mb-4">
              {currentSlideData.subtitle}
            </h2>
            <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-xl">
              {currentSlideData.description}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mb-10">
              {Object.entries(currentSlideData.stats).map(([key, value]) => (
                <div key={key}>
                  <div className="text-3xl md:text-4xl font-bold text-white">
                    {value}
                  </div>
                  <div className="text-sm uppercase text-slate-400">{key}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              href="#projects"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {currentSlideData.cta} <ChevronRight className="ml-2 h-5 w-5" />
            </motion.a>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Hero;
