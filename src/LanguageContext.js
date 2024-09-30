import React, { createContext, useContext, useState } from 'react';

// Create the Language Context
const LanguageContext = createContext();

// Create a custom hook to use the Language Context
export const useLanguage = () => {
    return useContext(LanguageContext);
};

// Create a Language Provider component
export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('EN'); // Default language

    const changeLanguage = (lang) => {
        setLanguage(lang); // Update the language state
    };

    return (
        <LanguageContext.Provider value={{ language, changeLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
