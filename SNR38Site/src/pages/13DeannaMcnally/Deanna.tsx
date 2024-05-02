//Deanna.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

import Short1 from "./Media/Deanna petite look 1 detail shot.jpg";
import Short2 from "./Media/Deanna petite look 2 detail shot.jpg";
import Short3 from "./Media/Deanna petite look 3 detail.jpg";
import Short4 from "./Media/Deanna petite look 4 detail.jpg";

import LongFront1 from "./Media/Deanna petite look 1 front.jpg";
import LongBack1 from "./Media/Deanna petite look 1 back.jpg";
import LongFront2 from "./Media/Deanna petite look 2 front.jpg";
import LongBack2 from "./Media/Deanna petite look 2 back.jpg";
import LongFront3 from "./Media/Deanna petite look 3 front.jpg";
import LongBack3 from "./Media/better.jpg";
import LongFront4 from "./Media/Deanna petite look 4 front.jpg";
import LongBack4 from "./Media/Deanna petite look 4 back.jpg";

import DeannaVideo from "./Media/Caitlin_Lookbook2.mp4";

import DeannaBanner from "../../assets/bannerImages/Deanna-Banner.png";
import "./deanna.scss";

const DeannaMcnally = () => {
  const banner = [{ src: DeannaBanner, alt: "DeannaBanner" }];
  const collectionName = "COLLAGEABLE";
  const designerName = "DEANNA MCNALLY";

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

  const videoSource = DeannaVideo;


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

export default DeannaMcnally;
