// src/components/AboutUs/About.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2,
  Factory,
  Award,
  Globe2,
  Clock,
  Target,
  ChevronRight,
} from "lucide-react";

const About = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const tabContents = {
    overview: (
      <div className="space-y-4">
        <p className="text-slate-300 text-lg leading-relaxed">
          OILEUM is a UAE-based industrial services company specializing in
          downstream oil & gas solutions across the Middle East, North Africa,
          and South Asia.
        </p>
        <p className="text-slate-400 leading-relaxed">
          With a strong footprint in Iraq, Libya, Qatar, Saudi Arabia, and
          Pakistan, we deliver high-integrity engineering, procurement, and
          technical services for refineries and energy infrastructure.
        </p>
      </div>
    ),
    history: (
      <div className="space-y-4">
        <p className="text-slate-300 text-lg leading-relaxed">
          Oileum began as a modest engineering venture and has since evolved
          into one of the most respected EPC companies across MENA & South Asia.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Backed by UDKS, a globally recognized construction group, our four
          decades of growth reflect innovation, resilience, and technical
          excellence in delivering complex industrial projects.
        </p>
      </div>
    ),
    mission: (
      <div className="space-y-4">
        <p className="text-slate-300 text-lg leading-relaxed">
          Our mission is to deliver world-class engineering, procurement, and
          construction services that drive industrial progress while ensuring
          safety, sustainability, and long-term value.
        </p>
        <p className="text-slate-400 leading-relaxed">
          Through technical expertise, innovation, and trusted partnerships,
          Oileum strives to be a catalyst for industrial growth in the most
          challenging environments.
        </p>
      </div>
    ),
  };

  return (
    <div className="bg-white">
      {/* Banner / Hero */}
      <div className="relative h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/logos/refinery-night.jpg')` }}
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-5xl lg:text-7xl font-bold text-white text-center"
        >
          About <span className="text-orange-500">Oileum</span>
        </motion.h1>
      </div>

      {/* Company Overview with Tabs + Achievements */}
      <section id="overview" className="relative bg-slate-950 py-24">
        <div className="container mx-auto px-6 lg:px-20 grid lg:grid-cols-2 gap-16 items-center">
          {/* Image */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] ring-1 ring-slate-700/50">
              <img
                src="/logos/About-us.jpg"
                alt="OILEUM Industrial Services"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>
              <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-orange-500/30 rounded-xl">
                <span className="text-orange-400 text-sm font-semibold">
                  Since 1983
                </span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Company <span className="text-orange-500">Overview</span>
              </h2>
              <p className="text-slate-400 max-w-xl">
                For over four decades, OILEUM has delivered downstream oil & gas
                solutions across MENA & South Asia, backed by world-class EPC
                expertise and trusted partnerships.
              </p>
            </div>

            {/* Tabs */}
            <div>
              <div className="flex space-x-4 border-b border-slate-700">
                {["overview", "history", "mission"].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                      activeTab === tab
                        ? "text-orange-500 border-b-2 border-orange-500"
                        : "text-slate-400 hover:text-white"
                    }`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </div>
              <div className="mt-6">{tabContents[activeTab]}</div>
            </div>

            {/* Achievements */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 pt-6">
              {[
                {
                  icon: <Globe2 className="w-6 h-6 text-orange-400" />,
                  title: "5+ Regions",
                  desc: "Trusted presence across MENA & South Asia",
                },
                {
                  icon: <Clock className="w-6 h-6 text-orange-400" />,
                  title: "40+ Years",
                  desc: "Proven track record of delivery since 1983",
                },
                {
                  icon: <Factory className="w-6 h-6 text-orange-400" />,
                  title: "Downstream Focus",
                  desc: "Specialized in refinery & industrial services",
                },
                {
                  icon: <Award className="w-6 h-6 text-orange-400" />,
                  title: "Trusted Partner",
                  desc: "Backed by UDKS global EPC group",
                },
                {
                  icon: <Target className="w-6 h-6 text-orange-400" />,
                  title: "Client First",
                  desc: "Proven record of reliable partnerships",
                },
                {
                  icon: <Building2 className="w-6 h-6 text-orange-400" />,
                  title: "Industrial Growth",
                  desc: "Catalyst for sustainable development",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-slate-900/50 rounded-xl border border-slate-800 hover:border-orange-500/40 transition-all"
                >
                  {item.icon}
                  <h4 className="mt-3 font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-slate-400 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Legacy */}
      <section id="legacy" className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-800 mb-6"
          >
            Our Legacy
          </motion.h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed mb-16">
            Since our inception in 1983, Oileum has built a legacy of trust,
            innovation, and engineering excellence. Our decades of expertise
            have empowered us to take on the most challenging projects while
            maintaining the highest standards of safety and quality.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                year: "1983",
                title: "Foundation",
                text: "Oileum was founded with a vision to redefine engineering in the energy sector.",
              },
              {
                year: "2000s",
                title: "Expansion",
                text: "Expanded into multiple MENA countries with a strong operational presence.",
              },
              {
                year: "Today",
                title: "Excellence",
                text: "Recognized as a trusted partner delivering large-scale EPC projects globally.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100"
              >
                <div className="text-orange-500 text-3xl font-bold mb-4">
                  {item.year}
                </div>
                <h3 className="text-xl font-bold text-slate-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-slate-600">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section id="learn-more" className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-800 mb-6">
            Why Choose Oileum
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Our values define who we are and how we deliver on our commitments.
            At Oileum, every project reflects our dedication to quality,
            innovation, and sustainability.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              title: "Integrity",
              desc: "We deliver projects with transparency and trust.",
            },
            {
              title: "Innovation",
              desc: "Pioneering solutions for a sustainable energy future.",
            },
            {
              title: "Excellence",
              desc: "Uncompromising quality in every detail of our work.",
            },
            {
              title: "Sustainability",
              desc: "Committed to environmentally responsible practices.",
            },
          ].map((value, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="bg-slate-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all"
            >
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                {value.title}
              </h3>
              <p className="text-slate-600">{value.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-orange-500 py-20 text-center">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-6"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Build the Future with Oileum?
          </h2>
          <p className="text-lg text-white/90 mb-8">
            Partner with us on your next project and experience the Oileum
            difference.
          </p>
          <button className="inline-flex items-center justify-center px-8 py-4 bg-white text-orange-600 rounded-xl font-semibold text-lg shadow-md hover:bg-slate-100 transition-all">
            Contact Us <ChevronRight className="ml-2 h-5 w-5" />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default About;
