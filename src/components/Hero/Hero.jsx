import React, { useState, useEffect, useRef } from "react";
import {
  Award,
  Globe,
  Users,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Play,
  Sparkles,
  Target,
  Lightbulb,
} from "lucide-react";

function AboutUs() {
  const [activeTab, setActiveTab] = useState("overview");
  const [counters, setCounters] = useState({
    years: 0,
    countries: 0,
    projects: 0,
    satisfaction: 0,
  });
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const animateCounter = (target, key, duration = 2000) => {
            const increment = target / (duration / 16);
            let current = 0;
            const timer = setInterval(() => {
              current += increment;
              if (current >= target) {
                current = target;
                clearInterval(timer);
              }
              setCounters((prev) => ({ ...prev, [key]: Math.floor(current) }));
            }, 16);
          };
          animateCounter(40, "years");
          animateCounter(5, "countries");
          animateCounter(500, "projects");
          animateCounter(95, "satisfaction");
        }
      },
      { threshold: 0.2 }
    );

    if (aboutRef.current) observer.observe(aboutRef.current);
    return () => {
      if (aboutRef.current) observer.unobserve(aboutRef.current);
    };
  }, []);

  const stats = [
    {
      icon: Award,
      number: `${counters.years}+`,
      label: "Years Experience",
      gradient: "from-orange-400 to-orange-500",
    },
    {
      icon: Globe,
      number: `${counters.countries}`,
      label: "Countries",
      gradient: "from-blue-400 to-blue-500",
    },
    {
      icon: Users,
      number: `${counters.projects}+`,
      label: "Projects Delivered",
      gradient: "from-emerald-400 to-emerald-500",
    },
    {
      icon: TrendingUp,
      number: `${counters.satisfaction}%`,
      label: "Client Satisfaction",
      gradient: "from-purple-400 to-purple-500",
    },
  ];

  const achievements = [
    { icon: Award, text: "Leading EPC Company in MENA & South Asia" },
    { icon: Globe, text: "Backed by UDKS global construction group" },
    { icon: Target, text: "Specialized in complex industrial projects" },
    {
      icon: CheckCircle,
      text: "Proven track record in challenging environments",
    },
    { icon: Sparkles, text: "ISO certified quality management systems" },
    { icon: TrendingUp, text: "Award-winning safety performance" },
  ];

  const tabs = [
    { id: "overview", label: "Overview", icon: Globe },
    { id: "history", label: "Our History", icon: Award },
    { id: "mission", label: "Mission & Vision", icon: Target },
  ];

  const tabContents = {
    overview: (
      <>
        <div className="space-y-4 relative z-10">
          <p className="text-slate-300 text-lg leading-relaxed">
            OILEUM is a UAE-based industrial services company specializing in
            downstream oil & gas solutions across MENA & South Asia.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Our comprehensive approach combines cutting-edge technology with
            decades of expertise to deliver exceptional results in the most
            challenging environments.
          </p>
        </div>

        {/* Floating Geometric Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-orange-400/50 to-transparent opacity-60 animate-pulse" />
          <div className="absolute top-40 right-20 w-2 h-24 bg-gradient-to-b from-amber-400/40 to-transparent opacity-40 animate-pulse animation-delay-1000" />
          <div className="absolute bottom-32 left-20 w-2 h-28 bg-gradient-to-t from-orange-400/45 to-transparent opacity-50 animate-pulse animation-delay-2000" />
          <div className="absolute bottom-20 right-10 w-2 h-20 bg-gradient-to-t from-amber-400/50 to-transparent opacity-55 animate-pulse animation-delay-500" />
        </div>

        {/* Premium Particle Effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-orange-400/40 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animation: `twinkle 4s infinite ease-in-out`,
              }}
            />
          ))}
        </div>
      </>
    ),
    history: (
      <div className="space-y-4">
        <p className="text-slate-300 text-lg leading-relaxed">
          Started in 1983, OILEUM has evolved into one of the most dynamic EPC
          companies across MENA & South Asia.
        </p>
        <p className="text-slate-400 leading-relaxed">
          From humble beginnings to becoming a regional powerhouse, our journey
          reflects continuous innovation and unwavering commitment to
          excellence.
        </p>
      </div>
    ),
    mission: (
      <div className="space-y-4">
        <p className="text-slate-300 text-lg leading-relaxed">
          We deliver world-class engineering, procurement, and construction
          services driving industrial progress in MENA & South Asia.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Our vision is to be the preferred partner for transformative energy
          infrastructure projects that shape the future of the region.
        </p>
      </div>
    ),
  };

  return (
    <section
      ref={aboutRef}
      className="relative py-24 bg-slate-900 overflow-hidden"
    >
      {/* Static Background Image instead of video */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
          alt="Industrial Energy Infrastructure"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-slate-800/85 to-slate-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative max-w-7xl mx-auto px-8">
        {/* ... Keep all headers, grids, tabs, achievements, stats, CTA as before ... */}
      </div>

      <style jsx>{`
        @keyframes twinkle {
          0%,
          100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(1.2);
          }
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
      `}</style>
    </section>
  );
}

export default AboutUs;
