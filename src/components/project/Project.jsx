import React, { useState, useEffect } from 'react';
import './Project.css';
import * as Assets from '../../assets';
import * as Components from '../'



const Project = ({ project, id, theme }) => {

    const [modal, setModal] = useState(false);
    const toggleModal = () => {
        setModal(!modal);
    };

    const closeModal = () => {
        setModal(false);
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Pour un défilement fluide
        })
    };

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
        flexDirection: id % 2 === 1 ? 'row-reverse' : 'row',
        // zIndex: 2,
        gap: '2rem',
        padding: '0rem 4rem',
        width: '100%',
        transition: 'all 0.1s ease-in-out',
    };

    return (
        <div className='project' style={project_style}>
            <button className={'project-logo-button project-logo-button-' + theme} onClick={() => {
                toggleModal();
                scrollToTop();
            }}>
                {
                    !project ? <Components.LoadingLogo /> :
                        <img src={Assets.project_logos_map[project.logo]} alt="project-logo" />
                }
                <h1 style={project_name_style}>{!project ? <Components.LoadingLogo /> : project.name}</h1>
            </button>

            <div className='project-infos'>
                <div className={'project-infos__desc project-infos__desc-' + theme}>
                    <h1>{!project ? null : project.title}</h1>
                    <p>{!project ? <Components.LoadingLogo /> : project.description}</p>
                </div>
                <div className='project-infos__tools'>
                    {!project ? <Components.LoadingLogo /> :
                        tools_names.map((tool) =>
                            <img src={Assets.dev_tools_map[tool]} alt={tool} />
                        )
                    }
                </div>
            </div>

            {
                !modal ? null :
                    <Components.Modal modalBoolean={modal} closeModal={closeModal}>
                        <Components.ProjectModal project={project} theme={theme} />
                    </Components.Modal>
            }
        </div>
    )
}

const ProjectModal = ({ project, theme }) => {

    if (!project) {
        return (<div><p>This project is invalid</p></div>)
    }

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
        <div className={'project-modal__content project-modal__content-' + theme}>
            <div className='project-modal__title'>
                <img src={!project.logo ? <Components.LoadingLogo /> : Assets.project_logos_map[project.logo]} alt={project.logo} />
                <h1 style={project_name_style}>{project.name}</h1>
            </div>
            <div className={'project-modal__description project-modal__description-' + theme}>
                {!further_desc ? <Components.LoadingLogo /> :
                    further_desc.map((paragraph) => <p>{paragraph}</p>
                    )}
            </div>
            <div className='project-modal__buttons'>
                <Components.ButtonIcon text="Github Repository" iconSrc={Assets.dev_tools_map.github} url={project.github_repo_url} />
                <Components.ButtonIcon text="Visit Website" iconSrc={Assets.project_logos_map[project.logo]} url={project.website_url} />
            </div>
            {pictures.length != pictures_captions.length ? <p>Vous devez fournir autant de commentaires que d'images !</p> :
                pictures.length === 0 ? null :
                    indexList.map((index) =>
                        <div className={"project-modal__single-image project-modal__single-image-" + theme} style={{
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