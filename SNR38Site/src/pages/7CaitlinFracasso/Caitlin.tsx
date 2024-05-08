//Caitlin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate2 from "../../components/PageTemplate2/TemplateTwo";

const CaitlinBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Caitlin-Banner.png";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Caitlin - Look 5 - Detail (Lower).jpg";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look2Detail.png";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look3Detail.png";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look4Detail.png";
const Short5 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewLook1Detail.png"


const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look2Front.png";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/JM another edit .png";

const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewLook4Front.png";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look4Side.png";

const MediumFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Caitlin - Look 5 - Front.jpg";
const MediumBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewCaitlin - Look 5 - Pose.jpg";

const MediumFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewJM EDIT.png";
const MediumBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look1Side.png";

const MediumFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Look3Front.png";
const MediumBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/NewLook3Back.png";


import "./caitlin.scss";

const  CaitlinFracasso = () => {
  const banner = [{ src: CaitlinBanner, alt: "CaitlinBanner" }];
  const collectionName = "THE ART OF PRESERVATION";
  const designerName = "CAITLIN FRANCASSO";

  const imageList = [
    { src: Short1, alt: "Short1" }, //0
    { src: Short2, alt: "Short2" }, //1
    { src: Short3, alt: "Short3" }, //2
    { src: Short4, alt: "Short4" }, //3
    { src: LongFront1, alt: "LongFront1" }, //4
    { src: LongBack1, alt: "LongBack1" }, //5

    { src: LongFront2, alt: "Long2" }, //6
    { src: LongBack2, alt: "Long2" }, //7
    { src: MediumFront1, alt: "MediumFront1" }, //8
    { src: MediumBack1, alt: "MediumBack1" }, //9

    { src: MediumFront2, alt: "MediumFront2" }, //10
    { src: MediumBack2, alt: "MediumBack2" }, //11

    { src: MediumFront3, alt: "MediumFront3" }, //12
    { src: MediumBack3, alt: "MediumBack3" }, //13

    { src: Short5, alt: "Short5" }, //14


  ];

  const nextName = {
    "SERA CRISTIN FERRANTE": "/sera",
    "ANNIKA GEISSBERGER": "/annika",
  };

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate2 images={imageList} nextName={nextName} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Cailtin_Lookbook.mp4" />
    </div>
  );
};

export default CaitlinFracasso;
