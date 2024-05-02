import React, { useState, useEffect } from "react";
import "./templateone.scss";

type TemplateOneProps = {
  images: { src: string; alt: string }[];
  videoSrc: string;
};

const TemplateOne: React.FC<TemplateOneProps> = ({ images, videoSrc }) => {
  const [isFlipped, setIsFlipped] = useState(new Array(images.length).fill(false));
  const [showOverlay, setShowOverlay] = useState(new Array(images.length).fill(false));

  // Scroll event handler for flipping and overlay
  useEffect(() => {
    const handleScroll = () => {
      const triggerHeight = window.innerHeight / 2;

      images.forEach((_img, index) => {
        const elem = document.querySelector(`.rectangle:nth-child(${index + 2})`);

        if (elem && window.scrollY + triggerHeight > elem.getBoundingClientRect().top + window.scrollY) {
          setIsFlipped(flips => flips.map((flipped, flipIndex) => flipIndex === index ? true : flipped));

          // Set overlay only for the first image
          if (index === 0 && !isFlipped[0]) {
            setShowOverlay(overlays => overlays.map((_overlay, overlayIndex) => overlayIndex === 0));
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [images, isFlipped]);

  useEffect(() => {
    // Only set up the timer if the first image is flipped and the overlay is shown
    if (isFlipped[0] && showOverlay[0]) {
      const timer = setTimeout(() => {
        setShowOverlay(overlays => overlays.map((overlay, overlayIndex) => overlayIndex === 0 ? false : overlay));
        setIsFlipped(flips => flips.map((flipped, flipIndex) => flipIndex === 0 ? false : flipped));
      }, 5000); // Wait for 5 seconds before hiding the overlay and flipping back
  
      // Cleanup the timeout if the component unmounts
      return () => clearTimeout(timer);
    }
  }, [isFlipped[0], showOverlay[0]]);

  const handleFlip = (index: number) => {
    const newFlipped = [...isFlipped];
    const newOverlay = [...showOverlay];
    newFlipped[index] = !newFlipped[index];
    newOverlay[index] = false;  // Hide overlay on click
    setIsFlipped(newFlipped);
    setShowOverlay(newOverlay);
  };

  return (
    <div className="template-one-container">
      <div className="image-wrapper">
        <div className="column-type1">
          <div className="square">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
          <div
            className={`rectangle ${showOverlay[0] ? "with-overlay" : ""}`}
            onClick={() => handleFlip(0)}
          >
            <div className={`flip-container ${isFlipped[0] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[5].src} alt={images[5].alt} />
                </div>
                <div className="back">
                  <img src={images[4].src} alt={images[4].alt} />
                </div>
                {showOverlay[0] && <div className="overlay">CLICK TO FLIP</div>}
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
};

export default TemplateOne;
