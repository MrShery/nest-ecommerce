import { createSlice } from "@reduxjs/toolkit";

export const CompareSlice = createSlice({
  name: "ADD_TO_CompareList",
  initialState: [],
  reducers: {
    addToCompare: (state, action) => {
      let productID = action.payload.newProduct.id;
      let exist = state.some((item) => item.id === productID);
      if (!exist) state.push(action.payload.newProduct);
    },
    removeFromCompare: (state, action) => {
      let productID = action.payload.id;
      const newstate = state.filter((elem) => elem.id !== productID);
      return state=newstate
    },
  },
});

export const { addToCompare, removeFromCompare } = CompareSlice.actions;
export default CompareSlice.reducer;
