import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/slice/cartSlice';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Toast, ToastContainer } from 'react-bootstrap';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showToast, setShowToast] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
      navigate('/checkout'); // Redirect to checkout page after showing toast
    }, 3000); // Hide toast after 3 seconds
  };

  return (
    <div className="card mb-4 shadow-sm" style={{ width: '100%' }}>
      <img src={product.thumbnail} className="card-img-top" alt={product.title} />
      <div className="card-body">
        <h5 className="card-title">{product.title}</h5>
        <p className="card-text text-muted">{product.price} USD</p>
        <button
          className="btn btn-primary"
          onClick={handleAddToCart}
        >
          Add to Cart
        </button>
      </div>

      {/* Toast Notification */}
      <ToastContainer position="top-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)}>
          <Toast.Body>Added to cart successfully!</Toast.Body>
        </Toast>
      </ToastContainer>
    </div>
  );
};

export default ProductCard;
