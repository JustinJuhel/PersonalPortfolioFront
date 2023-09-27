import React from 'react';
import './Navbar.css'
import * as Components from '../';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    let navigate = useNavigate();
    return (
        <div id='navbar'>
            <div className='navbar-content'>
                <div className='navbar-top'>
                    <div className='navbar__bowl-container' onClick={() => { navigate('/') }}><Components.Bowl /></div>
                    <Components.LanguageButton />
                    <Components.LightModeButton />
                </div>
                <div className='navbar-bottom'>
                    <div className='navigation-button'><Components.NavigationButton text='Work' /></div>
                    <div className='navigation-button'><Components.NavigationButton text='About' /></div>
                    <div className='navigation-button' onClick={() => { navigate('/contact') }}><Components.NavigationButton text='Contact' /></div>
                </div>
            </div>
            <div className='navbar-background'></div>
        </div>
    )
}

export { Navbar }