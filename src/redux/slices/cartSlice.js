import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartitems: [],
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {
      const itemToAdd = action.payload;
      const existingItem = state.cartitems.find(
        (item) => item.name === itemToAdd.name
      );

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartitems.push({ ...itemToAdd, amount: 1 });
      }

      state.totalAmount = state.cartitems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
    },
    removeCartItem(state, action) {
      const itemToRemove = action.payload;
      const existingItem = state.cartitems.find(
        (item) => item.name === itemToRemove.name
      );

      if (existingItem) {
        if (existingItem.amount > 1) {
          existingItem.amount -= 1;
        } else {
          state.cartitems = state.cartitems.filter(
            (item) => item.name !== itemToRemove.name
          );
        }
      }

      state.totalAmount = state.cartitems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
    },
    addItemToCart(state, action) {
      const { name, price } = action.payload;
      const existingItem = state.cartitems.find((item) => item.name === name);

      if (existingItem) {
        existingItem.amount += 1;
      } else {
        state.cartitems.push({ name, price, amount: 1 });
      }

      state.totalAmount = state.cartitems.reduce(
        (total, item) => total + item.price * item.amount,
        0
      );
    },
    clearCart(state, action) {
      state.cartitems = [];
     
    },
  },
});

export const { addCartItem, removeCartItem, addItemToCart, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;
