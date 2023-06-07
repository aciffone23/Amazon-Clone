import './SplashListings.css'
import shoes from '../../imgs/splashImgs/shoes.png'
import sunglasses from '../../imgs/splashImgs/sunglasses.png'
import bags from '../../imgs/splashImgs/bags.png'
import books from '../../imgs/splashImgs/books.png'
import watch from '../../imgs/splashImgs/watch.png'
import games from '../../imgs/splashImgs/games.png'
import clothes from '../../imgs/splashImgs/clothes.png'
import electronics from '../../imgs/splashImgs/electronics.png'
import { Link } from 'react-router-dom';
import bgImage from '../../imgs/splashImgs/canalgaming.jpg'



function SplashListings () {
    
    return (
        <div className="splash-container">
            <div className="splash-background">
                <img alt="background" src={bgImage}>
                </img>
            </div>
            <div className="splash-overlay">
                <div className="splash-listing">
                    <Link to="/products/category/shoes" className="splash-box">
                        <h4>Shop Shoes</h4>
                        <img src={shoes} alt="Shoes" />
                    </Link>
                    <Link to="/products/category/glasses" className="splash-box">
                        <h4>Shop Glasses</h4>
                        <img src={sunglasses} alt="Sunglasses" />
                    </Link>
                    <Link to="/products/category/bags" className="splash-box">
                        <h4>Shop Bags</h4>
                        <img src={bags} alt="bags" />
                    </Link>
                    <Link to="/products/category/electronics" className="splash-box">
                        <h4>Shop Electronics</h4>
                        <img src={electronics} alt="electronics" />
                    </Link>
                    <Link to="/products/category/books" className="splash-box">
                        <h4>Shop Books</h4>
                        <img src={books} alt="books" />
                    </Link>
                    <Link to="/products/category/watches" className="splash-box">
                        <h4>Shop Watches</h4>
                        <img src={watch} alt="watches" />
                    </Link>
                    <Link to="/products/category/games" className="splash-box">
                        <h4>Shop Games</h4>
                        <img src={games} alt="games" />
                    </Link>
                    <Link to="/products/category/clothes" className="splash-box">
                        <h4>Shop Clothes</h4>
                        <img src={clothes} alt="clothes" />
                    </Link>
                </div>
            </div>
            
        </div>
    )
}

export default SplashListings