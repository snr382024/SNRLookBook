import { useState, useEffect } from "react";
import "./templatetwo.scss";

type TemplateTwoProps = {
  images: { src: string; alt: string }[];
  videoSrc: string;
};

const TemplateTwo: React.FC<TemplateTwoProps> = ({ images, videoSrc }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 950);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 950);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const desktopTemplate = (
    <div className="template-two-container">
      <div className="image-wrapper">
        {/* First column of images */}
        <div className="column-type2">
          <div className="rectangle">
            <img src={images[4].src} alt={images[4].alt} />
          </div>
          <div className="square8">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
        </div>

        <div className="column-type3">
          <div className="small-rectangle">
            <img src={images[6].src} alt={images[6].alt} />
          </div>
          <div className="small-rectangle1">
            <img src={images[7].src} alt={images[7].alt} />
          </div>
        </div>

        <div className="column-type4">
          <div className="small-rectangle">
            <img src={images[8].src} alt={images[8].alt} />
          </div>
          <div className="square2">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
          <div className="square3">
            <img src={images[2].src} alt={images[2].alt} />
          </div>
        </div>

        {/* Video container */}
        <div className="video-container">
          <video src={videoSrc} loop autoPlay muted playsInline />
        </div>

        {/* Second column of images */}
        <div className="column-type2">
          <div className="rectangle">
            <img src={images[5].src} alt={images[5].alt} />
          </div>
          <div className="square9">
            <img src={images[3].src} alt={images[3].alt} />
          </div>
        </div>
      </div>
    </div>
  );

  const mobileTemplate = (
    <div className="template-two-container">
      <div className="image-wrapper">
        {/* First column of images */}
        <div className="column-type2">
          <div className="rectangle">
            <img src={images[4].src} alt={images[4].alt} />
          </div>
          <div className="square8">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
        </div>

        <div className="column-type3">
          <div className="small-rectangle">
            <img src={images[6].src} alt={images[6].alt} />
          </div>
          <div className="small-rectangle1">
            <img src={images[7].src} alt={images[7].alt} />
          </div>
        </div>

        <div className="column-type4">
          <div className="small-rectangle">
            <img src={images[8].src} alt={images[8].alt} />
          </div>
          <div className="square2">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
          <div className="square2">
            <img src={images[2].src} alt={images[2].alt} />
          </div>
        </div>

        {/* Second column of images */}
        <div className="column-type2">
          <div className="rectangle">
            <img src={images[5].src} alt={images[5].alt} />
          </div>
          <div className="square9">
            <img src={images[3].src} alt={images[3].alt} />
          </div>
        </div>
      </div>
      {/* Video container */}
      <div className="video-container">
        <video src={videoSrc} loop autoPlay muted playsInline />
      </div>
    </div>
  );

  return isMobile ? mobileTemplate : desktopTemplate;
};

export default TemplateTwo;
