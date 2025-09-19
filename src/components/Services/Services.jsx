// src/components/Services/Services.jsx
import React, { useState } from "react";
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
  Settings,
  Plus,
  Minus,
} from "lucide-react";
import { Link } from "react-router-dom";

const servicesData = [
  {
    title: "Engineering Services",
    shortDesc:
      "Comprehensive engineering solutions from design to implementation",
    description: [
      "Structural & Civil Engineering Design",
      "Mechanical Static & Rotating Equipment Engineering Design",
      "Electrical & Instrumentation Engineering",
      "Front-End Engineering Design (FEED) & Detailed Engineering",
      "Project Support & Technical Consultancy",
      "Process Simulation, Optimization & Energy Studies",
      "Process Modification & Test Run Studies",
      "Piping & Instrumentation Diagrams (P&IDs) & Documentation",
      "Advanced Tools & Digital Engineering",
    ],
    icon: Wrench,
    image: "/services/engineering.jpg",
    gradient: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    title: "Procurement & Material Management",
    shortDesc: "Strategic sourcing and comprehensive supply chain solutions",
    description: [
      "Strategic Sourcing & Supplier Management",
      "Supplier Evaluation & Development",
      "Inventory & Material Management",
      "Comprehensive Logistics Management & Supply Chain Optimization",
      "Cost-Effective Procurement & Contracting",
      "Quality Assurance & Inspection",
      "Advanced Material Tracking",
      "Inventory & Storage Optimization",
    ],
    icon: Package,
    image: "/services/procurement.jpg",
    gradient: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    title: "Construction & Installation",
    shortDesc: "Complete construction services with precision and safety",
    description: [
      "Mechanical, Piping & Structural Installation",
      "Civil & Architectural Works",
      "Equipment Erection & Alignment",
      "Fabrication & Assembly",
      "Pre-Commissioning Support",
      "Project Management & Supervision",
      "Safety & Compliance",
      "Turnkey Solutions",
      "Integration & Coordination",
    ],
    icon: Building2,
    image: "/services/construction.jpg",
    gradient: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    iconColor: "text-orange-600",
  },
  {
    title: "Commissioning & Start-Up Support",
    shortDesc: "Expert commissioning and seamless start-up operations",
    description: [
      "Pre-Commissioning Activities",
      "Equipment Calibration & Functional Testing",
      "System Integration & Performance Validation",
      "Operational Readiness & Handover",
      "Start-Up Support",
      "Process Optimization During Start-Up",
      "Training & Performance Test Run",
    ],
    icon: Settings,
    image: "/services/commissioning.jpg",
    gradient: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    iconColor: "text-purple-600",
  },
  {
    title: "Chemical Process & Operational Solutions",
    shortDesc: "Advanced process optimization and operational excellence",
    description: [
      "Process Design & Optimization",
      "Process Troubleshooting & Improvement",
      "Plant Operation Support",
      "Process Safety & Risk Management",
      "Process Monitoring & Control",
      "Chemical Reaction & Unit Studies",
      "Technical Documentation & SOPs",
      "Energy & Sustainability Solutions",
      "Chemical cleaning and system flushing solutions",
      "Lube Oil Flushing Services",
    ],
    icon: FlaskRound,
    image: "/services/chemical-solutions.jpg",
    gradient: "from-red-500 to-red-600",
    bgColor: "bg-red-50",
    iconColor: "text-red-600",
  },
  {
    title: "Mechanical & Maintenance Solutions",
    shortDesc: "Comprehensive maintenance services for optimal performance",
    description: [
      "Preventive & Predictive Maintenance",
      "Rotating Equipment Maintenance",
      "Static Equipment Maintenance",
      "Equipment Installation & Commissioning Support",
      "Maintenance Planning & Optimization",
      "Mechanical Fabrication & Repairs",
      "Condition Monitoring & Diagnostics",
      "Spare Parts Management",
    ],
    icon: Cog,
    image: "/services/maintenance.jpg",
    gradient: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    iconColor: "text-indigo-600",
  },
  {
    title: "Equipment & Parts Supplies",
    shortDesc: "Premium equipment supply with comprehensive support",
    description: [
      "Premium supply of pumps, compressors, valves, pipelines, turbines, motors, and control systems meeting API, ASME, IEC & ISO standards",
      "Refinery-specific equipment",
      "Comprehensive Equipment Supply & Critical Spare Parts",
      "Quality Assurance & Certification",
      "Cost-optimized sourcing strategies",
      "Customized Supply Packages",
      "Strategic spare parts management programs",
      "Logistics & Delivery Support",
      "Comprehensive aftermarket support & Technical Assistance",
    ],
    icon: Lightbulb,
    image: "/services/equipment-supply.jpg",
    gradient: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    iconColor: "text-yellow-600",
  },
  {
    title: "Project Management & Project Consultancy",
    shortDesc: "End-to-end project management and expert consultancy services",
    description: [
      "Comprehensive Project Planning",
      "Project Feasibility Studies",
      "Cost Estimation & Budget Management",
      "Risk Assessment & Mitigation",
      "Quality Assurance & Compliance",
      "Multi-Discipline Coordination",
      "Contract Management & Procurement Oversight",
      "Monitoring & Reporting",
      "Technical Consultancy & Advisory Services",
    ],
    icon: Target,
    image: "/services/project-management.jpg",
    gradient: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    iconColor: "text-teal-600",
  },
  {
    title: "Environmental & Safety Solutions",
    shortDesc: "Comprehensive environmental compliance and safety management",
    description: [
      "Environmental Compliance & Audits",
      "Pollution Control & Waste Management",
      "Health, Safety & Environmental (HSE) Programs",
      "Risk Assessment & Hazard Analysis",
      "Emergency Response Planning",
      "Sustainable Practices & Energy Efficiency",
      "Environmental Monitoring & Reporting",
      "Workplace Safety Management",
      "Work Permit Systems",
      "Safety Studies Like HAZOP, SIL",
    ],
    icon: Droplets,
    image: "/services/environmental.jpg",
    gradient: "from-cyan-500 to-cyan-600",
    bgColor: "bg-cyan-50",
    iconColor: "text-cyan-600",
  },
  {
    title: "Heat Exchanger Design & Fabrication Services",
    shortDesc: "Custom heat exchanger solutions with expert fabrication",
    description: [
      "Custom Design Solutions",
      "Thermal & Mechanical Analysis",
      "Material Selection & Compatibility",
      "Fabrication & Assembly",
      "Quality Assurance & Testing",
      "Performance Optimization",
      "Chemical and Maintenance Cleaning Services",
      "Compliance with Standards",
      "Technical Consultancy & Support",
    ],
    icon: Zap,
    image: "/services/heat-exchanger.jpg",
    gradient: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    iconColor: "text-pink-600",
  },
];

