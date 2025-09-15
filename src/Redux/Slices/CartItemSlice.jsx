import { createSlice } from "@reduxjs/toolkit";
import DiscountCalculator from "../../Utils/DiscountCalculator";

export const CartItemSlice = createSlice({
  name: "Cart Items",
  initialState: {
    item: [],
    hashMap: {},
    prices: {
      subTotal: 0,
      tax: 0,
      totalPrice: 0,
    },
  },
  reducers: {
    addToCart: (state, action) => {
      let productID = action.payload.id;
      let newPrice = DiscountCalculator(
        action.payload.productPrice,
        action.payload.discount
      );
      if (productID in state.hashMap) {
        state.hashMap[productID] += 1;
        state.prices.subTotal += newPrice;
        state.prices.totalPrice = state.prices.subTotal + state.prices.tax;
      } else {
        state.hashMap[productID] = 1;
        state.item.push(action.payload);
        state.prices.subTotal += newPrice;
        state.prices.totalPrice = state.prices.subTotal + state.prices.tax;
      }
    },
    updateQuantity: (state, action) => {
      let productID = action.payload.id;
      let newPrice = DiscountCalculator(
        action.payload.productPrice,
        action.payload.discount
      );
      let newQuantity = action.payload.quantity;
      if (productID in state.hashMap) {
        let oldQuantity = state.hashMap[productID];
        let priceDifference = (newQuantity - oldQuantity) * newPrice;
        state.prices.subTotal += priceDifference;
        state.hashMap[productID] = action.payload.quantity;
        state.prices.totalPrice = state.prices.subTotal + state.prices.tax;
      }
    },
    removeFromCart: (state, action) => {
      let productID = action.payload.id;
      let newPrice = DiscountCalculator(
        action.payload.productPrice,
        action.payload.discount
      );
      if (!state.hashMap[productID]) return state;
      let deductedPrice = state.hashMap[productID] * newPrice;
      state.item = state.item.filter((item) => item.id != productID);

      state.prices.subTotal -= deductedPrice;
      state.prices.totalPrice = state.prices.subTotal + state.prices.tax;

      delete state.hashMap[productID];
    },
  },
});

export const { addToCart, updateQuantity, removeFromCart } =
  CartItemSlice.actions;
export default CartItemSlice.reducer;
