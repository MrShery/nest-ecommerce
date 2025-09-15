import { createSlice } from "@reduxjs/toolkit";

const FilteredProductSlice = createSlice({
  name: "FilteredProducts",
  initialState: [],
  reducers: {
    filterProducts: (state, action) => {
      let newProductsList = action.payload.products;
      return newProductsList
    },
  },
});
export const { filterProducts } = FilteredProductSlice.actions;
export default FilteredProductSlice.reducer;
