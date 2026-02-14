import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Terminal, Globe, Code, Zap, Database, GitBranch } from 'lucide-react';
import './Skills.css';

const skills = [
    { name: 'AI & Machine Learning', icon: <Cpu />, color: 'var(--primary-blue)' },
    { name: 'Python Development', icon: <Code />, color: 'var(--primary-blue)' },
    { name: 'Cybersecurity', icon: <Shield />, color: 'var(--primary-blue)' },
    { name: 'Purple Teaming', icon: <Zap />, color: 'var(--primary-blue)' },
    { name: 'Linux Systems', icon: <Terminal />, color: 'var(--primary-blue)' },
    { name: 'Network Security', icon: <Globe />, color: 'var(--primary-blue)' },
    { name: 'Ethical Hacking', icon: <Shield />, color: 'var(--primary-blue)' },
    { name: 'Version Control', icon: <GitBranch />, color: 'var(--primary-blue)' },
    { name: 'Database Systems', icon: <Database />, color: 'var(--primary-blue)' },
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    CORE <span className="neon-text">SYSTEMS</span>
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                y: -8,
                                borderColor: skill.color,
                                boxShadow: `0 0 30px ${skill.color}40`
                            }}
                        >
                            <div className="skill-icon" style={{ color: skill.color }}>
                                {skill.icon}
                            </div>
                            <span className="skill-name">{skill.name}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
