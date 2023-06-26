import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useParams, useNavigate  } from 'react-router-dom';
import './Reviews.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as emptyStar } from '@fortawesome/free-regular-svg-icons';
import { deleteReview, fetchReviews } from '../../store/review';

const CustomerReviews = () => {
  const { id } = useParams();
  const reviews = useSelector((state) => state.products[id]?.reviews);
  const currentUser = useSelector((state) => state.session.user);
  const [editReviewId, setEditReviewId] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  useEffect(() => {
    dispatch(fetchReviews(id));
  }, [dispatch, id]);

  const renderRatingStars = (rating) => {
    const solidStars = Array(rating)
      .fill(0)
      .map((_, index) => (
        <FontAwesomeIcon
          icon={solidStar}
          size="sm"
          style={{ color: '#ffa41c' }}
          key={`solid-star-${index}`}
        />
      ));
    const emptyStars = Array(5 - rating)
      .fill(0)
      .map((_, index) => (
        <FontAwesomeIcon
          icon={emptyStar}
          size="sm"
          style={{ color: '#ffa41c' }}
          key={`empty-star-${index}`}
        />
      ));
    return [...solidStars, ...emptyStars];
  };

  const sortedReviews = reviews?.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  const handleEditReview = (reviewId) => {
    const review = sortedReviews.find((review) => review.id === reviewId);
    const reviewDetails = {
      reviewId: review.id,
      rating: review.rating,
      headline: review.title,
      body: review.body,
    };
    navigate(`/update-review/${id}`, { state: reviewDetails });
  };
  

  const handleDeleteReview = (productId, reviewId) => {
    dispatch(deleteReview(productId, reviewId));
  };

  const handleCancelEdit = () => {
    setEditReviewId(null);
  };

  return (
    <>
      <div className="review-page">
        {sortedReviews && sortedReviews.length > 0 ? (
          <ul className="reviews-list">
            <h2>Customer Reviews</h2>
            {sortedReviews.map((review) => (
              <li className="review-item" key={review.id}>
                <div className="review-header">
                  <p className="review-author">{review.author}</p>
                </div>
                <div className="review-details">
                  <div className="review-rating">{renderRatingStars(review.rating)}</div>
                  <h4 className="review-title">{review.title}</h4>
                </div>
                <p className="review-created-at">
                  Reviewed on: {new Date(review.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                </p>
                {currentUser?.name === review.author && editReviewId !== review.id ? (
                  <div>
                    <div className="review-body">
                      <p>{review.body}</p>
                    </div>
                    <div className="button-container">
                      <button className="review-form-btns" onClick={() => handleEditReview(review.id)}>
                        Edit
                      </button>
                      <button className="review-form-btns" onClick={() => handleDeleteReview(id, review.id)}>
                        Delete
                      </button>
                    </div>
                  </div>
                ) : (
                  <>
                    {editReviewId === review.id ? (
                      null 
                    ) : (
                      <div className="review-body">
                        <p>{review.body}</p>
                      </div>
                    )}
                  </>
                )}
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </>
  );
};

export default CustomerReviews;
