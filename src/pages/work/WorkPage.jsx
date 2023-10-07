import React, { useState, useEffect } from 'react';
import './WorkPage.css';
import * as Components from '../../components';
import * as Assets from '../../assets';
import axios from 'axios';
import { Parallax } from 'react-scroll-parallax';
import { useParams } from 'react-router-dom';

const WorkPage = ({ theme }) => {
    const params = useParams()
    const language = params.lang ?? "fr";
    // défilement en haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Pour un défilement fluide
    })

    const [projects, setProjects] = useState(undefined);
    useEffect(() => {
        axios.get(`http://localhost:8000/projects/get?lang=${language}`).then(data => data.data).then(data => { setProjects(data.data); })
    }, []);
    return (

            <div className={`work-page work-page-${theme}`}>

                <div className={'work-page__background-gradients work-page__background-gradients-' + theme}></div>

                <div className='work-page__bowl'>
                    <Parallax translateX={['-100px', '50px']}>
                        <Components.Bowl theme={theme} />
                    </Parallax>
                </div>
                <div className={'work-page__title work-page__title-' + theme}><h1>{language === 'en' ? 'Work' : 'Travail'}</h1></div>
                <div className='work-page__projects-container'>
                    {
                        !projects ? <Components.LoadingLogo /> :
                            projects.map((project, index) =>
                                <Components.Project project={project} id={index} theme={theme} />
                            )
                    }
                </div>

            </div>

    )
}

// export default transition(WorkPage)
export { WorkPage }