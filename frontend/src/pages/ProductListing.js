import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function ProductListing() {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({ category: '', sortBy: '' });

  useEffect(() => {
    axios.get('http://localhost:5000/api/products', { params: filters })
      .then(response => setProducts(response.data))
      .catch(error => console.error(error));
  }, [filters]);

  const handleFilterChange = (e) => {
    setFilters(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <h2>Product Listing</h2>
      <div>
        <label>Category:</label>
        <select name="category" onChange={handleFilterChange}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
        </select>
        <label>Sort by:</label>
        <select name="sortBy" onChange={handleFilterChange}>
          <option value="">None</option>
          <option value="price">Price</option>
        </select>
      </div>
      <div>
        {products.map(product => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <h3>{product.name}</h3>
              <p>${product.price}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListing;
