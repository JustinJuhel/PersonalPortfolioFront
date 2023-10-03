import React, { useState, useEffect } from 'react';
import './WorkPage.css';
import * as Components from '../../components';
import * as Assets from '../../assets';
import axios from 'axios';

const WorkPage = () => {
    
    // défilement en haut de la page
    window.scrollTo({
        top: 0,
        behavior: 'smooth', // Pour un défilement fluide
    })

    const [projects, setProjects] = useState(undefined);
    useEffect(() => {
        axios.get("http://localhost:8000/projects/get").then(data => data.data).then(data => { setProjects(data.data); })
    }, []);
    return (
        <div id='work-page'>

            <div className='work-page__background-gradients'></div>

            <div className='work-page__bowl'><Components.Bowl /></div>
            <div className='work-page__title'><h1>Work</h1></div>
            <div className='work-page__projects-container'>
                {
                    !projects ? <Components.LoadingLogo /> :
                        projects.map((project, index) =>
                            <Components.Project project={project} id={index} />
                        )
                }
            </div>

        </div>
    )
}

export { WorkPage }