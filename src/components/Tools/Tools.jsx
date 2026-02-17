import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Cpu, Code, Terminal, Activity, Search, Box, Github, Share2, Globe } from 'lucide-react';
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
