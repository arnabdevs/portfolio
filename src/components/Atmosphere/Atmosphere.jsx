import React from 'react';
import './Atmosphere.css';

const Atmosphere = () => {
    return (
        <div className="atmosphere-layer">
            <div className="cyber-grid"></div>
            <div className="vignette"></div>
            <div className="digital-fog"></div>
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${5 + Math.random() * 10}s`
                    }}></div>
                ))}
            </div>
        </div>
    );
};

export default Atmosphere;
