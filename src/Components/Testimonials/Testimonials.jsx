import React from 'react';
import './Testimonials.css';
import starImage from './Stars.png'; // adjust the path accordingly
import cornerImage from './logo.png'; // path to the image you want in the lower right corner

const testimonials = [
  {
    title: 'Golden Chucsle Award',
    description: 'Best Comedy Direction for "Mismatched Mates" (2022)',
  },
  {
    title: 'LaffTown Film Festival',
    description: 'Most Innovative Comedy for "Dance-Off at Dawn" (2021)',
  },
  {
    title: 'Comedy Central\'s Filmmaker Spotlight',
    description: 'Director of the Month (June 2021)',
  },
  {
    title: 'The Giggles Choice Awards',
    description: 'Outstanding Achievement in Screenwriting for "Pickle in Paris" (2020)',
  },
  {
    title: 'The Jest Fest',
    description: 'Audience\'s Favorite Comedy for "The Laugh Lounge Chronicles" (2019)',
  },
  {
    title: 'Silly Cinema Awards',
    description: 'Best Comedic Ensemble Cast for "Dance-Off at Dawn" (2018)',
  },
  {
    title: 'Humorville Film Fest',
    description: 'Trailblazer Award for Contributions to Comedy Cinema (2018)',
  },
];

const Testimonials = () => {
  const firstRow = testimonials.slice(0, 4);
  const secondRow = testimonials.slice(4);

  return (
    <div className="testimonials-section">
      <h2>testimonials</h2>
      <p>customers that have shared <br/>with us their unfailing love <br/>and valuable feedback</p>
      <div className="awards-container">
        {firstRow.map((testimonial, index) => (
          <div key={index} className="award">
            <img src={starImage} alt="5 stars" className="stars"/>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
      <div className="awards-container center-row">
        {secondRow.map((testimonial, index) => (
          <div key={index} className="award">
            <img src={starImage} alt="5 stars" className="stars"/>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.description}</p>
          </div>
        ))}
      </div>
      <img src={cornerImage} alt="Corner Image" className="corner-image"/>
    </div>
  );
}

export default Testimonials;
