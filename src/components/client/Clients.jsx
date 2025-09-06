// src/components/client/Clients.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Fuel,
  Factory,
  Zap,
  Droplets,
  Building,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const clientsData = [
  {
    title: "Oil & Gas",
    description: [
      "Upstream exploration and production",
      "Midstream transportation and storage",
      "Downstream refining operations",
    ],
    icon: Fuel,
    image: "/clients/oil-gas.jpg",
  },
  {
    title: "Petrochemicals & Refineries",
    description: [
      "Complex petrochemical processes",
      "Refinery optimization solutions",
      "Advanced catalyst technologies",
    ],
    icon: Factory,
    image: "/clients/petrochemicals.jpg",
  },
  {
    title: "Power Generation & Energy",
    description: [
      "Thermal power plant solutions",
      "Renewable energy systems",
      "Energy storage technologies",
    ],
    icon: Zap,
    image: "/clients/power-generation.jpg",
  },
  {
    title: "Water & Wastewater Treatment",
    description: [
      "Advanced treatment processes",
      "Water recycling systems",
      "Environmental compliance solutions",
    ],
    icon: Droplets,
    image: "/clients/water-treatment.jpg",
  },
  {
    title: "Manufacturing & Heavy Industries",
    description: [
      "Industrial process optimization",
      "Heavy machinery solutions",
      "Manufacturing efficiency systems",
    ],
    icon: Building,
    image: "/clients/manufacturing.jpg",
  },
];

export default function Clients() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Industries We <span className="text-orange-500">Serve</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Oileum provides comprehensive solutions across multiple industries,
            delivering excellence and innovation to drive sustainable growth and
            operational efficiency in every sector we serve.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsData.map((client, index) => {
            const IconComponent = client.icon;
            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 group-hover:border-orange-200">
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={client.image}
                      alt={client.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-orange-500" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {client.title}
                      </h3>
                    </div>
                    <ul className="text-gray-600 mb-8 list-disc pl-5 space-y-2">
                      {client.description.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="flex items-center justify-end">
                      <div className="text-gray-300 font-bold text-sm">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-12 relative overflow-hidden"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8 bg-gradient-to-br from-orange-500 to-amber-500 shadow-xl">
              <Lightbulb className="h-10 w-10 text-white" />
            </div>

            <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
              Trusted Partners in Engineering{" "}
              <span className="text-orange-500">Excellence</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Leading companies rely on Oileum for innovative solutions,
              superior quality, and on-time project delivery — ensuring
              sustainable growth and long-term success.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition"
              >
                Discuss Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
