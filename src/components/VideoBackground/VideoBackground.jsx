import React, { useEffect, useRef } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        // Set playback rate to 0.5 for slow motion effect
        video.playbackRate = 0.5;

        // Ensure video plays
        video.play().catch(err => {
            console.log('Video autoplay failed:', err);
        });
    }, []);

    return (
        <div className="video-background">
            <video
                ref={videoRef}
                className="background-video"
                autoPlay
                loop
                muted
                playsInline
            >
                <source src="/background-video.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
        </div>
    );
};

export default VideoBackground;
