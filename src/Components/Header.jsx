import React, { useMemo, useState, useEffect } from "react";
import CompIcon from "../assets/icon-compare.svg";
import WishIcon from "../assets/icon-heart.svg";
import CartIcon from "../assets/icon-cart.svg";
import UserIcon from "../assets/icon-user.svg";
import useCselector from "../Hooks/useCselector";
import { useNavigate } from "react-router";
import { FiMenu } from "react-icons/fi";
import Logo from "../Components/Logo";
import SearchBar from "./SearchBar";
import CallToAction from "./CallToAction";
import AccountDropDown from "./AccountDropDown";
import CartDropDown from "./CartDropDown";
import NavBarResponsive from "./NavBarResponsive";

// <----------------------------------------Header------------------------------------------------>
const Header = () => {
  // ----------------------------------------Getting Cart Items From Store------------------------------------------------
  const cartItems = useCselector("cartItem");
  const nevigate = useNavigate();
  const [navOpen, setNavOpen] = useState(false);
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  // ----------------------------------------Calculating Totals items of Cart------------------------------------------------
  const totalCartItems = useMemo(() => {
    let items = 0;
    cartItems.item.forEach((elem, index) => {
      items += cartItems.hashMap[elem.id];
    });
    return items;
  }, [cartItems]);
  // ----------------------------------------Calculating Totals items of Cart End------------------------------------------------
  // ----------------------------------------Getting WishList Items From Store------------------------------------------------
  const wishListItems = useCselector("WishList");
  // ----------------------------------------Calculating Totals items of WishList start------------------------------------------------
  const totalWishListItems = useMemo(() => {
    let items = wishListItems.length;

    return items;
  }, [wishListItems]);
  // ----------------------------------------Calculating Totals items of WishList End------------------------------------------------
  // ----------------------------------------Getting Compare  Items From Store------------------------------------------------
  const compareItems = useCselector("compareItem");
  // ----------------------------------------Calculating Totals items of Compare start------------------------------------------------
  const totalCompareItems = useMemo(() => {
    let items = compareItems.length;

    return items;
  }, [compareItems]);
  // ----------------------------------------Calculating Totals items of Compare End------------------------------------------------
  const handleNevigation = (path) => {
    nevigate(path);
  };
  useEffect(() => {
    const handleResize = () => {
      setWindowSize(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header
      className="flex  items-center w-full py-7 px-2 md:py-4 sm:py-4 md:px-16 sm:px-4  justify-between"
    >
      {navOpen && <NavBarResponsive setNavOpen={setNavOpen} />}
      {windowSize <= 990 && <FiMenu onClick={()=> setNavOpen(true)} className="text-3xl me-3 ms-2 cursor-pointer" />}
      {/* ----------------------------------------Logo------------------------------------------------ */}
      <Logo className={` ${windowSize <= 990 ? "w-36" : "w-40"}`} />
      <div
        className={`flex items-center gap-2  ${windowSize <= 990 && " w-full"}`}
      >
        {/* ----------------------------------------Search Bar------------------------------------------------ */}
        <SearchBar />
{/* _________________________________________Call to Actions_____________________________________________________ */}
        <div
          className=" flex sm:gap-1 sm:ms-auto  lg:gap-5 ms-auto "
        >
          {/* ----------------------------------------Compare Icon------------------------------------------------ */}
          <CallToAction
            icon={
              <img
                src={CompIcon}
                alt="icon"
                className="w- xs:w-3 sm:w-4 md:w-6 lg:w-7"
              />
            }
            title={windowSize >= 990 && "Compare"}
            count={totalCompareItems}
            dropDown={""}
            path={"/comparePage"}
          />
          {/* ----------------------------------------Add To Wish List------------------------------------------------ */}
          <CallToAction
            icon={
              <img
                src={WishIcon}
                alt="icon"
                className="w- xs:w-3 sm:w-4 md:w-6 lg:w-7"
              />
            }
            title={windowSize >= 990 && "Wishlist"}
            count={totalWishListItems}
            dropDown={""}
            path={"Wish List"}
          />
          {/* ----------------------------------------Cart------------------------------------------------ */}
          <CallToAction
            icon={
              <img
                src={CartIcon}
                alt="icon"
                className="w- xs:w-3 sm:w-4 md:w-6 lg:w-7"
              />
            }
            title={windowSize >= 990 && "Cart"}
            count={totalCartItems}
            dropDown={<CartDropDown />}
            path={"/Cart Page"}
          />
          {/* ----------------------------------------User Account------------------------------------------------ */}
          {windowSize >= 990 && (
            <CallToAction
              icon={
                <img
                  src={UserIcon}
                  alt="icon"
                  className="w-2 lg:w-7"
                />
              }
              title={"Account"}
              count={""}
              dropDown={<AccountDropDown />}
            />
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;
