import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { Terminal, Globe, Code, Database } from 'lucide-react';
import './Languages.css';

const languages = [
    { name: 'Python', icon: <Code />, color: 'var(--primary-blue)' },
    { name: 'Bash(Shell Scripting)', icon: <Terminal />, color: 'var(--primary-blue)' },
    { name: 'SQL', icon: <Database />, color: 'var(--primary-blue)' },
    { name: 'JavaScript', icon: <Globe />, color: 'var(--primary-blue)' },
];

const LanguageCard = ({ language, index }) => {
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
            className="language-card glass-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
        >
            <div
                className="language-icon"
                style={{
                    color: language.color,
                    transform: "translateZ(50px)"
                }}
            >
                {language.icon}
            </div>
            <span
                className="language-name"
                style={{ transform: "translateZ(30px)" }}
            >
                {language.name}
            </span>
        </motion.div>
    );
};

const Languages = () => {
    return (
        <section className="languages-section" id="languages">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="neon-text">LANGUAGES</span>
                </motion.h2>

                <div className="languages-grid">
                    {languages.map((lang, index) => (
                        <LanguageCard key={lang.name} language={lang} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Languages;
