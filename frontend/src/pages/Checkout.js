import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Checkout() {
  const location = useLocation();
  const navigate = useNavigate();
  const product = location.state.product;

  const handleCheckout = () => {
    axios.post('http://localhost:5000/api/checkout')
      .then(response => {
        navigate('/payment-status', { state: { success: response.data.success } });
      })
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Checkout</h2>
      <p>{product.name}</p>
      <p>${product.price}</p>
      <button onClick={handleCheckout}>Proceed to Payment</button>
    </div>
  );
}

export default Checkout;
