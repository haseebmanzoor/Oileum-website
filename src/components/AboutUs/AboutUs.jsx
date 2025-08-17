import React, { useState } from "react";
import { Building2, Factory, Award, Globe2, Clock, Target } from "lucide-react";

const AboutUs = () => {
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
    <section id="about" className="relative bg-slate-950 py-24">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Section */}
          <div className="relative group">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 group-hover:scale-[1.02] ring-1 ring-slate-700/50">
              <img
                src="/logos/About-us.jpg"
                alt="OILEUM Industrial Services"
                className="w-full h-96 lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/30 to-transparent"></div>

              {/* Floating Badge */}
              <div className="absolute top-6 left-6 px-4 py-2 bg-slate-900/80 backdrop-blur-sm border border-orange-500/30 rounded-xl">
                <span className="text-orange-400 text-sm font-semibold">
                  Since 1983
                </span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                About <span className="text-orange-500">OILEUM</span>
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
      </div>
    </section>
  );
};

export default AboutUs;
