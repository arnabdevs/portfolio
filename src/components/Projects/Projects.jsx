import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: "AI Security Research",
        category: "ARTIFICIAL INTELLIGENCE",
        description: "Investigating the intersection of generative AI and automated threat detection systems. Building intelligent defense mechanisms that adapt to emerging attack vectors.",
        tags: ["Python", "TensorFlow", "Cyber-AI"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Purple Teaming Lab",
        category: "DEFENSE OPERATIONS",
        description: "A simulated environment for testing offensive multi-stage attacks and defensive countermeasures. Real-world scenarios for security validation.",
        tags: ["Linux", "Networking", "SOC"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Network Defense Automation",
        category: "AUTOMATION",
        description: "Custom scripts and tools built to automate network monitoring and incident response. Reducing response time from hours to seconds.",
        tags: ["Python", "Bash", "CI/CD"],
        link: "#",
        github: "https://github.com/arnabdevs/portfolio"
    },
    {
        id: 4,
        title: "Simple Port Scanner",
        category: "NETWORK SECURITY",
        description: "A Python-based networking project designed to scan and identify open ports on a target host. Built for reconnaissance and security auditing.",
        tags: ["Python", "Networking", "Security"],
        link: "https://simple-port-scanner.vercel.app",
        github: "https://github.com/arnabdevs/port-scanner"
    }
];

const Projects = () => {
    return (
        <section className="projects-section" id="projects">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    DEPLOYED <span className="neon-text">SYSTEMS</span>
                </motion.h2>

                <motion.p
                    className="projects-intro"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    Mission-critical projects engineered for operational excellence
                </motion.p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card glass-card"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: index * 0.15 }}
                        >
                            <div className="project-header">
                                <span className="project-category">{project.category}</span>
                            </div>

                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.link !== '#' && (
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <ExternalLink size={18} />
                                        <span>VIEW LIVE</span>
                                    </a>
                                )}
                                {project.github !== '#' && (
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="project-link"
                                    >
                                        <Github size={18} />
                                        <span>SOURCE</span>
                                    </a>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
