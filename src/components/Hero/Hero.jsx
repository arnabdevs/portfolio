import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import VideoBackground from '../VideoBackground/VideoBackground';
import './Hero.css';

const Hero = () => {
    const followGitHub = () => {
        window.open('https://github.com/arnabdevs', '_blank');
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.5
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1.2,
                ease: [0.16, 1, 0.3, 1]
            }
        }
    };

    return (
        <section className="hero-section">
            <VideoBackground />

            <div className="hero-content">
                <motion.div
                    className="hero-init"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.7 }}
                    transition={{ duration: 1, delay: 0.2 }}
                >
                    [ MISSION STATUS: INITIALIZING ]
                </motion.div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="hero-main"
                >
                    <motion.h1 className="hero-name" variants={itemVariants}>
                        ARNAB KUMAR DAS
                    </motion.h1>

                    <motion.div className="hero-divider" variants={itemVariants} />

                    <motion.p className="hero-subtitle" variants={itemVariants}>
                        SYSTEM ARCHITECT // AI & CYBERSECURITY
                    </motion.p>

                    <motion.div className="hero-cta" variants={itemVariants}>
                        <button className="cta-button" onClick={followGitHub}>
                            INITIALIZE CONNECTION
                        </button>
                    </motion.div>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 3 }}
                >
                    <ArrowDown size={24} className="pulse" />
                </motion.div>

                <div className="hero-corner top-left">LAT: 28.6139° N</div>
                <div className="hero-corner top-right">LONG: 77.2090° E</div>
                <div className="hero-corner bottom-left">REF: A-X-99</div>
                <div className="hero-corner bottom-right">SEC: ALPHA</div>
            </div>
        </section>
    );
};

export default Hero;
