import React from 'react';
import './Project.css';
import * as Assets from '../../assets';

const Project = () => {
    return (
        <div id='project'>
            <div className='project-logo-button'>
                <img src={Assets.project_logos_map.cs_league} alt="project-logo" />
                <h1>CS LEAGUE</h1>
            </div>
            <div className='project-infos'>
                <div className='project-infos__desc'>
                    <h1>CS League - FrontEnd Design</h1>
                    <p>Co-development of a student association’s website, which allows users to connect themselves and bet freely on different bet campaigns.</p>
                </div>
                <div className='project-infos__tools'>
                    <img src={Assets.dev_tools_map.vscode} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.figma} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.git} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.github} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.react} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.javascript} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.html} alt="dev-tool" />
                    <img src={Assets.dev_tools_map.css} alt="dev-tool" />
                </div>
            </div>
        </div>
    )
}

export { Project }