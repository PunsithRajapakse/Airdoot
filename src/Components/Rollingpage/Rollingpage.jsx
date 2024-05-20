import React from 'react';
import './Rollingpage.css'; // Correct import path to your CSS file for styling
import RollingpageImage from './Page.png'; // Correct import path to your image file


const Rollingpage = ({ onFinish }) => {
    // Simulate a delay before finishing
    React.useEffect(() => {
      const timer = setTimeout(() => {
        onFinish();
      }, 3000); // 3000 milliseconds delay, adjust as needed
      return () => clearTimeout(timer);
    }, [onFinish]);
  return (
    <div className="Rollingpage">
      <div className="background-image">
        <img src={RollingpageImage} alt="Background" className="image-background" /> {/* Use imported image file */}
      </div>
    </div>
  );
};

export default Rollingpage;
