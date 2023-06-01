import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link , useLocation } from 'react-router-dom';
import { fetchProducts, getProducts } from '../../store/product';



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

    console.log(products)
    return (
        <ul>
            {products.map((product) => 
                <li>{product.name}</li>
            )}
            <Link to=''/>
        </ul>
    )
}

export default ProductListings