import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Terminal, Globe, Code, Zap, Database, GitBranch } from 'lucide-react';
import './Skills.css';

const skills = [
    { name: 'AI / Machine Learning', icon: <Cpu />, color: 'var(--primary)' },
    { name: 'Python', icon: <Code />, color: 'var(--secondary)' },
    { name: 'Cybersecurity Fundamentals', icon: <Shield />, color: 'var(--primary)' },
    { name: 'Purple Teaming', icon: <Zap />, color: 'var(--secondary)' },
    { name: 'Linux', icon: <Terminal />, color: 'var(--primary)' },
    { name: 'Networking', icon: <Globe />, color: 'var(--secondary)' },
    { name: 'Ethical Hacking', icon: <Shield />, color: 'var(--primary)' },
    { name: 'Git & GitHub', icon: <GitBranch />, color: 'var(--secondary)' },
];

const Skills = () => {
    return (
        <section className="skills-section" id="skills">
            <div className="section-container">
                <motion.h2
                    className="section-title neon-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Intelligence Core <span className="neon-text-purple">&</span> Defense Nodes
                </motion.h2>

                <div className="skills-nodes">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.name}
                            className="skill-node glass-card"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.05,
                                boxShadow: `0 0 20px ${skill.color}`,
                                borderColor: skill.color
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
