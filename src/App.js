import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Components from './components';
import * as Pages from './pages';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
    const [theme, setTheme] = useState('light');
    // function that changes the state of the theme to 'dark' or 'light'
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };

    const [language, setLanguage] = useState('en');
    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('fr');
        } else {
            setLanguage('en');
        }
        console.log(language)
    }

    return (
            <ParallaxProvider>
                <BrowserRouter>
                    <Components.Navbar theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
                    <Routes>
                        <Route path="/" element={<Pages.HomePage theme={theme} language={language} />} />
                        <Route path="/work" element={<Pages.WorkPage theme={theme} language={language} />} />
                        <Route path="/about" element={<Pages.AboutPage theme={theme} language={language} />} />
                        <Route path="/contact" element={<Pages.ContactPage theme={theme} language={language} />} />
                    </Routes>
                </BrowserRouter>
            </ParallaxProvider>
    )
}

export default App