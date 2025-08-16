import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      gradient: "from-orange-500 to-orange-600",
      bg: "from-orange-50 to-orange-100",
    },
    {
      icon: Globe,
      number: `${counters.countries}`,
      label: "Countries",
      gradient: "from-blue-500 to-blue-600",
      bg: "from-blue-50 to-blue-100",
    },
    {
      icon: Users,
      number: `${counters.projects}+`,
      label: "Projects Delivered",
      gradient: "from-emerald-500 to-emerald-600",
      bg: "from-emerald-50 to-emerald-100",
    },
    {
      icon: TrendingUp,
      number: `${counters.satisfaction}%`,
      label: "Client Satisfaction",
      gradient: "from-purple-500 to-purple-600",
      bg: "from-purple-50 to-purple-100",
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
      <p>
        OILEUM is a UAE-based industrial services company specializing in
        downstream oil & gas solutions across MENA & South Asia.
      </p>
    ),
    history: (
      <p>
        Started in 1983, OILEUM has evolved into one of the most dynamic EPC
        companies across MENA & South Asia.
      </p>
    ),
    mission: (
      <p>
        We deliver world-class engineering, procurement, and construction
        services driving industrial progress in MENA & South Asia.
      </p>
    ),
  };

  return (
    <section
      ref={aboutRef}
      className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background Blurs */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
            Transforming Energy Infrastructure
            <span className="block bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
              Across MENA & South Asia
            </span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Four decades of engineering excellence delivering world-class
            solutions in challenging environments.
          </p>
        </motion.div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02]">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="OILEUM Industrial Operations"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/20 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300">
                  <Play className="h-8 w-8 text-slate-800 ml-1" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Tabs */}
            <div className="flex flex-wrap gap-2 mb-10">
              {tabs.map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`group flex items-center gap-2 px-6 py-3 rounded-2xl font-medium text-sm transition-all duration-300 hover:scale-105 ${
                      activeTab === tab.id
                        ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg shadow-orange-500/25"
                        : "bg-white/70 backdrop-blur-sm text-slate-600 hover:bg-white border border-slate-200/60 hover:border-orange-200"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        activeTab === tab.id ? "text-white" : "text-slate-500"
                      }`}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <AnimatePresence exitBeforeEnter>
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="mb-10 p-6 bg-white rounded-2xl shadow-lg"
              >
                {tabContents[activeTab]}
              </motion.div>
            </AnimatePresence>

            {/* Achievements */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center">
                  <CheckCircle className="h-4 w-4 text-white" />
                </div>
                Key Achievements
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {achievements.map((a, i) => {
                  const Icon = a.icon;
                  return (
                    <div
                      key={i}
                      className="group flex items-start gap-4 p-4 bg-white/50 backdrop-blur-sm rounded-xl border border-slate-200/60 hover:border-orange-200 hover:bg-white/80 transition-all duration-300 hover:shadow-lg"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-100 to-slate-200 group-hover:from-orange-100 group-hover:to-orange-200 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110">
                        <Icon className="h-5 w-5 text-slate-600 group-hover:text-orange-600" />
                      </div>
                      <span className="text-slate-700 font-medium group-hover:text-slate-800 transition-colors">
                        {a.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25">
              <Lightbulb className="h-5 w-5 group-hover:animate-pulse" />
              Discover Our Story
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative bg-white/70 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-200/60 hover:shadow-3xl transition-all duration-500"
        >
          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group text-center cursor-pointer">
                  <div
                    className={`inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-gradient-to-br ${stat.bg} mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg`}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-slate-800 mb-2 group-hover:scale-110 transition-all duration-300">
                    {stat.number}
                  </div>
                  <div className="text-slate-600 font-medium">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default AboutUs;
