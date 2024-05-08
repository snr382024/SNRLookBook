//Natalie.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate6 from "../../components/PageTemplate6/TemplateSix";

const NatalieBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Natalie-Banner.png";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/natalie 3 .png";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/natalie 2.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Natalie Detail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/detail 2 .png";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewNatalie 1 .png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Natalie 4 .png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/natalie5 .png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/natalie 56 .png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewNatalie.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Natalie.png";


import "./natalie.scss";

const NatalieSweeney = () => {
  const banner = [{ src: NatalieBanner, alt: "NatalieBanner" }];
  const collectionName = "HAIL MARY";
  const designerName = "NATALIE SWEENEY";

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
    { src: LongBack3, alt: "LongFront3" }

  ];

  const nextName = {
    "DAVID ROOT": "/david",
    "NICOLE TASCA": "/nicole"
  };


  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate6 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Natalie_Lookbook.mp4" />
    </div>
  );
};

export default NatalieSweeney;
