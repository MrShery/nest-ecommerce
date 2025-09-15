import React from "react";
import SetionTitle from "../../../Components/SectionTitle";
import ProductOverviewCard from "../../../Components/ProductOverviewCard";
import useCselector from "../../../Hooks/useCselector";

const ProductOverviewSection = () => {
  let cardClassName =
    "w-[100%] sm:w-[330.25px] md:w-[400.25px] lg:w-[330.25px] xl:w-[330.25px] flex flex-col gap-5 px-4 flex-shrink-0";
  // ===========================Getting the Products from Store====================================
  const topRated = useCselector("topRated");
  const topSelling = useCselector("topSelling");
  const recentlyAdded = useCselector("recentlyAdded");
  const topTrending = useCselector("topTrending");
  // ===========================^^^^^^^^^End^^^^^^^^^^^====================================
  // =============================Storing the products in Array========================================
  const columns = [topSelling, topTrending, recentlyAdded, topRated];
  // ===========================^^^^^^^^^End^^^^^^^^^^^====================================
  return (
    <div className=" w-full">
      <div className="w-full flex flex-wrap  ">
        {new Array(
          "Top Selling",
          "Trending Products",
          "Recently Added",
          "Top Rated"
        ).map((item, index) => (
          <div key={"overview" + index} className={cardClassName}>
            <SetionTitle
              title={item}
              line={true}
              border={true}
              className={"font-bold"}
            />
            {columns[index].slice(0, 4).map((elem, index) => (
              <ProductOverviewCard
                key={"overviewProduct" + index}
                elem={elem}
                className=" hover:-translate-y-1 "
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductOverviewSection;
