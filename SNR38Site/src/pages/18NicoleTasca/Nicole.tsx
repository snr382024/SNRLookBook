//Nicole.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

import Short1 from "./Media/NicoleLook1Detail.png";
import Short2 from "./Media/NicoleLook4Detail.png";
import Short3 from "./Media/NicoleLook2Detail.png";
import Short4 from "./Media/NicoleLook3Detail.png";

import LongFront1 from "./Media/NicoleLook1Front.png";
import LongBack1 from "./Media/NicoleLook1Back.png";
import LongFront2 from "./Media/NicoleLook4Front.png";
import LongBack2 from "./Media/NicoleLook4Back.png";
import LongFront3 from "./Media/NicoleLook2Front.png";
import LongBack3 from "./Media/NicoleLook2Side.png";
import LongFront4 from "./Media/NicoleLook3Front.png";
import LongBack4 from "./Media/NicoleLook3Back.png";

import NicoleVideo from "./Media/Caitlin_Lookbook2.mp4";


import NicoleBanner from "../../assets/bannerImages/Nicole-Banner.png";
import "./nicole.scss";

const NicoleTasca = () => {
  const banner = [{ src: NicoleBanner, alt: "NicoleBanner" }];
  const collectionName = "GIRLISH";
  const designerName = "NICOLE TASCA";

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

  const videoSource = NicoleVideo;


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

export default NicoleTasca;
