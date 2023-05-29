import { NavLink } from 'react-router-dom';

function SecondNavBar () {

    return (
        <nav className="second-navbar" id="nav-main">
            <ul className="category-list">
            <li>
                <NavLink to="/shoes">Shoes</NavLink>
            </li>
            <li>
                <NavLink to="/glasses">Glasses</NavLink>
            </li>
            <li>
                <NavLink to="/bags">Bags</NavLink>
            </li>
            <li>
                <NavLink to="/electronics">Electronics</NavLink>
            </li>
            <li>
                <NavLink to="/books">Books</NavLink>
            </li>
            <li>
                <NavLink to="/watches">Watches</NavLink>
            </li>
            <li>
                <NavLink to="/video_games">Video Games</NavLink>
            </li>
            <li>
                <NavLink to="/clothes">Clothes</NavLink>
            </li>
            </ul>
        </nav>
    )
}

export default SecondNavBar