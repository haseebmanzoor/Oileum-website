import React, { useState, useEffect, useRef } from "react";
import {
  Wrench,
  Package,
  Building2,
  FlaskRound,
  Cog,
  Zap,
  ArrowRight,
  Target,
  Droplets,
  Sparkles,
  Star,
  CheckCircle,
} from "lucide-react";
import { motion } from "framer-motion";

// Service data
const servicesData = [
  {
    icon: Wrench,
    title: "Engineering",
    description:
      "End-to-end design and execution for complex industrial challenges",
    features: ["3D Modeling", "Process Design", "Technical Studies"],
  },
  {
    icon: Package,
    title: "Procurement",
    description: "Streamlined supply chain integration with global sourcing",
    features: ["Global Sourcing", "Vendor Management", "Quality Control"],
  },
  {
    icon: Building2,
    title: "Construction",
    description: "Safe, efficient field execution with proven expertise",
    features: ["Project Execution", "Safety Management", "Quality Assurance"],
  },
  {
    icon: FlaskRound,
    title: "Chemical Solutions",
    description: "Custom treatment programs for plant optimization",
    features: ["Custom Formulations", "Process Optimization", "Lab Testing"],
  },
  {
    icon: Cog,
    title: "Operations & Maintenance",
    description: "Full-spectrum O&M services with skilled teams",
    features: [
      "Preventive Maintenance",
      "Emergency Response",
      "Performance Monitoring",
    ],
  },
  {
    icon: Zap,
    title: "Heat Exchanger Services",
    description: "Certified repair & manufacturing per ASME standards",
    features: ["ASME Compliance", "Repair Services", "Performance Testing"],
  },
  {
    icon: Droplets,
    title: "Effluent Treatment",
    description: "Environmental solutions for sustainable operations",
    features: [
      "Waste Water Treatment",
      "Environmental Compliance",
      "Sustainability",
    ],
  },
  {
    icon: Target,
    title: "Project Management",
    description: "Comprehensive controls from planning to completion",
    features: ["Timeline Management", "Risk Assessment", "Quality Control"],
  },
];

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [overlayOpacity, setOverlayOpacity] = useState(0.12);
  const [parallax, setParallax] = useState(0);
  const servicesRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) observer.observe(servicesRef.current);
    return () => {
      if (servicesRef.current) observer.unobserve(servicesRef.current);
    };
  }, []);

  useEffect(() => {
    const onScroll = () => {
      if (!servicesRef.current) return;
      const rect = servicesRef.current.getBoundingClientRect();
      const viewH = window.innerHeight || document.documentElement.clientHeight;
      const visible = Math.max(
        0,
        Math.min(1, 1 - Math.abs(rect.top - viewH * 0.5) / (viewH * 0.5))
      );
      setOverlayOpacity(0.08 + visible * 0.22);
      setParallax((rect.top / viewH) * 30);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  const container = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };
  const item = (i) => ({
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08 },
    },
  });

  return (
    <section
      id="services"
      ref={servicesRef}
      className="relative py-28 overflow-hidden text-white bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950"
    >
      {/* Background visuals */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          style={{
            opacity: overlayOpacity,
            transform: `translateY(${parallax * -1}px)`,
          }}
          className="absolute -top-24 -right-10 w-[42rem] h-[42rem] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(245,158,11,0.5),rgba(245,158,11,0)_60%)] blur-3xl"
        />
        <div
          style={{
            opacity: overlayOpacity * 0.9,
            transform: `translateY(${parallax}px)`,
          }}
          className="absolute -bottom-24 -left-10 w-[36rem] h-[36rem] rounded-full bg-[radial-gradient(circle_at_70%_70%,rgba(251,191,36,0.45),rgba(251,191,36,0)_60%)] blur-3xl"
        />
        <div className="absolute inset-0 bg-[radial-gradient(80%_60%_at_50%_0%,rgba(255,255,255,0.06),rgba(0,0,0,0))]" />
        <div
          style={{ opacity: 0.15 }}
          className="absolute inset-0 mix-blend-overlay bg-[url('/noise.svg')]"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-8">
        {/* Header */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl mb-6 md:mb-8 bg-gradient-to-br from-orange-500 to-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.35)]">
            <Sparkles className="h-8 w-8 md:h-10 md:w-10 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            Comprehensive EPC Solutions
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Across Energy Infrastructure
            </span>
          </h2>
          <p className="mt-5 text-lg md:text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed">
            From concept to commissioning, we deliver integrated solutions that
            drive industrial progress in the most challenging environments with
            unmatched expertise and precision.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20"
        >
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={item(index)}
                className="group relative h-full rounded-3xl p-7 md:p-8 border overflow-hidden cursor-pointer bg-white/8 backdrop-blur-xl border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] hover:border-amber-300/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_12px_60px_rgba(245,158,11,0.22)]"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* sheen */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500"
                  style={{
                    background:
                      "linear-gradient(120deg, rgba(255,255,255,0.06), rgba(255,255,255,0) 30%, rgba(255,255,255,0.06) 60%, rgba(255,255,255,0))",
                  }}
                />

                {/* Icon */}
                <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-6 bg-gradient-to-br from-orange-500 to-amber-500 shadow-[0_0_24px_rgba(245,158,11,0.35)]">
                  <IconComponent className="h-7 w-7 text-white" />
                  <div className="absolute -inset-2 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-br from-orange-400/30 to-amber-400/30" />
                </div>

                <div className="absolute top-6 right-6 text-3xl font-black tracking-tighter text-white/10 group-hover:text-white/20 transition">
                  {String(index + 1).padStart(2, "0")}
                </div>

                <h3 className="text-xl md:text-2xl font-semibold text-white mb-3 group-hover:text-amber-200 transition-colors">
                  {service.title}
                </h3>

                <p className="text-slate-300 mb-5 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-2.5 mb-6">
                  {service.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-2 text-slate-300"
                    >
                      <div className="w-5 h-5 rounded-lg flex items-center justify-center bg-white/5 border border-white/10 group-hover:border-amber-300/30 transition">
                        <CheckCircle className="h-3.5 w-3.5 text-amber-400" />
                      </div>
                      <span className="text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                <button className="group/btn inline-flex items-center gap-2 font-semibold text-slate-200 hover:text-white transition-all duration-300">
                  <span>Learn More</span>
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </button>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 group-hover:w-24 h-[2px] bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-500" />

                {hoveredCard === index && (
                  <>
                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-400 opacity-70 blur-[2px]" />
                    <div className="absolute -bottom-3 -left-3 w-4 h-4 rounded-full bg-gradient-to-br from-amber-300 to-orange-400 opacity-70 blur-[1px]" />
                  </>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* CTA Panel */}
        <motion.div
          variants={container}
          initial="hidden"
          animate={isVisible ? "show" : "hidden"}
          className="relative rounded-3xl p-10 md:p-14 overflow-hidden bg-white/[0.06] backdrop-blur-xl border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -top-10 -right-10 w-72 h-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.45),rgba(245,158,11,0))] blur-3xl" />
            <div className="absolute -bottom-12 -left-12 w-64 h-64 rounded-full bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35),rgba(251,191,36,0))] blur-3xl" />
          </div>

          <div className="relative text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 bg-gradient-to-br from-orange-500 to-amber-500 shadow-[0_0_30px_rgba(245,158,11,0.35)]">
              <Star className="h-10 w-10 text-white" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Energy Infrastructure?
            </h3>
            <p className="text-lg md:text-xl text-slate-200/90 mb-8 max-w-3xl mx-auto leading-relaxed">
              Let's discuss how our comprehensive EPC solutions can drive your
              next project to success. Our expert team is ready to deliver
              excellence in every phase.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-semibold bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:shadow-[0_8px_40px_rgba(245,158,11,0.35)]">
                <Target className="h-5 w-5" />
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="relative inline-flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold text-white/90 hover:text-white bg-white/10 backdrop-blur-md border border-white/15 hover:border-amber-300/30 transition-all duration-300">
                <Sparkles className="h-5 w-5" />
                View Our Portfolio
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Services;
