import React from 'react';
import './WorkPage.css';
import * as Components from '../../components'

const WorkPage = () => {
    return (
        <div id='work-page'>

            <div className='work-page__background-gradients'></div>

            <div className='work-page__bowl'><Components.Bowl /></div>
            <div className='work-page__title'><h1>Work</h1></div>
            <div className='work-page__projects-container'>
                <Components.Project />
                <Components.Project />
            </div>

        </div>
    )
}

export { WorkPage }