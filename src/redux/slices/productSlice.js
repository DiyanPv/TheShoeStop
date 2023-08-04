import { createSlice } from "@reduxjs/toolkit";
import shoes from "../../data/shoes.json"; // Import the "women" array from the data

const initialState = {
  selectedFilter: "",
  selectedSort: "",
  selectedCategory: "",
  products: [],
};

const counterSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    resetItems(state, action) {
      state.products = action.payload;
    },
    setColorFilter(state, action) {
      state.selectedFilter = action.payload;
      if (!state.products) {
        return;
      }
      state.products = [...state.products].filter(
        (item) => item.color === action.payload
      );
    },
    setPriceFilter(state, action) {
      const number = Number(action.payload);
      if (!state.selectedCategory) {
        return;
      }
      switch (action.payload) {
        case `30`:
          state.products = [...shoes[state.selectedCategory]].filter(
            (el) => el.price <= number
          );
          break;
        case `50`:
          state.products = [...shoes[state.selectedCategory]].filter(
            (el) => el.price <= number
          );
          break;
        case `99`:
          state.products = [...shoes[state.selectedCategory]].filter(
            (el) => el.price <= number
          );
          break;
        case `100`:
          state.products = [...shoes[state.selectedCategory]].filter(
            (el) => el.price >= number
          );
          break;

        default:
          return;
      }
    },
    setSort(state, action) {
      state.selectedSort = action.payload;
      const sort = action.payload.value;
      console.log(`sort=>`, sort);
      switch (sort) {
        case "ranking":
          if (state.selectedCategory) {
            const sortedProducts = [...state.products].sort(
              (a, b) => parseFloat(b.stars) - parseFloat(a.stars)
            );
            state.products = sortedProducts;
          }
          break;
        case "orders":
          if (state.selectedCategory) {
            state.products = [...state.products].sort(
              (a, b) => b.orders - a.orders
            );
          }
          break;
        case "priceAscending":
          if (state.selectedCategory) {
            state.products = [...state.products].sort(
              (a, b) => a.price - b.price
            );
          }
          break;
        case "priceDescending":
          if (state.selectedCategory) {
            state.products = [...state.products].sort(
              (a, b) => b.price - a.price
            );
          }
          break;
        default:
          break;
      }
    },
    setCategory(state, action) {
      state.selectedCategory = action.payload;
      const category = action.payload;
      console.log(`category=>`, category);
      state.products = shoes[category];
    },
  },
});

export const {
  setColorFilter,
  setSort,
  setCategory,
  setPriceFilter,
  resetItems,
} = counterSlice.actions;

export default counterSlice.reducer;
