import React, { useEffect, useState } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import * as Components from './components';
import * as Pages from './pages';
import { ParallaxProvider } from 'react-scroll-parallax';

// on récupère l'état du thème dans le stockage local
const initialState = !!JSON.parse(localStorage.getItem('theme'))

const App = () => {
    const [isDark, setisDark] = useState(initialState);
    // function that changes the state of the theme to 'dark' or 'light'
    const toggleTheme = () => {
        if (isDark) {
            setisDark(false);
        } else {
            setisDark(true);
        }
    };
    // on met à jour la valeur du thème dans le stockage local
    useEffect(() => {
        localStorage.setItem('theme', isDark)
    }, [isDark])

    const [language, setLanguage] = useState('en');
    const toggleLanguage = () => {
        if (language === 'en') {
            setLanguage('fr');
        } else {
            setLanguage('en');
        }
    }

    let theme=null;
    if (isDark) {
        theme = 'dark';
    } else {
        theme = 'light'
    }

    return (
        <ParallaxProvider>
            <BrowserRouter>
                <Components.Navbar theme={theme} toggleTheme={toggleTheme} language={language} toggleLanguage={toggleLanguage} />
                <Routes>
                    <Route path="/" element={<Pages.HomePage theme={theme} />} />
                    <Route path="/:lang/work" element={<Pages.WorkPage theme={theme} />} />
                    <Route path="/:lang/about" element={<Pages.AboutPage theme={theme} language={language} />} />
                    <Route path="/:lang/contact" element={<Pages.ContactPage theme={theme} language={language} />} />
                    <Route path="/:lang/test" element={<Test />} />
                    <Route path="/:lang" element={<Pages.HomePage theme={theme} />} />
                </Routes>
            </BrowserRouter>
        </ParallaxProvider>
    )
}

const Test = () => {

    const params = useParams();
    return (<div>
        <p>{params.lang}</p>
    </div>)
}

export default App