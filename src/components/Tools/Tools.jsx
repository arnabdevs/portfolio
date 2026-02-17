import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code, Terminal, Activity, Search, Box, Github, Share2 } from 'lucide-react';
import './Tools.css';

const toolCategories = [
    {
        title: 'Cyber Security',
        icon: <Shield />,
        tools: [
            { name: 'Nmap', icon: <Search /> },
            { name: 'Wireshark', icon: <Activity /> },
            { name: 'Burp Suite', icon: <Shield /> },
            { name: 'Kali Linux', icon: <Terminal /> },
            { name: 'Metasploit', icon: <Box /> },
        ]
    },
    {
        title: 'AI',
        icon: <Cpu />,
        tools: [
            { name: 'Jupyter Notebook', icon: <Code /> },
            { name: 'Visual Studio Code', icon: <Terminal /> },
        ]
    },
    {
        title: 'DEVELOPMENT STACK',
        icon: <Code />,
        tools: [
            { name: 'Git', icon: <Share2 /> },
            { name: 'GitHub', icon: <Github /> },
            { name: 'Postman', icon: <Globe /> },
        ]
    }
];

// Helper to get Globe since it was used in previous components but missed in import
const Globe = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>
);

const Tools = () => {
    return (
        <section className="tools-section" id="tools">
            <div className="section-container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="neon-text">TOOLS</span>
                </motion.h2>

                <div className="tools-container">
                    {toolCategories.map((category, idx) => (
                        <div key={idx} className="tool-category">
                            <h3 className="category-title">
                                {category.icon} {category.title}
                            </h3>
                            <div className="tools-grid">
                                {category.tools.map((tool, index) => (
                                    <motion.div
                                        key={index}
                                        className="tool-card glass-card"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.4, delay: index * 0.05 }}
                                    >
                                        <div className="tool-icon">{tool.icon}</div>
                                        <span className="tool-name">{tool.name}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Tools;
