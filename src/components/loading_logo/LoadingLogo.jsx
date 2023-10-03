import React from 'react';
import './LoadingLogo.css';
import * as Assets from '../../assets';

const LoadingLogo = () => {
    return (
        <div className='loading-logo'>
            <img src={Assets.loading_logo} alt="loading..." />
        </div>
    )
}

export { LoadingLogo }