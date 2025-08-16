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
  Users,
  Award,
  TrendingUp,
  Shield,
  Clock,
  Globe,
  Lightbulb,
  Settings,
  BarChart3,
  Cpu,
} from "lucide-react";

// Enhanced service data with more comprehensive offerings
const servicesData = [
  {
    icon: Wrench,
    title: "Engineering Excellence",
    subtitle: "Advanced Design & Technical Solutions",
    description:
      "End-to-end engineering services with cutting-edge technology and 40+ years of expertise",
    features: [
      "3D Digital Twin Modeling",
      "FEED & Detailed Engineering",
      "Process Optimization",
      "Technical Risk Assessment",
    ],
    stats: { projects: "500+", success: "99.5%", countries: "15+" },
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Package,
    title: "Strategic Procurement",
    subtitle: "Global Supply Chain Excellence",
    description:
      "Optimized procurement strategies with worldwide vendor networks and quality assurance",
    features: [
      "Global Strategic Sourcing",
      "Vendor Qualification & Management",
      "Cost Optimization",
      "Supply Chain Integration",
    ],
    stats: { suppliers: "2000+", savings: "15-25%", delivery: "99%" },
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: Building2,
    title: "Construction Mastery",
    subtitle: "World-Class Project Execution",
    description:
      "Safe, efficient construction execution with zero-incident safety record and proven methodologies",
    features: [
      "Advanced Construction Techniques",
      "Safety Excellence Programs",
      "Quality Assurance Systems",
      "Schedule Optimization",
    ],
    stats: { safety: "0 LTI", ontime: "95%", workforce: "5000+" },
    color: "from-orange-500 to-red-500",
  },
  {
    icon: FlaskRound,
    title: "Chemical Engineering",
    subtitle: "Custom Process Solutions",
    description:
      "Specialized chemical treatment programs and process optimization for maximum efficiency",
    features: [
      "Custom Chemical Formulations",
      "Process Enhancement",
      "Laboratory Testing & Analysis",
      "Environmental Compliance",
    ],
    stats: { efficiency: "30%↑", cost: "20%↓", uptime: "99.2%" },
    color: "from-purple-500 to-indigo-500",
  },
  {
    icon: Cog,
    title: "Operations & Maintenance",
    subtitle: "Lifecycle Asset Management",
    description:
      "Comprehensive O&M services ensuring optimal performance throughout asset lifecycle",
    features: [
      "Predictive Maintenance",
      "24/7 Emergency Response",
      "Performance Monitoring",
      "Asset Life Extension",
    ],
    stats: { uptime: "99.7%", response: "<2hrs", efficiency: "25%↑" },
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Zap,
    title: "Heat Exchanger Services",
    subtitle: "ASME Certified Solutions",
    description:
      "Complete heat exchanger solutions from design to maintenance with ASME compliance",
    features: [
      "ASME Code Compliance",
      "Advanced Repair Techniques",
      "Performance Testing",
      "Efficiency Optimization",
    ],
    stats: { certified: "100%", performance: "98%+", lifetime: "20yrs+" },
    color: "from-pink-500 to-rose-500",
  },
  {
    icon: Droplets,
    title: "Environmental Solutions",
    subtitle: "Sustainable Treatment Systems",
    description:
      "Advanced effluent treatment and environmental solutions for sustainable operations",
    features: [
      "Zero Liquid Discharge",
      "Advanced Treatment Technologies",
      "Environmental Compliance",
      "Sustainability Consulting",
    ],
    stats: { compliance: "100%", reduction: "90%", reuse: "85%" },
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: Target,
    title: "Project Management",
    subtitle: "Excellence in Delivery",
    description:
      "Comprehensive project controls and management from conception to completion",
    features: [
      "Integrated Project Controls",
      "Risk Management",
      "Stakeholder Management",
      "Digital Project Tracking",
    ],
    stats: { ontime: "96%", budget: "98%", quality: "100%" },
    color: "from-violet-500 to-purple-500",
  },
];

const capabilities = [
  {
    icon: Users,
    label: "Expert Team",
    value: "500+ Engineers",
    desc: "Certified professionals",
  },
  {
    icon: Globe,
    label: "Global Reach",
    value: "25+ Countries",
    desc: "Worldwide operations",
  },
  {
    icon: Award,
    label: "Quality Standards",
    value: "ISO 9001:2015",
    desc: "Certified excellence",
  },
  {
    icon: Shield,
    label: "Safety Record",
    value: "Zero Incidents",
    desc: "Industry leading",
  },
  {
    icon: Clock,
    label: "On-Time Delivery",
    value: "96% Success",
    desc: "Proven track record",
  },
  {
    icon: TrendingUp,
    label: "Cost Optimization",
    value: "20% Savings",
    desc: "Average client benefit",
  },
];

