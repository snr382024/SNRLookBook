import React, { useState, useEffect, useRef } from "react";
import noImage from "../../assets/no-image.avif";
import "./namedisplay.scss";
import { Link } from "react-router-dom"; // Import Link component from react-router-dom

const NameDisplay: React.FC = () => {
  // State to manage visibility of each card
  const [visibleCards, setVisibleCards] = useState<{ [key: number]: boolean }>({});

  // Refs to hold references to each card element
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
      imageUrl: noImage,
    },
    {
      id: "olivia",
      name: "OLIVIA CAVALLERO",
      imageUrl: noImage,
    },
    {
      id: "aliah",
      name: "ALIAH CHAMORRO",
      imageUrl: noImage,
    },
    {
      id: "gavin",
      name: "GAVIN COOPER",
      imageUrl: noImage,
    },
    {
      id: "sera",
      name: "SERA CRISTIN FERRANTE",
      imageUrl: noImage,
    },
    {
      id: "caitlin",
      name: "CAITLIN FRACASSO",
      imageUrl: noImage,
    },
    {
      id: "annika",
      name: "ANNIKA GEISSBERGER",
      imageUrl: noImage,
    },
    {
      id: "alyssa",
      name: "ALYSSA JONES",
      imageUrl: noImage,
    },
    {
      id: "emma",
      name: "EMMA KEATING",
      imageUrl: noImage,
    },
    {
      id: "shannon",
      name: "SHANNON KONECKE",
      imageUrl: noImage,
    },
    {
      id: "madisyn",
      name: "MADISYN MARTINELLI",
      imageUrl: noImage,
    },
    {
      id: "deanna",
      name: "DEANNA MCNALLY",
      imageUrl: noImage,
    },
    {
      id: "francesca",
      name: "FRANCESCA MORABITO",
      imageUrl: noImage,
    },
    {
      id: "eva",
      name: "EVA REED",
      imageUrl: noImage,
    },
    {
      id: "david",
      name: "DAVID ROOT",
      imageUrl: noImage,
    },
    {
      id: "natalie",
      name: "NATALIE SWEENEY",
      imageUrl: noImage,
    },
    {
      id: "nicole",
      name: "NICOLE TASCA",
      imageUrl: noImage,
    },
    {
      id: "mo",
      name: "MO WALSH",
      imageUrl: noImage,
    },
    {
      id: "sierra",
      name: "SIERRA WEISSNER",
      imageUrl: noImage,
    }
  ];

  return (
    <div className="name-display">
      {designers.map((designer, index) => (
        <Link to={`/${designer.id}`} key={designer.id} style={{ textDecoration: 'none', color: 'inherit' }}>
          <div
            ref={el => cardRefs.current[index] = el}
            className={`designer-card ${visibleCards[index] ? "slide-in" : ""}`}
          >
            <img src={designer.imageUrl || noImage} alt={designer.name} className="designer-headshot" />
            <div className="designer-name">{designer.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default NameDisplay;
