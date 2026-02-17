import React from 'react';
import { motion } from 'framer-motion';
import './Certificates.css';

const certificates = [
    {
        title: 'Python Coder',
        issuer: 'Kaggle',
        image: '/assets/certificates/python_coder.png',
        date: 'November 2025'
    },
    {
        title: '5-Day AI Agents Intensive Course',
        issuer: 'Google | Kaggle',
        image: '/assets/certificates/ai_agents.png',
        date: 'October 2025'
    },
    {
        title: 'Intro to Machine Learning',
        issuer: 'Kaggle',
        image: '/assets/certificates/intro_ml.png',
        date: 'January 2026'
    },
    {
        title: 'Offensive Security Operations',
        issuer: 'Cybrary',
        image: '/assets/certificates/offensive_sec.jpg',
        date: 'January 2026'
    }
];

const Certificates = () => {
    return (
        <section className="certificates-section" id="certificates">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="neon-text">CERTIFICATIONS</span>
                </motion.h2>

                <div className="certificates-grid">
                    {certificates.map((cert, index) => (
                        <motion.div
                            key={index}
                            className="cert-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="cert-image-container">
                                <img src={cert.image} alt={cert.title} className="cert-image" />
                                <div className="cert-overlay">
                                    <span className="cert-date">{cert.date}</span>
                                </div>
                            </div>
                            <div className="cert-info">
                                <h3 className="cert-title">{cert.title}</h3>
                                <p className="cert-issuer">{cert.issuer}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certificates;
