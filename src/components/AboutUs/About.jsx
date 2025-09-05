// src/components/AboutUs/About.jsx
import React from "react";
import { motion } from "framer-motion";
import { User, Target, Award, Globe } from "lucide-react";

export default function AboutUs() {
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
            About <span className="text-orange-500">Oileum</span>
          </motion.h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Driving global engineering excellence with integrity, innovation,
            and sustainability at the core.
          </p>
        </div>

        <div className="space-y-16">
          {/* Company Profile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 lg:p-14"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                <Award className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                Company Profile
              </h3>
            </div>
            <p className="text-lg text-gray-600 leading-relaxed">
              Oileum is a global provider of integrated engineering and
              mechanical solutions, specializing in delivering safe, reliable,
              and sustainable projects across oil & gas, petrochemicals, energy,
              utilities, and heavy industries. With expertise in Process &
              Mechanical Engineering, Procurement, Construction, Commissioning,
              Start-up, and Chemical & Mechanical Solutions.
            </p>
          </motion.div>

          {/* CEO Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-gray-100 p-10 lg:p-14 relative overflow-hidden"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                <User className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">
                CEO’s Message
              </h3>
            </div>
            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
              <p>
                Oileum offers clients a seamless end-to-end project execution
                framework that ensures every project is executed with precision,
                safety, and sustainability.
              </p>
              <p>
                At Oileum, we believe that engineering is more than design and
                execution—it is the foundation of progress, safety, and
                sustainability. As a trusted EPC services provider, our mission
                is to deliver projects that not only meet technical and
                commercial expectations but also create long-term value for our
                clients, partners, and the communities we serve.
              </p>
              <p>
                Over the years, Oileum has grown into a global engineering
                partner, providing end-to-end solutions in Process & Mechanical
                Engineering, Procurement, Construction, Commissioning, and
                Start-up. This success has been made possible by the dedication
                of our people, the strength of our partnerships, and our
                relentless focus on quality, safety, and innovation.
              </p>
              <p>
                In a rapidly changing industrial landscape, we remain committed
                to sustainability and digital transformation. From adopting
                energy-efficient designs and green procurement practices to
                integrating advanced tools like BIM and digital twin
                technologies, Oileum continues to set new benchmarks in
                engineering excellence.
              </p>
              <p>
                Our guiding principle is clear: deliver with integrity, innovate
                with purpose, and operate with responsibility. With every
                project, we aim to build trust, deliver certainty, and shape a
                sustainable future for generations to come.
              </p>
              <p>
                On behalf of the Oileum family, I thank our clients, employees,
                and partners for their trust and collaboration. Together, we
                will continue to expand boundaries and engineer success—
                globally.
              </p>
            </div>
            <div className="mt-10 text-right">
              <p className="font-bold text-lg text-gray-900">
                Ikram Ullah Wazir
              </p>
              <p className="text-gray-600">Chief Executive Officer</p>
              <p className="text-gray-600">Oileum</p>
            </div>
          </motion.div>

          {/* Our Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-lg border border-gray-100 p-10 lg:p-14"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-orange-100 rounded-xl flex items-center justify-center">
                <Target className="h-7 w-7 text-orange-500" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900">Our Values</h3>
            </div>
            <p className="text-lg text-gray-600 mb-8">
              To be a global leader in engineering and mechanical services,
              setting benchmarks for innovation, reliability, and environmental
              responsibility.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Core Values */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Core Values
                </h4>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                  <li>Safety First</li>
                  <li>Integrity & Reliability</li>
                  <li>Innovation & Technology</li>
                  <li>Global Expertise</li>
                  <li>Customer-Centric Approach</li>
                </ul>
              </div>

              {/* Mission */}
              <div>
                <h4 className="text-xl font-semibold text-gray-900 mb-4">
                  Our Mission
                </h4>
                <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
                  <li>
                    To provide end-to-end EPC and mechanical services with
                    excellence in design, execution, and commissioning.
                  </li>
                  <li>
                    To deliver cost-effective and reliable engineering solutions
                    with an uncompromising focus on safety and quality.
                  </li>
                  <li>
                    To empower clients with chemical and mechanical innovations
                    that maximize productivity and efficiency.
                  </li>
                  <li>
                    To maintain a sustainable approach by integrating
                    eco-friendly practices in every stage of project delivery.
                  </li>
                </ul>
              </div>
            </div>

            {/* Vision */}
            <div className="mt-10">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="h-6 w-6 text-orange-500" />
                <h4 className="text-xl font-semibold text-gray-900">
                  Vision: Global Reach
                </h4>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                With operations spanning across continents, Oileum ensures
                timely, reliable, and compliant services wherever our clients
                need us. Our international presence guarantees local expertise
                with global standards.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