export default function Services() {
  const [expandedCard, setExpandedCard] = useState(null);

  const toggleCard = (index) => {
    setExpandedCard(expandedCard === index ? null : index);
  };

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
            Our <span className="text-orange-500">Services</span>
          </motion.h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            At Oileum, we deliver complete Engineering, Procurement,
            Construction, and Commissioning (EPCC) solutions for the energy and
            industrial sectors. Our integrated approach ensures safe, efficient,
            and cost-effective project execution.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {servicesData.map((service, index) => {
            const IconComponent = service.icon;
            const isExpanded = expandedCard === index;

            return (
              <motion.div
                key={index}
                className="group cursor-pointer"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                layout
              >
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden h-full border border-gray-100 group-hover:border-orange-200">
                  {/* Image */}
                  <div className="h-40 w-full overflow-hidden relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-t ${service.gradient} opacity-20`}
                    ></div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-4">
                      <div
                        className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center`}
                      >
                        <IconComponent
                          className={`h-6 w-6 ${service.iconColor}`}
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-gray-900 leading-tight">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Short Description */}
                    <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    {/* Expandable Content */}
                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? "auto" : "0" }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <ul className="text-gray-600 mb-4 space-y-2.5">
                        {service.description.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <div
                              className={`w-1.5 h-1.5 ${service.iconColor.replace(
                                "text-",
                                "bg-"
                              )} rounded-full mt-2 mr-3 flex-shrink-0`}
                            ></div>
                            <span className="text-xs leading-relaxed text-gray-700">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>

                    {/* Action Buttons */}
                    <div className="flex items-center justify-between gap-3">
                      <button
                        onClick={() => toggleCard(index)}
                        className={`flex items-center text-xs font-semibold px-3 py-2 rounded-lg transition-all duration-200 ${service.iconColor} hover:bg-gray-50`}
                      >
                        {isExpanded ? (
                          <>
                            <Minus className="h-3 w-3 mr-1" />
                            Show Less
                          </>
                        ) : (
                          <>
                            <Plus className="h-3 w-3 mr-1" />
                            View Details
                          </>
                        )}
                      </button>

                      <Link
                        to="/contact"
                        className={`inline-flex items-center ${service.iconColor} font-semibold hover:opacity-80 text-xs`}
                      >
                        Get Quote
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>

                    {/* Card Number */}
                    <div className="absolute top-4 right-4">
                      <div className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm">
                        <span className="text-xs font-bold text-gray-600">
                          {String(index + 1).padStart(2, "0")}
                        </span>
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
              Start Your Project with{" "}
              <span className="text-orange-500">Oileum</span>
            </h3>
            <p className="text-lg text-gray-600 mb-10 max-w-3xl mx-auto leading-relaxed">
              Oileum specializes in end-to-end EPC services, combining
              engineering expertise, reliable procurement, and precision
              construction. We deliver projects that are safe, efficient, and
              built for long-term performance.
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
