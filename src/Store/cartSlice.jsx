import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    //adding to the cart
    addToCart: (state, action) => {
      //check the id of the current items in the map, checks if it matches the id of the pizza you selected
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );

      //if the item is found and is already in cart increase amount by 1
      if (existingItem) {
        existingItem.quantity += 1;

        //if not found add it to the cart and set amount to 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
      }
    },
    //if the item matches the id then do the action
    removeFromCart: (state, action) => {
      state.cartItems = state.cartItems.filter(
        (item) => item.id !== action.payload
      );
    },

    //if the item id matches, then do the action asigned to the button,
    changeQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.cartItems.find((item) => item.id === id);
      if (item) {
        item.quantity = quantity;
      }
    },
    //itial state of the cart
    clearCart: (state) => {
      state.cartItems = [];
    },
  },
});

export const { addToCart, removeFromCart, changeQuantity, clearCart } =
  cartSlice.actions;
export default cartSlice.reducer;
