// import { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link , useLocation, useParams } from 'react-router-dom';
// import { fetchProducts, getProducts } from '../../store/product';
// import './CategoryListings.css'
// import Shoes from '../../imgs/productImgs/Shoes.png'
// import Glasses from '../../imgs/productImgs/Glasses.png'
// import Bags from '../../imgs/productImgs/Bags.png'
// import Books from '../../imgs/productImgs/Books.png'
// import Watches from '../../imgs/productImgs/Watches.png'
// import VideoGames from '../../imgs/productImgs/VideoGames.png'
// import Clothes from '../../imgs/productImgs/Clothes.png'
// import Electronics from '../../imgs/productImgs/Electronics.png'



// const CategoryListings = () => {
//     let dispatch = useDispatch()
//     let products = useSelector(getProducts)
//     let location = useLocation()
//     let {category} = useParams()


//     useEffect(() => {
//         // Dispatch an action to fetch the products if they are not already loaded
    
//         // Assuming you have an action named fetchProducts in your productReducer
//         // that fetches all products from the server and updates the state
//         dispatch(fetchProducts());
//         if (location.pathname !== `/products/${category}`) {
//             return null
//         }
//       }, [dispatch]);
//       console.log('Products:', products);
//         console.log('Category:', category);
//       // Filter the products based on the category
//       const filteredProducts = Object.values(products).filter(
//         product => product.category.toLowerCase() === category.toLowerCase()
//       ); 
//         console.log(filteredProducts)
//         console.log('Filtered Products:', filteredProducts);



//     // const getCategoryImage = (category) => {
//     //     switch (category) {
//     //       case 'Shoes':
//     //         return Shoes;
//     //       case 'Glasses':
//     //         return Glasses;
//     //       case 'Bags':
//     //         return Bags;
//     //       case 'Books':
//     //         return Books;
//     //       case 'Watches':
//     //         return Watches;
//     //       case 'Video Games':
//     //         return VideoGames;
//     //       case 'Clothes':
//     //         return Clothes;
//     //       case 'Electronics':
//     //         return Electronics;
//     //       default:
//     //         return null;
//     //     }
//     //   };
    

//     // return (
//     // <div className="product-listings">
//     // {products.map((product) => {
//     //   const price = product.price.toFixed(2); 
//     //   const [dollars, cents] = price.split('.'); 
      
//       return (
//         <div className="product-listings">
//           {filteredProducts.map(product => (
//             // Render the filtered products here
//             <div key={product.id}>
//               <span>{product.name}</span>
//               {/* Render other product details */}
//             </div>
//           ))}
//         </div>
//       );
// }

// export default CategoryListings

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { fetchProducts, getProducts } from '../../store/product';
import './CategoryListings.css';

const CategoryListings = () => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchProducts(category));
  }, [dispatch, category]);

  return (
    <div className="product-listings">
      {Object.values(products).map((product) => (
        <Link to={`/products/${product.id}`} key={product.id} className="product-box">
          {/* Render product details */}
        </Link>
      ))}
    </div>
  );
};

export default CategoryListings;