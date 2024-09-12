import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

interface StarRatingProps {
  rating: number;
  size?: number;
  color?: string;
  count?: number;
}

const StarRating: React.FC<StarRatingProps> = ({
  rating = 0,
  size = 16,
  color = "#E3A008",
  count = 0,
}) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} size={size} color={color} />);
      } else if (rating >= i - 0.5) {
        stars.push(<FaStarHalfAlt key={i} size={size} color={color} />);
      } else {
        stars.push(<FaRegStar key={i} size={size} color={color} />);
      }
    }
    return stars;
  };

  return (
    <div className="flex gap-2 items-center">
      <div className="flex gap-1">{renderStars()}</div>
      <p className="text-sm">({count})</p>
    </div>
  );
};

export default StarRating;
