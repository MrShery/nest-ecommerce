import React, { useMemo } from "react";
import WishItem from "../../Components/WishItem";
import { useSelector } from "react-redux";
import TableHead from "../../Components/TableHead";
import PageSummary from "../../Components/PageSummary";
import Cart_and_wishList_item from "../../Components/Cart_and_wishList_item";

const WishList = () => {
  // =====================Getting Wish List Data From Redux===================
  const wishListItems = useSelector((state) => state.WishList);
  // =====================Calculating Total items in Wish List===================
  const totalWishListItems = useMemo(() => {
    let items = wishListItems.length;

    return items;
  }, [wishListItems]);

  return (
    <div className="w-full h-fit flex flex-col  items-center ">
{/* =============================Page Summary Headings Etc==================================       */}
      <PageSummary totalItems={totalWishListItems} title={"Your Wish List"} />
{/* =============================Table Headings==================================       */}
    <div>
      
    </div>
      <TableHead
        headings={["Producsts", "Price", "Stock Status", "Action", "Remove"]}
        whichItem="wishItem"
      />

      <div className="w-[98%]  py-3 px-2 sm:px-6">
        {/* ===========================When Wish List is Empty================================= */}
        {wishListItems.length === 0 && (
          <div className="w-full border text-center text-gray-600 shadow-sm text-xl py-3 text-[4vw] xs:text-[3vw] sm:text-[18px] font-semibold">
            Wish List is Empty
          </div>
        )}
        {/* ========================Rendering Wish List Items ================================= */}
        {wishListItems.map((item, index) => (
              <Cart_and_wishList_item key={index} item={item} whichItem="wishItem"/>
        ))}
      </div>
    </div>
  );
};

export default WishList;
