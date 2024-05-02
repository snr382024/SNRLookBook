//David.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";


import Short1 from "./Media/David - Look Vest - Detail.png";
import Short2 from "./Media/DAVID LOOK 1 DETAIL.jpg";
import Short3 from "./Media/DavidJacketDay2Detail.png";
import Short4 from "./Media/DAVID LOOK 2 DETAIL.jpg";

import LongFront1 from "./Media/David - Look Vest - Front.png";
import LongBack1 from "./Media/David - Look Vest - Back.png";
import LongFront2 from "./Media/DAVID LOOK 1 FRONT copy.jpg";
import LongBack2 from "./Media/DAVID LOOK 1 BACK copy.jpg";
import LongFront3 from "./Media/DavidJacketDay2Front.png";
import LongBack3 from "./Media/DavidJacketDay2Back.png";
import LongFront4 from "./Media/DAVID LOOK 2 FRONT.jpg";
import LongBack4 from "./Media/DAVID LOOK 2 BACK.jpg";

import DavidVideo from "./Media/Caitlin_Lookbook2.mp4";

import DavidBanner from "../../assets/bannerImages/David-Banner.png";
import "./david.scss";

const DavidRoot = () => {
  const banner = [{ src: DavidBanner, alt: "DavidBanner" }];
  const collectionName = "DANDELION WINE";
  const designerName = "DAVID ROOT";

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

  const videoSource = DavidVideo;

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

export default DavidRoot;
