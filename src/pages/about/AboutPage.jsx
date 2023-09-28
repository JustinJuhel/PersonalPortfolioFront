import React from 'react';
import "./AboutPage.css";
import * as Components from '../../components';
import * as Assets from '../../assets';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
    let navigate = useNavigate();
    return (
        <div className='about-page'>

            <div className='about-page__background-gradients'></div>

            <div className='about-page__bowl'><Components.Bowl /></div>
            <div className='about-page__title'>About</div>
            <div className='about-page__profile-picture'><img src={Assets.photo_profil_justin} alt="profile-picture" /></div>
            <div className='about-page__infos'>
                <div className='about-page__me about-page__infos-displayer'>
                    <h1>I’m Justin Juhel, a engineer student and FrontEnd Developer.</h1>
                    <p>I’m currently studying at CentraleSupélec, university of Paris-Saclay and preparing a engineering degree in Mathematics & Data Science.</p>
                    <p>In parallel, I’m a FrontEnd developer and associated with a friend from the engineering school.  We are passionated by web dvelopment and working hard to become always better. I’m working on myself to become a FullStack developer.</p>
                    <div className='about-page__contact'>
                        <div className='about-page__CV-button contact-page__button'><Components.AboutMeButton text={"Dowload my CV"} /></div>
                        <div className='about-page__contact-button contact-page__button' onClick={() => { navigate('/contact') }}><Components.AboutMeButton text={"Contact me"} /></div>
                    </div>
                </div>
                <div className='about-page__tools about-page__infos-displayer'>
                    <h1>The tools I develop with :</h1>
                    <div className='tools__code-editors tools-section'>
                        <p>Code editors</p>
                        <div className='tools__code-editors__logos dev-tools__displayer'>
                            <img src={Assets.code_editors_map.vscode} alt="code-editor" />
                            <img src={Assets.code_editors_map.eclipse} alt="code-editor" />
                        </div>
                    </div>
                    <div className='tools__communication tools-section'>
                        <p>Communication tools</p>
                        <div className='tools__communication__logos dev-tools__displayer'>
                            <img src={Assets.communication_tools_map.git} alt="communication-tool" />
                            <img src={Assets.communication_tools_map.github} alt="communication-tool" />
                        </div>
                    </div>
                    <div className='tools__design tools-section'>
                        <p>Design tools</p>
                        <div className='tools__design__logos dev-tools__displayer'>
                            <img src={Assets.design_tools_map.figma} alt="design-tool" />
                            <img src={Assets.design_tools_map.starUML} alt="design-tool" />
                            {/* <img src={Assets.design_tools_map.inkscape} alt="design-tool" /> */}
                        </div>
                    </div>
                    <div className='tools__languages tools-section'>
                        <p>Languages</p>
                        <div className='tools__languages__logos dev-tools__displayer'>
                        <img src={Assets.languages_map.react} alt="language" />
                        <img src={Assets.languages_map.html} alt="language" />
                        <img src={Assets.languages_map.javascript} alt="language" />
                        <img src={Assets.languages_map.css} alt="language" />
                        <img src={Assets.languages_map.java} alt="language" />
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export { AboutPage }