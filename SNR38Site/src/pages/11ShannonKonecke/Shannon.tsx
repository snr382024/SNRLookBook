//Shannon.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 3 - Detail.png";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 1 - Detail.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 4 - Detail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 2 - Pose 2.png"; //crop to get hand

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 3 - Front.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 3 - Side Pose.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 1 - Front Pose.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 1 - Side Pose.png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 4 - Front Pose.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 4 - Back.png";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 2 - Pose.png";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon - Look 2 - Side.png";

const ShannonBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon-Banner.png";
import "./shannon.scss";

const ShannonKonecke = () => {
  const banner = [{ src: ShannonBanner, alt: "ShannonBanner" }];
  const collectionName = "BLOCK IT OUT";
  const designerName = "SHANNON KONECKE";

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
    "EMMA KEATING": "/emma",
    "MADISYN MARTINELLI": "/madisyn",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon_Lookbook.mp4" />
    </div>
  );
};

export default ShannonKonecke;
