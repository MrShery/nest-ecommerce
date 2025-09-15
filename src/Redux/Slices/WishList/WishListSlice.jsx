import { createSlice } from "@reduxjs/toolkit";

const WishListSlice = createSlice({
  name: "ADD_TO_WISHLIST",
  initialState: [],
  reducers: {
    addToWishList: (state, action) => {
      const itemIndex = state.findIndex(
        (elem) => elem.id === action.payload.id
      );
      if (itemIndex !== -1) state.splice(itemIndex, 1);
      else state.push(action.payload);
    },
  },
});

export const { addToWishList } = WishListSlice.actions;
export default WishListSlice.reducer;
