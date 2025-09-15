import React, { useEffect } from "react";
import Home from "./Home";
import ProductDetailsPage from "./Components/ProductDetailsPage";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  BrowserRouter,
} from "react-router";
import Header from "./Components/Header";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import ShopPage from "./Pages/Shop/ShopPage";
import ComparePage from "./Pages/Compare/ComparePage";
import { createCategory } from "./Redux/Slices/CategoriesSlice/CategorySlice";
import { useDispatch, useSelector } from "react-redux";
import StorePage from "./Pages/Store/StorePage";
import StoreDetailPage from "./Pages/Store/StoreDetailPage";
import CartPage from "./Pages/Cart/CartPage";
import BreadCrum from "./Components/BreadCrum";
import WishList from "./Pages/WishList/WishList";
import { ToastContainer} from 'react-toastify';

function App() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.allProducts);
  useEffect(() => {
    dispatch(createCategory(products));
  }, []);
  return (
    <BrowserRouter>
      <Header />
      <NavBar />
      <BreadCrum/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ShopPage />} />
        <Route path="/products/:productID" element={<ProductDetailsPage />} />
        <Route path="/comparePage" element={<ComparePage />} />
        <Route path="/Shop Page" element={<ShopPage />} />
        <Route path="/stores" element={<StorePage />} />
        <Route path="/stores/:vendorName" element={<StoreDetailPage />} />
        <Route path="/Cart Page" element={<CartPage />} />
        <Route path="/Wish List" element={<WishList />} />
      </Routes>
      <ToastContainer position="bottom-right" />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
