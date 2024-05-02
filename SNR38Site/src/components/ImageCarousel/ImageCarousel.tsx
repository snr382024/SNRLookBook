// ImageCarousel.tsx

import React, { useState } from "react";
import "./imagecarousel.scss";

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
  collectionName?: string; 
  designerName?: string; 
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({ images, collectionName, designerName }) => {
  const [isPaused, setIsPaused] = useState(false);

  // Calculate the total width needed for all images plus duplicates
  const totalWidth = `${images.length * 100 * 2}%`;

  // Calculate the width for each image
  const imageWidth = `${100 / (images.length * 2)}%`;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  return (
    <div
      className="carousel-container"
      style={{ overflow: "hidden" }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className={`carousel-slider ${isPaused ? "paused" : ""}`}
        style={{
          display: "flex",
          width: totalWidth,
          animation: `slide ${images.length * 30}s linear infinite ${
            isPaused ? "paused" : ""
          }`,
        }}
      >
        {[...images, ...images].map((image, index) => (
          <img
            key={index}
            src={image.src}
            alt={image.alt || ""}
            className="carousel-image"
            style={{ width: imageWidth, flexShrink: 0 }}
          />
        ))}
      </div>
      
      <div className="carousel-overlay"></div> 

      <div className="carousel-text">
      {collectionName && <p>{collectionName}</p>}
        {designerName && <p>{designerName}</p>}
      </div>
    </div>
  );
};

export default ImageCarousel;
