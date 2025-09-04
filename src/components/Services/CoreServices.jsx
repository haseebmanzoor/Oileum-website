// src/components/Services/CoreServices.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Package,
  Building2,
  FlaskConical,
} from "lucide-react";
import { Link } from "react-router-dom";

const coreServices = [
  {
    title: "Engineering",
    description:
      "End-to-end design and execution for complex industrial challenges with cutting-edge technology solutions.",
    icon: Wrench,
    image: "/services/core/engineering.jpg",
  },
  {
    title: "Procurement",
    description:
      "Streamlined and transparent supply chain integration with global vendor networks.",
    icon: Package,
    image: "/services/core/procurement.jpg",
  },
  {
    title: "Construction",
    description:
      "Safe, efficient, and modularized field execution with proven methodologies.",
    icon: Building2,
    image: "/services/core/construction.jpg",
  },
  {
    title: "Chemical Solutions",
    description:
      "Custom-formulated treatment programs and industrial cleaning solutions for optimal performance.",
    icon: FlaskConical,
    image: "/services/core/chemical-solutions.jpg",
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
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
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
                        {service.title}
                      </h3>
                    </div>
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
