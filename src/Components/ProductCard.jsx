import React, { useState, lazy } from "react";
import { IoCartOutline } from "react-icons/io5";
import { setActiveProduct } from "../Redux/Slices/ActiveProductSlice/ActiveP_Slice";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import { addToCart } from "../Redux/Slices/CartItemSlice";
import AddToCartBtn from "./AddToCartBtn";
import Rating from "./RatingStars";
import ProductBadge from "./ProductBadge";
import CardHoverAction from "./CardHoverAction";
import ProductCardPrice from "./ProductCardPrice";
import ProductCardDiscountedPrice from "./ProductCardDiscountedPrice";
import ProductDetailsPopUp from "./ProductDetailsPopUp";
import ProductName from "./ProductName";
import SoldBy from "./SoldBy";
import ProductCardImg from "./ProductCardImg";
import { showToastLoading } from "../Utils/toastUtils";

function ProductCard({ index, ...props }) {
  const [productHoverImg, setProductHoverImg] = useState(props.productImg[0]);
  // =================================================Dispatch Hook ===================================================
  const dispatch = useDispatch();
  // =================================================State for showing the product Modal view ===================================================
  const [popUp, setPopUp] = useState(false);
  // =================================================Navigate Hook From ReactRouter to navigate another Page ===================================================
  const navigate = useNavigate();
  // =================================================Classes For Style the Card Div ===================================================
  const cardDivStyling =
    " w-[90%] xs:w-[43%] bg-white sm:w-[40%] md:w-[30%] lg:w-[23%] xl:w-[23%] 2xl:w-[30%] myProductCard  shrink-0  rounded-[20px] overflow-hidden  border hover:border-[#3BB78F] myTransition cursor-pointer hover:shadow-lg group";
  // =================================================On Card Click Navigation Function ===================================================
  const handleCardClick = () => {
    dispatch(setActiveProduct({ product: props }));
    location.pathname !== `/products/${props.id}` &&
      navigate(`/products/${props.id}`, {
        state: { props, popUp },
      });
    !popUp && window.scrollTo(0, 0);
  };
  const handleAddToCart = async () => {
    await showToastLoading(
     ()=> dispatch(addToCart(props)),
      "Adding to cart...",
      `${props.productTitle} added to cart Successfully `,
      `Failed to add ${props.productTitle}`
    );
  };

  return (
    <div
      onClick={handleCardClick}
      onMouseOver={() => setProductHoverImg(props.productImg[1])}
      onMouseOut={() => setProductHoverImg(props.productImg[0])}
      className={cardDivStyling}
    >
      {/* --------------------------------------Card Top Section Start From here-----------------------------------------------------------------------------------------------       */}
      <div className="relative  ">
        {/* ===============================If Badge is Given or True then render the bagde =========================================     */}
        {props.productBadge && (
          <ProductBadge p_badgeTitle={props.p_badgeTitle} popUp={popUp} />
        )}
        {/* =================================Product Image================================================  */}
        <div className="w-full h-full overflow-hidden rounded-xl ">
          <ProductCardImg productImg={productHoverImg} />
        </div>
        {/* ==================================== Card Action that shoes on hovering the card===================================== */}
        <CardHoverAction setPopUp={setPopUp} product={props} />
      </div>
      {/* --------------------------------------Card Top Section End here-----------------------------------------------------------------------------------------------       */}
      {/* -------------------==============================================================================--------------------------------- */}
      {/* --------------------------------------Card Bottom Section Starts From here-----------------------------------------------------------------------------------------------       */}
      <div className=" px-2 md:px-5 pb-3  flex flex-col gap-1  relative ">
        {/* ======================Product Category ===========================================  */}
        <a href="" className="text-[12px] text-gray-500 hover:text-[#3BB78F]">
          {props.category}
        </a>
        {/* ===================================Product Name================================================= */}
        <ProductName title={props.productTitle} path={"#"} />
        {/* =====================================Product Rating=========================================== */}
        <Rating
          rating={props.rating}
          content={props.rating}
          className="w-fit"
        />
        {/* =======================================Company Name========================================= */}
        <SoldBy companyName="Global Office" />
        <div className="flex justify-between items-center mt-2 flex-wrap lg:flex-nowrap ">
          <div className="flex items-center gap-1 h-fit flex-wrap w-fit   ">
            {/* ===================================Product Final Price After Discount===============================      */}
            <ProductCardDiscountedPrice
              detailPage={false}
              className={"text-gray "}
              productPrice={props.productPrice}
              discount={props.discount}
            />
            {/* =====================================Conditional Rendring If discount is given================================   */}
            {props.discount != null && props.discount != 0 && (
              // ==================================Product Original Price =========================================
              <ProductCardPrice
                className={" text-[#3BB78F]"}
                productPrice={props.productPrice}
                discount={props.discount}
              />
            )}
          </div>
          {/* =======================================Add To Cart Button====================================  */}
          <AddToCartBtn
            onClick={(e) => {
              e.stopPropagation();
              handleAddToCart();
            }}
            title={"Add"}
            className={"bg-[#D8F1E5]  "}
            icon={<IoCartOutline />}
          />
        </div>
      </div>
      {/* --------------------------------------Card Bottom Section Ends here-----------------------------------------------------------------------------------------------       */}
      {/* -------------------==============================================================================--------------------------------- */}

      {/* ===================Conditional Rendring for Modal view of clicked Product==================================== */}
      {popUp && <ProductDetailsPopUp setPopUp={setPopUp} popUp={popUp} />}
    </div>
  );
}
export default ProductCard;
