import React from 'react';
import './HomePage.css';
import * as Components from '../../components';
import axios from 'axios';

const HomePage = ({ theme, language }) => {

    return (
        <div className={'home-page home-page-' + theme}>
            <div className={'home-page__background-gradients home-page__background-gradients-' + theme}></div>
            <h1 className={'justin my-name my-name-' + theme}>Justin</h1>
            <h2 className={'juhel my-name my-name-' + theme}>Juhel</h2>
            <div className='home-page__main-bowl'><Components.Bowl theme={theme} /></div>
            <div className='home-page__bottom'>
                <div className={'home-page__bottom-line home-page__bottom-line-' + theme}></div>
                <h3 className={'my-job my-job-' + theme}>{language==='en'?'FrontEnd Developer':'Développeur FrontEnd'}</h3>
            </div>
        </div>
    )
}

export { HomePage }