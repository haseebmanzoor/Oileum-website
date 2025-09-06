// src/components/Clients/Clients.jsx
import React from "react";
import { motion } from "framer-motion";
import { Factory, Flame, Zap, Droplets, Cog } from "lucide-react";

const industries = [
  {
    title: "Oil & Gas",
    description: "Upstream, Midstream, and Downstream operations",
    icon: Flame,
  },
  {
    title: "Petrochemicals & Refineries",
    description: "Integrated solutions for petrochemical plants and refineries",
    icon: Factory,
  },
  {
    title: "Power Generation & Energy",
    description: "Reliable services for energy and power infrastructure",
    icon: Zap,
  },
  {
    title: "Water & Wastewater Treatment",
    description: "Sustainable treatment solutions for water management",
    icon: Droplets,
  },
  {
    title: "Manufacturing & Heavy Industries",
    description:
      "Comprehensive support for industrial and manufacturing plants",
    icon: Cog,
  },
];

const Industries = () => {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Industries <span className="text-orange-500">We Serve</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oileum provides solutions across multiple industries with
            world-class expertise and innovative approaches tailored to each
            sector.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {industries.map((industry, index) => {
            const Icon = industry.icon;
            return (
              <motion.div
                key={index}
                className="bg-white rounded-3xl shadow-lg hover:shadow-2xl border border-gray-100 hover:border-orange-200 transition-all duration-500 p-8 flex flex-col items-start"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <Icon className="h-7 w-7 text-orange-500" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {industry.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {industry.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
