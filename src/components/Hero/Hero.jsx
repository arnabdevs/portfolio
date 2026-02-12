import React from 'react';
import { motion } from 'framer-motion';
import { Github } from 'lucide-react';
import profileImg from '../../assets/profile_new.jpg';
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
                        <img src={profileImg} alt="Arnab Kumar Das" className="profile-image-new" />
                    </div>
                </div>

                <motion.h1
                    className="hero-name neon-text"
                    initial={{ opacity: 0, letterSpacing: "10px" }}
                    whileInView={{ opacity: 1, letterSpacing: "2px" }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                >
                    ARNAB KUMAR <span className="neon-text-purple">DAS</span>
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

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 2 }}
                >
                    <a
                        href="https://github.com/arnabdevs?tab=followers"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-follow-btn"
                    >
                        <Github size={20} />
                        Follow on GitHub
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
