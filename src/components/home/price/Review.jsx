// GoogleReviewPage.js
import React, { useState, useEffect } from "react";
import ReviewCard from "./Review"; // Assuming you have a ReviewCard component
import "./GoogleReviewPage.css"; // CSS file for styling

const GoogleReviewPage = () => {
  const [reviews, setReviews] = useState([]);

  // Fetch review data from API
  useEffect(() => {
    fetch("https://api.example.com/reviews")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="google-review-page">
      <h1>Google Reviews</h1>
      <div className="review-list">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </div>
  );
};

export default GoogleReviewPage;