function Services() {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState(null);
  const [activeTab, setActiveTab] = useState(0);
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

  return (
    <section
      id="services"
      ref={servicesRef}
      className="relative py-24 overflow-hidden bg-slate-950"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl animate-pulse animation-delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-2 h-32 bg-gradient-to-b from-orange-400/40 to-transparent animate-pulse" />
        <div className="absolute top-40 right-20 w-2 h-24 bg-gradient-to-b from-blue-400/40 to-transparent animate-pulse animation-delay-1000" />
        <div className="absolute bottom-32 right-32 w-2 h-28 bg-gradient-to-t from-purple-400/40 to-transparent animate-pulse animation-delay-2000" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Premium Header Section */}
        <div
          className={`text-center mb-20 transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-6 py-3 mb-8 bg-gradient-to-r from-orange-500/20 to-amber-500/20 backdrop-blur-sm border border-orange-400/30 rounded-full text-orange-300 text-sm font-medium">
            <Star className="w-4 h-4 mr-2 text-orange-400" />
            Comprehensive EPC Solutions • Industry Leading Services
          </div>

          {/* Main Heading */}
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="block">Transforming Energy</span>
            <span className="block bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 bg-clip-text text-transparent">
              Infrastructure Worldwide
            </span>
          </h2>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-slate-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            From concept to commissioning, we deliver integrated solutions that
            drive industrial progress
            <span className="text-white font-medium">
              {" "}
              with unmatched expertise and precision.
            </span>
          </p>

          {/* Capabilities Overview */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={index}
                  className={`bg-slate-900/50 backdrop-blur-sm border border-slate-700/50 rounded-xl p-4 hover:border-orange-400/50 transition-all duration-300 hover:scale-105 transform ${
                    isVisible
                      ? "translate-y-0 opacity-100"
                      : "translate-y-10 opacity-0"
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <Icon className="h-6 w-6 text-orange-400 mb-2 mx-auto" />
                  <div className="text-white font-bold text-lg">
                    {capability.value}
                  </div>
                  <div className="text-slate-400 text-xs font-medium">
                    {capability.label}
                  </div>
                  <div className="text-slate-500 text-xs mt-1">
                    {capability.desc}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Enhanced Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {servicesData.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className={`group relative bg-slate-900/60 backdrop-blur-xl border border-slate-700/50 rounded-2xl p-8 hover:border-orange-400/50 transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer transform ${
                  isVisible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-20 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Hover Glow Effect */}
                <div
                  className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${service.color} blur-xl -z-10`}
                />

                {/* Icon */}
                <div
                  className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl mb-6 bg-gradient-to-br ${service.color} shadow-2xl group-hover:scale-110 transition-transform duration-300`}
                >
                  <Icon className="h-8 w-8 text-white" />
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-orange-400 font-semibold text-sm mb-3">
                    {service.subtitle}
                  </p>
                  <p className="text-slate-300 leading-relaxed text-sm">
                    {service.description}
                  </p>
                </div>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span className="text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 mb-6 p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
                  {Object.entries(service.stats).map(([key, value], idx) => (
                    <div key={idx} className="text-center">
                      <div className="text-white font-bold text-sm">
                        {value}
                      </div>
                      <div className="text-slate-400 text-xs capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <button className="group/btn w-full inline-flex items-center justify-center space-x-2 px-4 py-3 bg-gradient-to-r from-orange-500/10 to-amber-500/10 hover:from-orange-500/20 hover:to-amber-500/20 border border-orange-400/30 hover:border-orange-400/50 rounded-lg text-white font-semibold text-sm transition-all duration-300">
                  <span>Explore Service</span>
                  <ArrowRight className="h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>

                {/* Hover Effects */}
                {hoveredCard === index && (
                  <>
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-orange-400 rounded-full animate-pulse" />
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-amber-400 rounded-full animate-pulse animation-delay-500" />
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Premium CTA Section */}
        <div
          className={`relative bg-gradient-to-br from-slate-900/80 to-slate-800/80 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-12 text-center overflow-hidden transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-20 opacity-0"
          }`}
        >
          {/* Background Effects */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-orange-500/20 to-amber-500/20 rounded-full blur-3xl" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
          </div>

          <div className="relative">
            {/* Icon */}
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 bg-gradient-to-br from-orange-500 to-amber-500 shadow-2xl">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>

            {/* Heading */}
            <h3 className="text-4xl sm:text-5xl font-bold text-white mb-6">
              Ready to Transform Your
              <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
                Energy Infrastructure?
              </span>
            </h3>

            {/* Description */}
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Partner with industry leaders who deliver excellence in every
              phase. Our comprehensive EPC solutions are designed to exceed your
              expectations and drive lasting success.
            </p>

            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="text-3xl font-bold text-orange-400">$2.5B+</div>
                <div className="text-slate-300 text-sm">
                  Project Value Delivered
                </div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="text-3xl font-bold text-green-400">99.5%</div>
                <div className="text-slate-300 text-sm">Success Rate</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="text-3xl font-bold text-blue-400">150+</div>
                <div className="text-slate-300 text-sm">Projects Completed</div>
              </div>
              <div className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/50">
                <div className="text-3xl font-bold text-purple-400">25+</div>
                <div className="text-slate-300 text-sm">Countries Served</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <button className="group inline-flex items-center space-x-3 px-10 py-5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">
                <Target className="h-6 w-6" />
                <span>Start Your Project</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </button>

              <button className="group inline-flex items-center space-x-3 px-10 py-5 bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-white/20 hover:border-orange-400/50 text-white font-bold text-lg rounded-2xl transition-all duration-300 transform hover:scale-105">
                <BarChart3 className="h-6 w-6" />
                <span>View Case Studies</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CSS for custom animations */}
      <style jsx>{`
        .animation-delay-500 {
          animation-delay: 0.5s;
        }
        .animation-delay-1000 {
          animation-delay: 1s;
        }
        .animation-delay-1500 {
          animation-delay: 1.5s;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </section>
  );
}

export default Services;
