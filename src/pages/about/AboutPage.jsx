import React, { useEffect, useState } from 'react';
import "./AboutPage.css";
import * as Components from '../../components';
import * as Assets from '../../assets';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function partition(data, func) {
    const map = new Map();
    data.forEach((item) => {
        let array = map.get(func(item));
        if (!array) {
            array = [];
            map.set(func(item), array);
        }
        array.push(item);
    })
    return map
}

const AboutPage = () => {
    const [devTools, setDevTools] = useState(undefined);
    useEffect(() => {
        axios.get("http://localhost:8000/devtools/get_tools").then(data => data.data ).then(data => { setDevTools(data.data.filter((item) => item.used==="used")); })
    }, [])
    if (devTools) {
        console.log(partition(devTools, (item) => item.type))

    }

    const title_map = {
        "code_editor": "Code Editors",
        "communication_tool": "Communication",
        "design_tool": "Design",
        "language": "Languages"
    }

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
                    {!devTools ? <Components.LoadingLogo /> :
                        Array.from(partition(devTools, (item) => item.type)).map(([type, tools]) =>
                            <div className='tools-section'>
                                <p>{title_map[type]}</p>
                                <div className='dev-tools__displayer'>
                                    {tools.map((tool) =>
                                        <img src={Assets.dev_tools_map[tool.name]} alt={tool.name} />
                                    )}
                                </div>
                            </div>
                        )}
                </div>
            </div>

        </div>
    )
}

export { AboutPage }