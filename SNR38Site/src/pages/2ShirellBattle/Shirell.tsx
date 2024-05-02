// Shirell.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate5 from "../../components/PageTemplate5/TemplateFive";

import ShirellBanner from "../../assets/bannerImages/Shirell-Banner.jpeg";

import Short1 from "./Media/Detailcopy.jpg";
import Short2 from "./Media/Detail.png";
import Short3 from "./Media/Detail Shot.png";
import Short4 from "./Media/detail4.png";

import LongFront1 from "./Media/Shirell Look 2 Front.png";
import LongBack1 from "./Media/Shirell 2 Back.png";
import LongFront2 from "./Media/Shireel Look 3 front.png";
import LongBack2 from "./Media/Shirell 3 Front.png";
import LongFront3 from "./Media/Shireel 1 Side.png";
import LongBack3 from "./Media/Shireel 1 Front p2.png";


import ShirellVideo from "./Media/Caitlin_Lookbook2.mp4";
import "./shirell.scss";

const ShirellBattle = () => {
  const banner = [{ src: ShirellBanner, alt: "ShirellBanner" }];
  const collectionName = "ANCHORED TO MOVEMENT";
  const designerName = "SHIRELL BATTLE";

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

  const videoSource = ShirellVideo;

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

export default ShirellBattle;
