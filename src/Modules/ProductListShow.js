import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ProductListShow() {
  const [products, setProducts] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        const data = response.data.slice(0, 12).map(product => ({
          id: product.id,
          image: product.url,
          title: product.title,
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
          price: Math.floor(Math.random() * 100) + 1,
          discount: Math.floor(Math.random() * 10) + 1,
        }));
        setProducts(data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  const addToCart = (product) => {
    const index = cartItems.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      const updatedCart = [...cartItems];
      updatedCart[index].quantity += 1;
      setCartItems(updatedCart);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div>
      <button>
        Cart ({getCartItemCount()})
      </button>
      {/* <h1>Product List</h1> */}
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {products.map(product => (
          <div className="col mb-4" key={product.id}>
            <div className="card h-100">
              <img src={product.image} className="card-img-top img-fluid" alt={product.title}  />
              <div className="card-body">
                <h5 className="card-title">{product.title}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">Price: ${product.price}</p>
                {product.discount && (
                  <p className="card-text">Discount: {product.discount}%</p>
                )}
                <button className="btn btn-primary" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductListShow;
