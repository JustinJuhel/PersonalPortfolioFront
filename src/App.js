import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import * as Components from './components';
import * as Pages from './pages';


const App = () => {
    return (
        <div>
            <BrowserRouter>
                <Components.Navbar />
                <Routes>
                    <Route path="/" element={<Pages.HomePage />} />
                    <Route path="/contact" element={<Pages.ContactPage />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App