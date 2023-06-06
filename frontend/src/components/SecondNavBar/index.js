import { NavLink } from 'react-router-dom';
import './SecondNavBar.css'

function SecondNavBar () {

    return (
        <nav className="second-navbar" id="nav-main">
            <ul className="category-list">
            <li>
                <NavLink to="/products">All</NavLink>
            </li>   
            <li>
                <NavLink to="/products/category/shoes">Shoes</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/glasses">Glasses</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/bags">Bags</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/electronics">Electronics</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/books">Books</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/watches">Watches</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/games">Games</NavLink>
            </li>
            <li>
                <NavLink to="/products/category/clothes">Clothes</NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default SecondNavBar