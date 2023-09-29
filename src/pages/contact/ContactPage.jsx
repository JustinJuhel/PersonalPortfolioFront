import React from 'react';
import './ContactPage.css';
import * as Components from '../../components';

const ContactPage = () => {
    return (
        <div id='contact-page'>

            <div className='contact-page__background-gradients'></div>

            <div className='contact-page__title'>
                <h1>Contact</h1>
            </div>
            <div className='contact-page__header'>
                <p>Don’t hesitate to contact me of you have a question or want me to work for you !</p>
            </div>
            <div className='contact-page__options'>
                <div className='contact-page__bowl'><Components.Bowl /></div>
                <div className='CV'><Components.ContactButton text={"CV"} /></div>
                <div className='github'><Components.ContactButton text={"GitHub"} /></div>
                <div className='linkedin'><Components.ContactButton text={"LinkedIn"} /></div>
                <div className='mail'><Components.ContactButton text={"Mail"} /></div>
            </div>

        </div>


    )
}

export { ContactPage }