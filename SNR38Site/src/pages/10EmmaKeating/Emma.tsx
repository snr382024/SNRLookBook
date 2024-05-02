//Emma.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

import Short1 from "./Media/Detail Look 1.jpg";
import Short2 from "./Media/Look 4 Detail .png";
import Short3 from "./Media/Look 2 Detail.png";
import Short4 from "./Media/Detail Look 3 .png";

import LongFront1 from "./Media/Emma Look 1 Front_.png";
import LongBack1 from "./Media/Emma Side Look 1.png";
import LongFront2 from "./Media/Look 4 Front.png";
import LongBack2 from "./Media/Look 4 Side.png";
import LongFront3 from "./Media/Look 2 Front.png";
import LongBack3 from "./Media/Look 2 Back .png";
import LongFront4 from "./Media/Look 3 Front.png";
import LongBack4 from "./Media/Look 3 Back.png";

import EmmaVideo from "./Media/Caitlin_Lookbook2.mp4";

import EmmaBanner from "../../assets/bannerImages/Emma-Banner.png";
import "./emma.scss";

const EmmaKeating = () => {
  const banner = [{ src: EmmaBanner, alt: "EmmaBanner" }];
  const collectionName = "HEIRLOOM";
  const designerName = "EMMA KEATING";

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
    { src: LongFront4, alt: "LongFront4" },
    { src: LongBack4, alt: "LongBack4" },
  ];

  const videoSource = EmmaVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate4 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default EmmaKeating;
