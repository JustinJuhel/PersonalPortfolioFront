import React, { useState } from 'react';
import './Project.css';
import * as Assets from '../../assets';
import * as Components from '../';
import { useParams } from 'react-router-dom';
// MUI Grid Layout Imports
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';



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

    let projetButtonFontSize = "2rem";
    if (window.innerWidth <= 1024) {
        projetButtonFontSize = "1.2rem";
    }
    if (window.innerWidth <= 768) {
        projetButtonFontSize = "1rem";
    }

    const project_name_style = {
        fontFamily: project.name_font,

        fontSize: projetButtonFontSize,
        fontStyle: "normal",
        fontWeight: 900,
        textAlign: "center",
        backgroundClip: "text",
        background: project.name_color,
        WebkitBackgroundClip: "text",
        WebkitTextFillColor: "transparent",
    };

    let projectFlexDirection = 'row';
    if (window.innerWidth > 768 && id % 2 === 1) {
        projectFlexDirection = 'row-reverse';
    } else if (window.innerWidth <= 768) {
        projectFlexDirection = 'column-reverse';
    }

    let projectPadding = '0rem 4rem';
    if (window.innerWidth <= 1200) {
        projectPadding = '0rem 2rem';
    }

    const project_style = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: projectFlexDirection,
        // zIndex: 2,
        gap: '2rem',
        padding: projectPadding,
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
                    {!project ? null :
                        <Box sx={{ flexGrow: 2 }} className='project-infos__tools-box'>
                            <Grid container spacing={5} columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 8 }} className='project-infos__tools-grid'>
                                {tools_names.map((tool) =>
                                    <img src={Assets.dev_tools_map[tool]} alt={tool} />
                                )}
                            </Grid>
                        </Box>
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

    const params = useParams()
    const language = params.lang ?? "fr";

    if (!project) {
        return (<div><p>This project is invalid</p></div>)
    }

    const further_desc = project.further_desc.split(";");

    const pictures_captions = project.pictures_captions.split(";");
    const pictures = Assets.project_pictures_map[project.logo];
    const indexList = Array.from({ length: pictures.length }, (_, index) => index);

    let modalTitleFontSize = "3rem";

    if (window.innerWidth <= 425) {
        modalTitleFontSize = "1.6rem";
    } else if (window.innerWidth <= 768) {
        modalTitleFontSize = "2rem";
    }

    const project_name_style = {
        fontFamily: project.name_font,

        fontSize: modalTitleFontSize,
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
                <Components.ButtonIcon text={language==='en'?"Github Repository":"Dépôt GitHub"} iconSrc={Assets.dev_tools_map.github} url={project.github_repo_url} />
                <Components.ButtonIcon text={language==='en'?"Visit Website":"Visiter le site"} iconSrc={Assets.project_logos_map[project.logo]} url={project.website_url} />
            </div>
            {pictures.length !== pictures_captions.length ? <p>Vous devez fournir autant de commentaires que d'images !</p> :
                pictures.length === 0 ? null :
                    indexList.map((index) =>
                        <div className={"project-modal__single-image project-modal__single-image-" + theme} style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: index % 2 === 0 ? 'end' : 'baseline',
                            gap: '0.5rem',
                            width: '100%',
                        }}>
                            <img src={pictures[index]} alt="additional-picture-missing" />
                            <p>{pictures_captions[index]}</p>
                        </div>
                    )
            }
        </div>
    )
}

export { Project, ProjectModal }