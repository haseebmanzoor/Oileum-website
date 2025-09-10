import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import CoreServices from "../Services/CoreServices";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "World-Class Engineering Solutions",
      subtitle: "Design • Procurement • Commissioning",
      description:
        "At Oileum, we provide end-to-end EPC and mechanical services for the oil, gas, petrochemical, and industrial sectors.",
      cta: { text: "Explore Our Services", link: "/services" },
      background: "/hero/engineering-design.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Sustainable & Reliable",
      subtitle: "Cost-Effective Engineering",
      description:
        "Our commitment is to deliver sustainable, reliable, and value-driven solutions that keep industries moving forward.",
      cta: { text: "View Our Projects", link: "/projects" },
      background: "/hero/procurement.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Partner in Industrial Success",
      subtitle: "Beyond Service Provider",
      description:
        "Oileum is not just a service provider—it’s a long-term partner in driving industrial success and operational excellence.",
      cta: { text: "About Oileum", link: "/about" },
      background: "/hero/industrial-success.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Decades of Engineering Expertise",
      subtitle: "Proven Global Track Record",
      description:
        "Our expert team has successfully executed projects ranging from small-scale upgrades to multi-billion-dollar EPC contracts.",
      cta: { text: "Our Experience", link: "/projects" },
      background: "/hero/commissioning.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Commitment to QHSE Standards",
      subtitle: "Quality • Health • Safety • Environment",
      description:
        "We pride ourselves on adaptability, technical depth, and an uncompromising focus on global QHSE standards.",
      cta: { text: "Learn More", link: "/about" },
      background: "/hero/qhse-standards.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Innovating Engineering Solutions",
      subtitle: "Delivering Excellence Worldwide",
      description:
        "With innovation at our core, Oileum continues to deliver world-class engineering solutions across the globe.",
      cta: { text: "Explore More", link: "/services" },
      background: "/hero/mechanical-services.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Global Supply Chain Strength",
      subtitle: "Trusted Vendor Network",
      description:
        "We leverage a global supply chain and trusted vendor network to ensure seamless procurement and delivery.",
      cta: { text: "Our Network", link: "/about" },
      background: "/hero/global-network.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Large-Scale Project Success",
      subtitle: "Mega EPC Contracts",
      description:
        "With a proven track record in large-scale projects, Oileum continues to be a trusted partner worldwide.",
      cta: { text: "View Projects", link: "/projects" },
      background: "/hero/large-projects.jpg",
      overlay: "from-slate-900/80 via-slate-900/50 to-transparent",
    },
    {
      title: "Experienced Engineering Team",
      subtitle: "Specialists You Can Trust",
      description:
        "Our team of experienced engineers and specialists bring technical depth, innovation, and precision to every project.",
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

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
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

        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full">
            <motion.div
              key={currentSlide}
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
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
              <p className="text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl">
                {currentSlideData.description}
              </p>
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
      </section>

      {/* ✅ Core Services Section */}
      <CoreServices />
    </>
  );
};

export default Hero;
