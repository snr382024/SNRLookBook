//Gavin.tsx
import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import PageTemplate5 from "../../components/PageTemplate5/TemplateFive";

const GavinBanner = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Gavin-Banner.png";

const Short1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 3 detail.jpg";
const Short2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 3 detail 4.jpg";
const Short3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 2 detail 2 copy.jpg";
const Short4 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 2 detail copy.jpg";

const LongFront1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 1 front.jpg";
const LongBack1 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/tates back fixed.png";
const LongFront2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 2 front copy.jpg";
const LongBack2 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 2 front 2 copy.jpg";
const LongFront3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 3 front 2.jpg";
const LongBack3 = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/gavin look 3 side copy.jpg";

import "./gavin.scss";

const GavinCooper = () => {
  const banner = [{ src: GavinBanner, alt: "GavinBanner" }];
  const collectionName = "THE SWORD, AN ANTLER, AND BLOODSTAINED GLASS";
  const designerName = "GAVIN COOPER";

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

  return (
    <div>
      <ImageCarousel
        images={banner}
        collectionName={collectionName}
        designerName={designerName}
      />

      <PageTemplate5 images={imageList} videoSrc="https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Gavin_Lookbook.mp4" />
    </div>
  );
};

export default GavinCooper;
