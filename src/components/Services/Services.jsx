// src/components/Services/Services.jsx
import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wrench,
  Package,
  Building2,
  FlaskRound,
  Cog,
  Zap,
  Droplets,
  Target,
  Lightbulb,
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Engineering Excellence",
    description:
      "End-to-end engineering services with cutting-edge technology and 40+ years of expertise.",
    icon: Wrench,
    image: "/services/engineering.jpg",
  },
  {
    title: "Strategic Procurement",
    description:
      "Optimized procurement strategies with worldwide vendor networks and quality assurance.",
    icon: Package,
    image: "/services/procurement.jpg",
  },
  {
    title: "Construction Mastery",
    description:
      "Safe, efficient construction execution with zero-incident safety record and proven methodologies.",
    icon: Building2,
    image: "/services/construction.jpg",
  },
  {
    title: "Chemical Engineering",
    description:
      "Specialized chemical treatment programs and process optimization for maximum efficiency.",
    icon: FlaskRound,
    image: "/services/chemical-solutions.jpg",
  },
  {
    title: "Operations & Maintenance",
    description:
      "Comprehensive O&M services ensuring optimal performance throughout asset lifecycle.",
    icon: Cog,
    image: "/services/maintenance.jpg",
  },
  {
    title: "Heat Exchanger Services",
    description:
      "Complete heat exchanger solutions from design to maintenance with ASME compliance.",
    icon: Zap,
    image: "/services/heat-exchanger.jpg",
  },
  {
    title: "Environmental Solutions",
    description:
      "Advanced effluent treatment and environmental solutions for sustainable operations.",
    icon: Droplets,
    image: "/services/environmental.jpg",
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project controls and management from conception to completion.",
    icon: Target,
    image: "/services/project-management.jpg",
  },
];

export default function Services() {
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
            Our <span className="text-orange-500">Services</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive EPC solutions that deliver excellence from concept to
            commissioning across the energy sector.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
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
                        to="/contact"
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
              Ready to Transform Your{" "}
              <span className="text-orange-500">Energy Infrastructure?</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Partner with industry leaders who deliver excellence in every
              phase. Our comprehensive EPC solutions are designed to exceed your
              expectations and drive lasting success.
            </p>

            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-flex items-center px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-xl font-semibold shadow-lg transition"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
