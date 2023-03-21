import React, { useState } from "react";

function HorizantalScrollProductList() {
  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ]);

  const [cartItems, setCartItems] = useState([]);

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

  const increaseQuantity = (id) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((item) => item.id === id);

    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
  };

  const decreaseQuantity = (id) => {
    const updatedCart = [...cartItems];
    const index = updatedCart.findIndex((item) => item.id === id);

    if (updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
      setCartItems(updatedCart);
    } else {
      removeItem(id);
    }
  };

  const removeItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
  };

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((total, item) => {
      return total + item.quantity;
    }, 0);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}{" "}
            <button onClick={() => addToCart(product)}>Add to cart</button>
          </li>
        ))}
      </ul>
      <button>
        Cart ({getCartItemCount()})
      </button>
      <h1>Cart</h1>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} - Quantity: {item.quantity}{" "}
            <button onClick={() => increaseQuantity(item.id)}>+</button>
            <button onClick={() => decreaseQuantity(item.id)}>-</button>
            <button onClick={() => removeItem(item.id)}>Remove</button>
          </li>
        ))}
      </ul>
      <h2>Total Price: ${getTotalPrice()}</h2>
    </div>
  );
}

export default HorizantalScrollProductList;
