import React from 'react';
import './HomePage.css';
import * as Components from '../../components';

const HomePage = () => {
    return (
        <div id='home-page'>
            <h1 className='justin my-name'>Justin</h1>
            <h2 className='juhel my-name'>Juhel</h2>
            <div className='home-page__main-bowl'><Components.Bowl /></div>
            <div className='home-page__bottom'>
                <div className='home-page__bottom-line'></div>
                <h3 className='my-job'>FrontEnd Developer</h3>
            </div>
        </div>
    )
}

export { HomePage }