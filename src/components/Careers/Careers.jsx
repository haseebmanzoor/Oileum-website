// src/components/Careers/Careers.jsx
import React from "react";

const Careers = () => {
  return (
    <section className="bg-white text-gray-900 py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-bold mb-6">Careers</h2>
        <p className="text-lg mb-10">
          Join the Oileum family and be part of innovative engineering projects
          around the world.
        </p>

        {/* Opportunities */}
        <div className="text-left max-w-3xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold mb-4">Opportunities in:</h3>
          <ul className="list-disc list-inside space-y-2 text-lg">
            <li>Engineering &amp; Design</li>
            <li>Procurement &amp; Supply Chain</li>
            <li>Commissioning &amp; Operations</li>
            <li>Mechanical Maintenance &amp; Service</li>
          </ul>
        </div>

        {/* Resume submission */}
        <p className="text-lg font-medium">
          Submit Your Resume at{" "}
          <span className="text-orange-500">careers@oileum.ae</span>
        </p>
      </div>
    </section>
  );
};

export default Careers;
