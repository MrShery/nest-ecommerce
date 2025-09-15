import React, { useMemo } from "react";
import WishItem from "../../Components/WishItem";
import { useSelector } from "react-redux";
import TableHead from "../../Components/TableHead";
import PageSummary from "../../Components/PageSummary";

const CartAndWishList_item = () => {
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
      />

      <div className="w-[98%]  py-3 px-2 sm:px-6">
        {/* ===========================When Wish List is Empty================================= */}
        {wishListItems.length === 0 && (
          <div className="w-full text-center text-gray-600 py-3 text-xl font-semibold">
            Wish List is Empty
          </div>
        )}
        {/* ========================Rendering Wish List Items ================================= */}
        {wishListItems.map((item, index) => (
          <WishItem key={index + item.productTitle+item} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

export default CartAndWishList_item;
