//Mo.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

import Short1 from "./Media/MoLook4Detail.png";
import Short2 from "./Media/MoLook1Detail.png";
import Short3 from "./Media/MoLook3Detail.png";
import Short4 from "./Media/MoLook2Detail.png";

import LongFront1 from "./Media/MoLook4Front.png";
import LongBack1 from "./Media/MoLook4Side.png";
import LongFront2 from "./Media/mo fixed hair.png";
import LongBack2 from "./Media/MoLook1Side.png";
import LongFront3 from "./Media/MoLook3Front.png";
import LongBack3 from "./Media/MoLook3Side.png";
import LongFront4 from "./Media/MoLook2Front.png";
import LongBack4 from "./Media/MoLook2Back.png";

import MoVideo from "./Media/Caitlin_Lookbook2.mp4";

import MoBanner from "../../assets/bannerImages/Mo-Banner.png";
import "./mo.scss";

const MoWalsh = () => {
  const banner = [{ src: MoBanner, alt: "MoBanner" }];
  const collectionName = "LOVE IN A HEAVY COAT";
  const designerName = "MO WALSH";

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

  const videoSource = MoVideo;


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

export default MoWalsh;
