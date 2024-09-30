import SectionHead from "../sectionHead/SectionHead"
import { FaQuestion } from 'react-icons/fa'
import { translations } from '../../data'
import FAQ from './FAQ'
import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { useState, useEffect } from "react";

const FAQs = () => {
  const { language } = useLanguage(); // Use the language context
  const { faqs } = translations[language];
  const [usefaq, setfaq] = useState("FAQs")
  // console.log(language)
  useEffect(() => {
    if (language === "NL") {
      setfaq("Veelgestelde vragen");
    } else {
      setfaq("FAQs");
    }
  }, [language]);
  return (
    <section className="faqs">
      <div className="container faqs__container">
        <SectionHead icon={<FaQuestion />} title={usefaq} />
        <div className="faqs__wrapper">
          {faqs.map(({ id, question, answer }) => <FAQ key={id} question={question} answer={answer} />)}
        </div>
      </div>
    </section>
  )
}

export default FAQs
