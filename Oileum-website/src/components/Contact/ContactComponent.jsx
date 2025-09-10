// src/components/Contact.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  Globe,
  Send,
  CheckCircle,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        subject: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      value: "+971 50 2250",
      link: "tel:+971502250",
    },
    {
      icon: Mail,
      title: "Email",
      value: "projects@oileum.ae",
      link: "mailto:projects@oileum.ae",
    },
    {
      icon: Globe,
      title: "Website",
      value: "www.oileum.ae",
      link: "https://www.oileum.ae",
    },
    {
      icon: MapPin,
      title: "Address",
      value: "NASMAA Tower, 101, C-1, Garhoud, Dubai-UAE",
      link: "#",
    },
  ];

  return (
    <section
      className="py-24 relative overflow-hidden"
      style={{ backgroundColor: "#030717" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
        {/* Section Header - Always render */}
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In <span className="text-orange-500">Touch</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to start your next engineering project? Our team of experts is
            here to help turn your vision into reality.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <h3 className="text-2xl font-bold text-white mb-4">
              Contact Information
            </h3>
            {contactInfo.map((contact, index) => {
              const IconComponent = contact.icon;
              return (
                <motion.a
                  key={index}
                  href={contact.link}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                  whileHover={{ x: 10 }}
                >
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center group-hover:bg-orange-500/30 transition-colors">
                    <IconComponent className="h-6 w-6 text-orange-500" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-semibold text-white">
                      {contact.title}
                    </h4>
                    <p className="text-gray-300 mb-1">{contact.value}</p>
                  </div>
                </motion.a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Message Sent Successfully!
                  </h3>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-xl"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
                      <MessageSquare className="h-6 w-6 text-orange-500" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">
                      Send us a Message
                    </h3>
                  </div>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        placeholder="Full Name"
                        className="w-full border rounded-xl px-4 py-3"
                      />
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Email"
                        className="w-full border rounded-xl px-4 py-3"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        placeholder="Company Name"
                        className="w-full border rounded-xl px-4 py-3"
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone Number"
                        className="w-full border rounded-xl px-4 py-3"
                      />
                    </div>
                    <input
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      placeholder="Subject"
                      className="w-full border rounded-xl px-4 py-3"
                    />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows="6"
                      placeholder="Message"
                      className="w-full border rounded-xl px-4 py-3 resize-none"
                    />
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-xl"
                    >
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </motion.button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold text-white mb-4">
            Ready to Start Your Project?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+971502250"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white rounded-xl"
            >
              <Phone className="mr-2 h-5 w-5" /> Call Now
            </a>
            <a
              href="mailto:projects@oileum.ae"
              className="inline-flex items-center px-6 py-3 bg-white/20 text-white rounded-xl border border-white/20"
            >
              <Mail className="mr-2 h-5 w-5" /> Email Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
