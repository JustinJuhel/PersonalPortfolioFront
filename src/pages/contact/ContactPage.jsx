import React from 'react';
import './ContactPage.css';
import * as Components from '../../components';
import { Parallax } from 'react-scroll-parallax';

const ContactPage = () => {

    // défilement en haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Pour un défilement fluide
    })

    function copy() {
        const textToCopy = 'justinjuhel@gmail.com';
        const textarea = document.createElement("textarea");
        textarea.value = textToCopy;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand("copy");
        document.body.removeChild(textarea);
        alert("E-mail copied : " + textToCopy);
    }

    return (
        <div id='contact-page'>

            <div className='contact-page__background-gradients'></div>

            <div className='contact-page__title'>
                <h1>Contact</h1>
            </div>
            <div className='contact-page__header'>
                <Parallax translateY={['0px', '200px']}>
                    <p>Don’t hesitate to contact me of you have a question or want me to work for you !</p>
                </Parallax>
            </div>
            <div className='contact-page__options'>
                <div className='contact-page__bowl'><Components.Bowl /></div>
                <a className='CV' href='../../assets/CV_FR.pdf' download><Components.ContactButton text={"CV"} /></a>
                <div className='github' onClick={() => { window.open('https://github.com/JustinJuhel') }}><Components.ContactButton text={"GitHub"} /></div>
                <div className='linkedin' onClick={() => { window.open('https://www.linkedin.com/in/justin-juhel-126534252') }}><Components.ContactButton text={"LinkedIn"} /></div>
                <div className='mail' onClick={() => copy()}><Components.ContactButton text={"Mail"} /></div>
            </div>

        </div>


    )
}

export { ContactPage }