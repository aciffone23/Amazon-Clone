import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Reviews.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';

const CustomerReviews = () => {
  const { id } = useParams();
  const reviews = useSelector((state) => state.products[id]?.reviews);

  const renderRatingStars = (rating) => {
    const solidStars = Array(rating).fill(0).map((_, index) => (
      <FontAwesomeIcon
        icon={solidStar}
        size="sm"
        style={{ color: "#ffa41c" }}
        key={`solid-star-${index}`}
      />
    ));
    const emptyStars = Array(5 - rating).fill(0).map((_, index) => (
      <FontAwesomeIcon
        icon={emptyStar}
        size="sm"
        style={{ color: "#ffa41c" }}
        key={`empty-star-${index}`}
      />
    ));
    return [...solidStars, ...emptyStars];
  };
  

  return (
    <div className="review-page">
        {reviews && reviews.length > 0 ? (
            <ul className="reviews-list">
            <h2>Customer Reviews</h2>
            {reviews.map((review) => (
                <li className="review-item" key={review.id}>
                <div className="review-header">
                    <p className="review-author">{review.author}</p>
                </div>
                <div className="review-details">
                    <div className="review-rating">
                    {renderRatingStars(review.rating)}
                    </div>
                    <h4 className="review-title">{review.title}</h4>
                </div>
                <p className="review-created-at">
                    Reviewed on: {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                <div className="review-body">
                    <p>{review.body}</p>
                </div>
                </li>
            ))}
            </ul>
        ) : (
            <p>No reviews available.</p>
        )}
        </div>
  );
  
};

export default CustomerReviews;
