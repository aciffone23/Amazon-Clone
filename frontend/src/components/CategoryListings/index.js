import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import {  fetchAllProducts, getFilteredProducts } from '../../store/product';

const CategoryListings = () => {
    const dispatch = useDispatch();
    const { category } = useParams();
    const filteredProducts = useSelector(getFilteredProducts(category));

    useEffect(() => {
        dispatch(fetchAllProducts())
    },[dispatch])

      return (
        <div className="product-listings">
        {filteredProducts.map((product) => {
          const price = product.price.toFixed(2); 
          const [dollars, cents] = price.split('.'); 
          
          return (
            <Link to={`/products/${product.id}`} key={product.id} className="product-box">
                <img src={product.photoUrl} alt={product.name} className="product-image" />
                <span className="product-brand">{product.brand}</span>
                <span className="product-name">{product.name}</span>
                <span className="product-review">Review placeholder</span>
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
};

export default CategoryListings;