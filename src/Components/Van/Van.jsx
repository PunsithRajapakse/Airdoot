// Car.js
import React, { useState, useEffect } from 'react';
import './Van.css'; // Import CSS file for styling
import newCarImage from './new 1.png'; // Import the new image file

const Car = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const xRowDistance = 0.189; // Adjust this value to change the horizontal movement distance

  useEffect(() => {
    const handleScroll = () => {
      // Adjust the scrollPosition value according to the desired horizontal movement
      setScrollPosition(window.scrollY * xRowDistance);
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up event listener on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [xRowDistance]); // Re-run the effect if xRowDistance changes

  return (
    <div className="car-container">
      <div className="car" style={{ transform: `translateX(${scrollPosition}px)` }}>
        <img src={newCarImage} alt="Car" />
      </div>
    </div>
  );
};

export default Car;
