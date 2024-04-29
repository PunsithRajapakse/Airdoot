// ReviewCard.js
import React from "react";

const ReviewCard = ({ review }) => {
  return (
    <div className="review-card">
      <h2>{review.author}</h2>
      <p>{review.comment}</p>
      <div className="rating">{review.rating} stars</div>
    </div>
  );
};

export default ReviewCard;
