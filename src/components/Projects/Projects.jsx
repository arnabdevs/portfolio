import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const projects = [
    {
        id: 1,
        title: "AI Security Research",
        category: "AI/ML Zone",
        description: "Investigating the intersection of generative AI and automated threat detection systems.",
        tags: ["Python", "TensorFlow", "Cyber-AI"],
        link: "#",
        github: "#"
    },
    {
        id: 2,
        title: "Purple Teaming Lab",
        category: "Defense Zone",
        description: "A simulated environment for testing offensive multi-stage attacks and defensive countermeasures.",
        tags: ["Linux", "Networking", "SOC"],
        link: "#",
        github: "#"
    },
    {
        id: 3,
        title: "Network Defense Automation",
        category: "Automation Zone",
        description: "Custom scripts and tools built to automate network monitoring and incident response.",
        tags: ["Python", "Bash", "GitHub Actions"],
        link: "#",
        github: "https://github.com/arnabdevs/portfolio"
    },
    {
        id: 4,
        title: "Simple Port Scanner",
        category: "Networking Zone",
        description: "A Python-based networking project designed to scan and identify open ports on a target host.",
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
                    className="section-title neon-text-purple"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Islands Built <span className="neon-text">[ZONES]</span>
                </motion.h2>

                <p className="projects-intro">
                    Each zone represents a milestone in my digital construction—architected for performance and security.
                </p>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            className="project-card glass-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                            <div className="project-category">{project.category}</div>
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-desc">{project.description}</p>

                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span key={tag} className="tag">{tag}</span>
                                ))}
                            </div>

                            <div className="project-links">
                                <a href={project.link} className="link-icon"><ExternalLink size={20} /></a>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
