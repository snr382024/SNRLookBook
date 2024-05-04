//Nicole.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook1Detail.png";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook4Detail.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook2Detail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook3Detail.png";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook1Front.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook1Back.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook4Front.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook4Back.png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook2Front.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook2Side.png";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook3Front.png";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NicoleLook3Back.png";


const NicoleBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Nicole-Banner.png";
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
  const nextName = {
    "NATALIE SWEENEY": "/natalie",
    "MO WALSH": "/mo",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Nicole_Lookbook.mp4" />
    </div>
  );
};

export default NicoleTasca;
