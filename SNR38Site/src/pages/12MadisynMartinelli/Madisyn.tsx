//Madisyn.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate3 from "../../components/PageTemplate3/TemplateThree";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Madisyn - Look 1 Day 2 - Detail Mesh.png";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Detail .png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Detail 2_.jpg";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/MadisonLook2Detail.png";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Madisyn - Look 1 Day 2 - Pose Front.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Madisyn - Look 1 Day 2 - Back.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 2 Front .png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 2 Back .png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Maddy Front 1_.jpg";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Back Shot 1_.jpg";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/MadisonLook2Front.png";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/MadisonLook2Back.png";


const MadisynBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Madisyn-Banner.png";
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

  const nextName = {
    "SHANNON KONECKE": "/shannon",
    "DEANNA MCNALLY": "/deanna",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate3 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Madisyn_Lookbook.mp4" />
    </div>
  );
};

export default MadisynMartinelli;
