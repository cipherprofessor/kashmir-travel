/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
// client/src/pages/Tour/Tour.jsx
import React from 'react';

function Tour() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Tour</h1>
      <p>
        Explore our exciting tours and travel packages! We offer a variety of tours that cater to different interests and preferences.
      </p>
      <p>
        Whether you're looking for a beach getaway, a mountain adventure, or a cultural exploration, we have the perfect tour for you. Check out our featured tours and start planning your next trip today!
      </p>
      <ul className="list-disc ml-4">
        <li>Beach Getaway Tour</li>
        <li>Mountain Adventure Tour</li>
        <li>Cultural Exploration Tour</li>
        <li>City Highlights Tour</li>
      </ul>
    </div>
  );
}

export default Tour;
