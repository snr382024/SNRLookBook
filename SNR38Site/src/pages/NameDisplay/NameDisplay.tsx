import React, { useState, useEffect, useRef } from "react";
import noImage from "../../assets/no-image.avif";
import "./namedisplay.scss";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const Aliah = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Aliah.jpg"
const Alyssa = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Alyssa.jpg"
const Annika = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Annika.jpg"
const Caitlin = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Caitlin.jpg"
const David = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/David.jpg"
const Deanna = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Deanna.jpg"
const Emma = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Emma.jpg"
const Eva = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Eva.jpg"
const Francesca = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Francesca.jpg"
const Gavin = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Gavin.jpg"
const Madisyn = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Madisyn.jpg"
const Mo = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Mo.jpg"
const Natalie = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Natalie.jpg"
const Nicole = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Nicole.jpg"
const Olivia = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Olivia.jpg"
const Sera = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Sera.jpg"
const Shannon = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shannon.jpg"
const Shirell = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Shirell.jpg"
const Sierra = "https://pub-60cf3ae8c64d402eaf4ecbc5effb7c05.r2.dev/Sierra.jpg"





const NameDisplay: React.FC = () => {
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const screenPosition = window.innerHeight;
      cardRefs.current.forEach((card, index) => {
        if (card && card.getBoundingClientRect().top < screenPosition) {
          setVisibleCards(prev => ({ ...prev, [index]: true }));
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const designers = [
    {
      id: "shirell",
      name: "SHIRELL BATTLE",
      imageUrl: Shirell,
    },
    {
      id: "olivia",
      name: "OLIVIA CAVALLERO",
      imageUrl: Olivia,
    },
    {
      id: "aliah",
      name: "ALIAH CHAMORRO",
      imageUrl: Aliah,
    },
    {
      id: "gavin",
      name: "GAVIN COOPER",
      imageUrl: Gavin,
    },
    {
      id: "sera",
      name: "SERA CRISTIN FERRANTE",
      imageUrl: Sera,
    },
    {
      id: "caitlin",
      name: "CAITLIN FRACASSO",
      imageUrl: Caitlin,
    },
    {
      id: "annika",
      name: "ANNIKA GEISSBERGER",
      imageUrl: Annika,
    },
    {
      id: "alyssa",
      name: "ALYSSA JONES",
      imageUrl: Alyssa,
    },
    {
      id: "emma",
      name: "EMMA KEATING",
      imageUrl: Emma,
    },
    {
      id: "shannon",
      name: "SHANNON KONECKE",
      imageUrl: Shannon,
    },
    {
      id: "madisyn",
      name: "MADISYN MARTINELLI",
      imageUrl: Madisyn,
    },
    {
      id: "deanna",
      name: "DEANNA MCNALLY",
      imageUrl: Deanna,
    },
    {
      id: "francesca",
      name: "FRANCESCA MORABITO",
      imageUrl: Francesca,
    },
    {
      id: "eva",
      name: "EVA REED",
      imageUrl: Eva,
    },
    {
      id: "david",
      name: "DAVID ROOT",
      imageUrl: David,
    },
    {
      id: "natalie",
      name: "NATALIE SWEENEY",
      imageUrl: Natalie,
    },
    {
      id: "nicole",
      name: "NICOLE TASCA",
      imageUrl: Nicole,
    },
    {
      id: "mo",
      name: "MO WALSH",
      imageUrl: Mo,
    },
    {
      id: "sierra",
      name: "SIERRA WEISSNER",
      imageUrl: Sierra,
    }
  ];

  const firstTwoRows = designers.slice(0, 15);  // First 14 designers (two rows of 7)
  const lastRow = designers.slice(16);          // Remaining designers for the last row

  return (
    <>
      <div className="name-display">
        {firstTwoRows.map((designer, index) => (
          <Link to={`/${designer.id}`} key={designer.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              ref={el => cardRefs.current[index] = el}
              className={`designer-card ${visibleCards[index] ? "slide-in" : ""}`}
            >
              <img src={designer.imageUrl || noImage} alt={designer.name} className="designer-headshot" />
              <div className="designer-name">
              {designer.name.split(" ").map((part, idx) => (
                <div key={idx}>{part}</div>
              ))}
            </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="name-display last-row" style={{ gridTemplateColumns: `repeat(${lastRow.length}, 1fr)` }}>
        {lastRow.map((designer, index) => (
          <Link to={`/${designer.id}`} key={designer.id} style={{ textDecoration: 'none', color: 'inherit' }}>
            <div
              ref={el => cardRefs.current[index + 15] = el} // Adjust index for refs
              className={`designer-card ${visibleCards[index + 15] ? "slide-in" : ""}`}
            >
              <img src={designer.imageUrl || noImage} alt={designer.name} className="designer-headshot" />
              <div className="designer-name">
              {designer.name.split(" ").map((part, idx) => (
                <div key={idx}>{part}</div>
              ))}
            </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default NameDisplay;
