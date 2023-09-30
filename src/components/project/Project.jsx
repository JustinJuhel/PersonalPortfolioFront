import React, { useState, useEffect } from 'react';
import './Project.css';
import * as Assets from '../../assets';
import axios from 'axios';

const Project = ({ id }) => {
    // let id = 0;
    const [projects, setProjects] = useState(undefined);
    useEffect(() => {
        axios.get("http://localhost:8000/projects/get").then(data => data.data).then(data => { setProjects(data.data); })
    }, []);

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
        flexDirection: id % 2 == 1 ? 'row-reverse' : 'row',
        zIndex: 2,
        gap: '2rem',
        padding: '0rem 4rem',
        width: '100%',
        transition: 'all 0.1s ease-in-out',
    };

    return (
        <div className='project' style={project_style}>
            <div className='project-logo-button'>
                <img src={!projects ? null : Assets.project_logos_map[project.logo]} alt="project-logo" />
                <h1 style={project_name_style}>{!projects ? null : project.name}</h1>
            </div>
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
        </div>
    )
}

export { Project }