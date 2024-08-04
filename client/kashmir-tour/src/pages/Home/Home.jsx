import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.scss';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import TourPackageCard from '../../components/TourPackageCard/TourPackageCard';

const Home = () => {
  const tourPackages = [
    {
      images: ['/src/assets/cardimages/gulmarg/gulmarg.jpg', '/src/assets/cardimages/gulmarg/gulmarg1.jpg', '/src/assets/cardimages/gulmarg/gulmarg2.jpg'],
      title: 'Gulmarg',
      description: 'Explore the beauty of Gulmarg with our exclusive tour package.',
      price: 499,
    },
    {
      images: ['/src/assets/cardimages/pahalgam/pahalgam3.jpg', '/src/assets/cardimages/pahalgam/pahalgam2.jpg', '/src/assets/cardimages/pahalgam/pahalgam1.jpg'],
      title: 'Pahalgam',
      description: 'Enjoy the vibrant culture and stunning beaches of Pahalgam.',
      price: 599,
    },
    {
      images: ['/src/assets/cardimages/sonmarg/sonmarg.jpg', '/src/assets/cardimages/sonmarg/sonmarg1.png', '/src/assets/cardimages/sonmarg/sonmarg2.jpg'],
      title: 'Sonmarg',
      description: 'Discover the diverse landscapes and rich history of Sonmarg.',
      price: 699,
    },
    {
      images: ['/src/assets/cardimages/srinagar/tulip.jpg', '/src/assets/cardimages/srinagar/dallake.png', '/src/assets/cardimages/srinagar/ghantaghar.jpg'],
      title: 'Srinagar',
      description: 'Discover the diverse landscapes and rich history of Sonmarg.',
      price: 699,
    },
    
  ];

  return (
    <div className="home">
      <ImageSlider />
      <section className="tour-packages">
      <h2 className="text-4xl font-bold text-center mb-8">We’ve Got Some Great Deals</h2>
        <div className="tour-packages-container">
          {tourPackages.map((pkg, index) => (
            <TourPackageCard
              key={index}
              images={pkg.images}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
