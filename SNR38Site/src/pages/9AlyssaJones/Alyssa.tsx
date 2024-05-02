//Alyssa.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";


import Short1 from "./Media/DSC01731.jpg";
import Short2 from "./Media/DSC01797.jpg";
import Short3 from "./Media/DSC01764.jpg";
import Short4 from "./Media/DSC01847.jpg";

import LongFront1 from "./Media/DSC01718.jpg";
import LongBack1 from "./Media/DSC01706.jpg";
import LongFront2 from "./Media/DSC01812.jpg";
import LongBack2 from "./Media/DSC01777.jpg";
import LongFront3 from "./Media/DSC01754.jpg";
import LongBack3 from "./Media/DSC01740.jpg";
import LongFront4 from "./Media/DSC01822.jpg";
import LongBack4 from "./Media/DSC01828.jpg";

import AlyssaVideo from "./Media/Caitlin_Lookbook2.mp4";

import AlyssaBanner from "../../assets/bannerImages/Alyssa-Banner.png";
import "./alyssa.scss";

const AlyssaJones = () => {
  const banner = [{ src: AlyssaBanner, alt: "AlyssaBanner" }];
  const collectionName = "THE TIES THAT BIND US";
  const designerName = "ALYSSA JONES";

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

  const videoSource = AlyssaVideo;

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

export default AlyssaJones;
