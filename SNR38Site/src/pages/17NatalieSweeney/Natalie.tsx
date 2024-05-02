//Natalie.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate5 from "../../components/PageTemplate5/TemplateFive";

import NatalieBanner from "../../assets/bannerImages/Natalie-Banner.png";

import Short1 from "./Media/natalie 3 .png";
import Short2 from "./Media/natalie 2.png";
import Short3 from "./Media/Natalie Detail.png";
import Short4 from "./Media/detail 2 .png";

import LongFront1 from "./Media/Natalie 1 .png";
import LongBack1 from "./Media/Natalie 4 .png";
import LongFront2 from "./Media/natalie5 .png";
import LongBack2 from "./Media/natalie 56 .png";
import LongFront3 from "./Media/Natalie.png";
import LongBack3 from "./Media/Natalie.png";


import NatalieVideo from "./Media/Caitlin_Lookbook2.mp4";
import "./natalie.scss";

const NatalieSweeney = () => {
  const banner = [{ src: NatalieBanner, alt: "NatalieBanner" }];
  const collectionName = "HAIL MARY";
  const designerName = "NATALIE SWEENEY";

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
    { src: LongBack3, alt: "LongFront3" }

  ];

  const videoSource = NatalieVideo;


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

export default NatalieSweeney;
