//Eva.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

import Short1 from "./Media/EvaLook2Detail.png";
import Short2 from "./Media/EvaLook3Detail.png";
import Short3 from "./Media/EvaLook4Detail.png";
import Short4 from "./Media/EvaLook1Detail.png";

import LongFront1 from "./Media/EvaLook2Front.png";
import LongBack1 from "./Media/EvaLook2Back.png";
import LongFront2 from "./Media/EvaLook3Front.jpg";
import LongBack2 from "./Media/EvaLook3Side.jpg";
import LongFront3 from "./Media/EvaLook4Front.png";
import LongBack3 from "./Media/EvaLook4Back.png";
import LongFront4 from "./Media/EvaLook1Front.png";
import LongBack4 from "./Media/EvaLook1Side.png";

import EvaVideo from "./Media/Caitlin_Lookbook2.mp4";

import EvaBanner from "../../assets/bannerImages/Eva-Banner.png";
import "./eva.scss";

const EvaReed = () => {
  const banner = [{ src: EvaBanner, alt: "EvaBanner" }];
  const collectionName = "SEA-BOY";
  const designerName = "EVA REED";

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

  const videoSource = EvaVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate3 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default EvaReed;
