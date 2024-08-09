import React from 'react';
import CollageComponent from '../../Cards/Collage/Collage';


const images = [
  '/src/assets/scenery/kashmir1.jpg',
  '/src/assets/scenery/kashmir2.jpg',
  '/src/assets/scenery/kashmir4.jpg',
  '/src/assets/scenery/kashmir5.jpg'
];

const CollageMapping = () => {
    return (
        <CollageComponent
          images={images}
          text="This is some sample text to be displayed on the left side of the screen."
        />
      );
    };

export default CollageMapping;
