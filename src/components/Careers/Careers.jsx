// src/components/Careers/Careers.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Phone,
  Globe,
  ArrowRight,
  CheckCircle,
  Briefcase,
  GraduationCap,
  Heart,
  Shield,
  TrendingUp,
  Award,
} from "lucide-react";

const benefitsData = [
  {
    icon: Globe,
    title: "Global Projects",
    description: "Work on international engineering projects",
  },
  {
    icon: GraduationCap,
    title: "Continuous Learning",
    description: "Professional development opportunities",
  },
  {
    icon: Heart,
    title: "Work-Life Balance",
    description: "Flexible schedules and wellness programs",
  },
  {
    icon: Shield,
    title: "Comprehensive Benefits",
    description: "Health insurance and retirement plans",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Clear advancement pathways",
  },
  {
    icon: Award,
    title: "Recognition",
    description: "Performance-based rewards and recognition",
  },
];

export default function Careers() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleEmailSubscription = (e) => {
    e.preventDefault();
    if (!email) return;

    setLoading(true);
    setTimeout(() => {
      setSubscribed(true);
      setLoading(false);
      setEmail("");
    }, 1500);
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
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl font-bold text-white mb-6"
          >
            Join Our <span className="text-orange-500">Team</span>
          </motion.h2>
          <motion.p
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Join the Oileum family and be part of innovative engineering
            projects around the world. Build your career with a company that
            values excellence, innovation, and professional growth.
          </motion.p>
        </div>

        {/* Why Join Us */}
        <div className="mb-20">
          <motion.h3
            animate={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            Why Choose Oileum?
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefitsData.map((benefit, index) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.05, rotate: 1 }}
                  whileTap={{ scale: 0.98 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-orange-500" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">
                    {benefit.title}
                  </h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Email Subscription & Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Email Updates */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: -30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Mail className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Stay Updated</h3>
            </div>

            {subscribed ? (
              <div className="text-center py-6">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">
                  Thank You!
                </h4>
                <p className="text-gray-600">
                  You'll be notified about new career opportunities.
                </p>
              </div>
            ) : (
              <>
                <p className="text-gray-600 mb-6">
                  Subscribe to receive notifications about new job openings and
                  career opportunities at Oileum.
                </p>
                <form onSubmit={handleEmailSubscription} className="space-y-4">
                  <div>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email address"
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center disabled:opacity-50"
                  >
                    {loading ? (
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    ) : (
                      <>
                        Subscribe for Updates
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact & Resume Submission */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 30 }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl shadow-lg p-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                <Briefcase className="h-6 w-6 text-orange-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">Apply Now</h3>
            </div>

            <p className="text-gray-600 mb-6">
              Ready to join our team? Send us your resume and let's discuss how
              you can contribute to our mission.
            </p>

            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-orange-500" />
                <a
                  href="mailto:projects@oileum.ae"
                  className="text-orange-500 font-semibold hover:underline"
                >
                  career@oileum.ae
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-orange-500" />
                <span className="text-gray-700">+971 50 149 2250</span>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-orange-500 mt-1" />
                <span className="text-gray-700">
                  NASMAA Tower, 101, C-1, Garhoud, Dubai-UAE
                </span>
              </div>
            </div>

            <a
              href="mailto:projects@oileum.ae"
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl transition flex items-center justify-center"
            >
              Submit Your Resume
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
