import React, { useEffect } from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
// function valuetext(value) {
//   return `${value}°C`;
// }
const PriceRange = ({ width, minVal, maxVal, setterFucntion }) => {
  const [value, setValue] = useState([minVal || 0, maxVal || 2497]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  useEffect(() => {
    let timeOut = setTimeout(() => {
      setterFucntion(value);
    }, 1000);
    return () => clearTimeout(timeOut);
  }, [value]);
  return (
    <>
      <Box sx={{ width: width, paddingTop: 1.5, height: 40 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          // valuelabelformat={(value) => `${value}%`} // Format displayed value
          min={0} // Minimum value of the range
          max={2497} // Maximum value of the range
          step={1} // Step value (increment/decrement value)
          valueLabelDisplay="off"
          sx={{
            color: "black",
            height: 4,
            "& .MuiSlider-thumb": {
              backgroundColor: "#3bb77e",
              height: 14,
              width: 14,
              borderRadius: 100,

              "&:hover, &:active": {
                boxShadow: 0,
              },
              "&:hover": {
                boxShadow: 0,
                borderRadius: 10,
              },
            },
            "& .MuiSlider-rail": {
              opacity: 100,
              backgroundColor: "#3bb77e",
            },
          }}
        />
      </Box>
      <div className="flex gap-1 px-2">
        <p className="font-medium">Range:</p>
        <div className="flex font-semibold gap-1 text-base">
          <p>${value[0]}.00</p>- <p>${value[1]}.00</p>
        </div>
      </div>
    </>
  );
};

export default PriceRange;
