import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchProduct, getProduct } from '../../store/product';
import { useLocation } from 'react-router-dom';


const ProductShow = () => {
  let dispatch = useDispatch();
  let { id } = useParams();
  let product = useSelector(getProduct(id));
  let location = useLocation()

  useEffect(() => {
    if (location.pathname.startsWith('/products/')) {
      dispatch(fetchProduct(id));
    }
  }, [dispatch, id, location.pathname]);

  if (!location.pathname.startsWith('/products/')) {
    return null;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <li>{product.brand}</li>
      <li>{product.name}</li>
      <li>{product.description}</li>
      <li>{product.dimensions}</li>
      <li>{product.category}</li>
      <li>{product.price}</li>
    </div>
  );
};

export default ProductShow;
