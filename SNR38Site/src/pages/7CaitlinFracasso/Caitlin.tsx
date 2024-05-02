//Caitlin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate2 from "../../components/PageTemplate2/TemplateTwo";

import CaitlinBanner from "../../assets/bannerImages/Caitlin-Banner.png";

import Short1 from "./Media/Caitlin - Look 5 - Detail (Lower).jpg";
import Short2 from "./Media/Look2Detail.png";
import Short3 from "./Media/Look3Detail.png";
import Short4 from "./Media/Look4Detail.png";

import LongFront1 from "./Media/Look2Front.png";
// import LongBack1 from "./Media/JM another edit .png";

import LongFront2 from "./Media/Look4Front.png";
// import LongBack2 from "./Media/Look4Side.png";

import MediumFront1 from "./Media/Caitlin - Look 5 - Front.jpg";
// import MediumBack1 from "./Media/Caitlin - Look 5 - Pose.jpg";

import MediumFront2 from "./Media/JM EDIT.png";
// import MediumBack2 from "./Media/Look1Side.png";

import MediumFront3 from "./Media/Look3Front.png";
// import MediumBack3 from "./Media/Look3Back.png";


import CaitlinVideo from "./Media/Caitlin_Lookbook2.mp4";

import "./caitlin.scss";

const  CaitlinFracasso = () => {
  const banner = [{ src: CaitlinBanner, alt: "CaitlinBanner" }];
  const collectionName = "THE ART OF PRESERVATION";
  const designerName = "CAITLIN FRANCASSO";

  const imageList = [
    { src: Short1, alt: "Short1" }, //0
    { src: Short2, alt: "Short2" }, //1
    { src: Short3, alt: "Short3" }, //2
    { src: Short4, alt: "Short4" }, //3
    { src: LongFront1, alt: "Long1" }, //4
    { src: LongFront2, alt: "Long2" }, //5
    { src: MediumFront1, alt: "Medium1" }, //6
    { src: MediumFront2, alt: "Medium2" }, //7
    { src: MediumFront3, alt: "Medium3" }, //8
  ];

  const videoSource = CaitlinVideo;

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate2 images={imageList} videoSrc={videoSource} />
    </div>
  );
};

export default CaitlinFracasso;
