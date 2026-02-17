import React, { useEffect, useRef, useState } from 'react';
import './VideoBackground.css';

const VideoBackground = () => {
    const v1Ref = useRef(null);
    const v2Ref = useRef(null);
    const v3Ref = useRef(null);
    const [opacity, setOpacity] = useState({ v1: 1, v2: 0, v3: 0 });

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);

            let v1 = 0, v2 = 0, v3 = 0;

            if (scrollPercent <= 0.33) {
                // Hero stage (Full v1, transitioning to v2)
                v1 = 1 - (scrollPercent / 0.33);
                v2 = scrollPercent / 0.33;
                v3 = 0;
            } else if (scrollPercent <= 0.66) {
                // About stage (v2 fully in at 0.33, transitioning to v3)
                v1 = 0;
                v2 = 1 - ((scrollPercent - 0.33) / 0.33);
                v3 = (scrollPercent - 0.33) / 0.33;
            } else {
                // Projects stage (v3 fully in)
                v1 = 0;
                v2 = 0;
                v3 = 1;
            }

            setOpacity({ v1, v2, v3 });
        };

        const setupVideo = (video) => {
            if (!video) return;
            video.playbackRate = 0.5;
            video.play().catch(() => { });
        };

        setupVideo(v1Ref.current);
        setupVideo(v2Ref.current);
        setupVideo(v3Ref.current);

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="video-background">
            <video
                ref={v1Ref}
                className="background-video"
                style={{ opacity: opacity.v1 }}
                autoPlay loop muted playsInline
            >
                <source src="/assets/videos/bg1.mp4" type="video/mp4" />
            </video>
            <video
                ref={v2Ref}
                className="background-video"
                style={{ opacity: opacity.v2 }}
                autoPlay loop muted playsInline
            >
                <source src="/assets/videos/bg2.mp4" type="video/mp4" />
            </video>
            <video
                ref={v3Ref}
                className="background-video"
                style={{ opacity: opacity.v3 }}
                autoPlay loop muted playsInline
            >
                <source src="/assets/videos/bg3.mp4" type="video/mp4" />
            </video>
            <div className="video-overlay"></div>
        </div>
    );
};

export default VideoBackground;
