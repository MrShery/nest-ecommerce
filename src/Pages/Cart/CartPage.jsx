import React from "react";
import Cart_P_item from "../../Components/Cart_P_item";
import TableHead from "../../Components/TableHead";
import PageSummary from "../../Components/PageSummary";
import { useSelector } from "react-redux";
import PaymentCard from "../../Components/PaymentCard";
import Cart_and_wishList_item from "../../Components/Cart_and_wishList_item";

const CartPage = () => {
  const cartData = useSelector((state) => state.cartItem);
  const totalCartItems = cartData.item.length;
  return (
    <div className="w-full h-fit ">
      {/* =============================Page Summary Headings Etc==================================       */}
      <PageSummary totalItems={totalCartItems} title={"Your Cart List"} />
      {totalCartItems === 0 ? (
        <div className="w-full border text-center text-gray-600 shadow-sm py-3 text-xl font-semibold">
          Cart is Empty
        </div>
      ) : (
        <div className="flex w-full gap-10 sm:gap-16 flex-wrap justify-center">
          <div className=" w-[875px] flex flex-wrap">
            {/* =============================Table Headings==================================       */}
            <TableHead
              headings={[
                "Producst",
                "Unit Price",
                "Quantity",
                "Subtotal",
                "Remove",
              ]}
            />

            {cartData.item.map((item, index) => (
              // <Cart_P_item key={item.id} item={item} width="875px" />
              <Cart_and_wishList_item key={item.id} item={item} whichItem="cartItem"/>
            ))}
          </div>
          <PaymentCard />
        </div>
      )}
    </div>
  );
};

export default CartPage;
