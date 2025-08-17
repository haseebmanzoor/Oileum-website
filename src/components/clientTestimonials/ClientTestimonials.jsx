import React, { useState } from "react";

function ClientTestimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      title: "Chief Technology Officer",
      company: "Cepsa",
      image: "/avatars/ahmed.jpg", // You'll need to add actual avatar images
      testimonial:
        "Working with this team has transformed our energy infrastructure capabilities. Their innovative solutions have helped us achieve 40% improvement in operational efficiency across our MENA operations.",
      rating: 5,
      logo: "/logos/cepsa.png",
    },
    {
      id: 2,
      name: "Sarah Mitchell",
      title: "Head of Digital Transformation",
      company: "Dragon Oil",
      image: "/avatars/sarah.jpg",
      testimonial:
        "The level of expertise and commitment to excellence is unmatched. They delivered a comprehensive solution that exceeded our expectations and continues to drive value for our organization.",
      rating: 5,
      logo: "/logos/dragon-oil.png",
    },
    {
      id: 3,
      name: "Dr. Hassan Malik",
      title: "VP of Operations",
      company: "ENOC",
      image: "/avatars/hassan.jpg",
      testimonial:
        "Their deep understanding of the energy sector combined with cutting-edge technology solutions has been instrumental in modernizing our infrastructure and improving our competitive position.",
      rating: 5,
      logo: "/logos/enoc.png",
    },
    {
      id: 4,
      name: "Maria Rodriguez",
      title: "Director of Engineering",
      company: "Neptune Energy",
      image: "/avatars/maria.jpg",
      testimonial:
        "Outstanding technical expertise and project delivery. They've consistently delivered complex energy infrastructure projects on time and within budget, helping us maintain our leadership position.",
      rating: 5,
      logo: "/logos/neptune.png",
    },
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="relative py-24 bg-slate-900 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-r from-orange-500/15 to-amber-500/15 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-r from-blue-500/15 to-cyan-500/15 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-transparent"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center px-4 py-2 bg-orange-500/10 border border-orange-500/20 rounded-full mb-6">
            <span className="text-orange-400 text-sm font-medium">
              Client Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-orange-400 to-amber-400 bg-clip-text text-transparent">
              Global
            </span>{" "}
            <br />
            Key Players in the Industry
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            See how we've helped energy companies across MENA & Europe transform
            their infrastructure and achieve operational excellence.
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="relative max-w-5xl mx-auto mb-12">
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl border border-slate-700/50 rounded-3xl p-8 md:p-12 shadow-2xl">
            {/* Quote Icon */}
            <div className="flex justify-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="text-center">
              <p className="text-xl md:text-2xl text-slate-200 leading-relaxed mb-8 font-light italic">
                "{testimonials[activeTestimonial].testimonial}"
              </p>

              {/* Star Rating */}
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-6 h-6 text-amber-400 fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              {/* Client Info */}
              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <div className="flex items-center gap-4">
                  {/* Avatar */}
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonials[activeTestimonial].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>

                  <div className="text-left">
                    <h4 className="text-xl font-semibold text-white">
                      {testimonials[activeTestimonial].name}
                    </h4>
                    <p className="text-slate-400">
                      {testimonials[activeTestimonial].title}
                    </p>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="flex items-center">
                  <div className="w-px h-12 bg-slate-700 mx-4 hidden md:block"></div>
                  <div className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl">
                    <span className="text-slate-300 font-medium">
                      {testimonials[activeTestimonial].company}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-slate-800/80 backdrop-blur-sm border border-slate-700/50 rounded-full flex items-center justify-center text-white hover:bg-orange-500/20 hover:border-orange-500/40 transition-all duration-300"
          >
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center gap-3 mb-16">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === activeTestimonial
                  ? "bg-gradient-to-r from-orange-400 to-amber-400 scale-125"
                  : "bg-slate-600 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* Client Logos Grid */}
        <div className="border-t border-slate-800 pt-16">
          <h3 className="text-center text-slate-400 mb-8 text-lg">
            Powering success for industry leaders
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {testimonials.map((client, index) => (
              <div
                key={index}
                className="flex items-center justify-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 hover:border-orange-400/40 hover:bg-white/10 transition-all duration-300 cursor-pointer"
                onClick={() => setActiveTestimonial(index)}
              >
                <span className="text-slate-300 font-semibold text-lg">
                  {client.company}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="inline-flex flex-col md:flex-row gap-4 items-center">
            <span className="text-slate-400 text-lg">Ready to join them?</span>
            <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1 transition-all duration-300">
              Start Your Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
