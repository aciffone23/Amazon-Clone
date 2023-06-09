import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/product';
import './ProductShow.css';
import { addCartItem, fetchCart } from '../../store/cart';
import LoginModal from './Modal';
import AverageRating from '../AverageRating/AverageRating';

const ProductShow = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const product = useSelector(getProduct(id));
  const userId = useSelector(state => state.session.user?.id);
  const currentUser = useSelector(state => state.session.user);
  const [quantity, setQuantity] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchProduct(id));
  }, [dispatch, id]);

  const handleQtyChange = e => {
    setQuantity(Number(e.target.value));
  };

  const handleAddToCart = () => {
    if (!userId) {
      setShowModal(true);
      setModalType('addToCart');
      return;
    } else {
      dispatch(addCartItem(userId, id, quantity))
        .then(() => dispatch(fetchCart()))
        .then(() => {
          navigate('/cart');
        });
    }
  };

  if (!product) {
    return null;
  }

  const price = product.price.toFixed(2);
  const [dollars, cents] = price.split('.');

  const handleReviewButtonClick = () => {
    if (!userId) {
      setShowModal(true);
      setModalType('writeReview');
    } else if (product.reviews.find(review => review.author === currentUser.name)) {
      alert('You have already left a review for this product.');
    } else {
      navigate(`/create-review/${id}`);
    }
  };

  return (
    <div className="products-container">
      <div className="product-show">
        <div className="product-image-box">
          <div className="product-image-show">
            <img src={product.photoUrl} alt={product.name} />
          </div>
        </div>
        <div className="product-details-show">
          <h2 className="product-name-show">{product.name}</h2>
          <h1 className="product-brand-show">{product.brand}</h1>
          <div className="product-review-show">
            <span className="avg-star">
              {product.averageStars ? product.averageStars.toFixed(1) : 0}
            </span>
            <AverageRating classname="avgrating2" product={product} />
            <span className="review-count">{product.reviewCount}</span>
          </div>
          <div>
            <hr />
          </div>
          <span className="product-price-dollar">$</span>
          <span className="product-price-show">{dollars}</span>
          <span className="product-price-cents">{cents}</span>
          <h5 className="product-description-show">{product.description}</h5>
          <ul className="product-info-show"></ul>
        </div>
        <div className="cart-container">
          <h5>Buy new:</h5>
          <span className="product-price-dollar">$</span>
          <span className="product-price-show">{dollars}</span>
          <span className="product-price-cents">{cents}</span>
          <h4>No Returns</h4>
          <h4>Free Delivery</h4>
          <h5 className="stock">In Stock</h5>
          <select className="cart-item-quantity" value={quantity} onChange={handleQtyChange}>
            <option value={1}>Qty: 1</option>
            <option value={2}>Qty: 2</option>
            <option value={3}>Qty: 3</option>
            <option value={4}>Qty: 4</option>
            <option value={5}>Qty: 5</option>
            <option value={6}>Qty: 6</option>
            <option value={7}>Qty: 7</option>
            <option value={8}>Qty: 8</option>
            <option value={9}>Qty: 9</option>
            <option value={10}>Qty: 10</option>
          </select>
          <button className="add-to-cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          {showModal && (
            <LoginModal onClose={() => setShowModal(false)} modalType={modalType} />
          )}
        </div>
      </div>
      <div className="product-details-box">
        <div>
          <hr />
        </div>
        <div className="product-details">
          <h1>Product Details</h1>
          <p>
            <span className="details-label">Dimensions:</span> {product.dimensions}
          </p>
          <p>
            <span className="details-label">Category:</span> {product.category}
          </p>
          <p>
            <span className="details-label">Brand:</span> {product.brand}
          </p>
          <div className="details-reviews">
            <span>Customer Reviews: </span>
            <span className="avg-star">
              {product.averageStars ? product.averageStars.toFixed(1) : 0}
            </span>
            <AverageRating classname="avgrating" product={product} />
            <h2 className="review-count">{product.reviewCount}</h2>
          </div>
          <button className="customer-review-button" onClick={handleReviewButtonClick}>
            Write a customer review
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductShow;
