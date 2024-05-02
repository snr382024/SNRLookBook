//Shannon.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

import Short1 from "./Media/Shannon - Look 3 - Detail.png";
import Short2 from "./Media/Shannon - Look 1 - Detail.png";
import Short3 from "./Media/Shannon - Look 4 - Detail.png";
import Short4 from "./Media/Shannon - Look 2 - Pose 2.png"; //crop to get hand

import LongFront1 from "./Media/Shannon - Look 3 - Front.png";
import LongBack1 from "./Media/Shannon - Look 3 - Side Pose.png";
import LongFront2 from "./Media/Shannon - Look 1 - Front Pose.png";
import LongBack2 from "./Media/Shannon - Look 1 - Side Pose.png";
import LongFront3 from "./Media/Shannon - Look 4 - Front Pose.png";
import LongBack3 from "./Media/Shannon - Look 4 - Back.png";
import LongFront4 from "./Media/Shannon - Look 2 - Pose.png";
import LongBack4 from "./Media/Shannon - Look 2 - Side.png";

import ShannonVideo from "./Media/Caitlin_Lookbook2.mp4";

import ShannonBanner from "../../assets/bannerImages/Shannon-Banner.png";
import "./shannon.scss";

const ShannonKonecke = () => {
  const banner = [{ src: ShannonBanner, alt: "ShannonBanner" }];
  const collectionName = "BLOCK IT OUT";
  const designerName = "SHANNON KONECKE";

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

  const videoSource = ShannonVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default ShannonKonecke;
