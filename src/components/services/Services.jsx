import { FaCrown } from "react-icons/fa";
import { SiOpenaigym } from "react-icons/si";

import { AiFillCaretRight } from "react-icons/ai";

import SectionHead from "../sectionHead/SectionHead";
import Card from "../../UI/card/Card";
import { Link } from "react-router-dom";
import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { translations } from "../../data";
// import { MdMiscellaneousServices } from "react-icons/fc";
import { MdMiscellaneousServices } from "react-icons/md";

const Services = () => {
  const { language } = useLanguage(); // Use the language context
  const { services } = translations[language];

  return (
    <section className="services">
      <div className="container services__container">
        <SectionHead
          icon={<MdMiscellaneousServices />}
          title={language === "NL" ? "diensten" : "Services"}
        />

        <div className="services__wrapper">
          {services.map(({ id, icon, title, info, path }, index) => {
            return (
              <Card className="services__program" key={id}>
                <span className="text-white hover:text-black transition-colors duration-300">
                  {icon}
                </span>{" "}
                <h4>{title}</h4>
                <small>{info}</small>
                <Link to={path} className="btn sm">
                  {language === "NL" ? "Meer informatie" : "Read more"}{" "}
                  <AiFillCaretRight />
                </Link>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
