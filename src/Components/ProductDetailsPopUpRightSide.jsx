import ProductDetailsLinks from "./ProductDetailsLinks";
import ProductBadge from "./ProductBadge";
import Rating from "./RatingStars";
import ProductCardPrice from "./ProductCardPrice";
import ProductDetailsDescrip from "./ProductDetailsDescrip";
import ProductCat_tags_links from "./ProductCat_tags_links";
import ProductCardDiscountedPrice from "./ProductCardDiscountedPrice";
import ProductDetailsForm from "./ProductDetailsForm";
import ProductName from "./ProductName";
function ProductDetailsPopUpRightSide({ popUp, setPopUp,...props }) {
  // ----------------------------------------Classes For Styling------------------------------------------------
  let popUpClass = "w-[400px] max-w-full sm:w-[90%] md:w-[50%] gap-24 sm:px-10";
  // ----------------------------------------Classes For Styling End------------------------------------------------
  return (
    <div
      className={`${
        popUp ? popUpClass : "sm:w-[50%] md:w-[50%] gap-5 sm:px-2 "
      }  w-[90%]  flex flex-col text-wrap relative  pb-10`}
    >
      <div className="flex flex-col sm:gap-6">
        {popUp && props.productBadge && (
          <ProductBadge {...props} popUp={popUp} />
        )}
      <ProductName title={props.productTitle}/>
        <Rating
          rating={props.rating}
          content={props.rating +" Reviews"}
          className="w-fit"
        />
        <div className="flex gap-4 items-center sm:items-start">
          <ProductCardDiscountedPrice
            productPrice={props.productPrice}
            discount={props.discount}
            className="text-[8px] xs:text-[12px] sm:text-[16px] md:text-4xl"
          />
          <ProductCardPrice
            discount={props.discount}
            productPrice={props.productPrice}
            detailPage={true}
          />
        </div>
        <ProductDetailsDescrip {...props} />
        <ProductDetailsForm
          popUp={popUp}
          item={props}
        />
      </div>
      <div className="text-[#7E7E7E] flex flex-col gap-4">
        <p>SKU:SG-184-A1</p>
        <ProductCat_tags_links />
        <ProductDetailsLinks
          title={"Brands:"}
          links={[
            {
              path: "/",
              title: "Brands",
            },
          ]}
        />
      </div>
    </div>
  );
}
export default ProductDetailsPopUpRightSide;
