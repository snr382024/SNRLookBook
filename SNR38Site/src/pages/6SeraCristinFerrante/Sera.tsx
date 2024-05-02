//Sera.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

import Short1 from "./Media/Serra - Look 1 - Detail.png";
import Short2 from "./Media/Serra - Look 3 - Detail.png";
import Short3 from "./Media/SeraReshotLookDetail.png";
import Short4 from "./Media/Serra - Look 2 - Detail.png";

import LongFront1 from "./Media/Serra - Look 1 - Pose Front.png";
import LongBack1 from "./Media/Serra - Look 1 - Pose.png";
import LongFront2 from "./Media/Serra - Look 3 - Front Pose.png";
import LongBack2 from "./Media/Serra - Look 3 - Side Pose.png";
import LongFront3 from "./Media/SeraReshotLookFront.png";
import LongBack3 from "./Media/SeraReshotLookBack.png";
import LongFront4 from "./Media/Serra - Look 2 - Pose.png";
import LongBack4 from "./Media/Serra - Look 2 - Side.png";

import SeraVideo from "./Media/Caitlin_Lookbook2.mp4";

import SeraBanner from "../../assets/bannerImages/Sera-Banner.png";
import "./sera.scss";

const SeraCristinFerrante = () => {
  const banner = [{ src: SeraBanner, alt: "SeraBanner" }];
  const collectionName = "PER/MISSION";
  const designerName = "SERA CRISTIN FERRANTE";

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

  const videoSource = SeraVideo;

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

export default SeraCristinFerrante;
