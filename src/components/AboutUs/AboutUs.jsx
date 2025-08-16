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
      <div className="space-y-4">
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
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 shadow-lg shadow-orange-500/25">
            <Sparkles className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Transforming Energy Infrastructure
            <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mt-2">
              Across MENA & South Asia
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Four decades of engineering excellence delivering world-class
            solutions in challenging environments.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] ring-1 ring-slate-700/50">
              <img
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12"
                alt="OILEUM Industrial Operations"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <div className="w-20 h-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300 hover:bg-white/20">
                  <Play className="h-8 w-8 text-white ml-1" />
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-orange-500/30 rounded-xl">
                <span className="text-orange-400 text-sm font-semibold">
                  Since 1983
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div>
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
                        : "bg-slate-800/50 backdrop-blur-sm text-slate-300 hover:bg-slate-700/50 border border-slate-700/60 hover:border-orange-500/30"
                    }`}
                  >
                    <Icon
                      className={`h-4 w-4 ${
                        activeTab === tab.id ? "text-white" : "text-slate-400"
                      }`}
                    />
                    {tab.label}
                  </button>
                );
              })}
            </div>

            {/* Tab Content */}
            <div className="mb-10 p-8 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-xl">
              {tabContents[activeTab]}
            </div>

            {/* Achievements */}
            <div className="mb-10">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
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
                      className="group flex items-start gap-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-orange-500/30 hover:bg-slate-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50"
                    >
                      <div className="w-10 h-10 bg-gradient-to-br from-slate-700/50 to-slate-600/50 group-hover:from-orange-500/20 group-hover:to-orange-600/20 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 border border-slate-600/30 group-hover:border-orange-500/30">
                        <Icon className="h-5 w-5 text-slate-400 group-hover:text-orange-400" />
                      </div>
                      <span className="text-slate-300 font-medium group-hover:text-slate-200 transition-colors leading-relaxed">
                        {a.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA */}
            <button className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 border border-orange-400/20">
              <Lightbulb className="h-5 w-5 group-hover:animate-pulse" />
              Discover Our Story
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-700/50 hover:shadow-3xl hover:border-slate-600/60 transition-all duration-500">
          {/* Stats Header */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">
              Proven Track Record
            </h3>
            <p className="text-slate-400 max-w-2xl mx-auto">
              Numbers that speak to our commitment to excellence and our impact
              across the region
            </p>
          </div>

          <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} className="group text-center cursor-pointer">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-3xl bg-slate-700/30 border border-slate-700/50 mb-6 group-hover:scale-110 transition-all duration-300 shadow-lg backdrop-blur-sm group-hover:border-orange-500/30">
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text group-hover:text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
