import React, { useState, useEffect } from 'react';
import './Project.css';
import * as Assets from '../../assets';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import * as Components from '../'



const Project = ({ id }) => {
    const [projects, setProjects] = useState(undefined);
    useEffect(() => {
        axios.get("http://localhost:8000/projects/get").then(data => data.data).then(data => { setProjects(data.data); })
    }, []);

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
        console.log(modal)
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Pour un défilement fluide
        })
    };

    if (!projects) {
        return (<div><p>This project is invalid</p></div>)
    }

    let project = projects[id];

    const tools_names = project.tools.split(",");

    const project_name_style = {
        fontFamily: project.name_font,

        fontSize: "2rem",
        fontStyle: "normal",
        fontWeight: 900,
        textAlign: "center",
        backgroundClip: "text",
        background: project.name_color,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    const project_style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // position: 'relative',
        flexDirection: id % 2 === 1 ? 'row-reverse' : 'row',
        // zIndex: 2,
        gap: '2rem',
        padding: '0rem 4rem',
        width: '100%',
        transition: 'all 0.1s ease-in-out',
    };

    // console.log(modal)
    return (
        <div className='project' style={project_style}>
            <button className='project-logo-button' onClick={() => {
                        toggleModal();
                        scrollToTop();
                    }}>
                <img src={!projects ? null : Assets.project_logos_map[project.logo]} alt="project-logo" />
                <h1 style={project_name_style}>{!projects ? null : project.name}</h1>
            </button>

            <div className='project-infos'>
                <div className='project-infos__desc'>
                    <h1>{!projects ? null : project.title}</h1>
                    <p>{!projects ? null : project.description}</p>
                </div>
                <div className='project-infos__tools'>
                    {!projects ? null :
                        tools_names.map((tool) =>
                            <img src={Assets.dev_tools_map[tool]} alt={tool} />
                        )
                    }
                </div>
            </div>

            {!modal ? null :
                <div className='modal'>
                    <div className='overlay' onClick={() => {
                        toggleModal();
                        // scrollToTop();
                    }}></div>
                    <Components.ProjectModal id={id} />
                </div>
            }
        </div>
    )
}

const ProjectModal = ({ id }) => {
    let navigate = useNavigate();
    const [projects, setProjects] = useState(undefined);


    useEffect(() => {
        axios.get("http://localhost:8000/projects/get").then(data => data.data).then(data => { setProjects(data.data); })
    }, []);

    if (!projects) {
        return (<div><p>This project is invalid</p></div>)
    }

    const project = projects[id];

    const project_name_style = {
        fontFamily: project.name_font,

        fontSize: "3rem",
        fontStyle: "normal",
        fontWeight: 900,
        textAlign: "center",
        backgroundClip: "text",
        background: project.name_color,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };


    return (
        <div className='project-details__content'>
            <div className='project-details__title'>
                <img src={!project.logo ? null : Assets.project_logos_map[project.logo]} alt={project.logo} />
                <h1 style={project_name_style}>{project.name}</h1>
            </div>
            <div className='project-details__description'>
                <p>CS League is an association of CentraleSupélec. We created it with four other students in 2023. It’s purpose is to enhance the student life on the campus by organizing free bet campaigns over the main sportive and associative events of the school.</p>
                <p>I took part of its website’s development by coding the Design and FrontEnd part, whereas my associate took care of the BackEnd. We launched our first bet campaign on septembre 2023 and had 750+ users and 10.000+ bets.</p>
            </div>
            <div className='project-details__buttons'>
                <Components.ButtonWithIcon text="Github Repository" iconSrc={Assets.dev_tools_map.github} />
                <Components.ButtonWithIcon text="Visit Website" iconSrc={Assets.project_logos_map[project.logo]} />
            </div>
            <div className='project-details__images'>
                {/* image */}
                {/* iamge description */}
            </div>
        </div>
    )
}

export { Project, ProjectModal }