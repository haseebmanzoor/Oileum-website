import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Transforming the Art of Engineering",
      subtitle: "End-to-End Engineering Solutions",
      description:
        "Oileum is proud to be a leading EPC company in the energy sector of MENA & South Asia, delivering world-class engineering solutions across downstream oil & gas infrastructure.",
      cta: { text: "Explore Our Services", link: "/services" },
      background: "/logos/refinery-night.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Excellence in Industrial Services",
      subtitle: "Trusted Across MENA & South Asia",
      description:
        "With strong operational presence in Iraq, Libya, Qatar, Saudi Arabia and Pakistan, we deliver high-integrity engineering, procurement, and technical services for refineries and energy infrastructure.",
      cta: { text: "View Our Projects", link: "/projects" },
      background: "/logos/solar-wind.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Innovation Meets Experience",
      subtitle: "Four Decades of Engineering Excellence",
      description:
        "Backed by decades of field expertise and commitment to quality, Oileum is trusted for driving results in the most challenging environments across the energy sector.",
      cta: { text: "About Oileum", link: "/about" },
      background: "/logos/lng-plant.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const currentSlideData = slides[currentSlide];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slides */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${currentSlideData.background})` }}
          />
          <div
            className={`absolute inset-0 bg-gradient-to-r ${currentSlideData.overlay}`}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
          <motion.div
            key={currentSlide}
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="max-w-3xl space-y-8"
          >
            {/* Subtitle */}
            <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
              <span className="text-sm font-semibold text-orange-400">
                {currentSlideData.subtitle}
              </span>
            </div>

            {/* Title */}
            <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
              {currentSlideData.title}
            </h1>

            {/* Description */}
            <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
              {currentSlideData.description}
            </p>

            {/* Only Primary Button */}
            <div className="flex flex-wrap gap-6">
              <Link to={currentSlideData.cta.link}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition"
                >
                  {currentSlideData.cta.text}
                  <ChevronRight className="ml-2 h-5 w-5" />
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Arrows */}
      <div className="absolute inset-y-0 left-6 flex items-center z-20">
        <button
          onClick={() =>
            setCurrentSlide(
              (prev) => (prev - 1 + slides.length) % slides.length
            )
          }
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
        >
          <ChevronLeft className="h-6 w-6" />
        </button>
      </div>
      <div className="absolute inset-y-0 right-6 flex items-center z-20">
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="p-3 rounded-full bg-white/20 hover:bg-white/40 text-white transition"
        >
          <ChevronRight className="h-6 w-6" />
        </button>
      </div>

      {/* Indicators */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-4 h-4 rounded-full border-2 transition ${
              index === currentSlide
                ? "bg-orange-500 border-orange-500"
                : "bg-transparent border-white hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
