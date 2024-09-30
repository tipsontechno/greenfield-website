import { useState } from "react"
import SectionHead from "../sectionHead/SectionHead"
import { ImQuotesLeft } from "react-icons/im"
import Card from "../../UI/card/Card"
import { IoIosArrowDropleftCircle, IoIosArrowDroprightCircle } from "react-icons/io"
import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { translations } from '../../data';
const Testimonials = () => {
    const { language } = useLanguage(); // Use the language context
    const { testimonials } = translations[language];
    const [index, setIndex] = useState(0);
    const { name, quote, job, avatar } = testimonials[index];

    const prevTestimonialHandler = () => {
        setIndex(prev => prev - 1);
        if (index <= 0) {
            setIndex(testimonials.length - 1);
        }
    }


    const nextTestimonialHandler = () => {
        setIndex(prev => prev + 1);
        if (index === testimonials.length - 1) {
            setIndex(0);
        }
    }
    return (
        <section className="testimonials">
            <div className="container testimonials__container">
                <SectionHead icon={<ImQuotesLeft />} title={language === "NL" ? "Getuigenis" : "Testimonials"} className="testimonials__head" />
                <Card className="testimonial">
                    <div className="testimonial__avatar">
                        <img src={avatar} alt={name} />
                    </div>
                    <p className="testimonial__quote">
                        {
                            `"${quote}"`
                        }

                    </p>
                    <h5>{name}</h5>
                    <small className="testimonial__title">{job}</small>
                </Card>
                <div className="testimonials__btn-container">
                    <button className="testimonials__btn" onClick={prevTestimonialHandler}><IoIosArrowDropleftCircle /></button>
                    <button className="testimonials__btn" onClick={nextTestimonialHandler}><IoIosArrowDroprightCircle /></button>
                </div>
            </div>
        </section>
    )
}

export default Testimonials

