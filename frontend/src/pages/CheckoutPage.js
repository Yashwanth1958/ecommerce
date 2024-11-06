import React from 'react';

const CheckoutPage = () => {
  return (
    <div>
      <h1>Checkout</h1>
      <form>
        <input type="text" placeholder="Name" required />
        <input type="text" placeholder="Address" required />
        <button type="submit">Proceed to Payment</button>
      </form>
    </div>
  );
};

export default CheckoutPage;
