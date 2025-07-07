import React from 'react'

import { FaStar } from "react-icons/fa";

const StarRating = ({ rating }) => {
  const filledStars = Math.floor(rating);
  const hasHalfStar = rating - filledStars >= 0.5;

  return (
    <div className="d-flex align-items-center mb-2">
      {[...Array(5)].map((_, i) => (
        <FaStar
          key={i}
          color={i < filledStars ? "#ffd700" : "#ffffff"}
          size={20}
        />
      ))}
    </div>
  );
};

export default StarRating;
