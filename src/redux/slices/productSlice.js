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
    setFilter(state, action) {
      state.selectedFilter = action.payload;
      console.log(`filter=>`, action.payload);
    },
    setSort(state, action) {
      state.selectedSort = action.payload;
      const sort = action.payload.value;
      console.log(`sort=>`, sort);
      switch (sort) {
        case "ranking":
          if (state.selectedCategory) {
            console.log(shoes[state.selectedCategory]);
            const sortedProducts = [...shoes[state.selectedCategory]].sort(
              (a, b) => parseFloat(b.stars) - parseFloat(a.stars)
            );
            state.products = sortedProducts;
          }
          break;
        case "orders":
          if (state.selectedCategory) {
            state.products = [...shoes[state.selectedCategory]].sort(
              (a, b) => b.orders - a.orders
            );
          }
          break;
        case "priceAscending":
          if (state.selectedCategory) {
            state.products = [...shoes[state.selectedCategory]].sort(
              (a, b) => a.price - b.price
            );
          }
          break;
        case "priceDescending":
          if (state.selectedCategory) {
            state.products = [...shoes[state.selectedCategory]].sort(
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

export const { setFilter, setSort, setCategory } = counterSlice.actions;

export default counterSlice.reducer;
