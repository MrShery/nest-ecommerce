import React, { useEffect, useState } from "react";
import "../Pages/Shop/CSS/style.css";
import useCselector from "../Hooks/useCselector";
const FilterCol = ({ title, list, searchCriteria, setSearchCriteria }) => {
  const [checkBox, setCheckBox] = useState([]);
  const categoryProducts = useCselector("categorySlice");
  const allProducts = useCselector("allProducts");
  let titleInLowerCase = title.toLowerCase();
  let modifidedTitle =
    title === "Brands"
      ? "brandName"
      : title === "Categories"
      ? "category"
      : title === "Tags" && "Tags";
  const updateFilter = (e, item, event) => {
    const currentArray = searchCriteria[titleInLowerCase] || [];
    let checkInclude = currentArray.includes(item);
    if (!checkInclude && event.target.checked) {
      let newArray = [...currentArray, item];
      return { ...e, [titleInLowerCase]: newArray };
    } else if (checkInclude && !event.target.checked) {
      let newArray = currentArray.filter((elem) => elem !== item);
      return { ...e, [titleInLowerCase]: newArray };
    }
  };
  const setListItemsForCheckBox = () => {
    if (title == "Brands") {
      let brandsProducts = allProducts.filter((elem) => {
        if (elem.brandName != null || undefined) return elem;
      });
      setCheckBox(brandsProducts);
    } else if (title == "Categories") {
      let categories = categoryProducts[0];
      setCheckBox(categories);
    } else if (title == "Tags") {
      let tagsProducts = allProducts.filter((elem) => {
        if (elem.Tags != null || undefined || elem.Tags.length != 0)
          return elem;
      });
      setCheckBox(tagsProducts);
    } else
      console.log(
        "Invalid title passed at FilterCol.jsx for rendering filter check Boxes"
      );
  };
  const handleSaveData = (item, event) => {
    setSearchCriteria((prev) => updateFilter(prev, item, event));
  };
  useEffect(() => {
    setListItemsForCheckBox();

  }, []);
  return (
    <div>
      <h3 className="font-semibold text-xl text-[#254065]">{title}</h3>
      <div className="w-[297px] h-[300px] mt-5 overflow-x-hidden overflow-y-auto customScrollDiv">
        {/* -----------------------------------------Rendring Filter input CheckBoxes-------------------------------------------- */}
        {checkBox.length != 0 &&
          checkBox != undefined &&
          checkBox.map((item, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                checked={
                  title != "Categories"
                    ? searchCriteria[titleInLowerCase]?.includes(
                        item[modifidedTitle]
                      )
                    : searchCriteria[titleInLowerCase]?.includes(item)
                }
                id={`checkBox_${titleInLowerCase}_${
                  title !== "Categories" ? item.productTitle : item
                }`}
                onClick={(e) =>
                  title != "Categories"
                    ? handleSaveData(item[modifidedTitle], e)
                    : handleSaveData(item, e)
                }
                onChange={() => {}}
              />
              <label
                htmlFor={`checkBox_${titleInLowerCase}_${
                  title !== "Categories" ? item.productTitle : item
                }`}
                className="font-medium text-[#7C7188]"
              >
                {title === "Brands"
                  ? item.brandName
                  : title === "Categories"
                  ? item
                  : title === "Tags" && item.Tags[0]}
              </label>
            </div>
          ))}
      </div>
    </div>
  );
};

export default FilterCol;
