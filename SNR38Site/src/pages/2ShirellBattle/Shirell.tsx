// Shirell.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate5 from "../../components/PageTemplate5/TemplateFive";

const ShirellBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shirell-Banner.jpeg";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Detailcopy.jpg";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/SDetail.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Detail Shot.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/detail4.png";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shirell Look 2 Front.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shirell 2 Back.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shireel Look 3 front.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shirell 3 Front.png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shireel 1 Side.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shireel 1 Front p2.png";


import "./shirell.scss";

const ShirellBattle = () => {
  const banner = [{ src: ShirellBanner, alt: "ShirellBanner" }];
  const collectionName = "ANCHORED TO MOVEMENT";
  const designerName = "SHIRELL BATTLE";

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
  ];

  const nextName = {
    "SIERRA WEISSNER": "/sierra",
    "OLIVIA CAVALLERO": "/olivia"
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate5 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shirell_Lookbook.mp4" />
    </div>
  );
};

export default ShirellBattle;
