import React, { useEffect, useState } from "react";
import {
  ChevronUp,
  ChevronDown,
  CalendarClock,
  Figma,
  BookA,
  Code,
  CheckSquare,
  Upload,
  Settings,
} from "lucide-react";

import { useLanguage } from "../../LanguageContext";
import software from "../../images/sdcdaigram.png";
import sdc from "../../images/sdc1.png";
import TechnologyStack from "./TechnologyStack"; // Import the new TechnologyStack component

const Sdc = () => {
  const { language } = useLanguage();
  const [openDropdown, setOpenDropdown] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const services = [
    {
      name: language === "NL" ? "Planning" : "Planning",
      description:
        language === "NL"
          ? "We verzamelen alle relevante informatie van de klant om op maat gemaakte softwareontwikkelingsoplossingen te ontwikkelen volgens hun verwachtingen."
          : "We collect all the relevant information from the customer to develop custom software development solutions as per their expectation.",
      icon: CalendarClock,
    },
    {
      name: language === "NL" ? "Ontwerpen" : "Designing",
      description:
        language === "NL"
          ? "Het systeem en de documenten zijn opgesteld volgens de vereistenspecificaties. Dit helpt ons bij het definiëren van de algehele systeemarchitectuur en technologiestape"
          : "The system and documents are prepared as per the requirement specifications. This helps us define overall system architecture and technology stack.",
      icon: Figma,
    },
    {
      name: language === "NL" ? "Definiëren" : "Defining",
      description:
        language === "NL"
          ? "Zodra de fase van de behoefteanalyse is voltooid, is de volgende stap het definiëren en documenteren van de softwarebehoeften."
          : "Once the requirement analysis phase is completed, the next step is to define and document software needs.",
      icon: BookA,
    },
    {
      name: language === "NL" ? "Bouwen" : "Building",
      description:
        language === "NL"
          ? "Ontwikkelaars beginnen het hele systeem te bouwen door code te schrijven met behulp van de gekozen programmeertaal, technieken en methodologieën."
          : "Developers start to build the entire system by writing code using the chosen programming language, techniques, and methodologies.",
      icon: Code,
    },
    {
      name: language === "NL" ? "Testen" : "Testing",
      description:
        language === "NL"
          ? "Het beoordelen van de kwaliteit van software met als doel het opsporen en verhelpen van gebreken."
          : "Evaluating the quality of software with the aim of finding and fixing defects.",
      icon: CheckSquare,
    },
    {
      name: language === "NL" ? "Uitrollen" : "Deployment",
      description:
        language === "NL"
          ? "De definitieve software wordt vrijgegeven en gecontroleerd op eventuele implementatieproblemen."
          : "The final software is released and checked for deployment issues, if any.",
      icon: Upload,
    },
    {
      name: language === "NL" ? "Onderhoud" : "Maintenance",
      description:
        language === "NL"
          ? "Volgens de Service Level Agreement zorgen wij ervoor dat aan de behoeften blijft worden voldaan en dat het systeem blijft presteren volgens de in de eerste fase genoemde specificatie."
          : "According to the service level agreement, we ensure that needs continue to be met and that the system continues to perform as per the specification mentioned in the first phase.",
      icon: Settings,
    },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  return (
    <div className="mt-36">
      <div className="swservice">
        <h1>
          {language === "NL"
            ? "LEVENSCYCLUS VAN SOFTWAREONTWIKKELING"
            : "SOFTWARE DEVELOPMENT LIFECYCLE"}
        </h1>
        <h3 className="text-center">
          {language === "NL"
            ? "We hanteren best practice processen en ontwikkelingsmethodologieën als basis voor het snel ontwikkelen van geavanceerde technologische oplossingen op een gestructureerde en methodische manier."
            : "We employ best practice processes and development methodologies as a foundation for rapid building of cutting-edge technology solutions in a structured and methodical way."}
        </h3>
      </div>
      <div className="min-h-screen">
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <h1 className="text-3xl font-bold text-white mb-8">
            {language === "NL" ? "Diensten" : "Services"}
          </h1>
          <p className="text-xl text-gray-100 mb-12">
            {language === "NL"
              ? "Snel bouwen van geavanceerde technologische oplossingen op een gestructureerde en methodische manier."
              : "Rapid building of cutting-edge technology solutions in a structured and methodical way."}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="border rounded-lg overflow-hidden transition-all duration-300"
                >
                  <button
                    className="w-full flex justify-between items-center p-4 text-white hover:text-gray-900  bg-[#128277] hover:bg-gray-300  transition-all duration-300"
                    onClick={() => toggleDropdown(index)}
                  >
                    <span className="flex items-center space-x-2 font-medium">
                      <service.icon size={18} />
                      <span className=" ">{service.name}</span>
                    </span>
                    {openDropdown === index ? (
                      <ChevronUp size={20} />
                    ) : (
                      <ChevronDown size={20} />
                    )}
                  </button>
                  <div
                    className={`dropdown-content ${
                      openDropdown === index ? "open" : ""
                    }`}
                  >
                    {openDropdown === index && (
                      <div className="p-4 bg-gray-900">
                        <p className="text-black-600">{service.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="hidden md:block ">
              <img src={sdc} alt="SDLC diagram" className="w-full " />
            </div>
          </div>
          <div className="mt-20">
            <h3 className="font-bold text-3xl  text-center mb-10">
              {language === "NL" ? "Technologie Stap" : "Technology Stack"}
            </h3>
            <TechnologyStack />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Sdc;
