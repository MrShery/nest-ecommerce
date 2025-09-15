
import React, { useEffect, useState } from "react";
import SetionTitle from "./SectionTitle";
import CategoryBadge from "./CategoryBadge";
const SideBar = ({title,render}) => {
  const [totalCategories, setTotalCategories] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
  ]);

  useEffect(() => {
     setTotalCategories(totalCategories.slice(0, 10));
  }, []);
  return (
    <div className=" w-[313px] h-fit p-8 transition-all bg-white z-10   flex flex-col flex-wrap  justify-around  myTransition  shadow border rounded-lg">
      <SetionTitle title={title} line={true} border={true} className={"font-bold"} />
      <div>
     {render()}
      </div>
    </div>
  );
};

export default SideBar;
