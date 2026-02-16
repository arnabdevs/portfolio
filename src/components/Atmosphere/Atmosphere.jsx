import React from 'react';
import Starfield from '../Starfield/Starfield';
import './Atmosphere.css';

const Atmosphere = () => {
    return (
        <>
            <Starfield />
            <div className="vignette"></div>
            <div className="scan-lines"></div>
        </>
    );
};

export default Atmosphere;
