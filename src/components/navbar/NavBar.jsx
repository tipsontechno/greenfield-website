import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import React from 'react';
import Logo from "../../images/logo_1.png";
import { FaBars } from "react-icons/fa";
import { MdOutlineClose } from "react-icons/md";
import { FaGlobe } from "react-icons/fa";  // Import globe icon for language selector
import { useLanguage } from "../../LanguageContext.js"; // Adjust the path as needed
import './NavBar.css';
import { translations } from '../../data';

const NavBar = ({ onLinkClick }) => {
    const { language, changeLanguage } = useLanguage(); // Use the language context
    const { navLinks = [] } = translations[language] || {}; // Destructure and provide a fallback
    console.log(navLinks);
    const [isNavShowing, setIsNavShowing] = useState(false);
    const [activeLink, setActiveLink] = useState('');
    // const [language, setLanguage] = useState('EN');  // State for selected language

    const handleClick = (name) => {
        setActiveLink(name);
        if (onLinkClick) {
            onLinkClick(name);
        }
        setIsNavShowing(false);
    };

    const handleLanguageChange = (e) => {
        changeLanguage(e.target.value);
        // Here you would typically trigger some action to change the app's language
        // For example: changeAppLanguage(e.target.value);
    };

    return (
        <nav>
            <div className="container nav__container">
                <Link to='/' className='logo' onClick={() => setIsNavShowing(false)}>
                    <img src={Logo} alt="Nav Logo" />
                    <h3 className="title">GreenField Electronics</h3>
                </Link>
                <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                    {navLinks.map(({ name, path }, index) => (
                        <li key={index}>
                            <NavLink
                                to="/"
                                className={name === activeLink ? 'active-nav' : ''}
                                onClick={() => handleClick(name)}
                            >
                                {name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="language-selector">
                        <FaGlobe />
                        <select value={language} onChange={handleLanguageChange}>
                            <option value="EN">English</option>
                            <option value="NL">Ducth</option>
                            {/* Add more language options as needed */}
                        </select>
                    </li>
                </ul>
                <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                    {isNavShowing ? <MdOutlineClose /> : <FaBars />}
                </button>
            </div>
        </nav>
    );
};

export default NavBar;