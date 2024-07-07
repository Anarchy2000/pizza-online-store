import React from "react";
import "../CSS/cart.css";

function CartPage({ cartItems, setCartItems }) {
  const handleQuantityChange = (id, newQuantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>${item.price}</p>
              <div className="quantity-controls">
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="cart-total">
        <h3>Total: ${totalPrice.toFixed(2)}</h3>
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
}

export default CartPage;
