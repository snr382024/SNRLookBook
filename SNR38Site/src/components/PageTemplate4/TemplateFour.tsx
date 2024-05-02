//TemplateFour.tsx

import React, { useState, useEffect } from "react";
import "./templatefour.scss";

type TemplateFourProps = {
  images: { src: string; alt: string }[];
  videoSrc: string;
};

const TemplateFour: React.FC<TemplateFourProps> = ({ images, videoSrc }) => {
  const [isFlipped, setIsFlipped] = useState(
    new Array(images.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  const handleFlip = (index: number) => {
    const flippedStates = [...isFlipped];
    flippedStates[index] = !flippedStates[index];
    setIsFlipped(flippedStates);
  };

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const desktopTemplate = (
    <div className="template-four-container">
      <div className="image-wrapper">
        <div className="column-type2">
          <div className="square">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
          <div className="rectangle" onClick={() => handleFlip(0)}>
            <div className={`flip-container ${isFlipped[0] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[4].src} alt={images[4].alt} />
                </div>
                <div className="back">
                  <img src={images[5].src} alt={images[5].alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-type1">
          <div className="rectangle" onClick={() => handleFlip(1)}>
            <div className={`flip-container ${isFlipped[1] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[6].src} alt={images[6].alt} />
                </div>
                <div className="back">
                  <img src={images[7].src} alt={images[7].alt} />
                </div>
              </div>
            </div>
          </div>
          <div className="square">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
        </div>
        <div className="video-container">
        <video src={videoSrc} loop autoPlay muted playsInline />
      </div>
        <div className="column-type2">
          <div className="square">
            <img src={images[2].src} alt={images[2].alt} />
          </div>
          <div className="rectangle" onClick={() => handleFlip(2)}>
            <div className={`flip-container ${isFlipped[2] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[8].src} alt={images[8].alt} />
                </div>
                <div className="back">
                  <img src={images[9].src} alt={images[9].alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-type1">
          <div className="rectangle" onClick={() => handleFlip(3)}>
            <div className={`flip-container ${isFlipped[3] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[10].src} alt={images[10].alt} />
                </div>
                <div className="back">
                  <img src={images[11].src} alt={images[11].alt} />
                </div>
              </div>
            </div>
          </div>
          <div className="square">
            <img src={images[3].src} alt={images[3].alt} />
          </div>
        </div>
      </div>
    </div>
  );

  const mobileTemplate = (
    <div className="template-four-container">
      <div className="image-wrapper">
        <div className="column-type1">
          <div className="square">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
          <div className="rectangle" onClick={() => handleFlip(0)}>
            <div className={`flip-container ${isFlipped[0] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[4].src} alt={images[4].alt} />
                </div>
                <div className="back">
                  <img src={images[5].src} alt={images[5].alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-type2">
          <div className="rectangle" onClick={() => handleFlip(1)}>
            <div className={`flip-container ${isFlipped[1] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[6].src} alt={images[6].alt} />
                </div>
                <div className="back">
                  <img src={images[7].src} alt={images[7].alt} />
                </div>
              </div>
            </div>
          </div>
          <div className="square">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
        </div>
        <div className="column-type1">
          <div className="square">
            <img src={images[2].src} alt={images[2].alt} />
          </div>
          <div className="rectangle" onClick={() => handleFlip(2)}>
            <div className={`flip-container ${isFlipped[2] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[8].src} alt={images[8].alt} />
                </div>
                <div className="back">
                  <img src={images[9].src} alt={images[9].alt} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="column-type2">
          <div className="rectangle" onClick={() => handleFlip(3)}>
            <div className={`flip-container ${isFlipped[3] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[10].src} alt={images[10].alt} />
                </div>
                <div className="back">
                  <img src={images[11].src} alt={images[11].alt} />
                </div>
              </div>
            </div>
          </div>
          <div className="square">
            <img src={images[3].src} alt={images[3].alt} />
          </div>
        </div>
      </div>
      <div className="video-container">
        <video src={videoSrc} loop autoPlay muted playsInline />
      </div>
    </div>
  );

  return isMobile ? mobileTemplate : desktopTemplate;
};

export default TemplateFour;
