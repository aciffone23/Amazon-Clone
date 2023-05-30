import './ProductListings.css'
import shoes from '../../imgs/shoes.png'
import sunglasses from '../../imgs/sunglasses.png'
import bags from '../../imgs/bags.png'
import books from '../../imgs/books.png'
import watch from '../../imgs/watch.png'
import games from '../../imgs/games.png'
import clothes from '../../imgs/clothes.png'
import electronics from '../../imgs/electronics.png'
import { Link } from 'react-router-dom';



function ProductListings () {
    return (
    <div class="product-listing">
        <Link to="/shoes" className="product-box">
            <h4>Shop Shoes</h4>
            <img src={shoes} alt="Shoes" />
        </Link>
        <Link to="/glasses" className="product-box">
            <h4>Shop Glasses</h4>
            <img src={sunglasses} alt="Sunglasses" />
        </Link>
        <Link to="/bags" className="product-box">
            <h4>Shop Bags</h4>
            <img src={bags} alt="Sunglasses" />
        </Link>
        <Link to="/electronics" className="product-box">
            <h4>Shop Electronics</h4>
            <img src={electronics} alt="Sunglasses" />
        </Link>
        <Link to="/books" className="product-box">
            <h4>Shop Books</h4>
            <img src={books} alt="Sunglasses" />
        </Link>
        <Link to="/watches" className="product-box">
            <h4>Shop Watches</h4>
            <img src={watch} alt="Sunglasses" />
        </Link>
        <Link to="/video_games" className="product-box">
            <h4>Shop Video Games</h4>
            <img src={games} alt="Sunglasses" />
        </Link>
        <Link to="/clothes" className="product-box">
            <h4>Shop Clothes</h4>
            <img src={clothes} alt="Sunglasses" />
        </Link>
    </div>
    )
}

export default ProductListings