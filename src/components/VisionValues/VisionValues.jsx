import React from "react";
import { Target, Handshake, Lightbulb, Leaf } from "lucide-react";

const values = [
  {
    icon: <Target className="h-10 w-10 text-amber-400" />,
    title: "Our Vision",
    desc: "To be the preferred multinational EPC company trusted for building lasting relationships with clients, employees, and partners.",
  },
  {
    icon: <Handshake className="h-10 w-10 text-amber-400" />,
    title: "Integrity",
    desc: "We conduct business with transparency, fairness, and accountability in every project we deliver.",
  },
  {
    icon: <Lightbulb className="h-10 w-10 text-amber-400" />,
    title: "Innovation",
    desc: "Constantly evolving with new technologies to provide efficient, sustainable, and impactful solutions.",
  },
  {
    icon: <Leaf className="h-10 w-10 text-amber-400" />,
    title: "Sustainability",
    desc: "Committed to safety, environmental responsibility, and long-term value creation.",
  },
];

function VisionValues() {
  return (
    <section className="relative py-24 px-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-amber-500/40 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-600/30 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl mb-6 shadow-lg shadow-amber-500/40">
            <Target className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            Vision & Values
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our core principles that drive excellence in every project we
            deliver
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((item, index) => (
            <div
              key={index}
              className="group relative bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 hover:border-amber-400/40 transition-all duration-500 hover:shadow-xl hover:shadow-amber-500/20 hover:-translate-y-2"
            >
              {/* Gradient hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/0 to-orange-600/0 group-hover:from-amber-500/10 group-hover:to-orange-600/10 rounded-3xl transition-all duration-500"></div>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon container */}
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-slate-800 to-slate-700 group-hover:from-amber-500/20 group-hover:to-orange-500/20 rounded-2xl mb-6 transition-all duration-500 group-hover:scale-110">
                  <div className="transition-transform duration-500 group-hover:rotate-12">
                    {item.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed text-base group-hover:text-slate-100 transition-colors duration-300">
                  {item.desc}
                </p>

                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full group-hover:w-16 transition-all duration-500"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium hover:from-orange-600 hover:to-amber-600 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/30 cursor-pointer">
            <span>Learn More About Our Journey</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VisionValues;
