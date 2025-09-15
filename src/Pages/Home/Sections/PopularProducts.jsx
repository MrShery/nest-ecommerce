import React from "react";
import SetionTitle from "../../../Components/SectionTitle";
import ProductCard from "../../../Components/ProductCard";

const PopularProducts = ({ products }) => {
  return (
    <div className="w-full px-3 ">
      <SetionTitle
        title={"Popular Products"}
        line={false}
        border={false}
        className={"  text-[#253D4E] text-[32px] font-extrabold "}
      />
      <div   className="flex gap-8 flex-wrap py-10 justify-around lg:justify-start ">
        {products.map((elem,index)=>(
            <ProductCard key={elem.productTitle+index} {...elem} index={index}/>
        ))}
      </div>
    </div>
  );
};

export default PopularProducts;
