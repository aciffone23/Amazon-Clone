import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AverageRating = ({ product }) => {
  if (!product || typeof product.averageStars !== 'number') {
    return <span>No reviews available</span>;
  }

  const calculateAverageRatingStars = (averageStars) => {
    if (!averageStars || averageStars <= 0) {
        return [];
    }
    const fullStars = Math.floor(averageStars);
    const decimalPart = averageStars % 1;

    const averageRatingStars = [];

    for (let i = 0; i < fullStars; i++) {
      averageRatingStars.push(
        <FontAwesomeIcon key={`solid-star-${i}`} icon={solidStar} size="sm" style={{ color: "#ffa41c" }} />
      );
    }

    if (decimalPart >= 0.25 && decimalPart < 0.75) {
      averageRatingStars.push(
        <FontAwesomeIcon key="half-star" icon={halfStar} size="sm" style={{ color: "#ffa41c" }} />
      );
    } else if (decimalPart >= 0.75) {
      averageRatingStars.push(
        <FontAwesomeIcon key="solid-star-decimal" icon={solidStar} size="sm" style={{ color: "#ffa41c" }} />
      );
    } else {
      averageRatingStars.push(
        <FontAwesomeIcon key="empty-star" icon={emptyStar} size="sm" style={{ color: "#ffa41c" }} />
      );
    }

    const emptyStars = Array(5 - averageRatingStars.length).fill(0);

    return averageRatingStars.concat(
      emptyStars.map((_, index) => (
        <FontAwesomeIcon
          key={`empty-star-${index}`}
          icon={emptyStar}
          size="sm"
          style={{ color: "#ffa41c" }}
        />
      ))
    );
  };

  const averageStars = product.averageStars ? product.averageStars : 0;
  const averageRatingStars = calculateAverageRatingStars(averageStars);

  return (
    <span>
      {averageRatingStars}
    </span>
  );
};

export default AverageRating;
