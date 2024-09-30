import { FaCrown } from 'react-icons/fa'
import { SiOpenaigym } from "react-icons/si";


import { AiFillCaretRight } from "react-icons/ai";

import SectionHead from '../sectionHead/SectionHead'
import Card from '../../UI/card/Card';
import { Link } from 'react-router-dom'
import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { translations } from '../../data';

const Programs = () => {
    const { language } = useLanguage(); // Use the language context
    const { programs } = translations[language];

    return (
        <section className="programs">
            <div className="container programs__container">
                <SectionHead icon={<FaCrown />} title={language === "NL" ? "Programma's" : "Programs"} />

                <div className="programs__wrapper">
                    {
                        programs.map(({ id, icon, title, info, path }, index) => {
                            return (
                                <Card className="programs__program" key={id}>
                                    <span>{icon}</span>
                                    <h4>{title}</h4>
                                    <small>{info}</small>
                                    <Link to={path} className='btn sm'>{language === "NL" ? "Meer informatie" : "Read more"} <AiFillCaretRight /></Link>

                                </Card>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Programs
