import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/product';
import './ProductShow.css'
import { addOrUpdateToCart, fetchCart } from '../../store/cart';
import LoginModal from './Modal';

const ProductShow = () => {
    let dispatch = useDispatch();
    let { id } = useParams();
    let product = useSelector(getProduct(id));
    const userId = useSelector(state => state.session.user?.id);
    const [quantity, setQuantity] = useState(1)
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate(); // 



    
    useEffect(() => {
        dispatch(fetchProduct(id));
    }, [dispatch, id]);

    const handleQtyChange = (e) => {
        setQuantity(Number(e.target.value));
    };
    

    const handleAddToCart = () => {
        if (!userId) {
          setShowModal(true);
          return
        } else {
          dispatch(addOrUpdateToCart(userId, id, quantity))
            .then(() => dispatch(fetchCart()))
            .then(() => {
                navigate("/cart"); 
            });
        }
      };

      
      
      
    
    if (!product) {
        return null;
    }

    const price = product.price.toFixed(2); 
    const [dollars, cents] = price.split('.');

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
                </ul>
            </div>
            <div className="cart-container">
                <h5>Buy new:</h5>
                <span className="product-price-dollar">$</span>
                <span className="product-price-show">{dollars}</span>
                <span className="product-price-cents">{cents}</span>
                <h4>No Returns</h4>
                <h4>Free Delivery</h4>
                <h5 className="stock">In Stock</h5>
                <select
                  className="cart-item-quantity"
                  value={quantity}
                  onChange={handleQtyChange}
                >
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
                <LoginModal onClose={() => setShowModal(false)} />
                )}          
            </div>
        </div>
        <div className="product-details-box">
            <div>
                <hr>
                </hr>
            </div>
            <div className="product-details">
                <h1>Product Details</h1>
                <p><span className="details-label">Dimensions:</span> {product.dimensions}</p>
                <p><span className="details-label">Category:</span> {product.category}</p>
                <p><span className="details-label">Brand:</span> {product.brand}</p>
                <p><span className="details-label">Customer Reviews:</span> (review placeholder)</p>
            </div>
        </div>
    </div>

  );

};

export default ProductShow;
