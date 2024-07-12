import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeQuantity, removeFromCart, clearCart } from "../Store/cartSlice";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import "../CSS/cart.css";

//callback functions from the app page for the selected items in the products page
function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const navigate = useNavigate();
  const [orderType, setOrderType] = useState("pickup"); // State to manage order type
  const [orderReceived, setOrderReceived] = useState(false); // State to manage order received message
  const [showHelp, setShowHelp] = useState(false); // State to manage help modal visibility

  const handleQuantityChange = (id, newQuantity) => {
    dispatch(changeQuantity({ id, quantity: newQuantity }));
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckout = () => {
    setOrderReceived(true);
    setTimeout(() => {
      dispatch(clearCart());
      navigate("/");
    }, 2000); // Simulates order processing time
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleShowHelp = () => setShowHelp(true);
  const handleCloseHelp = () => setShowHelp(false);

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="cart-items">
        {/* Map for all items that will be added to the page */}
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <h3>{item.name}</h3>
              <p>R{item.price}</p>
              <div className="quantity-controls">
                <button
                  // changing the amount on button click to remove item by 1
                  // as well as grey out the button if they try to go below 1
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity - 1)
                  }
                  disabled={item.quantity <= 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  //Increase the amount of the item by 1 on button click
                  onClick={() =>
                    handleQuantityChange(item.id, item.quantity + 1)
                  }
                >
                  +
                </button>
              </div>
              <button
                className="remove-button"
                //remove selected item from the cart
                onClick={() => handleRemoveItem(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* delivery or collection option  */}
      <div className="order-type">
        <label>
          <input
            type="radio"
            value="pickup"
            checked={orderType === "pickup"}
            onChange={() => setOrderType("pickup")}
          />
          Pickup
        </label>
        <label>
          <input
            type="radio"
            value="delivery"
            checked={orderType === "delivery"}
            onChange={() => setOrderType("delivery")}
          />
          Delivery
        </label>
      </div>

      <div className="cart-total">
        {/* total price of all items as well as check out  */}
        <h3>Total: R{totalPrice.toFixed(2)}</h3>

        <button
          className="checkout-button"
          onClick={handleCheckout}
          //if the total is 0 then the button is disables
          disabled={totalPrice === 0}
        >
          Checkout
        </button>
        <button className="help-button" onClick={handleShowHelp}>
          Help
        </button>
      </div>
      {orderReceived && (
        <div className="order-received-message">
          <h3>Order received! Redirecting ...</h3>
        </div>
      )}
      {/* Help popup as modal  */}
      <Modal show={showHelp} onHide={handleCloseHelp}>
        <Modal.Header closeButton>
          <Modal.Title>Shipping Options</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            <strong>Pickup:</strong> You can pick up your order from our store
            at no additional cost.
          </p>
          <p>
            <strong>Delivery:</strong> We offer delivery within a 5 km radius
            for an additional charge of R20. Please ensure that your delivery
            address is within our delivery range.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseHelp}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default CartPage;
