import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
  return (
    <div>
      <h1>Welcome to Our eCommerce Store</h1>
      <Link to="/products">Browse Products</Link>
      <img src="https://bobbyhadz.com/images/blog/react-prevent-multiple-button-clicks/thumbnail.webp.1Yn781JF4tspKbsRPAsVRwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.1&pid=3.1&rm=2" alt="horse"></img>
    </div>
  );
}

export default Homepage;
