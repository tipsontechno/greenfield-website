import React from "react";
import { GiCutDiamond } from "react-icons/gi";
import { useLanguage } from "../../LanguageContext.js";
import { translations } from "../../data";
import image from "../../images/rb_42534.png";
import SectionHead from "../sectionHead/SectionHead";

const Values = () => {
  const { language } = useLanguage();
  const { values } = translations[language];

  return (
    <section className="w-full py-16 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          {/* Left side - Image */}
          <div className="hidden lg:flex w-full lg:w-1/2 justify-center lg:justify-end sticky top-8">
            <div className="relative w-full max-w-2xl h-[600px] transition-transform duration-500 hover:scale-110">
              <img
                src={image}
                alt="values"
                className="w-full h-full object-cover object-top rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Content */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6">
            {/* Section Header */}
            {/* <div className="flex items-center gap-4 mb-4">
              <span className="text-2xl text-blue-600">
                <GiCutDiamond color="white" />
              </span>
              <h2 className="text-3xl font-bold">
                {language === "NL" ? "Waarden" : "Values"}
              </h2>
            </div> */}
            <SectionHead
              icon={<GiCutDiamond color="white" />}
              title={language === "NL" ? "Waarden" : "Values"}
            />
            {/* Description */}
            <p className="text-white mb-8">
              Leveraging the deep domain expertise of our software developers,
              we craft impactful digital solutions that drive significant
              change, all guided by a clear strategic vision
            </p>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map(({ id, icon, title, desc }) => (
                <div
                  key={id}
                  className="bg-[#1B4B5A] p-12 rounded-none rounded-tr-3xl rounded-bl-3xl
                            text-center border-2 border-transparent text-white
                            transition-all duration-500 ease-in-out
                            hover:bg-white hover:border-[#1B4B5A] hover:shadow-xl
                            hover:-translate-y-2 hover:scale-105
                            group"
                >
                  <span
                    className="text-3xl mb-6 block transition-transform duration-500
                              group-hover:transform group-hover:rotate-12 group-hover:scale-110"
                  >
                    {icon}
                  </span>
                  <h4
                    className="text-xl font-bold mb-4 group-hover:text-[#1B4B5A]
                              transition-colors duration-500"
                  >
                    {title}
                  </h4>
                  <p
                    className="text-sm opacity-90 transition-colors duration-500
                              group-hover:text-[#1B4B5A] group-hover:opacity-100"
                  >
                    {desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
