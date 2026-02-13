import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Terminal, Box, ExternalLink } from 'lucide-react';
import './CodingProfiles.css';

const profiles = [
    {
        name: 'LeetCode',
        icon: <Code2 />,
        link: 'https://leetcode.com/u/ak714/', // Replace with your actual profile link
        color: '#FFA116',
        description: 'Data Structures & Algorithms',
        stats: 'Problem Solving'
    },
    {
        name: 'HackerRank',
        icon: <Terminal />,
        link: 'https://www.hackerrank.com/profile/arnabk714', // Replace with your actual profile link
        color: '#2EC866',
        description: 'Problem Solving & SQL',
        stats: 'Rank & Badges'
    },
    {
        name: 'HackTheBox',
        icon: <Box />,
        link: 'https://profile.hackthebox.com/', // Replace with your actual profile link
        color: '#9FEF00',
        description: 'Penetration Testing & CTFs',
        stats: 'Cybersecurity Skills'
    }
];

const CodingProfiles = () => {
    return (
        <section className="profiles-section" id="profiles">
            <div className="section-container">
                <motion.h2
                    className="section-title neon-text"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                >
                    Combat <span className="neon-text-purple">Arenas</span>
                </motion.h2>

                <div className="profiles-grid">
                    {profiles.map((profile, index) => (
                        <motion.a
                            href={profile.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={profile.name}
                            className="profile-card glass-card"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{
                                scale: 1.03,
                                boxShadow: `0 0 20px ${profile.color}40`,
                                borderColor: profile.color
                            }}
                        >
                            <div className="profile-icon" style={{ color: profile.color }}>
                                {profile.icon}
                            </div>
                            <div className="profile-info">
                                <h3 className="profile-name">{profile.name}</h3>
                                <p className="profile-desc">{profile.description}</p>
                                <span className="profile-stats" style={{ color: profile.color }}>
                                    {profile.stats} <ExternalLink size={14} style={{ marginLeft: '4px' }} />
                                </span>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CodingProfiles;
