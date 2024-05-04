//Olivia.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";


const OliviaShort1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01899.jpg";
const OliviaShort2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01965.jpg";
const OliviaShort3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC02003.jpg";
const OliviaShort4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01934.jpg";

const OliviaLongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC018851.jpg";
const OliviaLongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/ClareBackLegEdit.png";
const OliviaLongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01960.jpg";
const OliviaLongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01952.jpg";
const OliviaLongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01999.jpg";
const OliviaLongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/DSC01989.jpg";
const OliviaLongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/LOOK 1 FRONT.png";
const OliviaLongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/BACK .png";


const OliviaBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Olivia-Banner.png";
import "./olivia.scss";

const  OliviaCavallero = () => {
  const banner = [{ src: OliviaBanner, alt: "OliviaBanner" }];
  const collectionName = "THE LEARNING CURVE";
  const designerName = "OLIVIA CAVALLERO";


  const imageList = [
    { src: OliviaShort1, alt: "Short1" },
    { src: OliviaShort2, alt: "Short2" },
    { src: OliviaShort3, alt: "Short3" },
    { src: OliviaShort4, alt: "Short4" },
    { src: OliviaLongFront1, alt: "LongFront1" },
    { src: OliviaLongBack1, alt: "LongBack1" },
    { src: OliviaLongFront2, alt: "LongFront2" },
    { src: OliviaLongBack2, alt: "LongBack2" },
    { src: OliviaLongFront3, alt: "LongFront3" },
    { src: OliviaLongBack3, alt: "LongBack3" },
    { src: OliviaLongFront4, alt: "LongFront4" },
    { src: OliviaLongBack4, alt: "LongBack4" },
  ];

  const nextName = {
    "SHIRELL BATTLE": "/shirell",
    "ALIAH CHAMMORO": "/aliah",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Olivia_Lookbook.mp4" />
    </div>
  );
};

export default OliviaCavallero;
