import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Components from './components';
import * as Pages from './pages';
import { ParallaxProvider } from 'react-scroll-parallax';

const App = () => {
    return (
        <ParallaxProvider>
            <BrowserRouter>
                <Components.Navbar />
                <Routes>
                    <Route path="/" element={<Pages.HomePage />} />
                    <Route path="/work" element={<Pages.WorkPage />} />
                    <Route path="/about" element={<Pages.AboutPage />} />
                    <Route path="/contact" element={<Pages.ContactPage />} />
                </Routes>
            </BrowserRouter>
        </ParallaxProvider>
    )
}

export default App