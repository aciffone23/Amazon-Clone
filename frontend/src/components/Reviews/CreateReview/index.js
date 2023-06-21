import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../../store/product';
import './CreateReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as thinStar } from '@fortawesome/free-regular-svg-icons';

const CreateReviews = () => {
  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const product = useSelector(getProduct(id));

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const [rating, setRating] = useState(0);

  const handleRatingClick = (selectedRating) => {
    if (selectedRating === rating) {
      // If the same rating is clicked, reset the rating to 0 (blank)
      setRating(0);
    } else {
      // Otherwise, update the rating to the selected value
      setRating(selectedRating);
    }
  };

  const renderRatingStars = () => {
    const stars = Array(5).fill(0).map((_, index) => {
      if (index < rating) {
        return (
          <FontAwesomeIcon
            icon={solidStar}
            size="sm"
            style={{ color: "#ffa41c" }}
            key={`star-${index}`}
            onClick={() => handleRatingClick(index + 1)}
          />
        );
      } else {
        return (
          <FontAwesomeIcon
            icon={thinStar}
            size="sm"
            style={{ color: "#ffa41c" }}
            key={`star-${index}`}
            onClick={() => handleRatingClick(index + 1)}
          />
        );
      }
    });

    return stars;
  };

  return (
    <>
      <div className="user-header-box">
        <h5 className="reviews-user">{sessionUser.name}</h5>
      </div>
      <div className="create-reviews-container">
        <h1 className="reviews-create">Create Review</h1>
        <div className="product-image-review">
          <img className="product-image-small" src={product.photoUrl} alt={product.name} />
          <h4 className="reviews-product-name">{product.name}</h4>
        </div>
        <div>
          <hr />
        </div>
        <div className="star-review-cont">
          <p className="product-review-rating">Overall Rating</p>
          <div className="star-rating-reviews">{renderRatingStars()}</div>
        </div>
        <div>
          <hr />
        </div>
        <form>
          <div className="form-section">
            <h3 className="headline-label">Add a Headline</h3>
            <input type="text" className="headline-input" placeholder="What's most important to know?" />
          </div>
          <div>
            <hr />
          </div>
          <div className="form-section">
            <h3 className="review-label">Add a written review</h3>
            <textarea
              className="description-textarea"
              placeholder="What did you like or dislike? What did you use this product for?"
            ></textarea>
          </div>
          <div>
            <hr />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-button">
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateReviews;
