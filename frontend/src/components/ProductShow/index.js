import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/product';
import './ProductShow.css'
import Shoes from '../../imgs/productImgs/Shoes.png'
import Glasses from '../../imgs/productImgs/Glasses.png'
import Bags from '../../imgs/productImgs/Bags.png'
import Books from '../../imgs/productImgs/Books.png'
import Watches from '../../imgs/productImgs/Watches.png'
import VideoGames from '../../imgs/productImgs/VideoGames.png'
import Clothes from '../../imgs/productImgs/Clothes.png'
import Electronics from '../../imgs/productImgs/Electronics.png'

const ProductShow = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    let product = useSelector(getProduct(id));
    
    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);
    
    if (!product) {
        return null;
    }
    const price = product.price.toFixed(2); 
    const [dollars, cents] = price.split('.');

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
    <div className="product-show">
        <div className="product-image-box">
            <div className="product-image-show">
                <img src={`${getCategoryImage(product.category)}`} alt={product.name} />
            </div>
        </div>
        <div className="product-details-show">
            <h2 className="product-name-show">{product.name}</h2>
            <h1 className="product-brand-show">{product.brand}</h1>
            <p>(rating placeholder)</p>
            <div>
                <hr>
                </hr>
            </div>
            <span className="product-price-dollar">$</span>
            <span className="product-price-show">{dollars}</span>
            <span className="product-price-cents">{cents}</span>
            <h5 className="product-description-show">{product.description}</h5>
            <ul className="product-info-show">
            <li>Dimensions: {product.dimensions}</li>
            <li>Category: {product.category}</li>
            </ul>
        </div>
        <div className="cart-container">
            <h5>Buy new:</h5>
            <span className="product-price-dollar">$</span>
            <span className="product-price-show">{dollars}</span>
            <span className="product-price-cents">{cents}</span>
            <p>(qty dropdown placeholder)</p>
            <button className="add-to-cart-btn">Add to Cart</button>
        </div>
    </div>
  );

};

export default ProductShow;
