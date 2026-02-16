import React from 'react';
import { motion } from 'framer-motion';

const Hero3D = () => {
    return (
        <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100%',
            height: '100%',
            pointerEvents: 'none',
            zIndex: 0,
            perspective: '1000px'
        }}>
            <motion.div
                animate={{
                    rotateX: [0, 10, 0],
                    rotateY: [0, 360],
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                style={{
                    width: '400px',
                    height: '400px',
                    border: '1px solid var(--primary-blue)',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: 'calc(50% - 200px)',
                    left: 'calc(50% - 200px)',
                    opacity: 0.2,
                    boxShadow: '0 0 50px var(--primary-glow)',
                    transformStyle: 'preserve-3d'
                }}
            >
                {/* Inner Ring */}
                <div style={{
                    width: '300px',
                    height: '300px',
                    border: '2px dashed var(--primary-blue)',
                    borderRadius: '50%',
                    position: 'absolute',
                    top: '50px',
                    left: '50px',
                    transform: 'translateZ(50px)'
                }} />

                {/* HUD Elements */}
                <div style={{
                    width: '100px',
                    height: '2px',
                    backgroundColor: 'var(--primary-blue)',
                    position: 'absolute',
                    top: '50%',
                    left: '-50px',
                    transform: 'rotateY(90deg)'
                }} />
                <div style={{
                    width: '100px',
                    height: '2px',
                    backgroundColor: 'var(--primary-blue)',
                    position: 'absolute',
                    top: '50%',
                    right: '-50px',
                    transform: 'rotateY(90deg)'
                }} />
            </motion.div>
        </div>
    );
};

export default Hero3D;
