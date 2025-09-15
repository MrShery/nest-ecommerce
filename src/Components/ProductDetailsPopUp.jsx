
import ProductDetailsPopUpLeftSide from "./ProductDetailsPopUpLeftSide";
import ProductDetailsPopUpRightSide from "./ProductDetailsPopUpRightSide";
import useCselector from "../Hooks/useCselector";
import { MdOutlineClose } from "react-icons/md";
function ProductDetailsPopUp({ setPopUp, popUp, ...props }) {
  const activeProduct=useCselector("activeProduct")
  // ----------------------------------------Classes For Styling------------------------------------------------
  let popUpClass = ` w-[888px] max-w-full sm:w-[90%] lg:w-[888px]  rounded-3xl  py-8 md:py-14 justify-between px-1 sm:p-10  `;
  let closeBtnStyling =
    "absolute right-5 top-4 text-[10px] xs:text-sm sm:text-normal text-[#AEAEAE] hover:text-[#8b8b8b] myTransition cursor-pointer";
  // ----------------------------------------Classes For Styling End------------------------------------------------
  const selectedProduct = popUp?activeProduct: {...props}

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`${
        popUp
          ? "w-full z-50 fixed left-0 top-0 py-8 h-screen overflow-y-scroll  bg-[#0000002c]"
          : "md:w-screen lg:w-[1000px] z-0 "
      }  flex  justify-center  items-start cursor-default   `}
    >
      <div
        className={`${
          popUp ? popUpClass : "w-screen"
        } h-fit  flex flex-wrap  bg-white  z-50 cursor-auto relative `}
      >
        <ProductDetailsPopUpLeftSide {...selectedProduct} popUp={popUp} />
        <ProductDetailsPopUpRightSide
          {...selectedProduct}
          popUp={popUp}
          setPopUp={setPopUp}
        />
      {popUp && (
        <MdOutlineClose
          onClick={() => setPopUp(false)}
          className={closeBtnStyling}
        />
      )}
      </div>
    </div>
  );
}

export default ProductDetailsPopUp;
