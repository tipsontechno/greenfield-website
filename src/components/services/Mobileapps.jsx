import React, { useEffect } from "react";
import apple from "../../images/apple.png";
import iosexample from "../../images/iphonesearch.png";
import android from "../../images/android.png";
import androidback from "../../images/andriodex.webp";
import crossplatform from "../../images/device.png";
import pwa from "../../images/mobile-development.png";
import { useLanguage } from "../../LanguageContext"; // Assuming you have a LanguageContext
import pwaexample from "../../images/pwa.png";
const Mobileapps = () => {
  const { language } = useLanguage(); // Using the language context (NL or en)
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const text = {
    title:
      language === "NL"
        ? "Maatwerk Mobiele App Ontwikkelingsdiensten die wij bieden"
        : "Custom Mobile App Development Services that We Do",
    subtitle:
      language === "NL"
        ? "Als een van de beste bedrijven voor mobiele app-ontwikkeling in Bangalore zijn we bedreven in deze werkzaamheden."
        : "As we are one of the best mobile app development companies in Bangalore, we are proficient in these works.",
    services: [
      {
        en: "iOS Mobile App Development",
        NL: "iOS Mobiele App Ontwikkeling",
      },
      {
        en: "We offer high-quality iOS mobile app development services that are proven to meet client demands.",
        NL: "Wij bieden hoogwaardige iOS mobiele app-ontwikkelingsdiensten aan die voldoen aan de eisen van de klant.",
      },
      {
        en: "Android Mobile App Development",
        NL: "Android Mobiele App Ontwikkeling",
      },
      {
        en: "Easily navigate and grow your user base with cost-effective, user-friendly Android applications.",
        NL: "Navigeer eenvoudig en vergroot uw gebruikersbestand met kosteneffectieve, gebruiksvriendelijke Android-applicaties.",
      },
      {
        en: "Cross-Platform App Development",
        NL: "Cross-platform App Ontwikkeling",
      },
      {
        en: "For a quicker time to market and greater return on investment, run your code on several platforms using a single source code",
        NL: "Voor een snellere time-to-market en een groter rendement op uw investering kunt u uw code op verschillende platforms uitvoeren met behulp van één enkele broncode.",
      },
      {
        en: "Development of React Native Apps.",
        NL: "Ontwikkeling van React Native-apps.",
      },
      {
        en: "Flutter app development.",
        NL: "Ontwikkeling van Flutter-apps.",
      },
      {
        en: "PWA development",
        NL: "PWA-ontwikkeling.",
      },
      {
        en: "Combining the best features of two worlds, aprogressive web app offers a seamless user experience and expands its consumer base.",
        NL: "Het combineren van de beste eigenschappen van twee werelden, aprogressieve web-app biedt een naadloze gebruiker ervaring en breidt zijn consumentenbasis uit.",
      },
    ],
  };

  return (
    <div className="swservice mt-36">
      <h3 className="text-3xl font-bold text-center ">{text.title}</h3>
      <div className="mt-3 w-[80%] mx-auto text-center">{text.subtitle}</div>
      <div className="flex flex-col md:flex-row gap-10 mt-6 w-full items-center justify-center ">
        <div className="flex flex-col gap-6 w-[80%] md:w-[40%] align-center justify-center items-center">
          <div className="flex flex-col gap-6  align-center justify-center items-center">
            <img src={apple} className="w-20 h-20" alt="iOS" />
            <label className="text-center text-xl font-bold">
              {language === "NL" ? text.services[0].NL : text.services[0].en}
            </label>
            <label className="text-center text-lg">
              {language === "NL" ? text.services[1].NL : text.services[1].en}
            </label>
          </div>
          <img src={iosexample} className="appexample" alt="App Example" />
        </div>

        <div className="flex flex-col gap-6 w-[80%] md:w-[40%] align-center justify-center items-center">
          <div className="flex flex-col gap-6   align-center justify-center items-center">
            <img src={android} className="w-20 h-20" alt="iOS" />
            <label className="text-center text-xl font-bold">
              {language === "NL" ? text.services[2].NL : text.services[2].en}
            </label>
            <label className="text-center text-lg">
              {language === "NL" ? text.services[3].NL : text.services[3].en}
            </label>
          </div>
          <img src={androidback} className="h-[370px]" alt="App Example" />
        </div>
      </div>
      {/* down divs */}

      <div className="flex flex-col md:flex-row gap-10 mt-6 w-full items-center justify-center ">
        <div className="flex flex-col gap-6 w-[80%] md:w-[40%] align-center justify-center items-center">
          <div className="flex flex-col gap-6  align-center justify-center items-center">
            <img src={crossplatform} className="w-20 h-20" alt="iOS" />
            <label className="text-center text-xl font-bold">
              {language === "NL" ? text.services[4].NL : text.services[4].en}
            </label>
            <label className="text-center text-lg">
              {language === "NL" ? text.services[5].NL : text.services[5].en}
            </label>
            <label className="text-center text-lg">
              {language === "NL" ? text.services[6].NL : text.services[6].en}
            </label>
            <label className="text-center text-lg">
              {language === "NL" ? text.services[7].NL : text.services[7].en}
            </label>
          </div>
          <img
            src="https://skilledpragati.com/wp-content/uploads/2022/02/header.png"
            className="appexample"
            alt="App Example"
          />
        </div>

        <div className="flex flex-col gap-6 w-[80%] md:w-[40%] align-center justify-center items-center">
          <div className="flex flex-col gap-6   align-center justify-center items-center">
            <img src={pwa} className="w-20 h-20" alt="iOS" />
            <label className="text-center text-xl font-bold">
              {language === "NL" ? text.services[8].NL : text.services[8].en}
            </label>
            <label className="text-center text-lg">
              {language === "NL" ? text.services[9].NL : text.services[9].en}
            </label>
          </div>
          <img src={pwaexample} className="h-[370px]" alt="App Example" />
        </div>
      </div>
    </div>
  );
};

export default Mobileapps;
