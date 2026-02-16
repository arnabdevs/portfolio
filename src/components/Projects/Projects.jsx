import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
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

const ProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e) => {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className="project-card glass-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
        >
            <div className="project-header" style={{ transform: "translateZ(20px)" }}>
                <span className="project-category">{project.category}</span>
            </div>

            <h3 className="project-title" style={{ transform: "translateZ(50px)" }}>{project.title}</h3>
            <p className="project-desc" style={{ transform: "translateZ(30px)" }}>{project.description}</p>

            <div className="project-tags" style={{ transform: "translateZ(40px)" }}>
                {project.tags.map(tag => (
                    <span key={tag} className="tag">{tag}</span>
                ))}
            </div>

            <div className="project-links" style={{ transform: "translateZ(40px)" }}>
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
    );
};

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
                    <span className="neon-text">PROJECTS</span>
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
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
