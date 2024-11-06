import React from 'react';
import { useLocation } from 'react-router-dom';

function PaymentStatus() {
  const location = useLocation();
  const isSuccess = location.state.success;

  return (
    <div>
      <h2>Payment {isSuccess ? 'Successful' : 'Failed'}</h2>
      {isSuccess ? <p>Your order has been placed!</p> : <p>Payment failed. Please try again.</p>}
    </div>
  );
}

export default PaymentStatus;
