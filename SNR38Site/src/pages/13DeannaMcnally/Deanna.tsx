//Deanna.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate4 from "../../components/PageTemplate4/TemplateFour";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 1 detail shot.jpg";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 2 detail shot.jpg";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 3 detail.jpg";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 4 detail.jpg";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 1 front.jpg";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 1 back.jpg";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 2 front.jpg";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 2 back.jpg";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 3 front.jpg";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/better.jpg";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 4 front.jpg";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna petite look 4 back.jpg";


const DeannaBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna-Banner.png";
import "./deanna.scss";

const DeannaMcnally = () => {
  const banner = [{ src: DeannaBanner, alt: "DeannaBanner" }];
  const collectionName = "COLLAGEABLE";
  const designerName = "DEANNA MCNALLY";

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

      <PageTemplate4 images={imageList} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Caitlin_Lookbook2.mp4" />
    </div>
  );
};

export default DeannaMcnally;
