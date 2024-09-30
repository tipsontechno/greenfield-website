import Image from '../../images/5482.jpg'
import SectionHead from '../sectionHead/SectionHead'
import { GiCutDiamond } from 'react-icons/gi'
import Card from '../../UI/card/Card'
import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { translations } from '../../data';
const Values = () => {
    const { language } = useLanguage(); // Use the language context
    const { values } = translations[language];
    return (
        <section className="values">
            <div className="container values__container">
                <div className="values__left">
                    <div className="values__image">
                        <img src={Image} alt="Some Image" />
                    </div>

                </div>
                <div className="values__right">
                    <SectionHead icon={<GiCutDiamond />} title={language === "NL" ? "Waarden" : "Values"} />
                    <p>
                    Leveraging the deep domain expertise of our software developers, we craft impactful digital solutions that drive significant change, all guided by a clear strategic vision
                    </p>
                    <div className="values__wrapper">
                        {
                            values.map(({ id, icon, title, desc }) => {
                                return (
                                    <Card className="values__value" key={id}>
                                        <span>{icon}</span>
                                        <h4>{title}</h4>
                                        <small>{desc}</small>
                                    </Card>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Values
