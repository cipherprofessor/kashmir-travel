import React from 'react';
import CardComponent from '../ImageMediaCard/ImageMediaCard';
import './CardComponent.scss'; // Import the stylesheet

const CardList = () => {
  const cards = [
    { image: '/src/assets/persons/persons (1).webp', title: 'Mohsin', description: 'CEO' },
    { image: '/src/assets/persons/persons (2).webp', title: 'Shaista', description: 'CFO' },
    { image: '/src/assets/persons/persons (3).webp', title: 'Sheeba', description: 'COO' },
    { image: '/src/assets/persons/persons (4).webp', title: 'Rayees', description: 'CSO' },
    { image: '/src/assets/persons/persons (5).webp', title: 'Arsalan', description: 'CTO' }
  ];

  return (
    <div className="card-list">
      {cards.map((card, index) => (
        <CardComponent
          key={index}
          image={card.image}
          title={card.title}
          description={card.description}
        />
      ))}
    </div>
  );
};

export default CardList;
