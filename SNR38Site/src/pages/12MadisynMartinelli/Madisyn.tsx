//Madisyn.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

import Short1 from "./Media/Madisyn - Look 1 Day 2 - Detail Mesh.png";
import Short2 from "./Media/Detail .png";
import Short3 from "./Media/Detail 2_.jpg";
import Short4 from "./Media/MadisonLook2Detail.png";

import LongFront1 from "./Media/Madisyn - Look 1 Day 2 - Pose Front.png";
import LongBack1 from "./Media/Madisyn - Look 1 Day 2 - Back.png";
import LongFront2 from "./Media/Look 2 Front .png";
import LongBack2 from "./Media/Look 2 Back .png";
import LongFront3 from "./Media/Maddy Front 1_.jpg";
import LongBack3 from "./Media/Back Shot 1_.jpg";
import LongFront4 from "./Media/MadisonLook2Front.png";
import LongBack4 from "./Media/MadisonLook2Back.png";

import MadisynVideo from "./Media/Caitlin_Lookbook2.mp4";


import MadisynBanner from "../../assets/bannerImages/Madisyn-Banner.png";
import "./madisyn.scss";

const MadisynMartinelli = () => {
  const banner = [{ src: MadisynBanner, alt: "MadisynBanner" }];
  const collectionName = "MORE LIKE US";
  const designerName = "MADISYN MARTINELLI";

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

  const videoSource = MadisynVideo;

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

export default MadisynMartinelli;
