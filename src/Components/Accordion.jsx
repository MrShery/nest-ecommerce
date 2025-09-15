import React, {  useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Accordion = ({ title, content,...props }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleAccordion = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className={` w-full border border-gray-300  mb-2 ${props.mainDivClassName} `}>
        {/* Accordion Header */}
        <div
          className={`flex justify-between items-center p-4 cursor-pointer transition border-b ${props.headerDivClassName}`}
          onClick={toggleAccordion}
        >
          <h3 className={`font-semibold ${props.titleClassName}`}>{title}</h3>
          <span className={`transition-transform rounded-full border p-1`}>
            {!isOpen ? <AiOutlinePlus /> : <AiOutlineMinus />}
          </span>
        </div>
  
        {/* Accordion Content */}
        <div
          className={`overflow-hidden transition-max-height duration-300 ${
            isOpen ? "max-h-screen" : "max-h-0"
          } ${props.contentClassName}`}
        >
          <div className="p-4 text-gray-700">{content}</div>
        </div>
      </div>
    );
  };
  export default Accordion;