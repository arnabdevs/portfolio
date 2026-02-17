import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Cpu, Shield, Terminal, Globe, Code, Zap, Database, GitBranch } from 'lucide-react';
import './Skills.css';

const skills = [
    { name: 'Networking & System', icon: <Globe />, color: 'var(--primary-blue)' },
    { name: 'Programming & Automation', icon: <Code />, color: 'var(--primary-blue)' },
    { name: 'Version Control', icon: <GitBranch />, color: 'var(--primary-blue)' },
];

const SkillCard = ({ skill, index }) => {
    const cardRef = useRef(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

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
            className="skill-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div
                className="skill-icon"
                style={{
                    color: skill.color,
                    transform: "translateZ(50px)"
                }}
            >
                {skill.icon}
            </div>
            <span
                className="skill-name"
                style={{ transform: "translateZ(30px)" }}
            >
                {skill.name}
            </span>
        </motion.div>
    );
};

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
                    <span className="neon-text">SKILLS</span>
                </motion.h2>

                <div className="skills-grid">
                    {skills.map((skill, index) => (
                        <SkillCard key={skill.name} skill={skill} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
