import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addCartItem(state, action) {},
    removeCartItem(state, action) {},
  },
});

export const { addCartItem, removeCartItem } = counterSlice.actions;

export default cartSlice.reducer;
