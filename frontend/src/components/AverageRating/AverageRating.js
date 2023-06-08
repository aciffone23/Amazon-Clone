import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { faStarHalfAlt as halfStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AverageRating = ({ reviews }) => {
  const calculateAverageRating = () => {
    if (reviews && reviews.length > 0) {
      const totalRating = reviews.reduce((acc, review) => acc + review.rating, 0);
      const averageRating = totalRating / reviews.length;
      const fullStars = Math.floor(averageRating);
      const decimalPart = averageRating % 1;

      let averageRatingStars = [];

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

      const emptyStars = Array(5 - averageRatingStars.length).fill(
        <FontAwesomeIcon key={`empty-star-${averageRatingStars.length}`} icon={emptyStar} size="sm" style={{ color: "#ffa41c" }} />
      );

      return {
        averageRating: averageRating.toFixed(1),
        averageRatingStars: [...averageRatingStars, ...emptyStars]
      };
    }

    return {
      averageRating: "N/A",
      averageRatingStars: []
    };
  };

  const { averageRating, averageRatingStars } = calculateAverageRating();

  return (
    <span>{averageRating} {averageRatingStars}</span>
  );
};

export default AverageRating;
