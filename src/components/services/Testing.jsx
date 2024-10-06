import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../../LanguageContext"; // Assuming you have LanguageContext

const Testing = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { language } = useLanguage(); // Using the language context (NL or en)

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      title: {
        NL: "Belasting- en prestatietests",
        en: "Load & Performance Testing",
      },
      description: {
        NL: "Laadtijd en app-prestaties zijn cruciale elementen voor het succes van uw product. Wij testen deskundig de applicatieprestaties bij hoge belasting, meten, valideren en verifiëren operationele mogelijkheden om ervoor te zorgen dat u een vlekkeloze klantervaring kunt bieden.",
        en: "Load time and app performance are crucial elements of your product's success. We expertly test application performance at high loads, measure, validate and verify operational capabilities to ensure you can offer a flawless customer experience.",
      },
      image:
        "https://www.cem.org/hubfs/blog/Blog-Too-much-testing-in-schools.jpg",
    },
    {
      title: {
        NL: "Testautomatisering",
        en: "Test Automation",
      },
      description: {
        NL: "Handhaaf kwaliteit terwijl u de snelheid verhoogt en risico's minimaliseert met onze geavanceerde testautomatiseringsstrategieën.",
        en: "Maintain quality while increasing speed and minimizing risk with our advanced test automation strategies.",
      },
      image:
        "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2019/05/website-usability-testing.webp",
    },
    {
      title: {
        NL: "Mobiele en webontwikkelingstests",
        en: "Mobile and Web Dev Testing",
      },
      description: {
        NL: "Voor het succes van uw bedrijf in het digitale tijdperk moeten uw web- en mobiele kanalen voorbeeldig zijn. Wij bieden geavanceerde ontwikkelingsondersteuning voor mobiel en web om ervoor te zorgen dat uw ontwikkelingsuitrol wendbaar, veilig en foutloos is.",
        en: "For your business to succeed in the age of digital, your web and mobile channels need to be exemplary. We offer advanced development support for mobile and web to ensure that your dev rollouts are agile, secure and defect-free.",
      },
      image:
        "https://blog.talent500.co/wp-content/uploads/2023/09/gd-group-discussion-tips.jpg",
    },
    {
      title: {
        NL: "Cyberbeveiligingstests",
        en: "Cyber Security Testing",
      },
      description: {
        NL: "Wij weten hoe voortdurend opkomende cyberdreigingen uw bedrijf beïnvloeden. Onze shift-left testbenadering introduceert beveiliging in elke fase van uw ontwikkelingstraject, identificeert vroeg kwetsbaarheden en voorkomt proactief aanvallen.",
        en: "We know how continually emerging cyber threats impact your business. Our shift-left testing approach introduces security into every phase of your development journey, identifying vulnerabilities early on and proactively preventing attacks.",
      },
      image: "https://www.testmonitor.com/hubfs/TestMonitor%20Blog%2048.png",
    },
  ];

  return (
    <div className="mt-36">
      <div className="swservice">
        <h1>{language === "NL" ? "Diensten testen" : "Testing Services"}</h1>
        <h3>
          {language === "NL"
            ? "Onze testdiensten omvatten:"
            : "Our Testing services include:"}
        </h3>
      </div>
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const title = service.title[language] || service.title.en; // Fallback to English
            const description =
              service.description[language] || service.description.en; // Fallback to English

            console.log("Title:", title); // Log title for debugging

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: isVisible ? 1 : 0,
                  y: isVisible ? 0 : 20,
                }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative overflow-hidden rounded-lg shadow-lg h-64"
              >
                <img
                  src={service.image}
                  alt={service.title[language]}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-end p-4">
                  <h2 className="text-xl font-semibold text-white mb-2">
                    {title}
                  </h2>
                  <p className="text-sm text-white leading-snug overflow-hidden line-clamp-3">
                    {description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Testing;
