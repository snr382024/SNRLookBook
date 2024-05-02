//Sierra.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

import SierraBanner from "../../assets/bannerImages/Sierra-Banner.png";

import Short1 from "./Media/SierraLook1Detail.png";
import Short2 from "./Media/SierraLook4Detail.jpg";
import Short3 from "./Media/SierraLook3Detail.jpg";
import Short4 from "./Media/SierraLook2Detail.png";

import LongFront1 from "./Media/SierraLook1Front.png";
import LongBack1 from "./Media/SierraLook1Back.png";
import LongFront2 from "./Media/SierraLook4Front.jpg";
import LongBack2 from "./Media/SierraLook4Back.jpg";
import LongFront3 from "./Media/SierraLook3Front.jpg";
import LongBack3 from "./Media/SierraLook3Back.jpg";
import LongFront4 from "./Media/SierraLook2Front.png";
import LongBack4 from "./Media/SierraLook2Back.png";

import SierraVideo from "./Media/Caitlin_Lookbook2.mp4";

import "./sierra.scss";

const SierraWeissner = () => {
  const banner = [{ src: SierraBanner, alt: "SierraBanner" }];
  const collectionName = "PERSEPHONE'S BLOOM";
  const designerName = "SIERRA WEISSNER";

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

  const videoSource = SierraVideo;

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

export default SierraWeissner;
