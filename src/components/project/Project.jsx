import React, { useState, useEffect } from 'react';
import './Project.css';
import * as Assets from '../../assets';
import axios from 'axios';
import * as Components from '../'



const Project = ({ id }) => {
    const [projects, setProjects] = useState(undefined);
    useEffect(() => {
        axios.get("http://localhost:8000/projects/get").then(data => data.data).then(data => { setProjects(data.data); })
    }, []);

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
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
    const [projects, setProjects] = useState(undefined);

    useEffect(() => {
        axios.get("http://localhost:8000/projects/get").then(data => data.data).then(data => { setProjects(data.data); })
    }, []);

    if (!projects) {
        return (<div><p>This project is invalid</p></div>)
    }

    const project = projects[id];

    const further_desc = project.further_desc.split(";");

    const pictures_captions = project.pictures_captions.split(";");
    const pictures = Assets.project_pictures_map[project.logo];
    const indexList = Array.from({ length: pictures.length }, (_, index) => index);

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
        <div className='project-modal__content'>
            <div className='project-modal__title'>
                <img src={!project.logo ? null : Assets.project_logos_map[project.logo]} alt={project.logo} />
                <h1 style={project_name_style}>{project.name}</h1>
            </div>
            <div className='project-modal__description'>
                {!further_desc ? null :
                    further_desc.map((paragraph) => <p>{paragraph}</p>
                    )}
            </div>
            <div className='project-modal__buttons'>
                <Components.ButtonWithIcon text="Github Repository" iconSrc={Assets.dev_tools_map.github} url={project.github_repo_url} />
                <Components.ButtonWithIcon text="Visit Website" iconSrc={Assets.project_logos_map[project.logo]} url={project.website_url} />
            </div>
            {pictures.length != pictures_captions.length ? <p>Vous devez fournir autant de commentaires que d'images !</p> :
                pictures.length === 0 ? null :
                    indexList.map((index) =>
                        <div className="project-modal__single-image" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: index % 2 === 0 ? 'end' : 'baseline',
                            gap: '0.5rem',
                            width: '100%',
                        }}>
                            <img src={pictures[index]} alt="additional-picture" />
                            <p>{pictures_captions[index]}</p>
                        </div>
                    )
            }
        </div>
    )
}

export { Project, ProjectModal }