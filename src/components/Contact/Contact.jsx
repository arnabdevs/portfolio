import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, ArrowUp, Send } from 'lucide-react';
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
                            <span>arnab.devs.6@gmail.com</span>
                        </motion.a>
                    </div>

                    <div className="contact-form-container">
                        <form
                            className="contact-form"
                            action="https://formspree.io/f/xjgegawa"
                            method="POST"
                        >
                            <div className="form-group">
                                <input type="text" id="name" name="name" placeholder="YOUR NAME" required />
                            </div>
                            <div className="form-group">
                                <input type="email" id="email" name="email" placeholder="YOUR EMAIL" required />
                            </div>
                            <div className="form-group">
                                <textarea id="message" name="message" rows="5" placeholder="YOUR MESSAGE" required></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Send size={20} />
                                <span>TRANSMIT SIGNAL</span>
                            </motion.button>
                        </form>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 Arnab Kumar Das | Hand-built in the Cyber Universe</p>
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
