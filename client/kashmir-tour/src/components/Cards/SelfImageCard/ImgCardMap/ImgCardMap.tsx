import React from "react";
import "./ImgCardMap.scss"; // Ensure you have any necessary styling
import ImgCard from "../ImgCard/ImgCard";

const ImgCardMap: React.FC = () => {
  const cardData = [
    {
      image: "/src/assets/persons/persons (1).webp",
      heading: "John Doe",
      subheading: "Web Developer",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/mohsin.manzoor_/",
    },
    {
      image: "/src/assets/persons/persons (3).webp",
      heading: "Jane Smith",
      subheading: "Graphic Designer",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/mohsin.manzoor_/",
    },
    {
      image: "/src/assets/persons/persons (1).webp",
      heading: "Alice Brown",
      subheading: "Project Manager",
      linkedInUrl: "https://www.linkedin.com/in/bhatmohsin1913/",
      instagramUrl: "https://www.instagram.com/mohsin.manzoor_/",
    },
    {
      image: "/src/assets/persons/persons (3).webp",
      heading: "Bob White",
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
