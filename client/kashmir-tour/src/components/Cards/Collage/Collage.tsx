import React from 'react';
import './Collage.scss';

interface CollageComponentProps {
    images: string[];
    text: string;
}

const CollageComponent: React.FC<CollageComponentProps> = ({ images, text }) => {
    return (
        <div className="collage-container">
          <div className="text-container">
            <p>{text}</p>
          </div>
          <div className="collage">
            {images.map((image, index) => (
              <div key={index} className="collage-item">
                <img src={image} alt={`Collage ${index}`} />
              </div>
            ))}
          </div>
        </div>
      );
    };

export default CollageComponent;
