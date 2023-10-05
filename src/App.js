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
        console.log("theme : " + theme)
    };
    // to let the change take place immediatly
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);
    return (
            <ParallaxProvider>
                <BrowserRouter>
                    <Components.Navbar theme={theme} toggleTheme={toggleTheme} />
                    <Routes>
                        <Route path="/" element={<Pages.HomePage theme={theme} />} />
                        <Route path="/work" element={<Pages.WorkPage theme={theme} />} />
                        <Route path="/about" element={<Pages.AboutPage theme={theme} />} />
                        <Route path="/contact" element={<Pages.ContactPage theme={theme} />} />
                    </Routes>
                </BrowserRouter>
            </ParallaxProvider>
    )
}

export default App