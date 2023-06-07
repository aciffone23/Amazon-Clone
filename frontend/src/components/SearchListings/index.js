import { React, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllProducts, getProducts } from '../../store/product';
import { Link, useParams } from 'react-router-dom';
import './SearchListings.css'

const SearchListings = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const products = useSelector(getProducts);
  const { keyword } = useParams();
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchAllProducts())
  },[dispatch])

  useEffect(() => {
    if (keyword) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(keyword.toLowerCase()) ||
        product.category.toLowerCase().includes(keyword.toLowerCase()) ||
        product.brand.toLowerCase().includes(keyword.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  }, [keyword, products]);

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
  );
};

export default SearchListings;

