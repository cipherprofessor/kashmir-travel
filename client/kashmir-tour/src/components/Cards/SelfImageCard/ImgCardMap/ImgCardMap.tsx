import React from 'react';
import './ImgCardMap.scss'; // Ensure you have any necessary styling
import ImgCard from '../ImgCard/ImgCard';

const ImgCardMap: React.FC = () => {
  const cardData = [
    {
      image: '/src/assets/persons/persons (1).webp',
      heading: 'John Doe',
      subheading: 'Web Developer',
      linkedInUrl: 'https://www.linkedin.com/in/johndoe/',
      instagramUrl: 'https://www.instagram.com/johndoe/'
    },
    {
      image: '/src/assets/persons/persons (2).webp',
      heading: 'Jane Smith',
      subheading: 'Graphic Designer',
      linkedInUrl: 'https://www.linkedin.com/in/janesmith/',
      instagramUrl: 'https://www.instagram.com/janesmith/'
    },
    {
      image: '/src/assets/persons/persons (3).webp',
      heading: 'Alice Brown',
      subheading: 'Project Manager',
      linkedInUrl: 'https://www.linkedin.com/in/alicebrown/',
      instagramUrl: 'https://www.instagram.com/alicebrown/'
    },
    {
      image: '/src/assets/persons/persons (4).webp',
      heading: 'Bob White',
      subheading: 'Marketing Specialist',
      linkedInUrl: 'https://www.linkedin.com/in/bobwhite/',
      instagramUrl: 'https://www.instagram.com/bobwhite/'
    }
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
