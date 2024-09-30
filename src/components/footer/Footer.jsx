import { Link } from 'react-router-dom'
import Logo from '../../images/logo_1.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaFacebook } from 'react-icons/fa'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'



import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import { useState } from 'react'; // Add useState for form handling

const Footer = () => {

    const { language } = useLanguage(); // Use the language context

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add form submission logic (e.g., sending to an API)
        console.log('Form Submitted:', formData);
    };



    return (
        <footer>
            <div className="container footer__container">
                <article>
                    <Link to="/" className="logo">
                        <img src={Logo} alt="Footer Logo" />
                    </Link>
                    <p>
                        {language === "EN" ? "We're here to answer any questions you may have. Feel free to reach out to us anytime, and we'll get back to you as soon as possible." : "Wij zijn hier om al uw vragen te beantwoorden. U kunt altijd contact met ons opnemen en wij nemen zo snel mogelijk contact met u op."}
                    </p>
                    <div className="footer__socials">
                        <a href="https://linkedin.com" target={'blank'} rel="noreferrer noopener"><FaLinkedin /></a>
                        <a href="https://facebook.com" target={'blank'} rel="noreferrer noopener"><FaFacebook /></a>
                        <a href="https://twitter.com" target={'blank'} rel="noreferrer noopener"><AiOutlineTwitter /></a>
                        <a href="https://instagram.com" target={'blank'} rel="noreferrer noopener"><AiFillInstagram /></a>
                    </div>
                </article>
                 {/* New Article for Contact Form */}
                 <article>
                    <h4>{language === "EN" ? "Contact Us" : "Contacteer Ons"}</h4>
                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <input
                                type="text"
                                name="name"
                                placeholder={language === "EN" ? "Your Name" : "Uw Naam"}
                                value={formData.name}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="email"
                                name="email"
                                placeholder={language === "EN" ? "Your Email" : "Uw E-mailadres"}
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <textarea
                                name="message"
                                placeholder={language === "EN" ? "Your Message" : "Uw Bericht"}
                                value={formData.message}
                                onChange={handleInputChange}
                                required
                            />
                        </div>
                        <button type="submit">
                            {language === "EN" ? "Send Message" : "Bericht Verzenden"}
                        </button>
                    </form>
                </article>
                

            </div>
            <div className="footer__copyright">
                <small>{language === "EN" ? "2024 copyright all rights reserved" : "2024 copyright alle rechten voorbehouden"}</small>
            </div>
        </footer>
    )
}

export default Footer
