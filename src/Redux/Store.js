import { configureStore } from "@reduxjs/toolkit";
import CartItemSlice from "./Slices/CartItemSlice";
import CategorySlice from "./Slices/CategoriesSlice/CategorySlice";
import productsSlice from "./Slices/Products/productsSlice";
import ActiveP_Slice from "./Slices/ActiveProductSlice/ActiveP_Slice";
import WishListSlice from "./Slices/WishList/WishListSlice";
import CompareSlice  from "./Slices/Compare/CompareSlice";
import TopSellingProSlice  from "./Slices/TopSellingProduct/TopSellingProSlice";
import TopRatedProSlice  from "./Slices/TopRated/TopRatedProSlice";
import RecentlyAddedProSlice from "./Slices/RecentlyAdded/RecentlyAddedProSlice";
import  TopTrendingProSlice  from "./Slices/TopTrending/TopTrandingProSlice";
import FilteredProductSlice from "./Slices/FilteredProduct/FilteredProductSlice"
import VendorsSlice from "./Slices/Vendors/VendorsSlice"
export const store = configureStore({
  reducer: {
    cartItem: CartItemSlice,
    categorySlice: CategorySlice,
    allProducts: productsSlice,
    activeProduct: ActiveP_Slice,
    WishList: WishListSlice,
    compareItem: CompareSlice,
    topSelling:TopSellingProSlice,
    topRated:TopRatedProSlice,
    recentlyAdded:RecentlyAddedProSlice,
    topTrending:TopTrendingProSlice,
    filteredProducts:FilteredProductSlice,
    allVendors:VendorsSlice
  },
});
export default store;
