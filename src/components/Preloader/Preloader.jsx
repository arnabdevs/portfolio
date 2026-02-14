import React, { useState, useEffect } from 'react';
import './Preloader.css';

const Preloader = ({ onComplete }) => {
    const [text, setText] = useState('');
    const [stage, setStage] = useState(0);
    const [fadeOut, setFadeOut] = useState(false);

    const messages = [
        'INITIALIZING SYSTEM...',
        'LOADING PORTFOLIO...',
        'SYSTEM READY'
    ];

    useEffect(() => {
        if (stage < messages.length) {
            const currentMessage = messages[stage];
            let currentIndex = 0;

            const typeInterval = setInterval(() => {
                if (currentIndex <= currentMessage.length) {
                    setText(currentMessage.substring(0, currentIndex));
                    currentIndex++;
                } else {
                    clearInterval(typeInterval);
                    setTimeout(() => {
                        if (stage < messages.length - 1) {
                            setStage(stage + 1);
                        } else {
                            setFadeOut(true);
                            setTimeout(() => {
                                onComplete();
                            }, 800);
                        }
                    }, 500);
                }
            }, 50);

            return () => clearInterval(typeInterval);
        }
    }, [stage]);

    return (
        <div className={`preloader ${fadeOut ? 'fade-out' : ''}`}>
            <div className="preloader-content">
                <div className="preloader-text">
                    {text}
                    <span className="cursor">_</span>
                </div>
                <div className="preloader-bar">
                    <div className="preloader-progress" style={{ width: `${((stage + 1) / messages.length) * 100}%` }}></div>
                </div>
            </div>
        </div>
    );
};

export default Preloader;
