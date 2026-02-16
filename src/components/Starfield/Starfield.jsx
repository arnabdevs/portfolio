import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import './Starfield.css';

const Starfield = () => {
    const stars = useMemo(() => {
        return Array.from({ length: 150 }).map((_, i) => ({
            id: i,
            size: Math.random() * 2 + 1,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            duration: Math.random() * 3 + 2,
            delay: Math.random() * 5,
            depth: Math.random() * 1000 - 500,
        }));
    }, []);

    return (
        <div className="starfield-container">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="star"
                    initial={{ opacity: 0, z: star.depth }}
                    animate={{
                        opacity: [0, 1, 0],
                        z: star.depth + 500,
                    }}
                    transition={{
                        duration: star.duration,
                        delay: star.delay,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    style={{
                        width: star.size,
                        height: star.size,
                        top: star.top,
                        left: star.left,
                        position: 'absolute',
                        backgroundColor: 'white',
                        borderRadius: '50%',
                        boxShadow: '0 0 10px white',
                    }}
                />
            ))}
        </div>
    );
};

export default Starfield;
