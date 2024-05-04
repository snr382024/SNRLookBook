//Annika.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate1 from "../../components/PageTemplate1/TemplateOne";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Annika 3 .png";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Look2Detail.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Look3Detail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Detail.jpg";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Annika Front .png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Annika 2 .png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Look2Front.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Look2Side.png";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Look3Front.png";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Look3Back.png";
const LongFront4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Front.jpg";
const LongBack4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/AnnikaDay2Back.jpg";

const AnnikaBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Annika-Banner.png";
import "./annika.scss";

const AnnikaGeissberger = () => {
  const banner = [{ src: AnnikaBanner, alt: "AnnikaBanner" }];
  const collectionName = "BLOOM";
  const designerName = "ANNIKA GEISSBERGER";

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
    "CAITLIN FRACASSO": "/caitlin",
    "ALYSSA JONES": "/alyssa",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate1 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Annika_Lookbook.mp4" />
    </div>
  );
};

export default AnnikaGeissberger;
