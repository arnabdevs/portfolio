import React from 'react';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero-section">
            <motion.div
                className="hero-content"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
            >
                <div className="photo-container float">
                    <div className="photo-glow"></div>
                    <div className="photo-placeholder">
                        {/* User: Add your image path here */}
                        <span>PHOTO</span>
                    </div>
                </div>

                <motion.h1
                    className="hero-name neon-text"
                    initial={{ opacity: 0, letterSpacing: "10px" }}
                    whileInView={{ opacity: 1, letterSpacing: "2px" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    DASARI <span className="neon-text-purple">[NAME]</span>
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    AI/ML & Cybersecurity (Purple Teaming) Explorer
                </motion.p>

                <motion.p
                    className="hero-tagline pulse"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1.5 }}
                >
                    “This island is my digital world — built from intelligence, defense, and curiosity.”
                </motion.p>
            </motion.div>
        </section>
    );
};

export default Hero;
