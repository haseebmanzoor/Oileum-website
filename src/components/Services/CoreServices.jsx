// src/components/Services/CoreServices.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Package,
  Building2,
  FlaskConical,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const coreServices = [
  {
    title: "Engineering",
    description:
      "End-to-end design and execution for complex industrial challenges with cutting-edge technology solutions.",
    icon: Wrench,
    color: "from-blue-500 to-blue-600",
    hoverColor: "group-hover:from-blue-600 group-hover:to-blue-700",
  },
  {
    title: "Procurement",
    description:
      "Streamlined and transparent supply chain integration with global vendor networks.",
    icon: Package,
    color: "from-emerald-500 to-emerald-600",
    hoverColor: "group-hover:from-emerald-600 group-hover:to-emerald-700",
  },
  {
    title: "Construction",
    description:
      "Safe, efficient, and modularized field execution with proven methodologies.",
    icon: Building2,
    color: "from-orange-500 to-orange-600",
    hoverColor: "group-hover:from-orange-600 group-hover:to-orange-700",
  },
  {
    title: "Chemical Solutions",
    description:
      "Custom-formulated treatment programs and industrial cleaning solutions for optimal performance.",
    icon: FlaskConical,
    color: "from-purple-500 to-purple-600",
    hoverColor: "group-hover:from-purple-600 group-hover:to-purple-700",
  },
];

export default function CoreServices() {
  return (
    <section className="bg-gradient-to-br from-gray-50 via-white to-gray-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6"
          >
            Core <span className="text-orange-500">Services</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our specialized services form the foundation of Oileum’s commitment
            to engineering excellence across the energy sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {coreServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ y: -12, scale: 1.02 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 group-hover:border-orange-200">
                  <div className="relative p-8 pb-6">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color} ${service.hoverColor}`}
                    ></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-8 translate-x-8"></div>
                    <div className="absolute bottom-0 left-0 w-20 h-20 bg-white/5 rounded-full -translate-x-4 translate-y-4"></div>
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all">
                        <IconComponent className="h-8 w-8 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="p-8 pt-4">
                    <p className="text-gray-600 mb-8">{service.description}</p>
                    <div className="flex items-center justify-between">
                      <Link
                        to="/services"
                        className="inline-flex items-center text-orange-500 font-semibold hover:text-orange-600"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
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

        {/* Button to full services page */}
        <div className="mt-16 text-center">
          <Link to="/services">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
