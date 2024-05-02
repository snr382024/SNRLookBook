import React, { useState } from "react";
import "./imagecarousely.scss"; // Ensure this path is correct

interface VerticalImageCarouselProps {
  images: { src: string; alt?: string }[];
}

const VerticalImageCarousel: React.FC<VerticalImageCarouselProps> = ({ images }) => {
  const [isPaused, setPauseState] = useState(false);
  const doubledImages = [...images, ...images]; // Duplicate images for smoother looping

  const pauseOnMouseEnter = () => setPauseState(true);
  const resumeOnMouseLeave = () => setPauseState(false);

  return (
    <div
      className="vertical-carousel-container"
      onMouseEnter={pauseOnMouseEnter}
      onMouseLeave={resumeOnMouseLeave}
    >
      <div
        className={`vertical-carousel-slider ${isPaused ? "carousel-paused" : ""}`}
        style={{
          animation: `vertical-slide 30s linear infinite`,
          animationPlayState: isPaused ? 'paused' : 'running',
        }}
      >
        {doubledImages.map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || ""}
            className="vertical-carousel-image"
          />
        ))}
      </div>
    </div>
  );
};

export default VerticalImageCarousel;
