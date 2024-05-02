import React, { useEffect, useState } from "react";
import "./namedisplay.scss";

const NameDisplay: React.FC = () => {
  const [playAnimation, setPlayAnimation] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const nameDisplayPosition = document
        .querySelector(".name-display")
        ?.getBoundingClientRect().top;
      const screenPosition = window.innerHeight;

      if (nameDisplayPosition && nameDisplayPosition < screenPosition) {
        setPlayAnimation(true);
        // Remove the event listener once the animation plays
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const namesRows = [
    {
      names: [
        "SHIRELL BATTLE",
        "OLIVIA CAVALLERO",
        "ALIAH CHAMORRO",
      ],
      className: "row-4",
    },
    {
      names: ["GAVIN COOPER", "SERA CRISTIN FERRANTE", "CAITLIN FRACASSO"],
      className: "row-3",
    },
    {
      names: [
        "ANNIKA GEISSBERGER",
        "ALYSSA JONES",
        "EMMA KEATING",
        "SHANNON KONECKE",
      ],
      className: "row-4",
    },
    {
      names: ["MADISYN MARTINELLI", "DEANNA MCNALLY", "FRANCESCA MORABITO"],
      className: "row-3",
    },
    {
      names: ["EVA REED", "DAVID ROOT", "NATALIE SWEENEY", "NICOLE TASCA"],
      className: "row-4",
    },
    { names: ["MO WALSH", "SIERRA WIESSNER"], className: "row-2" },
  ];

  return (
    <div className="name-display">
      {namesRows.map((row, rowIndex) => (
        <div
          key={rowIndex}
          className={`name-row ${row.className} ${
            playAnimation ? "slide-in" : ""
          }`}
        >
          {row.names.map((name, nameIndex) => (
            <div key={nameIndex} className="name-tag">
              {name}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default NameDisplay;
