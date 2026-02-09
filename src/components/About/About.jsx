import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
    return (
        <section className="about-section" id="about">
            <div className="section-container">
                <motion.h2
                    className="section-title neon-text-purple"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    Architect of Intelligence & Defense
                </motion.h2>

                <div className="about-grid">
                    <motion.div
                        className="about-text glass-card"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <p>
                            I am a learner and explorer dedicated to the intersection of
                            <span className="highlight"> AI / Machine Learning</span> and
                            <span className="highlight"> Cybersecurity</span>.
                        </p>
                        <p>
                            My focus lies in <strong>Purple Teaming</strong>—a holistic approach
                            that blends offensive prowess with defensive strategy. I believe
                            in building systems that are not just intelligent, but inherently resilient.
                        </p>
                        <p>
                            This digital island is a testament to my journey—a space forged from
                            constant curiosity and the drive to secure the future of intelligence.
                        </p>
                    </motion.div>

                    <motion.div
                        className="about-stats"
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="stat-node">
                            <span className="stat-label">Mindset</span>
                            <span className="stat-value neon-text">Visionary</span>
                        </div>
                        <div className="stat-node">
                            <span className="stat-label">Focus</span>
                            <span className="stat-value neon-text-purple">Security</span>
                        </div>
                        <div className="stat-node">
                            <span className="stat-label">Status</span>
                            <span className="stat-value neon-text">Developer</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
