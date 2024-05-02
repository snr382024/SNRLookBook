// TemaplteFive.tsx

import React, { useState, useEffect, useRef } from "react";
import arrowIcon from "../../assets/icons/arrow-right-white.png";
import ImageCarousel from '../../components/imageCarouselY/imageCarouselY'; // Update the path as necessary


import "./templatefive.scss";

type TemplateFiveProps = {
  images: { src: string; alt: string }[];
  videoSrc: string;
};

const TemplateFive: React.FC<TemplateFiveProps> = ({ images, videoSrc }) => {
  
  const [isFlipped, setIsFlipped] = useState(
    new Array(images.length).fill(false)
  );
  const [isVisible, setIsVisible] = useState(
    new Array(images.length).fill(false)
  );
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);
  const refs = images.map(() => useRef<HTMLDivElement>(null));
  const fadeOutTimers = useRef<number[]>([]);

  const Squareimages = [
    { src: images[0].src, alt: "image 1" },
    { src: images[1].src, alt: "image 2" },
    { src: images[2].src, alt: "image 3" },
    { src: images[3].src, alt: "image 4" }
  ];

  const handleVisibilityChange = (index: number, visible: boolean) => {
    clearTimeout(fadeOutTimers.current[index]);
    if (visible) {
      setIsVisible((vis) => {
        const newVis = [...vis];
        newVis[index] = true;
        return newVis;
      });
      // Set timeout to fade out
      fadeOutTimers.current[index] = window.setTimeout(() => {
        setIsVisible((vis) => {
          const newVis = [...vis];
          newVis[index] = false;
          return newVis;
        });
      }, 5000);
    } else {
      setIsVisible((vis) => {
        const newVis = [...vis];
        newVis[index] = false;
        return newVis;
      });
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = refs.findIndex((ref) => ref.current === entry.target);
          if (index !== -1) {
            handleVisibilityChange(index, entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );

    refs.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      refs.forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
      fadeOutTimers.current.forEach(clearTimeout);
    };
  }, []);

  const handleFlip = (index: number) => {
    setIsFlipped((flipped) => {
      const newFlipped = [...flipped];
      newFlipped[index] = !newFlipped[index];
      return newFlipped;
    });
  };

  const desktopTemplate = (
    <div className="template-five-container">
      <div className="image-wrapper">
        <div className="column-type1">
          <div
            className="rectangle"
            ref={refs[0]}
            onClick={() => handleFlip(0)}
          >
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
            <div
              className={`arrow-icon-wrapper ${isVisible[0] ? "visible" : ""}`}
            >
              <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
            </div>
          </div>
        </div>
        <div className="video-container">
          <video src={videoSrc} loop autoPlay muted playsInline />
        </div>
        <div className="column-type2">
          <div
            className="rectangle"
            ref={refs[1]}
            onClick={() => handleFlip(1)}
          >
            {" "}
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
            <div
              className={`arrow-icon-wrapper ${isVisible[1] ? "visible" : ""}`}
            >
              <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
            </div>
          </div>
        </div>
        <div className="column-type3">
          <ImageCarousel images={Squareimages} />
        </div>
        <div className="column-type2">
          <div
            className="rectangle"
            ref={refs[3]}
            onClick={() => handleFlip(3)}
          >
            {" "}
            <div className={`flip-container ${isFlipped[3] ? "flipped" : ""}`}>
              <div className="flipper">
                <div className="front">
                  <img src={images[8].src} alt={images[8].alt} />
                </div>
                <div className="back">
                  <img src={images[9].src} alt={images[9].alt} />
                </div>
              </div>
            </div>
            <div
              className={`arrow-icon-wrapper ${isVisible[3] ? "visible" : ""}`}
            >
              <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const mobileTemplate = (
    <div className="template-five-container">
      <div className="image-wrapper">
        <div className="column-type1">
          <div
            className="rectangle"
            ref={refs[0]}
            onClick={() => handleFlip(0)}
          >
            {" "}
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
            <div
              className={`arrow-icon-wrapper ${isVisible[0] ? "visible" : ""}`}
            >
              <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
            </div>
          </div>
        </div>
        <div className="column-type2">
          <div
            className="rectangle"
            ref={refs[1]}
            onClick={() => handleFlip(1)}
          >
            {" "}
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
            <div
              className={`arrow-icon-wrapper ${isVisible[1] ? "visible" : ""}`}
            >
              <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
            </div>
          </div>
        </div>
        <div className="column-type1">
          <div
            className="rectangle"
            ref={refs[2]}
            onClick={() => handleFlip(2)}
          >
            {" "}
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
            <div
              className={`arrow-icon-wrapper ${isVisible[2] ? "visible" : ""}`}
            >
              <img src={arrowIcon} alt="Arrow icon" className="arrow-icon" />
            </div>
          </div>
        </div>
        <div className="column-type2">
          <div className="square">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
          <div className="square">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
          <div className="square">
            <img src={images[2].src} alt={images[2].alt} />
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

export default TemplateFive;
