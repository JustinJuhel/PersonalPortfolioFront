import React, { useState } from 'react';
import './DevTool.css';
import * as Assets from '../../assets';
import { useParams } from 'react-router-dom';

const DevTool = ({ tool, theme }) => {
    const params = useParams()
    const language = params.lang ?? "fr";

    const [modalVisibility, setModalVisibility] = useState(false);
    const toggleModalVisibility = () => {
        setModalVisibility(!modalVisibility);
    };

    const title_map_en = {
        "code_editor": "Code Editor",
        "communication_tool": "Communication",
        "design_tool": "Design",
        "language": "Language",
        "integration": "Integration Platform",
        "javascript environment": "JavaScript Environment",
        "javascript library": "JavaScript Library",
    }
    
    const title_map_fr = {
        "code_editor": "Editeur de code",
        "communication_tool": "Communication",
        "design_tool": "Design",
        "language": "Langage",
        "integration": "Plateforme d'Intégration",
        "javascript environment": "Environnement JavaScript",
        "javascript library": "Bibliothèque JavaScript",
    }
    return (
        <div className='dev-tool__container' onMouseEnter={() => { toggleModalVisibility() }} onMouseLeave={() => { toggleModalVisibility() }}>
            <img src={Assets.dev_tools_map[tool.name]} alt={tool.name} />
            {!modalVisibility ? null :
                <DevToolModal modalBoolean={modalVisibility}>
                    <div className={`dev-tool__description dev-tool__description__${theme}`}>
                        <p>{tool.display_name}</p>
                        {language === 'fr' ?
                            <p>{title_map_fr[tool.type]}</p> :
                            <p>{title_map_en[tool.type]}</p>
                        }
                    </div>
                </DevToolModal>
            }
        </div>
    )
}

const DevToolModal = ({ children, modalBoolean }) => {

    console.log("Modal.jsx modal : " + modalBoolean);

    if (!modalBoolean) {
        return null
    }

    return (
        <div className='dev-tool__modal'>
            <div className='dev-tool__overlay' onClick={() => {

            }}></div>
            {children}
        </div>
    )
}

export { DevTool }