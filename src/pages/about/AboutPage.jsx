import React, { useEffect, useState } from 'react';
import "./AboutPage.css";
import * as Components from '../../components';
import * as Assets from '../../assets';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Parallax } from 'react-scroll-parallax';


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

const AboutPage = ({ theme }) => {
    const params = useParams()
    const language = params.lang ?? "fr";

    // défilement en haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Pour un défilement fluide
    })

    const [devTools, setDevTools] = useState(undefined);
    useEffect(() => {
        axios.get("http://localhost:8000/devtools/get").then(data => data.data).then(data => { setDevTools(data.data.filter((item) => item.used === "used")); })
    }, [])
    // if (devTools) {
    //     console.log(partition(devTools, (item) => item.type))
    // }
    const [aboutMeMap, setAboutMeMap] = useState(undefined);
    useEffect(() => {
        axios.get(`http://localhost:8000/about/get?lang=${language}`).then(data => data.data).then(data => setAboutMeMap(data.data))
    }, [])
    // if (aboutMeMap) {
    //     console.log(aboutMeMap[0].description.split(";"))
    // }
    let about_me_map = []
    if (aboutMeMap) {
        about_me_map = aboutMeMap[0].description.split(";");
    }

    // console.log(about_me_map)

    const title_map_en = {
        "code_editor": "Code Editors",
        "communication_tool": "Communication",
        "design_tool": "Design",
        "language": "Languages"
    }

    const title_map_fr = {
        "code_editor": "Editeurs de code",
        "communication_tool": "Communication",
        "design_tool": "Design",
        "language": "Langages"
    }

    let navigate = useNavigate();
    return (

        <div className={`about-page about-page-${theme}`}>

            <div className={'about-page__background-gradients about-page__background-gradients-' + theme}></div>

            <div className='about-page__bowl'><Components.Bowl theme={theme} /></div>
            <div className={'about-page__title about-page__title-' + theme}>{language === 'en' ? 'About' : 'A Propos'}</div>
            <div className='about-page__profile-picture'><img src={Assets.photo_profil_justin} alt="profile-picture" /></div>
            <Parallax translateY={['0px', '-150px']}>
                <div className='about-page__infos'>
                    <div className={'about-page__infos-displayer about-page__infos-displayer-' + theme}>
                        <h1>{!about_me_map ? <Components.LoadingLogo /> : about_me_map[0]}</h1>
                        {!about_me_map ? <Components.LoadingLogo /> :
                            about_me_map.slice(1).map((paragraph) =>
                                <p>{paragraph}</p>
                            )
                        }
                        <div className='about-page__contact'>
                            <a className='contact-page__button' href='../../assets/CV_FR.pdf' download><Components.Button text={language === 'en' ? "My CV" : "Mon CV"} theme={theme} /></a>
                            <div className='contact-page__button' onClick={() => { navigate('/contact') }}><Components.Button text={language === 'en' ? "Contact me" : "Me contacter"} theme={theme} /></div>
                        </div>
                    </div>
                    <div className={'about-page__tools about-page__infos-displayer about-page__infos-displayer-' + theme}>
                        <h1>{language === 'en' ? 'The tools I develop with :' : 'Mes outils de développement :'}</h1>
                        {!devTools ? <Components.LoadingLogo /> :
                            Array.from(partition(devTools, (item) => item.type)).map(([type, tools]) =>
                                <div className={'tools-section tools-section-' + theme}>
                                    <p>{language === 'en' ? title_map_en[type] : title_map_fr[type]}</p>
                                    <div className='dev-tools__displayer'>
                                        {tools.map((tool) =>
                                            <img src={Assets.dev_tools_map[tool.name]} alt={tool.name} />
                                        )}
                                    </div>
                                </div>
                            )}
                    </div>
                </div>
            </Parallax>

        </div>

    )
}

// export default transition(AboutPage)
export { AboutPage }