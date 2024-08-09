/* eslint-disable react/no-array-index-key */
import React from 'react';
import './Home.scss';
import ImageSlider from '../../components/ImageSlider/ImageSlider';
import TourPackageCard from '../../components/TourPackageCard/TourPackageCard';
import CollageMapping from '../../components/MultiMapping/Collage/CollageMapping';

function Home() {
  const tourPackages = [
    {
      images: [
        '/src/assets/cardimages/gulmarg/gulmarg.jpg',
        '/src/assets/cardimages/gulmarg/gulmarg1.jpg',
        '/src/assets/cardimages/gulmarg/gulmarg2.jpg',
      ],
      title: 'Gulmarg',
      description:
        'Gulmarg is the crowning glory of Jammu & Kashmir and is located 2,650 meters above sea level. Known as the “Meadow of Flowers”, it boasts of the world’s highest golf-course.',
      price: 499,
      duration: '2 Days',
      groupSize: 'Up to 20 People',
    },
    {
      images: [
        '/src/assets/cardimages/pahalgam/pahalgam3.jpg',
        '/src/assets/cardimages/pahalgam/pahalgam2.jpg',
        '/src/assets/cardimages/pahalgam/pahalgam1.jpg',
      ],
      title: 'Pahalgam',
      description:
        'A favourite with the filmmakers for its picturesque setting against the backdrop of Lidder River, Pahalgam’s lush valleys, colourful meadows and snow-kissed mountains look like a scene straight out of a beautiful painting.',
      price: 599,
      duration: '3 Days',
      groupSize: 'Up to 21 People',
    },
    {
      images: [
        '/src/assets/cardimages/sonmarg/sonmarg.jpg',
        '/src/assets/cardimages/sonmarg/sonmarg1.png',
        '/src/assets/cardimages/sonmarg/sonmarg2.jpg',
      ],
      title: 'Sonmarg',
      description:
        'Sonmarg, also known as the "Meadow of Gold," is a picturesque town located in the Indian state of Jammu and Kashmir. It is a popular tourist destination known for its scenic beauty and adventurous activities.',
      price: 699,
      duration: '4 Days',
      groupSize: 'Up to 22 People',
    },
    {
      images: [
        '/src/assets/cardimages/srinagar/tulip.jpg',
        '/src/assets/cardimages/srinagar/dallake.png',
        '/src/assets/cardimages/srinagar/ghantaghar.jpg',
      ],
      title: 'Srinagar',
      description:
        'Jahangir’s ‘heaven on earth’, Srinagar offers the picturesque Dal Lake, breath-taking mountain views, stunning Mughal gardens and sprawling orchards.',
      price: 699,
      duration: '5 Days',
      groupSize: 'Up to 23 People',
    },
  ];

  return (
    <div className="home">
      <ImageSlider />
      <section className="tour-packages">
        <div className="deals-heading">We’ve Got Some Great Deals </div>
        <div className="tour-packages-container">
          {tourPackages.map((pkg, index) => (
            <TourPackageCard
              key={index}
              images={pkg.images}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              duration={pkg.duration}
              groupSize={pkg.groupSize}
            />
          ))}
        </div>
      </section>
      < section className='collage'>
      <CollageMapping />
      </section>
    </div>
  );
}

export default Home;
