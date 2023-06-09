import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllProducts, getFilteredProducts } from '../../store/product';
import './ProductListings.css'
import AverageRating from '../AverageRating/AverageRating';


const ProductListings = () => {
    let dispatch = useDispatch()
    let products = useSelector(getFilteredProducts())

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[dispatch])
    
    
    return (
    <div className="product-listings">
    {products.map((product) => {
      const price = product.price.toFixed(2); 
      const [dollars, cents] = price.split('.'); 
      
      return (
        <Link to={`/products/${product.id}`} key={product.id} className="product-box">
            <div className="image-container">
              <img src={product.photoUrl} alt={product.name} className="product-image" />
            </div>
            <span className="product-brand">{product.brand}</span>
            <span className="product-name">{product.name}</span>
            <div className="product-rating-count">
              <AverageRating product={product} />
              <span className="review-count">{product.reviewCount}</span>
            </div>
            <span className="product-price">
            <span className="product-price-dollar">$</span>
            <span className="product-price-show">{dollars}</span>
            <span className="product-price-cents">{cents}</span>
          </span>
        </Link>
      );
    })}
  </div>
    )
}

export default ProductListings