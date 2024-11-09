import React, { useState, useEffect } from "react";
import { ImQuotesLeft } from "react-icons/im";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { useLanguage } from "../../LanguageContext.js";
import { translations } from "../../data";

const SectionHead = ({ icon, title, className }) => (
  <div className={`flex items-center justify-center gap-4 ${className}`}>
    <span className="text-primary text-2xl">{icon}</span>
    <h2 className="text-2xl font-bold">{title}</h2>
  </div>
);

const Testimonials = () => {
  const { language } = useLanguage();
  const { testimonials } = translations[language];
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState("right");
  const { name, quote, job, avatar } = testimonials[index];

  const prevTestimonialHandler = () => {
    if (isAnimating) return;
    setSlideDirection("left");
    setIsAnimating(true);
    setIndex((prev) => (prev <= 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextTestimonialHandler = () => {
    if (isAnimating) return;
    setSlideDirection("right");
    setIsAnimating(true);
    setIndex((prev) => (prev >= testimonials.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Match this with the transition duration

    return () => clearTimeout(timer);
  }, [index]);

  const slideClass = isAnimating
    ? slideDirection === "right"
      ? "-translate-x-full opacity-0"
      : "translate-x-full opacity-0"
    : "translate-x-0 opacity-100";

  return (
    <section className="py-16 overflow-hidden">
      <div className="max-w-2xl mx-auto px-4">
        <SectionHead
          icon={<ImQuotesLeft />}
          title={language === "NL" ? "Getuigenis" : "Testimonials"}
          className="mb-16"
        />

        <div className="relative bg-[#128277]  rounded-2xl shadow-lg p-8 transition-all duration-300 hover:shadow-xl">
          <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
            <div className="w-20 h-16 bg-white rounded-2xl overflow-hidden border-2 border-transparent transition-all duration-300  hover:border-gray-400 shadow-lg">
              <img
                src={avatar}
                alt={name}
                className="w-full h-full object-scale-down object-center" // ensures the image is centered
              />
            </div>
          </div>

          <div
            className={`mt-8 space-y-4 transform overflow-hidden transition-all duration-300 ${slideClass}`}
          >
            <p className="text-lg italic text-white leading-relaxed">
              "{quote}"
            </p>
            <div className="text-center">
              <h5 className="font-semibold text-xl">{name}</h5>
              <p className="text-sm text-slate-200 mt-1">{job}</p>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={prevTestimonialHandler}
            className="p-2 transition-transform duration-300 hover:scale-110 focus:outline-none disabled:opacity-50"
            aria-label="Previous testimonial"
            disabled={isAnimating}
          >
            <IoIosArrowDropleftCircle className="w-8 h-8 text-primary" />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <div
                key={i}
                className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-primary" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
          <button
            onClick={nextTestimonialHandler}
            className="p-2 transition-transform duration-300 hover:scale-110 focus:outline-none disabled:opacity-50"
            aria-label="Next testimonial"
            disabled={isAnimating}
          >
            <IoIosArrowDroprightCircle className="w-8 h-8 text-primary" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
