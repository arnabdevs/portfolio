import React from 'react';
import { motion } from 'framer-motion';
import { Instagram, Mail, Send, ArrowUp, Github } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="contact-section" id="contact">
            <div className="section-container">
                <motion.div
                    className="contact-content"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="contact-title">
                        TRANSMIT <span className="neon-text">SIGNALS</span>
                    </h2>
                    <p className="contact-subtitle">
                        Let's build defence intelligence together
                    </p>

                    <div className="social-links">
                        <motion.a
                            href="https://github.com/arnabdevs?tab=followers"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover={{ y: -5 }}
                        >
                            <Github size={28} />
                            <span>GitHub</span>
                        </motion.a>

                        <motion.a
                            href="https://www.instagram.com/arnabdevs/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social-icon"
                            whileHover={{ y: -5 }}
                        >
                            <Instagram size={28} />
                            <span>Instagram</span>
                        </motion.a>

                        <motion.a
                            href="mailto:arnab.devs.6@gmail.com"
                            className="social-icon"
                            whileHover={{ y: -5 }}
                        >
                            <Mail size={28} />
                            <span>Email</span>
                        </motion.a>
                    </div>

                    <div className="contact-form-container">
                        <form
                            className="contact-form"
                            action="https://formspree.io/f/xjgegawa"
                            method="POST"
                        >
                            <div className="form-group">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder="YOUR NAME"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    placeholder="YOUR EMAIL"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <textarea
                                    id="message"
                                    name="message"
                                    rows="5"
                                    placeholder="YOUR MESSAGE"
                                    required
                                ></textarea>
                            </div>
                            <motion.button
                                type="submit"
                                className="submit-btn"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                <Send size={18} />
                                <span>TRANSMIT SIGNAL</span>
                            </motion.button>
                        </form>
                    </div>

                    <div className="footer-bottom">
                        <p>© 2026 ARNAB KUMAR DAS | CYBER ISLAND</p>
                        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                            <ArrowUp size={20} />
                        </button>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
};

export default Contact;
