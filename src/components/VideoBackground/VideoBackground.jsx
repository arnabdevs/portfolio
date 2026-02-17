import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import './VideoBackground.css';

const VideoBackground = () => {
    const { scrollYProgress } = useScroll();

    // Opacity Mappings for 3 Stages
    // Stage 1: Hero (0 to 0.33)
    // Stage 2: About (0.33 to 0.66)
    // Stage 3: Projects (0.66 to 1)

    // We use slightly overlapping ranges for smoother transitions
    const opacity1 = useTransform(scrollYProgress, [0, 0.33, 0.45], [1, 0, 0]);
    const opacity2 = useTransform(scrollYProgress, [0.2, 0.35, 0.65, 0.8], [0, 1, 1, 0]);
    const opacity3 = useTransform(scrollYProgress, [0.55, 0.7, 1], [0, 1, 1]);

    // Subtle scale drift to match "environmental evolution"
    const scale1 = useTransform(scrollYProgress, [0, 0.45], [1, 1.1]);
    const scale2 = useTransform(scrollYProgress, [0.2, 0.8], [1.1, 1.2]); // Deeper evolution
    const scale3 = useTransform(scrollYProgress, [0.55, 1], [1, 1.15]);

    return (
        <div className="video-background">
            <motion.video
                className="background-video"
                style={{ opacity: opacity1, scale: scale1 }}
                autoPlay loop muted playsInline
            >
                <source src="/assets/videos/bg1.mp4" type="video/mp4" />
            </motion.video>

            <motion.video
                className="background-video"
                style={{ opacity: opacity2, scale: scale2 }}
                autoPlay loop muted playsInline
            >
                <source src="/assets/videos/bg2.mp4" type="video/mp4" />
            </motion.video>

            <motion.video
                className="background-video"
                style={{ opacity: opacity3, scale: scale3 }}
                autoPlay loop muted playsInline
            >
                <source src="/assets/videos/bg3.mp4" type="video/mp4" />
            </motion.video>

            <div className="video-overlay"></div>
        </div>
    );
};

export default VideoBackground;
