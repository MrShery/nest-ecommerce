import React, { useEffect, useState } from "react";
import PageSummary from "../../Components/PageSummary";
import ProductName from "../../Components/ProductName";
import SoldBy from "../../Components/SoldBy";
import ProductCardPrice from "../../Components/ProductCardPrice";
import ProductCardDiscountedPrice from "../../Components/ProductCardDiscountedPrice";
import RatingStars from "../../Components/RatingStars";
import ProductDetailsDescrip from "../../Components/ProductDetailsDescrip";
import Button from "../../Components/Button";
import { AiOutlineShopping } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";
import useCselector from "../../Hooks/useCselector";
import { removeFromCompare } from "../../Redux/Slices/Compare/CompareSlice";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/Slices/CartItemSlice";

const ComparePage = () => {
  const dispatch = useDispatch();
  const compareItems = useCselector("compareItem");
  const totalItemsInList = compareItems.length;
  const titleClassNames1 =
    "w-[200px] border text-sm text-center text-[#B6C6DC] font-medium";
  const titleClassNames2 = "py-5 px-3 border text-center";
 
  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  if (totalItemsInList === 0) {
    return (
      <div className="w-full">
        <PageSummary
      title={"Products Compare"}
      totalItems={totalItemsInList}
    />
        <p className="w-full text-center text-[4vw] xs:text-[18px] sm:text-[20px] font-medium border py-2 ">
          No items to compare
        </p>
        ;
      </div>
    );
  }
  return (
    <div className="w-full overflow-x-auto HideScrollBar">
     <PageSummary
      title={"Products Compare"}
      totalItems={totalItemsInList}
    />
      <table>
        <tbody>
          <tr>
            <td className={titleClassNames1}>Preview</td>
            {compareItems.map((item, index) => (
              <td className="border">
                {" "}
                <img
                  key={`com_img_${index}`}
                  src={item.productImg[0]}
                  alt=""
                  className="ms-auto me-auto"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Name</td>
            {compareItems.map((item, index) => (
              <td key={`com_name_${index}`} className={titleClassNames2}>
                <ProductName
                  title={item.productTitle}
                  className="hover:text-[#FDC040]  myTransition ms-auto me-auto "
                />
                <SoldBy companyName="Global Store" className="text-[12px]" />
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Price</td>
            {compareItems.map((item, index) => (
              <td key={`com_price_${index}`} className={titleClassNames2}>
                <ProductCardDiscountedPrice
                  productPrice={item.productPrice}
                  discount={item.discount}
                  className="text-[24px] w-full"
                />
                {item.discount != "" && (
                  <ProductCardPrice
                    productPrice={item.productPrice}
                    comparePage={true}
                    discount={item.discount}
                    className="text-black font-medium text-base"
                  />
                )}
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Rating</td>
            {compareItems.map((item, index) => (
              <td key={`com_rating_${index}`} className={titleClassNames2}>
                <RatingStars
                  rating={item.rating}
                  content={`(${item.rating})`}
                  className="ms-auto me-auto"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Description</td>
            {compareItems.map((item, index) => (
              <td key={`com_desrip_${index}`} className={titleClassNames2}>
                <ProductDetailsDescrip />{" "}
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Weight</td>
            {compareItems.map((_, index) => (
              <td key={`com_weight_${index}`} className={titleClassNames2}>
                <span>—</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Boxes</td>
            {compareItems.map((item, index) => (
              <td key={`com_boxes_${index}`} className={titleClassNames2}>
                <span>—</span>
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}>Buy now</td>
            {compareItems.map((item, index) => (
              <td key={`com_button_${index}`} className={titleClassNames2}>
                <Button
                  onClick={() => handleAddToCart(item)}
                  title={
                    <span className="flex items-center gap-2 text-sm">
                      <AiOutlineShopping /> Add To Cart
                    </span>
                  }
                  className="rounded-full group  w-fit hover:bg-[#FDC040] px-[20px] text-white"
                />
              </td>
            ))}
          </tr>
          <tr>
            <td className={titleClassNames1}></td>
            {compareItems.map((item, index) => (
              <td key={`com_remBtn_${index}`} className={titleClassNames2}>
                <span
                  onClick={() => dispatch(removeFromCompare({ id: item.id }))}
                  className="flex gap-2 items-center justify-center text-[#8a8989] cursor-pointer myTransition hover:text-[#FDC040]"
                >
                  <RiDeleteBin6Line />
                  Remove
                </span>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ComparePage;
