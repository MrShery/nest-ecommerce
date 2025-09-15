import React, { useMemo } from "react";
import { useSelector } from "react-redux";

const ProductAvailbility = ({setProductAvailibility,productID}) => {
  const activeProduct = useSelector((state) => state.activeProduct);
  const products = useSelector((state) => state.allProducts);
  const eachProductQuantity = useMemo(() => {
    let quantity = {};
    products.forEach((element) => {
      if (element.id in quantity) {
        quantity[element.id] += 1;
      } else quantity = { ...quantity, [element.id]: 1 };
    });
    setProductAvailibility(quantity[productID])
    return quantity;
  }, [products]);
  return (
    <div className="flex ">
      <p className="text-[#7e7e7e] text-[10px] sm:text-normal md:text-[13px] font-semibold">
        Availability:{" "}
        <span className="text-[#B6B83D] font-medium ">
          {(eachProductQuantity[activeProduct.id] != null || undefined)
            ? eachProductQuantity[activeProduct.id]
            : 0} {" "}
          Products Available
        </span>
      </p>
    </div>
  );
};

export default ProductAvailbility;
