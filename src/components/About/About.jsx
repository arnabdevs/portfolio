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
                    MISSION <span className="neon-text">PROFILE</span>
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
                            I architect intelligent systems at the convergence of
                            <span className="highlight"> artificial intelligence</span> and
                            <span className="highlight"> cybersecurity</span>.
                            My mission: to build autonomous defense mechanisms that think, adapt, and protect.
                        </p>

                        <p className="about-text">
                            Specializing in <strong>Purple Teaming</strong>—the strategic fusion of offensive and defensive operations—I engineer solutions that don't just respond to threats, but anticipate them. Every system I build is designed for resilience in an adversarial future.
                        </p>

                        <p className="about-text">
                            This portfolio represents more than code. It's a launch platform for next-generation security architecture, where machine learning meets tactical defense, and innovation meets operational excellence.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
