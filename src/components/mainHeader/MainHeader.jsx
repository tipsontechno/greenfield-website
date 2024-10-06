import React from 'react'
import { Link } from 'react-router-dom'
import '../../pages/home/Home.css'
import Image from '../../images/main_header.png'
import { translations } from '../../data'

import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { useState, useEffect } from "react";


const MainHeader = () => {
  const { language } = useLanguage(); // Use the language context
  // const { faqs } = translations[language];

  const [useheader, setheader] = useState("")
  const [useinfo, setinfo] = useState("")
  const [useparagraph, setparagraph] = useState("")
  useEffect(() => {
    if (language === "NL") {
      
      setinfo("Dienst voor softwareontwikkeling");
      setparagraph("Bij Greenfield Software beginnen we elke opdracht met een diepgaand gesprek om uw bedrijf, technologische uitdagingen en doelstellingen te begrijpen. Van daaruit ontwikkelen we een op maat gemaakte strategie die onze samenwerking begeleidt, succes garandeert en hoogwaardige softwareontwikkelingsdiensten levert.")
    } else {
      
      setinfo("Software Development Services")
      setparagraph("At Greenfield Software, we begin every engagement with an in-depth discussion to understand your business, technology challenges, and goals. From there, we craft a tailored strategy that guides our collaboration, ensures success, and delivers top-tier software development services.")
    }
  }, [language]);
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">

          <h1>{useinfo}</h1>
          <p>{useparagraph}.</p>
          {/* <Link to='/plans' className='btn lg'>{language === "EN" ? " Get Started" : "Aan de slag"}</Link> */}
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className='main__header-image'>
            <img src={Image} alt="Main Header Image" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader
