import React from 'react';
import './ContactPage.css';
import * as Components from '../../components';
import { Parallax } from 'react-scroll-parallax';
import { useParams } from 'react-router-dom';

const ContactPage = ({ theme }) => {
    const params = useParams()
    const language = params.lang ?? "fr";

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
        <div className={`contact-page contact-page-${theme}`}>

            <div className={'contact-page__background-gradients contact-page__background-gradients-' + theme}></div>

            <div className={'contact-page__title contact-page__title-' + theme}>
                <h1>Contact</h1>
            </div>
            <div className={'contact-page__header contact-page__header-' + theme}>
                <Parallax translateY={['0px', '200px']}>
                    {
                        language === 'en' ? <p>Don’t hesitate to contact me of you have a question or want me to work for you !</p> :
                            <p>N'hésitez pas à me contacter si vous avez des questions ou si vous voulez que je travaille pour vous !</p>
                    }

                </Parallax>
            </div>
            <div className='contact-page__options'>
                <div className='contact-page__bowl'><Components.Bowl theme={theme} /></div>
                <a className='CV' href='../../assets/CV_FR.pdf' download><Components.ContactButton text={"CV"} theme={theme} /></a>
                <div className='github' onClick={() => { window.open('https://github.com/JustinJuhel') }}><Components.ContactButton text={"GitHub"} theme={theme} /></div>
                <div className='linkedin' onClick={() => { window.open('https://www.linkedin.com/in/justin-juhel-126534252') }}><Components.ContactButton text={"LinkedIn"} theme={theme} /></div>
                <div className='mail' onClick={() => copy()}><Components.ContactButton text={"Mail"} theme={theme} /></div>
            </div>

        </div>


    )
}

// export default transition(ContactPage)
export { ContactPage }