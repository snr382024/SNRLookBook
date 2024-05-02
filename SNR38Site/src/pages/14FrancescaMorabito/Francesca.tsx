//Francesca.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

import Short1 from "./Media/LOOK 2 DETAIL .png";
import Short2 from "./Media/LOOK 2 DETAIL .png"; //will get later, copy of long 1 
import Short3 from "./Media/LOOK 3 DETAIL .png";
import Short4 from "./Media/LOOK 1 DETAIL.png";

import LongFront1 from "./Media/LOOK 2 SIDE:FRONT .png";
import LongBack1 from "./Media/LOOK 2 BACK .png";
import LongFront2 from "./Media/LOOK 2 SIDE:FRONT .png"; //will get later, copy of long 1 
import LongBack2 from "./Media/LOOK 2 BACK .png";  //will get later, copy of long 1 
import LongFront3 from "./Media/LOOK 3 FRONT.png";
import LongBack3 from "./Media/LOOK 3 BACK .png";
import LongFront4 from "./Media/Francesca - LOOK 1 FRONT - Version 2.png";
import LongBack4 from "./Media/LOOK 1 BACK.png";


import FrancescaVideo from "./Media/Caitlin_Lookbook2.mp4";

import FrancescaBanner from "../../assets/bannerImages/Francesca-Banner.png";
import "./francesca.scss";

const FrancescaMorabito = () => {
  const banner = [{ src: FrancescaBanner, alt: "FrancescaBanner" }];
  const collectionName = "URBANITY";
  const designerName = "FRANCESCA MORABITO";


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


  const videoSource = FrancescaVideo;


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

export default FrancescaMorabito;
