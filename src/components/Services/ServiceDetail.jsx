import React from "react";
import { useParams, Link } from "react-router-dom";
import servicesData from "../../data/servicesData";
import serviceDetails from "../../data/serviceDetails/index.js";

const ServiceDetail = () => {
  const { slug } = useParams();
  const detail = serviceDetails[slug];
  const meta = servicesData.find((s) => s.slug === slug);

  if (!detail && !meta) {
    return (
      <div className="container mx-auto px-6 pt-28 pb-20 text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          Service Not Found
        </h1>
        <p className="text-gray-600 mb-6">
          The service you’re looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/services"
          className="text-amber-500 hover:text-amber-600 font-medium"
        >
          ← Back to All Services
        </Link>
      </div>
    );
  }

  const title = detail?.title || meta?.title;
  const heroImage =
    detail?.heroImage || meta?.image || "/assets/images/services/default.jpg";

  return (
    <div className="container mx-auto px-6 pt-28 pb-20">
      <Link
        to="/services"
        className="text-amber-500 hover:text-amber-600 font-medium"
      >
        ← Back to All Services
      </Link>

      <div className="mt-6">
        {heroImage && (
          <div className="w-full h-56 md:h-96 rounded-2xl overflow-hidden shadow-md">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
        )}

        <h1 className="text-4xl font-bold text-gray-900 mt-6">{title}</h1>

        {detail?.shortDescription ? (
          <p className="mt-4 text-lg text-gray-700">
            {detail.shortDescription}
          </p>
        ) : (
          meta?.description && (
            <p className="mt-4 text-lg text-gray-700">{meta.description}</p>
          )
        )}

        {detail?.sections?.map((section, i) => (
          <section key={i} className="mt-8">
            <h2 className="text-2xl font-semibold mb-3">{section.heading}</h2>
            {Array.isArray(section.content) ? (
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                {section.content.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-700 whitespace-pre-line">
                {section.content}
              </p>
            )}
          </section>
        ))}
      </div>
    </div>
  );
};

export default ServiceDetail;
