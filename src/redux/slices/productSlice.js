import { createSlice } from '@reduxjs/toolkit'

const initialState = { 
    selectedFilter: "",
    selectedSort: ""
}

const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    setFilter(state, action) {
        state.selectedFilter = action.payload
    },
    setSort(state, action) {
        state.selectedSort = action.payload;
    }
  },
})

export const { setFilter, setSort } = counterSlice.actions;

export default counterSlice.reducer;