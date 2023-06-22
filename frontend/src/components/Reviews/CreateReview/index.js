import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../../store/product';
import './CreateReview.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as solidStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as thinStar } from '@fortawesome/free-regular-svg-icons';
import { createReview } from '../../../store/review';

const CreateReviews = () => {
  const { id } = useParams();
  const sessionUser = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const product = useSelector(getProduct(id));
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const [rating, setRating] = useState(0);
  const [headline, setHeadline] = useState('');
  const [description, setDescription] = useState('');
  const [headlineError, setHeadlineError] = useState('');
  const [descriptionError, setDescriptionError] = useState('');
  const [ratingError, setRatingError] = useState('');


  const handleRatingClick = (selectedRating) => {
    if (selectedRating === rating) {
      setRating(0);
    } else {
      setRating(selectedRating);
    }
  };

  const renderRatingStars = () => {
    const stars = Array(5).fill(0).map((_, index) => {
      const starIcon = index < rating ? solidStar : thinStar;
      return (
        <FontAwesomeIcon
          icon={starIcon}
          size="sm"
          style={{ color: "#ffa41c" }}
          key={`star-${index}`}
          onClick={() => handleRatingClick(index + 1)}
        />
      );
    });

    return stars;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let isValid = true;

    if (!rating) {
        setRatingError('Please select a rating.');
        isValid = false;
    } else {
        setRatingError('');
    }

    if (!headline.trim()) {
      // Handle error: Headline is not filled in
      setHeadlineError('Please enter a headline.');
      isValid = false;
    } else {
      setHeadlineError('');
    }

    if (!description.trim()) {
      // Handle error: Description is not filled in
      setDescriptionError('Please enter a description.');
      isValid = false;
    } else {
      setDescriptionError('');
    }

    if (!isValid) {
      return;
    }

    // Create the review data object
    const reviewData = {
      productId: id,
      rating: rating,
      title: headline,
      body: description,
      userId: sessionUser.id
    };

    // Dispatch the createReview action
    await dispatch(createReview(reviewData));

    // Reset the form inputs
    setRating(0);
    setHeadline('');
    setDescription('');

    // Redirect back to the product show page
    navigate(`/products/${id}`);
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
          {ratingError && <p className="error-message">{ratingError}</p>}
        </div>
        <div>
          <hr />
        </div>
        <form>
        <div className={`form-section ${headlineError ? 'errors' : ''}`}>
  <h3 className="headline-label">Add a Headline</h3>
  <input
    type="text"
    className={`headline-input ${headlineError ? 'error' : ''}`}
    placeholder="What's most important to know?"
    value={headline}
    onChange={(e) => setHeadline(e.target.value)}
  />
  {headlineError && <p className="error-message">{headlineError}</p>}
</div>

          <div>
            <hr />
          </div>
          <div className={`form-section ${descriptionError ? 'errors' : ''}`}>
            <h3 className="review-label">Add a written review</h3>
            <textarea
              className="description-textarea"
              placeholder="What did you like or dislike? What did you use this product for?"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            {descriptionError && <p className="error-message">{descriptionError}</p>}
          </div>
          <div>
            <hr />
          </div>
          <div className="submit-container">
            <button type="submit" className="submit-button" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateReviews;
