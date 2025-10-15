import React from "react";
import { Link } from "react-router-dom";

const services = [
  { title: "Engineering Services", slug: "engineering-services" },
  {
    title: "Procurement & Material Management",
    slug: "procurement-material-management",
  },
  { title: "Construction & Installation", slug: "construction-installation" },
  {
    title: "Commissioning & Start-Up Support",
    slug: "commissioning-startup-support",
  },
  {
    title: "Chemical Process & Operational Solutions",
    slug: "chemical-process-operational-solutions",
  },
  {
    title: "Mechanical & Maintenance Solutions",
    slug: "mechanical-maintenance-solutions",
  },
  {
    title: "Gas & Steam Turbine Mechanical Maintenance and Services",
    slug: "turbine-maintenance",
  },
  { title: "Equipment & Parts Supplies", slug: "equipment-parts-supplies" },
  {
    title: "Project Management & Project Consultancy",
    slug: "project-management-consultancy",
  },
  {
    title: "Environmental & Safety Solutions",
    slug: "environmental-safety-solutions",
  },
  {
    title: "Heat Exchanger Design & Fabrication Services",
    slug: "heat-exchanger-design-fabrication",
  },
  {
    title: "Pipeline Engineering, Construction & Integrity Services",
    slug: "piping-services",
  },
  {
    title: "Chemical Cleaning, Flushing & Lube Oil Flushing System",
    slug: "chemical-cleaning",
  },
];

const ServicesPopup = ({ open, onClose }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-[9999] p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-3xl w-full max-w-2xl shadow-2xl relative flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header - Fixed */}
        <div className="px-8 pt-8 pb-6 border-b border-gray-100">
          <button
            onClick={onClose}
            className="absolute top-6 right-6 w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-100 text-gray-400 hover:text-gray-600 transition-all"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <h2 className="text-3xl font-semibold text-gray-900 mb-2">
            Our Services
          </h2>
          <p className="text-sm text-gray-500">
            Comprehensive solutions for refinery & oil gas operations
          </p>
        </div>

        {/* Scrollable Services List */}
        <div className="overflow-y-auto max-h-[60vh] px-8 py-4">
          <div className="space-y-1">
            {services.map((service, idx) => (
              <Link
                key={idx}
                to={`/services/${service.slug}`}
                onClick={onClose}
                className="group flex items-center justify-between px-4 py-3.5 rounded-xl transition-all duration-200 hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 border border-transparent hover:border-orange-100"
              >
                <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-orange-500 transition-colors"></div>
                  <span className="text-sm font-medium text-gray-700 group-hover:text-gray-900">
                    {service.title}
                  </span>
                </div>
                <svg
                  className="w-4 h-4 text-gray-400 group-hover:text-orange-500 transform group-hover:translate-x-1 transition-all"
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
              </Link>
            ))}
          </div>
        </div>

        {/* Footer - Optional */}
        {/* <div className="px-8 py-4 border-t border-gray-100 bg-gray-50">
          <p className="text-xs text-gray-500 text-center">
            Need help choosing?{" "}
            <span className="text-orange-600 hover:text-orange-700 cursor-pointer font-medium">
              Contact our team
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default ServicesPopup;
