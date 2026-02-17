import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    ABOUT <span className="neon-text">ME</span>
                </motion.h2>

                <div className="about-wrapper">
                    <motion.div
                        className="profile-image-container"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <img src="/profile.jpg" alt="Arnab Kumar Das" className="profile-image" />
                    </motion.div>

                    <motion.div
                        className="about-content glass-card"
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                    >
                        <p className="about-text">
                            I am an AI and cybersecurity-focused engineering student specializing in intelligent systems and secure architecture. My work centers around machine learning, automation, and network security, with a strong emphasis on building scalable and resilient infrastructures.
                        </p>

                        <p className="about-text">
                            I approach technology with analytical precision and a security-first mindset, continuously advancing my expertise in AI-driven defense systems and modern cybersecurity frameworks. My goal is to engineer intelligent solutions that are both innovative and secure by design.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
