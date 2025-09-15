import React, { useState } from "react";
import { useDispatch } from "react-redux";
import QuantityCounter from "./QuantityCounter";
import AddToCartBtn from "./AddToCartBtn";
import { addToCart, updateQuantity } from "../Redux/Slices/CartItemSlice";
import { IoCartOutline, IoHeartOutline } from "react-icons/io5";
import BuyBtn from "./BuyBtn";
import ProductAction from "./ProductAction";
import { TbArrowsShuffle } from "react-icons/tb";
import ProductAvailbility from "./ProductAvailbility";
import ProductWeight from "./ProductWeight";
import { addToWishList } from "../Redux/Slices/WishList/WishListSlice";
import useCselector from "../Hooks/useCselector";

const ProductDetailsForm = ({ popUp, item }) => {
  // ======================Getting All Products From store===========================
  const products = useCselector("allProducts");
  // =====================Form Data==================================
  const [formData, setFormData] = useState({
    countVal: 1,
    weight: "2KG",
    boxes: "3 Boxes",
  });
  // ================================Wieghts And Boxes ==============================
  const weights = ["3KG", "4KG", "5KG"];
  const boxes = ["2 Boxes", "5 Boxes"];
  // ================================Wieghts And Boxes End ==============================
  // =====================Product Availibility================================
  const [productAvailbility, setProductAvailibility] = useState(null);
  // =====================Dispatch Hook================================
  const dispatch = useDispatch();
  // =====================Handle on Change Function For Counter Component to update Quentity when adding item in cart================================
  const handleOnChange = (val) => {
    if (formData.countVal <= productAvailbility) {
      dispatch(
        updateQuantity({
          id: item.id,
          quantity: val,
          productPrice: item.productPrice,
          discount: item.discount,
        })
      );
    } else alert(`There are ${productAvailbility} products available `);
  };
  // ==============================Add To WishList Function=========================================
  const addToCompare = () => dispatch(addToWishlist({ newProduct: item }));
  // ==============================Add To Compare Function=========================================
  const addToWishlist = () => dispatch(addToWishList(products[item.id]));
  // ===========================================Classes For Styling================================
  let actionBtnIconStyling =
    "text-[19px]  myTransition  text-gray-400 group-hover:text-white  ";
  let actionBtnBgStyling =
    " sm:w-[50px] sm:h-[50px] rounded border-gray-400 border border-e-2 bg-white px-[14px] py-[15.0px] cursor-pointer  hover:-translate-y-1 hover:bg-[#3BB77E] myTransition2 ";
  let addToCartbtnStyling =
    " items-center sm:gap-[14px] sm:px-6 px-[4px] py-[7px] sm:py-[11px] md:py-[10.2px] bg-[#3BB77E] hover:bg-[#218255] text-[10px] sm:text-normal text-white  w-fit hover:translate-y-0";
  // ===========================================Classes For Styling End================================
  const actionBtns = [
    <IoHeartOutline className={actionBtnIconStyling} />,
    <TbArrowsShuffle className={actionBtnIconStyling} />,
  ];

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleOnChange(formData.countVal);
      }}
      className="flex flex-col gap-6 "
    >
      <div className="flex flex-col gap-2 sm:gap-5">
        <ProductWeight
          title={"Weight"}
          boxes={weights}
          setFormData={setFormData}
        />
        <ProductWeight
          title={"Boxes"}
          boxes={boxes}
          setFormData={setFormData}
        />
      </div>
      <div>
        <ProductAvailbility
          setProductAvailibility={setProductAvailibility}
          productID={item.id}
        />
      </div>
      <QuantityCounter
        onChangeFnc={() => {}}
        setFormData={setFormData}
        productID={item.id}
      />
      {/* =========================Buttons=================================      */}
      <div className="flex w-fit flex-wrap items-center  gap-2 ">
        {" "}
        {/* ===============================Add To Cart Buttton================================        */}
        <AddToCartBtn
          onClick={(e) => {
            e.stopPropagation();
            formData.countVal <= productAvailbility &&
              dispatch(addToCart(item));
          }}
          title={"Add to cart"}
          icon={<IoCartOutline className="sm:text-[26px] mb-1 " />}
          className={addToCartbtnStyling}
        />
        {/* ==============================Conditional Rendering for Buy Button========================================       */}
        {!popUp && <BuyBtn title={"Buy Now"} path={""} />}
        {/* ==============================Conditional Rendering for Buy Button end========================================       */}
        {/* ===============================Mapping Two action buttons for Add to WishList and Add to CompareList================================        */}
       <div className="flex gap-2">

         {actionBtns.map((elem, index) => (
          <ProductAction
            key={index}
            icon={elem}
            action={() => {
              index === 0 && addToWishlist();
              index === 1 && addToCompare();
            }}
            toolTipTitle={""}
            toolTip={false}
            loadingSpin={false}
            className={actionBtnBgStyling}
          />
        ))}
        </div>
      </div>
    </form>
  );
};

export default ProductDetailsForm;
