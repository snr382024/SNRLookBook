//Emma.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Detail Look 1.jpg";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 4 Detail .png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 2 Detail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Detail Look 3 .png";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Emma Look 1 Front_.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Emma Side Look 1.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 4 Front.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 4 Side.png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 2 Front.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 2 Back .png";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 3 Front.png";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look 3 Back.png";

const EmmaBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Emma-Banner.png";
import "./emma.scss";

const EmmaKeating = () => {
  const banner = [{ src: EmmaBanner, alt: "EmmaBanner" }];
  const collectionName = "HEIRLOOM";
  const designerName = "EMMA KEATING";

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
    "ALYSSA JONES": "/alyssa",
    "SHANNON KONECKE": "/shannon",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate4 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Emma_Lookbook.mp4" />
    </div>
  );
};

export default EmmaKeating;
