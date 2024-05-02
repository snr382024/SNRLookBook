//Gavin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate5 from "../../components/PageTemplate5/TemplateFive";

import GavinBanner from "../../assets/bannerImages/Gavin-Banner.png";

import Short1 from "./Media/gavin look 3 detail.jpg";
import Short2 from "./Media/gavin look 3 detail 4.jpg";
import Short3 from "./Media/gavin look 2 detail 2 copy.jpg";
import Short4 from "./Media/gavin look 2 detail copy.jpg";

import LongFront1 from "./Media/gavin look 1 front.jpg";
import LongBack1 from "./Media/tates back fixed.png";
import LongFront2 from "./Media/gavin look 2 front copy.jpg";
import LongBack2 from "./Media/gavin look 2 front 2 copy.jpg";
import LongFront3 from "./Media/gavin look 3 front 2.jpg";
import LongBack3 from "./Media/gavin look 3 side copy.jpg";

import GavinVideo from "./Media/Caitlin_Lookbook2.mp4";
import "./gavin.scss";

const GavinCooper = () => {
  const banner = [{ src: GavinBanner, alt: "GavinBanner" }];
  const collectionName = "THE SWORD, AN ANTLER, AND BLOODSTAINED GLASS";
  const designerName = "GAVIN COOPER";

  const imageList = [
    { src: Short1, alt: "Short1" },
    { src: Short2, alt: "Short2" },
    { src: Short3, alt: "Short3" },
    { src: Short4, alt: "Short4" },
    { src: LongFront1, alt: "LongFront1" },
    { src: LongBack1, alt: "LongBack1" },
    { src: LongFront2, alt: "LongFront2" },
    { src: LongBack2, alt: "LongBack2" },
    { src: LongFront3, alt: "LongFront3" },
    { src: LongBack3, alt: "LongBack3" },
  ];

  const videoSource = GavinVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate5 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default GavinCooper;
