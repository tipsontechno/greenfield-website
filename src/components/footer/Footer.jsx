import { Link } from "react-router-dom";
import Logo from "../../images/logo_1.png";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { useLanguage } from "../../LanguageContext.js";
import { useState } from "react";
import emailjs from "emailjs-com";
import Modal from "./Modal"; // Import the Modal component

const Footer = () => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false); // Control modal visibility
  const [modalMessage, setModalMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_5zh9sz8",
        "template_3ayxycs",
        e.target,
        "rcsOcsI7hz6KlcDOb"
      )
      .then(
        (result) => {
          console.log("Email successfully sent!", result.text);
          setModalMessage(
            language === "EN"
              ? "Thank you for contacting us!"
              : "Bedankt voor uw bericht!"
          );
          setShowModal(true); // Show the modal on success
        },
        (error) => {
          console.log("Error sending email:", error.text);
          setModalMessage(
            language === "EN"
              ? "Failed to send. Please try again."
              : "Verzenden mislukt. Probeer het opnieuw."
          );
          setShowModal(true); // Show the modal on error
        }
      );
  };

  const closeModal = () => {
    setShowModal(false); // Hide the modal when clicked
  };

  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p className="text-white">
            {language === "EN"
              ? "We're here to answer any questions you may have. Feel free to reach out to us anytime, and we'll get back to you as soon as possible."
              : "Wij zijn hier om al uw vragen te beantwoorden. U kunt altijd contact met ons opnemen en wij nemen zo snel mogelijk contact met u op."}
          </p>
          <div className="footer__socials">
            <a
              href="https://linkedin.com"
              target={"blank"}
              rel="noreferrer noopener"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              target={"blank"}
              rel="noreferrer noopener"
            >
              <FaFacebook />
            </a>
            <a
              href="https://twitter.com"
              target={"blank"}
              rel="noreferrer noopener"
            >
              <AiOutlineTwitter />
            </a>
            <a
              href="https://instagram.com"
              target={"blank"}
              rel="noreferrer noopener"
            >
              <AiFillInstagram />
            </a>
          </div>
        </article>

        {/* Contact Us form styled as a card */}
        <article className="contact-card">
          <h4 className="text-white">
            {language === "EN" ? "Contact Us" : "Contacteer Ons"}
          </h4>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <input
                type="text"
                name="user_name"
                placeholder={language === "EN" ? "Your Name" : "Uw Naam"}
                value={formData.name}
                onChange={handleInputChange}
                required
                className="bg-[#128277] text-white	"
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="user_email"
                placeholder={
                  language === "EN" ? "Your Email" : "Uw E-mailadres"
                }
                value={formData.email}
                onChange={handleInputChange}
                required
                className="bg-[#128277] text-white	"
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={language === "EN" ? "Your Message" : "Uw Bericht"}
                value={formData.message}
                onChange={handleInputChange}
                required
                className="bg-[#128277] text-white	"
              />
            </div>
            <button type="submit" className="submit-btn">
              {language === "EN" ? "Send Message" : "Bericht Verzenden"}
            </button>
          </form>
        </article>
      </div>

      <div className="footer__copyright">
        <small>
          {language === "EN"
            ? "2024 copyright all rights reserved"
            : "2024 copyright alle rechten voorbehouden"}
        </small>
      </div>

      {/* Modal for showing success or failure message */}
      <Modal
        message={modalMessage}
        showModal={showModal}
        closeModal={closeModal}
      />
    </footer>
  );
};

export default Footer;
