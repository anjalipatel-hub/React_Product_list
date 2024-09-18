import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Header = () => {
  const cartItemsCount = useSelector((state) => state.cart.cartItems.reduce((acc, item) => acc + item.quantity, 0));

  return (
    <header className="bg-primary text-white p-3">
      <div className="container">
        <div className="d-flex justify-content-between align-items-center">
          <h1 className="h3 mb-0">
            <Link to="/" className="text-white text-decoration-none">eCommerce App</Link>
          </h1>
          <nav>
            <Link to="/" className="text-white me-3 hover-underline">Home</Link>
            <Link to="/checkout" className="text-white position-relative">
              Cart
              {cartItemsCount > 0 && (
                <span className="badge bg-secondary rounded-pill position-absolute top-0 start-100 translate-middle">
                  {cartItemsCount}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
