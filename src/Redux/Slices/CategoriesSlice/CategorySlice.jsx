import { createSlice } from "@reduxjs/toolkit";

const CategorySlice = createSlice({
  name: "Categoreis",
  initialState: [[], []],
  reducers: {
    createCategory: (state, action) => {
      let categories = action.payload
        .filter((elem) => "category" in elem)
        .map((elem) => elem.category);
      // ---------------Rem Duplicates-----------------------
      categories = categories.filter(
        (elem, index) => categories.indexOf(elem) == index
      );

      const cataWithProducts = state[0].map((elem) =>
        action.payload.filter((item) => item.category == elem && elem)
      );
      return [categories, cataWithProducts];
    },
  },
});
export const { createCategory } = CategorySlice.actions;
export default CategorySlice.reducer;
