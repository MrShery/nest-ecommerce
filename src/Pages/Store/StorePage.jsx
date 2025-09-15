import React, { useEffect, useRef, useState } from "react";
import SetionTitle from "../../Components/SectionTitle";
import SubscriptionCTASection from "../Home/Sections/SubscriptionCTASection";
import useCselector from "../../Hooks/useCselector";
import VendorCard from "../../Components/VendorCard";
import FilterSearchBar from "../../Components/FilterSearchBar";
const StorePage = () => {
  const allProducts = useCselector("allProducts");
  const vendorsData = useCselector("allVendors");
  const [vendorsHashMap, setVendorsHashMap] = useState({});
  const [inputValue, setInputValue] = useState("");
  const createVenders = () => {
    let newVendersHashMap = {};
    allProducts.forEach((elem) => {
      newVendersHashMap[elem.vendor] === undefined
        ? (newVendersHashMap[elem.vendor] = 1)
        : (newVendersHashMap[elem.vendor] = newVendersHashMap[elem.vendor] + 1);
    });
    setVendorsHashMap(newVendersHashMap);
  };
  const [filterVendors, setFilterVendors] = useState(vendorsData);
  const handleOnChange = () => {
    let filteredVendors = [];

    if (inputValue.trim() != "") {
      filteredVendors = vendorsData.filter((elem) =>
        elem.vendorName.toLowerCase().includes(inputValue.toLowerCase())
      );
      setFilterVendors(filteredVendors);
    }
  };
  console.log(vendorsHashMap);
  useEffect(() => {
    createVenders();
  }, []);
  return (
    <div>
      <div className="text-center py-6 ">
        <SetionTitle
          title={"Stores"}
          line={false}
          border={false}
          className="text-[70px] font-bold"
        />
        <FilterSearchBar
          setInputValue={setInputValue}
          handleOnChange={handleOnChange}
        />
        <p>
          We have{" "}
          <span className="text-[#3BB77E]"> {filterVendors.length}</span>{" "}
          venders for now!
        </p>
      </div>
      <div className="flex gap-4 flex-wrap justify-center">
        {filterVendors.map((vendor, index) => (
          <VendorCard
            key={vendor.vendorName + index}
            vendor={vendor}
            vendorsHashMap={vendorsHashMap}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <SubscriptionCTASection
          heading="Stay home & get your daily"
          brHeading="needs from our shop"
          subHeading="Start Your Daily Shopping with Nest Mart"
          bgImg="https://nest.botble.com/themes/nest/imgs/banner/banner-10.png"
        />
      </div>
    </div>
  );
};

export default StorePage;
