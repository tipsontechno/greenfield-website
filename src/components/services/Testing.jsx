import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  Lightbulb,
  Camera,
  Gauge,
  Home,
  Music,
  Settings,
  Cpu,
  Radio,
  Cloud,
} from "lucide-react";
import { useLanguage } from "../../LanguageContext"; // Assuming you have a LanguageContext

const ServicesAndProductsPage = () => {
  const { language } = useLanguage(); // Get the current language (EN or NL)

  // Translations for Embedded Services
  const servicesTranslations = {
    EN: [
      {
        name: "Embedded",
        icon: <Cpu className="w-8 h-8" />,
        services: ["Firmware Development", "Embedded Software Testing"],
        image:
          "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/05/Things%20You%20Will%20Learn%20in%20an%20Offline%20Embedded%20Systems%202_1685096660.png",
      },
      {
        name: "Hardware",
        icon: <Radio className="w-8 h-8" />,
        services: ["PCB Design and Prototyping", "Sensor Integration"],
        image: "https://techterms.com/img/xl/hardware_627-2.jpg",
      },
      {
        name: "IOT",
        icon: <Cloud className="w-8 h-8" />,
        services: [
          "IoT Platform Development",
          "Wireless Communication Protocols",
        ],
        image:
          "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot_devices.jpg",
      },
    ],
    NL: [
      {
        name: "Ingebed",
        icon: <Cpu className="w-8 h-8" />,
        services: ["Firmwareontwikkeling", "Ingebedde Software Testing"],
        image:
          "https://sklc-tinymce-2021.s3.amazonaws.com/comp/2023/05/Things%20You%20Will%20Learn%20in%20an%20Offline%20Embedded%20Systems%202_1685096660.png",
      },
      {
        name: "Hardware",
        icon: <Radio className="w-8 h-8" />,
        services: ["PCB-ontwerp en Prototyping", "Sensorintegratie"],
        image: "https://techterms.com/img/xl/hardware_627-2.jpg",
      },
      {
        name: "IOT",
        icon: <Cloud className="w-8 h-8" />,
        services: [
          "IoT Platformontwikkeling",
          "Draadloze Communicatieprotocollen",
        ],
        image:
          "https://www.simplilearn.com/ice9/free_resources_article_thumb/iot_devices.jpg",
      },
    ],
  };

  // Translations for Products
  const productsTranslations = {
    EN: [
      {
        name: "SMART SWITCHES",
        icon: <Home className="w-6 h-6" />,
        features: [
          "Touch Controlled via Remote, Voice & Mobile",
          "Works without Internet",
          "Mood Settings",
          "Configurable Two-Way",
          "Custom designed front plate",
        ],
      },
      {
        name: "SMART SECURITY",
        icon: <Camera className="w-6 h-6" />,
        features: [
          "CCTV and IP Cameras",
          "Door Sensor",
          "Intrusion Sensor",
          "Panic Button",
          "Local and Mobile Alarm",
          "Remote Arm & Disarm",
        ],
      },
      {
        name: "SMART SENSORS",
        icon: <Gauge className="w-6 h-6" />,
        features: [
          "Ambient",
          "Gas Leak",
          "Temperature",
          "Humidity",
          "Water Level",
          "Motion/presence",
        ],
      },
      {
        name: "LIGHTING CONTROL",
        icon: <Lightbulb className="w-6 h-6" />,
        features: [
          "RGB Lighting Control",
          "Dimming",
          "Grouping",
          "Tunable LED",
          "Mood/Scene Control",
          "Light fixtures",
        ],
      },
      // {
      //   name: "HOME THEATRE",
      //   icon: <Music className="w-6 h-6" />,
      //   features: [
      //     "Acoustic Design",
      //     "Best of Breed Home Audio/Video Systems",
      //     "Customized Lighting",
      //   ],
      // },
      {
        name: "CUSTOM SOLUTIONS",
        icon: <Settings className="w-6 h-6" />,
        features: [
          "Sliding Gate controls",
          "Garage Door Controls",
          "Integration with Gas, Water and Electricity meters",
          "Building Automation Systems",
          "Curtain Controls",
        ],
      },
    ],
    NL: [
      {
        name: "SLIMME SCHAKELAARS",
        icon: <Home className="w-6 h-6" />,
        features: [
          "Aanraakbediening via Afstandsbediening, Spraak & Mobiel",
          "Werkt zonder internet",
          "Sfeermodi",
          "Configureerbare Tweeweg",
          "Op maat ontworpen voorplaat",
        ],
      },
      {
        name: "SLIMME VEILIGHEID",
        icon: <Camera className="w-6 h-6" />,
        features: [
          "CCTV- en IP-camera's",
          "Deursensor",
          "Inbraaksensor",
          "Noodknop",
          "Lokale en Mobiele Alarm",
          "Afstandsbediening In- en Uitschakelen",
        ],
      },
      {
        name: "SLIMME SENSOREN",
        icon: <Gauge className="w-6 h-6" />,
        features: [
          "Omgeving",
          "Gaslek",
          "Temperatuur",
          "Vochtigheid",
          "Waterniveau",
          "Beweging/aanwezigheid",
        ],
      },
      {
        name: "VERLICHTINGSBESTURING",
        icon: <Lightbulb className="w-6 h-6" />,
        features: [
          "RGB-verlichting Besturing",
          "Dimmen",
          "Groeperen",
          "Tunable LED",
          "Sfeer/Scènecontrole",
          "Verlichtingsarmaturen",
        ],
      },
      // {
      //   name: "THUISBIOSCOOP",
      //   icon: <Music className="w-6 h-6" />,
      //   features: [
      //     "Akoestisch Ontwerp",
      //     "Topkwaliteit Audio-/Videosystemen",
      //     "Aangepaste Verlichting",
      //   ],
      // },
      {
        name: "AANGEPASTE OPLOSSINGEN",
        icon: <Settings className="w-6 h-6" />,
        features: [
          "Schuifpoortbesturingen",
          "Garagedeuren",
          "Integratie met Gas-, Water- en Elektriciteitsmeters",
          "Gebouwbeheersystemen",
          "Gordijnbesturing",
        ],
      },
    ],
  };

  // Get the services and products based on the selected language
  const embeddedServices = servicesTranslations[language];
  const products = productsTranslations[language];
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="w-full">
      {/* Embedded, Hardware and IOT Section */}
      <section className="py-16 mt-9">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {language === "EN"
              ? "Embedded, Hardware and IOT"
              : "Ingebed, Hardware en IoT"}
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {embeddedServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#128277]  rounded-lg shadow-lg overflow-hidden"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl text-white font-semibold">
                      {service.name}
                    </h3>
                    <div className="text-white">{service.icon}</div>
                  </div>

                  <ul className="space-y-2">
                    {service.services.map((item, serviceIndex) => (
                      <li key={serviceIndex} className="flex items-start">
                        <span className="text-slate-200 mr-2">✓</span>
                        <span className="text-slate-200">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products & Solutions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-12"
          >
            {language === "EN"
              ? "Products & Solutions"
              : "Producten en oplossingen"}
          </motion.h2>

          {/* First row - 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-[#128277] rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 bg-[#004D47] p-4 rounded-lg">
                    <h3 className="text-lg text-white font-semibold">
                      {product.name}
                    </h3>
                    <div className="text-slate-300">{product.icon}</div>
                  </div>

                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-slate-200"
                      >
                        <span className="text-slate-200 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second row - 2 cards centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {products.slice(3, 5).map((product, index) => (
              <motion.div
                key={index + 3}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
                className="bg-[#128277] rounded-lg shadow-md overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4 bg-[#004D47] p-4 rounded-lg">
                    <h3 className="text-lg text-white font-semibold">
                      {product.name}
                    </h3>
                    <div className="text-slate-300">{product.icon}</div>
                  </div>

                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start text-sm text-slate-200"
                      >
                        <span className="text-slate-200 mr-2 mt-1">✓</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center image and bottom text */}
          <div className="text-center mt-6">
            {/* <div className="mb-8 w-[300px] mx-auto">
              <img
                src="https://valmark.in/blog/wp-content/uploads/2024/02/shutterstock_2239959019-1024x659.jpg"
                alt="Smart Home Control"
                className="mx-auto rounded-lg shadow-md"
              />
            </div> */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-lg text-slate-200  font-medium"
            >
              {language === "EN"
                ? " Enabled by RF Remote, Voice and Mobile App"
                : "Mogelijk gemaakt door RF-afstandsbediening, spraak en mobiele app"}
            </motion.p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesAndProductsPage;
