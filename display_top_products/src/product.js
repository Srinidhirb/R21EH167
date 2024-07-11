import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './product.css';

const Product = () => {
  const [products, setProducts] = useState([]);
  const [topN, setTopN] = useState(5);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const getTopNProducts = () => {
    return products
      .sort((a, b) => b.rating.rate - a.rating.rate)
      .slice(0, topN);
  };

  return (
    <div className="Product">
      <h6>Top {topN} Products</h6>
      <label>
        Number of products to display:
        <input
          type="number"
          value={topN}
          onChange={(e) => setTopN(Number(e.target.value))}
        />
      </label>
      <div className="product-list">
        {getTopNProducts().map((product) => (
          <div key={product.id} className="product">
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>Rating: {product.rating.rate}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
