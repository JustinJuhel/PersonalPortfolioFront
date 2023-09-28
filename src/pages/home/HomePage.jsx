import React, { useEffect, useState } from 'react';
import './HomePage.css';
import * as Components from '../../components';
import axios from 'axios';

const HomePage = () => {
    // const [test, setTest] = useState(undefined);
    // useEffect(() => {
    //     axios.get("http://localhost:8000/global/check").then(data => data.data).then(data => setTest(data))
    // }, [])

    return (
        <div id='home-page'>
            <div className='home-page__background-gradients'></div>
            <h1 className='justin my-name'>Justin</h1>
            <h2 className='juhel my-name'>Juhel</h2>
            <div className='home-page__main-bowl'><Components.Bowl /></div>
            <div className='home-page__bottom'>
                <div className='home-page__bottom-line'></div>
                <h3 className='my-job'>FrontEnd Developer</h3>
                {/* {test ? <p>{test.status}</p> : null} */}
            </div>
        </div>
    )
}

export { HomePage }