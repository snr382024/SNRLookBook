import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./imagecarousel.scss";

interface ImageCarouselProps {
  images: { src: string; alt?: string }[];
  collectionName?: string;
  designerName?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  collectionName,
  designerName,
}) => {
  const [isPaused, setIsPaused] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false); // State for overlay visibility
  const [iconSize, setIconSize] = useState(40); // State to hold the icon size
  const [hamburgerBackgroundVisible, setHamburgerBackgroundVisible] = useState(false); // New state for the hamburger background visibility



  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 750) {
        setIconSize(20); // Set icon size to 20 if window width is 950px or less
      } else {
        setIconSize(45); // Set icon size to 40 for larger windows
      }
    };

    const handleScroll = () => {
      const threshold = 170; // Set scroll threshold to add background
      setHamburgerBackgroundVisible(window.scrollY > threshold);
    };


    // Call handleResize on component mount and on window resize
    handleResize();
    window.addEventListener("resize", handleResize);
    window.addEventListener('scroll', handleScroll); // Listen to scroll events


    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('scroll', handleScroll); // Clean up scroll event listener
    };
  }, []);

  const totalWidth = `${images.length * 100 * 2}%`;
  const imageWidth = `${100 / (images.length * 2)}%`;

  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  const toggleOverlay = () => {
    setIsOverlayVisible(!isOverlayVisible);
  };

  return (
    <div
      className="carousel-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`hamburger-icon ${!isOverlayVisible ? "visible" : ""} ${hamburgerBackgroundVisible ? "overlay" : ""}`}>
        <FaBars size={iconSize} color="white" onClick={toggleOverlay} />
      </div>
      <div className={`close-icon ${isOverlayVisible ? "visible" : ""}`}>
        <FaTimes size={iconSize} color="white" onClick={toggleOverlay} />
      </div>
      <div className={`menu-overlay ${isOverlayVisible ? "visible" : ""}`}>
        <Link to="/shirell" className="top">
          <h1>SHIRELL BATTLE</h1>
        </Link>
        <Link to="/olivia">
          <h1>OLIVIA CAVALLERO</h1>
        </Link>
        <Link to="/gavin">
          <h1>GAVIN COOPER</h1>
        </Link>
        <Link to="/sera">
          <h1>SERA CRISTIN FERRANTE</h1>
        </Link>
        <Link to="/caitlin">
          <h1>CAITLIN FRACASSO</h1>
        </Link>
        <Link to="/annika">
          <h1>ANNIKA GEISSBERGER</h1>
        </Link>
        <Link to="/alyssa">
          <h1>ALYSSA JONES</h1>
        </Link>
        <Link to="/emma">
          <h1>EMMA KEATING</h1>
        </Link>
        <Link to="/shannon">
          <h1>SHANNON KONECKE</h1>
        </Link>
        <Link to="/madisyn">
          <h1>MADISYN MARTINELLI</h1>
        </Link>
        <Link to="/deanna">
          <h1>DEANNA MCNALLY</h1>
        </Link>
        <Link to="/francesca">
          <h1>FRANCESACE MORABITO</h1>
        </Link>
        <Link to="/eva">
          <h1>EVA REED</h1>
        </Link>
        <Link to="/david">
          <h1>DAVID ROOT</h1>
        </Link>
        <Link to="/natalie">
          <h1>NATALIE SWEENEY</h1>
        </Link>
        <Link to="/nicole">
          <h1>NICOLE TASCA</h1>
        </Link>
        <Link to="/mo">
          <h1>MO WALSH</h1>
        </Link>
        <Link to="/sierra">
          <h1>SIERRA WEISSNER</h1>
        </Link>
      </div>

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
            style={{ width: imageWidth }}
          />
        ))}
      </div>

      <div className="carousel-text">
        {collectionName && <p>{collectionName}</p>}
        {designerName && <p>{designerName}</p>}
      </div>
    </div>
  );
};

export default ImageCarousel;
