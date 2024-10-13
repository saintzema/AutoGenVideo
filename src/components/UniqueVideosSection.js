// src/components/UniqueVideosSection.js
import React, { useRef, useEffect } from 'react';
import './UniqueVideosSection.css';

const videoData = [
  { src: 'https://video-cdn.autoshorts.ai/demos/xrjyu373iy.mp4', title: 'YouTube Shorts' },
  { src: 'https://video-cdn.autoshorts.ai/demos/f007dsau4wk.mp4', title: 'TikTok Videos' },
  { src: 'https://video-cdn.autoshorts.ai/demos/n7pk1hz19z.mp4', title: 'Instagram Reels' },
  { src: 'https://video-cdn.autoshorts.ai/demos/4l8g299olsk.mp4', title: 'YouTube Videos' },
  { src: 'https://video-cdn.autoshorts.ai/demos/lqljgm9xljl.mp4', title: 'Facebook Stories' },
  { src: 'https://video-cdn.autoshorts.ai/demos/lqkzompfhq8.mp4', title: 'LinkedIn Videos' },
  { src: 'https://video-cdn.autoshorts.ai/demos/y6ccmo66yp.mp4', title: 'Twitter Videos' },
  { src: 'https://video-cdn.autoshorts.ai/demos/scary.mp4', title: 'Snapchat Stories' },
  { src: 'https://video-cdn.autoshorts.ai/demos/motivational.mp4', title: 'IGTV Videos' },
];

const UniqueVideosSection = () => {
  const videoRowRef = useRef(null);

  useEffect(() => {
    const videoRow = videoRowRef.current;
    let animationId;

    const animate = () => {
      if (videoRow.scrollLeft >= videoRow.scrollWidth / 2) {
        videoRow.scrollLeft = 0;
      } else {
        videoRow.scrollLeft += 1;
      }
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="unique-videos-section">
      <div className="content-container">
        <h2 className="section-title">Unique Videos Each Time</h2>
        <p className="section-subtitle">Choose a video in any niche</p>
        <div className="video-container">
          <div className="video-row" ref={videoRowRef}>
            {[...videoData, ...videoData].map((video, index) => (
              <div key={index} className="video-card">
                <h3 className="video-title">{video.title}</h3>
                <video
                  src={video.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="video"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="background-circles">
        <div className="circle circle-1"></div>
        <div className="circle circle-2"></div>
        <div className="circle circle-3"></div>
        <div className="circle circle-4"></div>
      </div>
    </section>
  );
};

export default UniqueVideosSection;