import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';
import ProductCard from '../components/ProductCard';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    
    <div className="container mt-4">
    <h1>Products</h1>
      <div className="row">
        {status === 'loading' ? (
          <p>Loading...</p>
        ) : (
          products.map((product) => (
            <div
              key={product.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex align-items-stretch"
            >
              <ProductCard product={product} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HomePage;
