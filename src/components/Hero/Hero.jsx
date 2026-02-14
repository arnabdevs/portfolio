import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import VideoBackground from '../VideoBackground/VideoBackground';
import './Hero.css';

const Hero = () => {
    const followGitHub = () => {
        window.open('https://github.com/arnabdevs', '_blank');
    };

    return (
        <section className="hero-section">
            <VideoBackground />

            <div className="hero-content">
                <motion.div
                    className="hero-init"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    SYSTEM INITIALIZING...
                </motion.div>

                <motion.h1
                    className="hero-name"
                    initial={{ opacity: 0, letterSpacing: '0.5em' }}
                    animate={{ opacity: 1, letterSpacing: '0.2em' }}
                    transition={{ duration: 1.5, delay: 0.8 }}
                >
                    ARNAB KUMAR DAS
                </motion.h1>

                <motion.div
                    className="hero-divider"
                    initial={{ width: 0 }}
                    animate={{ width: '200px' }}
                    transition={{ duration: 1, delay: 1.5 }}
                />

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    AI/ML & CYBERSECURITY EXPLORER
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2.5 }}
                >
                    <button className="cta-button" onClick={followGitHub}>
                        FOLLOW GITHUB
                    </button>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    <ArrowDown size={24} className="pulse" />
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
