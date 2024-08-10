import React from "react";
import "./ImgCardMap.scss"; 
import ImgCard from "../ImgCard/ImgCard";

const ImgCardMap: React.FC = () => {
  const cardData = [
    {
      image: "/src/assets/persons/persons (1).webp",
      heading: "Shaista Manzoor",
      subheading: "CEO",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/mohsin.manzoor_/",
    },
    {
      image: "/src/assets/persons/arsalan.jpg",
      heading: "Arsalan Jan",
      subheading: "Manager",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/arsalan_rayees_7/",
    },
    {
      image: "/src/assets/persons/persons (1).webp",
      heading: "Sheeba Manzoor",
      subheading: "CFO",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/mohsin.manzoor_/",
    },
    {
      image: "/src/assets/persons/persons (3).webp",
      heading: "Rayees Jan",
      subheading: "Marketing Specialist",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/mohsin.manzoor_/",
    },
  ];

  return (
    <div className="card-container">
      {cardData.map((card, index) => (
        <ImgCard
          key={index}
          image={card.image}
          heading={card.heading}
          subheading={card.subheading}
          linkedInUrl={card.linkedInUrl}
          instagramUrl={card.instagramUrl}
        />
      ))}
    </div>
  );
};

export default ImgCardMap;
