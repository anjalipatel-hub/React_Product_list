import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart, clearCart } from '../redux/slice/cartSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const Checkout = () => {
  const { cartItems, totalPrice } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Checkout</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul className="list-group mb-4">
            {cartItems.map((item) => (
              <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <h5 className="mb-1">{item.title}</h5>
                  <p className="mb-1">Quantity: {item.quantity}</p>
                  <p className="mb-1">Price: ${item.price}</p>
                </div>
                <button
                  className="btn btn-danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <h3 className="mb-4">Total Price: ${totalPrice.toFixed(2)}</h3>
          <button
            className="btn btn-warning"
            onClick={handleClearCart}
          >
            Clear Cart
          </button>
          <button
            className="btn btn-success ms-2"
            onClick={() => alert('Proceeding to payment...')}
          >
            Proceed to Payment
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
