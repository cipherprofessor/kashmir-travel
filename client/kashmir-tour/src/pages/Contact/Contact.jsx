/* eslint-disable max-len */
/* eslint-disable react/no-unescaped-entities */
// client/src/pages/Contact/Contact.jsx
import React from 'react';
import ImgCardMap from '../../components/Cards/SelfImageCard/ImgCardMap/ImgCardMap';

function Contact() {
  return (


    <>
    {/* <p>Mohsin</p> */}
    {/* <CardList /> */}
    {/* <RecipeReviewCard /> */}
    
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Contact</h1>
      <p>
        We'd love to hear from you! If you have any questions, comments, or
        feedback, please feel free to reach out to us.
      </p>
      <p>
        <strong>Email:</strong>
        {' '}
        support@travelwebsite.com
      </p>
      <p>
        <strong>Phone:</strong>
        {' '}
        +1 234 567 890
      </p>
      <p>
        <strong>Address:</strong>
        {' '}
        123 Travel Street, Adventure City, World
      </p>
    </div>
    
    <ImgCardMap />


     </>


  );
}

export default Contact;
