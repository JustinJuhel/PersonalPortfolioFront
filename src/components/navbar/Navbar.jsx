import React from 'react';
import './Navbar.css'
import * as Components from '../';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ theme, toggleTheme }) => {
    let navigate = useNavigate();
    return (
        <div id='navbar'>
            <div className='navbar-content'>
                <div className='navbar-top'>
                    <div className='navbar__bowl-container' onClick={() => { navigate('/') }}><Components.Bowl theme={theme} /></div>
                    <Components.LanguageButton theme={theme} />
                    <div onClick={() => { toggleTheme() }}><Components.LightModeButton theme={theme} /></div>
                </div>
                <div className='navbar-bottom'>
                    <div className='navigation-button' onClick={() => { navigate('/work') }}><Components.NavigationButton text='Work' theme={theme} /></div>
                    <div className='navigation-button' onClick={() => { navigate('/about') }}><Components.NavigationButton text='About' theme={theme} /></div>
                    <div className='navigation-button' onClick={() => { navigate('/contact') }}><Components.NavigationButton text='Contact' theme={theme} /></div>
                </div>
            </div>
            <div className='navbar-background'></div>
        </div>
    )
}

export { Navbar }