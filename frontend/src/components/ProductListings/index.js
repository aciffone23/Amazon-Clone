import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useLocation } from 'react-router-dom';
import { fetchProducts, getProducts } from '../../store/product';
import './ProductListings.css'
import Shoes from '../../imgs/productImgs/Shoes.png'
import Glasses from '../../imgs/productImgs/Glasses.png'
import Bags from '../../imgs/productImgs/Bags.png'
import Books from '../../imgs/productImgs/Books.png'
import Watches from '../../imgs/productImgs/Watches.png'
import VideoGames from '../../imgs/productImgs/VideoGames.png'
import Clothes from '../../imgs/productImgs/Clothes.png'
import Electronics from '../../imgs/productImgs/Electronics.png'



const ProductListings = () => {
    let dispatch = useDispatch()
    let products = useSelector(getProducts)
    let location = useLocation()
    
    useEffect(() => {
        dispatch(fetchProducts())
    },[dispatch])

    if (location.pathname === '/') {
        return null
    }

    const getCategoryImage = (category) => {
        switch (category) {
          case 'Shoes':
            return Shoes;
          case 'Glasses':
            return Glasses;
          case 'Bags':
            return Bags;
          case 'Books':
            return Books;
          case 'Watches':
            return Watches;
          case 'Video Games':
            return VideoGames;
          case 'Clothes':
            return Clothes;
          case 'Electronics':
            return Electronics;
          default:
            return null;
        }
      };
    

    return (
        <div className="product-listings">
            {products.map((product) => (
            <Link to={`/products/${product.id}`} key={product.id} className="product-box">
          <img src={`${getCategoryImage(product.category)}`} alt={product.name} className="product-image" />
          <span className="product-brand">{product.brand}</span>
          <span className="product-name">{product.name}</span>
          <span className="product-review">Review placeholder</span>
          <span className="product-price">${product.price}</span>
        </Link>
      ))}
    </div>
    )
}

export default ProductListings