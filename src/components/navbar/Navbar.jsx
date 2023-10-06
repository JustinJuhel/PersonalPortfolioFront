import React from 'react';
import './Navbar.css'
import * as Components from '../';
import { useNavigate, useParams } from 'react-router-dom';

const Navbar = ({ theme, language, toggleTheme, toggleLanguage }) => {
    // const params = useParams()
    // const language = params.lang ?? 'fr';
    let newLanguage = null;
    if (language === 'en') {
        newLanguage = 'fr';
    } else {
        newLanguage = 'en';
    };
    let navigate = useNavigate();
    // console.log(params.lang)
    console.log(language)
    return (
        <div id='navbar'>
            <div className='navbar-content'>
                <div className='navbar-top'>
                    <div className='navbar__bowl-container' onClick={() => { navigate(`/${language}/`) }}><Components.Bowl theme={theme} /></div>
                    <div onClick={() => { toggleLanguage(); navigate(`/${newLanguage}/`) }}><Components.LanguageButton theme={theme} language={language} /></div>
                    <div onClick={() => { toggleTheme() }}><Components.LightModeButton theme={theme} /></div>
                </div>
                <div className='navbar-bottom'>
                    <div className='navigation-button' onClick={() => { navigate(`/${language}/work`) }}>
                        <Components.NavigationButton text={language === 'en' ? 'Work' : 'Travail'} theme={theme} />
                    </div>
                    <div className='navigation-button' onClick={() => { navigate(`/${language}/about`) }}>
                        <Components.NavigationButton text={language === 'en' ? 'About' : 'A Propos'} theme={theme} />
                    </div>
                    <div className='navigation-button' onClick={() => { navigate(`/${language}/contact`) }}>
                        <Components.NavigationButton text={'Contact'} theme={theme} />
                    </div>
                </div>
            </div>
            <div className='navbar-background'></div>
        </div>
    )
}

export { Navbar }