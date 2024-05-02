//Annika.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

import Short1 from "./Media/Annika 3 .png";
import Short2 from "./Media/AnnikaDay2Look2Detail.png";
import Short3 from "./Media/AnnikaDay2Look3Detail.png";
import Short4 from "./Media/AnnikaDay2Detail.jpg";

import LongFront1 from "./Media/Annika Front .png";
import LongBack1 from "./Media/Annika 2 .png";
import LongFront2 from "./Media/AnnikaDay2Look2Front.png";
import LongBack2 from "./Media/AnnikaDay2Look2Side.png";
import LongFront3 from "./Media/AnnikaDay2Look3Front.png";
import LongBack3 from "./Media/AnnikaDay2Look3Back.png";
import LongFront4 from "./Media/AnnikaDay2Front.jpg";
import LongBack4 from "./Media/AnnikaDay2Back.jpg";

import AnnikaVideo from "./Media/Caitlin_Lookbook2.mp4";

import AnnikaBanner from "../../assets/bannerImages/Annika-Banner.png";
import "./annika.scss";

const AnnikaGeissberger = () => {
  const banner = [{ src: AnnikaBanner, alt: "AnnikaBanner" }];
  const collectionName = "BLOOM";
  const designerName = "ANNIKA GEISSBERGER";

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

  const videoSource = AnnikaVideo;

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

export default AnnikaGeissberger;
