import React from 'react';
import { motion } from 'framer-motion';
import { Github, Instagram, Mail, ArrowUp } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="contact-section" id="contact">
            <div className="section-container">
                <motion.div
                    className="contact-content glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="contact-title neon-text">Signal Transmitted</h2>
                    <p className="contact-subtitle">Let's build the next secure intelligence together.</p>

                    <div className="social-links">

                        <motion.a
                            href="https://www.instagram.com/arnabdevs/"
                            className="social-icon"
                            whileHover={{ y: -5, color: 'var(--secondary)' }}
                        >
                            <Instagram size={32} />
                            <span>Instagram</span>
                        </motion.a>

                        <motion.a
                            href="mailto:arnab.devs.6@gmail.com"
                            className="social-icon"
                            whileHover={{ y: -5, color: 'var(--accent)' }}
                        >
                            <Mail size={32} />
                            <span>Email</span>
                        </motion.a>
                    </div>

                    <div className="footer-bottom">
                        <p>© {new Date().getFullYear()} Dasari Portfolio | Hand-built in the Cyber Universe</p>
                        <button className="back-to-top" onClick={scrollToTop}>
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
