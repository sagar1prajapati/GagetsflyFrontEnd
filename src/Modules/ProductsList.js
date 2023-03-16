import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get('https://fakeapi.com/products');
      setProducts(result.data);
    };

    fetchData();
  }, []);

  const addToCart = (productId) => {
    // Add the selected product to cart
  };

  const addToWishlist = (productId) => {
    // Add the selected product to wishlist
  };

  return (
    <div className="product-list">
      {products.map((product) => (
        <div className="product" key={product.id}>
          <img src={product.image} alt={product.title} />
          <h2>{product.title}</h2>
          <p>{product.description}</p>
          <div className="price">
            <span>${product.price}</span>
            {product.discount > 0 && (
              <span className="discount">{product.discount}% off</span>
            )}
          </div>
          <button onClick={() => addToCart(product.id)}>Add to Cart</button>
          <button onClick={() => addToWishlist(product.id)}>Add to Wishlist</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
