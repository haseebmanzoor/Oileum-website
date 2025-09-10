// src/components/Sustainability/Sustainability.jsx
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplets, Users, Globe } from "lucide-react";

const sustainabilityData = [
  {
    title: "Energy-efficient Engineering",
    points: [
      "Low-emission system designs",
      "Energy recovery units",
      "Process optimization solutions",
      "Lower fuel and power consumption",
      "Reduced environmental footprint with cost savings",
    ],
    icon: Globe,
    image: "/sustainability/green-energy.jpg",
  },
  {
    title: "Environmentally Safe Materials",
    points: [
      "Waste minimization and recycling",
      "Reduced water consumption",
      "Use of environmentally safe technologies",
      "Cleaner, low-carbon project practices",
    ],
    icon: Leaf,
    image: "/sustainability/eco-future.jpg",
  },
  {
    title: "Supporting Global Green Initiatives",
    points: [
      "Partnering with eco-certified suppliers",
      "Integrating environmental goals into supply chain",
      "Reducing lifecycle emissions",
      "Promoting responsible production practices",
    ],
    icon: Droplets,
    image: "/sustainability/sustainability-banner.jpg",
  },
  {
    title: "Community Development",
    points: [
      "Investing in workforce training",
      "Knowledge transfer to local communities",
      "Local hiring initiatives",
      "Empowering communities for long-term growth",
    ],
    icon: Users,
    image: "/sustainability/green-energy.jpg", // reused image
  },
];

export default function Sustainability() {
  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#030717" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Our <span className="text-green-500">Sustainability</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Oileum, sustainability is at the heart of how we design, build,
            and deliver projects—balancing growth with responsibility to people,
            the environment, and communities.
          </p>
        </div>

        {/* Sustainability Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sustainabilityData.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 group-hover:border-green-200">
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                        <IconComponent className="h-6 w-6 text-green-600" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900">
                        {item.title}
                      </h3>
                    </div>
                    <ul className="list-disc pl-6 text-gray-600 space-y-2 mb-8">
                      {item.points.map((point, i) => (
                        <li key={i}>{point}</li>
                      ))}
                    </ul>
                    <div className="text-gray-300 font-bold text-sm">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
