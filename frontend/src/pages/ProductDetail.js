import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error(error));

    axios.get(`http://localhost:5000/api/products/${id}/reviews`)
      .then(response => setReviews(response.data))
      .catch(error => console.error(error));
  }, [id]);

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <p>{product.description}</p>
      <h3>Reviews:</h3>
      {reviews.map((review, index) => (
        <div key={index}>
          <p><strong>{review.user}</strong>: {review.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default ProductDetail;
