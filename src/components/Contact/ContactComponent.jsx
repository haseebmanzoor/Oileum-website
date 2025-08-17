import React, { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Building2,
  User,
  CheckCircle,
  Globe,
  ArrowRight,
  Sparkles,
} from "lucide-react";

function ContactComponent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    message: "",
    timeline: "",
    budget: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: ["+971 4 123 4567", "+971 50 123 4567"],
      gradient: "from-orange-500 to-orange-600",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["contact@oileum.com", "projects@oileum.com"],
      gradient: "from-blue-500 to-blue-600",
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Dubai Investment Park", "Dubai, UAE"],
      gradient: "from-emerald-500 to-emerald-600",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Fri: 8:00 - 18:00", "Sat: 9:00 - 14:00"],
      gradient: "from-purple-500 to-purple-600",
    },
  ];

  const projectTypes = [
    "EPC Solutions",
    "Engineering Design",
    "Construction Services",
    "Procurement",
    "Chemical Engineering",
    "Heat Exchanger Services",
    "Environmental Solutions",
    "Operations & Maintenance",
    "Other",
  ];

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/10 to-amber-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-purple-500/5 to-pink-500/5 rounded-full blur-3xl"></div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-800/20 to-transparent opacity-40">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          ></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl mb-6 shadow-lg shadow-orange-500/25">
            <MessageSquare className="h-8 w-8 text-white" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to Transform Your
            <span className="block bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent mt-2">
              Energy Infrastructure?
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            Partner with industry leaders who deliver excellence in every phase.
            Let's discuss your next project.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Contact Info - Left Side */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-700/50">
              <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-8 h-8 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center shadow-lg shadow-emerald-500/25">
                  <Globe className="h-4 w-4 text-white" />
                </div>
                Get in Touch
              </h3>

              {contactInfo.map((info, i) => {
                const Icon = info.icon;
                return (
                  <div
                    key={i}
                    className="group flex items-start gap-4 p-5 bg-slate-800/30 backdrop-blur-sm rounded-xl border border-slate-700/50 hover:border-orange-500/30 hover:bg-slate-700/40 transition-all duration-300 hover:shadow-lg hover:shadow-slate-900/50 mb-4"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-br ${info.gradient} rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1 group-hover:text-orange-300 transition-colors">
                        {info.title}
                      </h4>
                      {info.details.map((detail, j) => (
                        <p
                          key={j}
                          className="text-slate-400 text-sm group-hover:text-slate-300 transition-colors"
                        >
                          {detail}
                        </p>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-slate-700/50">
              <h4 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <Sparkles className="h-5 w-5 text-orange-400" />
                Why Choose OILEUM?
              </h4>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">40+ Years Experience</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">
                    500+ Projects Delivered
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">
                    95% Client Satisfaction
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-400" />
                  <span className="text-slate-300">
                    ISO Certified Excellence
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form - Right Side */}
          <div className="lg:col-span-2">
            <div className="bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-700/50 hover:shadow-3xl hover:border-slate-600/60 transition-all duration-500">
              <h3 className="text-3xl font-bold text-white mb-8 flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/25">
                  <Send className="h-5 w-5 text-white" />
                </div>
                Start Your Project
              </h3>

              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-full mb-6 shadow-lg shadow-emerald-500/25">
                    <CheckCircle className="h-10 w-10 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-white mb-4">
                    Thank You!
                  </h4>
                  <p className="text-slate-400">
                    Your message has been sent. We'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                          placeholder="Enter your email"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                          placeholder="Enter your phone number"
                        />
                      </div>
                    </div>

                    {/* Company */}
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Company Name
                      </label>
                      <div className="relative">
                        <Building2 className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-12 pr-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                          placeholder="Enter company name"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Project Type *
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                      >
                        <option value="">Select project type</option>
                        {projectTypes.map((type, i) => (
                          <option key={i} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Timeline */}
                    <div>
                      <label className="block text-slate-300 font-medium mb-2">
                        Timeline
                      </label>
                      <select
                        name="timeline"
                        value={formData.timeline}
                        onChange={handleInputChange}
                        className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                      >
                        <option value="">Select timeline</option>
                        <option value="immediate">
                          Immediate (1-3 months)
                        </option>
                        <option value="short">Short-term (3-6 months)</option>
                        <option value="medium">
                          Medium-term (6-12 months)
                        </option>
                        <option value="long">Long-term (1+ years)</option>
                      </select>
                    </div>
                  </div>

                  {/* Budget */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Project Budget (Optional)
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300"
                    >
                      <option value="">Select budget range</option>
                      <option value="100k-500k">$100K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-5m">$1M - $5M</option>
                      <option value="5m-10m">$5M - $10M</option>
                      <option value="10m+">$10M+</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-2">
                      Project Details *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-4 bg-slate-700/50 border border-slate-600/50 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:border-orange-500/50 focus:bg-slate-700/70 transition-all duration-300 resize-none"
                      placeholder="Tell us about your project requirements, scope, and any specific needs..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group w-full md:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 disabled:from-slate-600 disabled:to-slate-700 text-white font-semibold rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/25 border border-orange-400/20 disabled:border-slate-600/20 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        Send Message
                        <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>

                  <p className="text-slate-400 text-sm">
                    By submitting this, you agree to our privacy policy. We'll
                    respond within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="relative bg-slate-800/40 backdrop-blur-md rounded-3xl p-8 lg:p-12 shadow-2xl border border-slate-700/50 hover:shadow-3xl hover:border-slate-600/60 transition-all duration-500">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text group-hover:text-transparent">
                $2.5B+
              </div>
              <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                Project Value Delivered
              </div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text group-hover:text-transparent">
                99.5%
              </div>
              <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                Success Rate
              </div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text group-hover:text-transparent">
                150+
              </div>
              <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                Projects Completed
              </div>
            </div>
            <div className="group">
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:scale-110 transition-all duration-300 bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text group-hover:text-transparent">
                25+
              </div>
              <div className="text-slate-400 font-medium group-hover:text-slate-300 transition-colors">
                Countries Served
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactComponent;
