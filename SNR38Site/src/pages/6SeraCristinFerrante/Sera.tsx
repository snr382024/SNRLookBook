//Sera.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 1 - Detail.png";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 3 - Detail.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/SeraReshotLookDetail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 2 - Detail.png";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 1 - Pose Front.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 1 - Pose.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 3 - Front Pose.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 3 - Side Pose.png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/SeraReshotLookFront.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/SeraReshotLookBack.png";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 2 - Pose.png";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Serra - Look 2 - Side.png";

const SeraBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Sera-Banner.png";
import "./sera.scss";

const SeraCristinFerrante = () => {
  const banner = [{ src: SeraBanner, alt: "SeraBanner" }];
  const collectionName = "PER/MISSION";
  const designerName = "SERA CRISTIN FERRANTE";

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

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate4 images={imageList} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Sera_Lookbook.mp4" />
    </div>
  );
};

export default SeraCristinFerrante;
