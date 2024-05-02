import React from 'react';
import CoverVideo from "../../assets/videos/CoverVideo.mp4"
import "./coverpage.scss";

const CoverPage: React.FC = () => {
  return (
    <div className="cover-page">
      <video autoPlay loop playsInline muted className="background-video">
        <source src={CoverVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-overlay"></div>
      <div className="centered-text">
        <h1>INTERLINKED</h1>
        <h1>LOOKBOOK</h1>
      </div>
    </div>
  );
}

export default CoverPage;
