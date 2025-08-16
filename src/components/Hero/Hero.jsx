import React, { useEffect, useState } from "react";
import { ChevronDown, Play, ArrowRight } from "lucide-react";

function Hero() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    setIsVisible(true);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const scrollToServices = () => {
    document.getElementById("services")?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Dynamic Background with Parallax Effect */}
      <div className="absolute inset-0">
        {/* Main Background Image */}
        <div className="absolute inset-0 scale-110 transition-transform duration-700 ease-out">
          <img
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9"
            alt="Industrial Energy Infrastructure"
            className="w-full h-full object-cover"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${
                mousePosition.y * 0.02
              }px)`,
            }}
          />
        </div>

        {/* Gradient Overlays for Better Text Contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/80 via-slate-800/70 to-slate-900/90" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

        {/* Animated Geometric Elements */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse animation-delay-1000" />
      </div>

      {/* Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Main Content */}
        <div
          className={`transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 mb-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium">
            <span className="w-2 h-2 bg-orange-400 rounded-full mr-2 animate-pulse"></span>
            Leading EPC Solutions Across MENA & South Asia
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Powering Tomorrow's</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Energy Solutions
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl lg:text-2xl text-slate-300 mb-4 max-w-4xl mx-auto leading-relaxed font-light">
            Trusted engineering, procurement, and construction partner
            delivering
            <span className="text-white font-medium">
              {" "}
              world-class industrial solutions
            </span>{" "}
            across the oil & gas industry.
          </p>

          {/* Key Stats */}
          <div className="flex flex-wrap justify-center items-center gap-8 mb-12 text-slate-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-sm font-medium">40+ Years Experience</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-sm font-medium">
                5 Countries Operations
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
              <span className="text-sm font-medium">
                Complex Project Delivery
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToServices}
              className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-lg rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 focus:ring-offset-slate-900"
            >
              Explore Our Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="group inline-flex items-center px-8 py-4 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-semibold text-lg rounded-xl border border-white/20 hover:border-white/30 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-slate-900">
              <Play className="mr-2 h-5 w-5" />
              Watch Our Story
            </button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div
          className={`transform transition-all duration-1000 delay-500 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <button
            onClick={scrollToServices}
            className="group flex flex-col items-center text-slate-400 hover:text-orange-400 transition-colors duration-300"
          >
            <span className="text-sm font-medium mb-2 tracking-wider uppercase">
              Discover More
            </span>
            <div className="animate-bounce">
              <ChevronDown className="h-6 w-6 group-hover:scale-110 transition-transform" />
            </div>
          </button>
        </div>
      </div>

      {/* Floating Elements for Visual Interest */}
      <div className="absolute top-20 left-10 opacity-30">
        <div className="w-1 h-20 bg-gradient-to-b from-orange-400 to-transparent"></div>
      </div>
      <div className="absolute bottom-20 right-10 opacity-30">
        <div className="w-1 h-20 bg-gradient-to-t from-orange-400 to-transparent"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.15) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        ></div>
      </div>
    </section>
  );
}

export default Hero;
