import React, { lazy, Suspense } from "react";
const ProductCard=lazy(()=> import("./ProductCard"));
import SetionTitle from "./SectionTitle";

const RelatedProductsSection = ({ title, recently }) => {
  return (
    <>
     <Suspense>
     <SetionTitle
        title={title}
        border={true}
        line={true}
        className={"font-bold "}
      />
      <div className="flex gap-6 flex-wrap mt-10">
        {recently.map((elem, index) => {
          let props = elem;
          return <ProductCard {...props} index={index} />;
        })}
      </div>
     </Suspense>
    </>
  );
};

export default RelatedProductsSection;
