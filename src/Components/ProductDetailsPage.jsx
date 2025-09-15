import React from "react";

import ProductDetailsPopUp from "./ProductDetailsPopUp";
import { useLocation, useParams } from "react-router";
import ProductInfo from "./ProductInfo";
import SideBar from "./SideBar";
import CategoryBadge from "./CategoryBadge";
import useCselector from "../Hooks/useCselector";
import RelatedProductsSection from "./RelatedProductsSection";
import SideBarProductItem from "./SideBarProductItem";
import ServicesSection from "../Pages/Home/Sections/ServicesSection";
import SubscriptionCTASection from "../Pages/Home/Sections/SubscriptionCTASection";

function ProductDetailsPage() {
  const location = useLocation();
  const recently = useCselector("recentlyAdded");
  const products = useCselector("allProducts");
  const { productID } = useParams();
  const { props, sharedState } = location.state || {};
  
  const selectedProduct=props||products[Number(productID-1)]  
  console.log(selectedProduct);

  if (!selectedProduct) {
    return <h2>No card data available!</h2>;
  }

  return (
    <>
      <section className="w-[100%] h-full  flex px-1 md:px-4 relative md:py-8 py-3 overflow-x-hidden  ">
        <div>
          <ProductDetailsPopUp
            {...selectedProduct}
           
            popUp={sharedState}
            setPopUp={sharedState}
          />
          <ProductInfo {...selectedProduct} />
          <div className="w-[96%] lg:w-[980px] mt-10">
            <RelatedProductsSection
              title="You may also like"
              recently={recently}
            />
          </div>
          <div className="w-[96%] lg:w-[980px] mt-10">
            <RelatedProductsSection
              title="Related products"
              recently={recently}
            />
          </div>
        </div>
        <div className="w-fit h-fit flex flex-col items-center gap-10  sticky top-0 right-0 md:hidden hidden xl:flex ">
          <SideBar
            title={"Categories"}
            render={() => {
              return <CategoryBadge sideBar={true} />;
            }}
          />
          <SideBar
            title={"New Products"}
            render={() => {
              return (
                <div>
                  {recently.map((elem, index) => (
                    <SideBarProductItem elem={elem} index={index} />
                  ))}
                </div>
              );
            }}
          />
          <div className=" sideBar_ad_image  overflow-hidden">
            <img
              src="https://nest.botble.com/storage/promotion/6.png"
              alt=""
              className="rounded-[15px] px-2 "
            />
          </div>
        </div>
      </section>
        <SubscriptionCTASection
        heading="Stay home & get your daily"
        brHeading="needs from our shop"
        subHeading="Start Your Daily Shopping with Nest Mart"
      bgImg="https://nest.botble.com/themes/nest/imgs/banner/banner-10.png"/>
      <ServicesSection />
    </>
  );
}

export default ProductDetailsPage;
