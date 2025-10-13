// src/components/Hero/Hero.jsx
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Services from "../Services/Services";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Engineering Services",
      subtitle: "Design • Procurement • Commissioning",
      description: [
        "At Oileum, we provide world-class Engineering Services for Oil & Gas, Petrochemical, and Industrial sectors, delivering sustainable, cost-effective solutions that keep industries moving.",
        "With decades of expertise, our team executes projects from small-scale upgrades to multi-billion-dollar EPC contracts.",
        "We pride ourselves on adaptability, technical depth, and uncompromising focus on QHSE standards.",
      ],
      cta: { text: "Explore Our Services", link: "/services" },
      background: "/hero/engineering-design.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Sustainable & Reliable",
      subtitle: "Cost-Effective Engineering",
      description: [
        "Our commitment is to deliver sustainable, reliable, and value-driven solutions that keep industries moving forward.",
      ],
      cta: { text: "View Our Projects", link: "/projects" },
      background: "/hero/procurement.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Partner in Industrial Success",
      subtitle: "Beyond Service Provider",
      description: [
        "Oileum is not just a service provider—it's a long-term partner in driving industrial success and operational excellence.",
      ],
      cta: { text: "About Oileum", link: "/about" },
      background: "/hero/industrial-success.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Decades of Engineering Expertise",
      subtitle: "Proven Global Track Record",
      description: [
        "Our expert team has successfully executed projects ranging from small-scale upgrades to multi-billion-dollar EPC contracts.",
      ],
      cta: { text: "Our Experience", link: "/projects" },
      background: "/hero/commissioning.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Commitment to QHSE Standards",
      subtitle: "Quality • Health • Safety • Environment",
      description: [
        "We pride ourselves on adaptability, technical depth, and an uncompromising focus on global QHSE standards.",
      ],
      cta: { text: "Learn More", link: "/about" },
      background: "/hero/qhse-standards.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Innovating Engineering Solutions",
      subtitle: "Delivering Excellence Worldwide",
      description: [
        "With innovation at our core, Oileum continues to deliver world-class engineering solutions across the globe.",
      ],
      cta: { text: "Explore More", link: "/services" },
      background: "/hero/mechanical-services.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Global Supply Chain Strength",
      subtitle: "Trusted Vendor Network",
      description: [
        "We leverage a global supply chain and trusted vendor network to ensure seamless procurement and delivery.",
      ],
      cta: { text: "Our Network", link: "/about" },
      background: "/hero/global-network.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Large-Scale Project Success",
      subtitle: "Mega EPC Contracts",
      description: [
        "With a proven track record in large-scale projects, Oileum continues to be a trusted partner worldwide.",
      ],
      cta: { text: "View Projects", link: "/projects" },
      background: "/hero/large-projects.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Experienced Engineering Team",
      subtitle: "Specialists You Can Trust",
      description: [
        "Our team of experienced engineers and specialists bring technical depth, innovation, and precision to every project.",
      ],
      cta: { text: "Meet Our Team", link: "/about" },
      background: "/hero/experienced-team.jpg",
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

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
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

        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex items-center justify-between px-4 md:px-8 z-20 pointer-events-none">
          <motion.button
            whileHover={{ scale: 1.1, x: -5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrevSlide}
            className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 md:p-4 rounded-full border border-white/30 shadow-xl transition-all duration-300 group"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-orange-400 transition-colors" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1, x: 5 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNextSlide}
            className="pointer-events-auto bg-white/20 hover:bg-white/40 backdrop-blur-sm p-3 md:p-4 rounded-full border border-white/30 shadow-xl transition-all duration-300 group"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 md:h-8 md:w-8 text-white group-hover:text-orange-400 transition-colors" />
          </motion.button>
        </div>

        {/* Slide Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? "w-12 bg-orange-500"
                  : "w-2 bg-white/40 hover:bg-white/60"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Slide Content */}
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="max-w-3xl space-y-8"
            >
              <div className="inline-flex items-center px-5 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                <span className="text-sm font-semibold text-orange-400">
                  {currentSlideData.subtitle}
                </span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-white drop-shadow-lg">
                {currentSlideData.title}
              </h1>
              <div className="space-y-4 max-w-2xl">
                {currentSlideData.description.map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-lg lg:text-xl text-white/90 leading-relaxed"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
              {/* <div className="flex flex-wrap gap-6">
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
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />
    </>
  );
};

export default Hero;
