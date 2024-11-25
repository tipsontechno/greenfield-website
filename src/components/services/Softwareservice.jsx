import React from "react";
import ueser from "../../images/digital.png";
import php from "../../images/php.png";
import Wordpress from "../../images/media.png";
import ui from "../../images/ui.png";
import cms from "../../images/technology.png";
import JOOMLA from "../../images/joomla.png";
import cashless from "../../images/cashless.png";
import redesign from "../../images/redesign.png";
import online from "../../images/online-shop.png";
import { useLanguage } from "../../LanguageContext"; // Assuming you have a LanguageContext

const Softwareservice = () => {
  const { language } = useLanguage(); // Using the language context (NL or en)

  const css =
    " flex text-black items-center justify-center h-52 w-full p-5 gap-3 rounded-lg border-2 border-transparent hover:border-white transition-all duration-300";

  // Text translations
  const text = {
    title:
      language === "NL"
        ? "Wij bieden diverse webontwikkelingsdiensten aan"
        : "We Offer Diverse Web Development Services beyond Par",
    subtitle:
      language === "NL"
        ? "Wij bieden hoogwaardige ontwikkelingsdiensten aan die voldoen aan de eisen van de klant, wat er ook gebeurt. Ons team van ervaren ontwikkelaars doet zijn best om de website van uw wens te realiseren en uw bedrijf consequent te laten groeien."
        : "We offer high quality development services that are proven to meet client demands no matter what. Our team of skilled developers strives their best to facilitate the website of your desire and elevate your business consistently.",
    services: [
      {
        en: "UI / UX Design and Development",
        NL: "UI / UX Ontwerp en Ontwikkeling",
      },
      { en: "PHP Development", NL: "PHP Ontwikkeling" },
      { en: "Wordpress Development", NL: "Wordpress Ontwikkeling" },
      { en: "CMS Website Development", NL: "CMS Website Ontwikkeling" },
      { en: "JOOMLA Development", NL: "JOOMLA Ontwikkeling" },
      { en: "Payment gateway Integration", NL: "Betalingsgateway Integratie" },
      {
        en: "Website Redesigning/ Maintenance",
        NL: "Website Herontwerpen / Onderhoud",
      },
      { en: "Ecommerce Development", NL: "E-commerce Ontwikkeling" },
    ],
  };

  return (
    <div className="swservice mt-36">
      <h3 className="text-3xl font-bold">{text.title}</h3>
      <div className="mt-3 w-[80%] mx-auto text-center">{text.subtitle}</div>

      {/* Responsive grid for boxes */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-6 w-4/5 mx-auto align-middle">
        <div className={`bg-[#7a98ec] hover:bg-[#b5cbe6] ${css}`}>
          <img src={ui} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[0].NL : text.services[0].en}
          </label>
        </div>
        <div
          className={`bg-[#bbace2] hover:bg-[#f1f0be] hover:text-black ${css}`}
        >
          <img src={php} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[1].NL : text.services[1].en}
          </label>
        </div>
        <div className={`bg-[#eaaccf] hover:bg-[#becee0] ${css}`}>
          <img src={Wordpress} className="worpress" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[2].NL : text.services[2].en}
          </label>
        </div>
        <div className={`bg-[#f2c36b] hover:bg-[#b6c9a3]${css}`}>
          <img src={cms} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[3].NL : text.services[3].en}
          </label>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-6 w-4/5 mx-auto">
        <div className={`bg-[#2c3864] hover:bg-[#942f67] text-white ${css}`}>
          <img src={JOOMLA} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[4].NL : text.services[4].en}
          </label>
        </div>
        <div className={`bg-[#d08f68] text-white hover:bg-[#a9a469] ${css}`}>
          <img src={cashless} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[5].NL : text.services[5].en}
          </label>
        </div>
        <div className={`bg-[#887373] text-white hover:bg-[#5b678d] ${css}`}>
          <img src={redesign} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[6].NL : text.services[6].en}
          </label>
        </div>
        <div className={`bg-[#e25454eb] text-white hover:bg-[#366860] ${css}`}>
          <img src={online} className="w-20 h-20" alt="" />
          <label className="text-center">
            {language === "NL" ? text.services[7].NL : text.services[7].en}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Softwareservice;
