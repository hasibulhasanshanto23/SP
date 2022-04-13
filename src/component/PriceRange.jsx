import React from "react";
import { Slider } from "@mui/material";

const PriceRange = () => {
  const [value, setValue] = React.useState([50000, 120000]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div className="accordion__slider">
      <Slider value={value} onChange={handleChange} min={50000} max={120000} />
      <div className="accordion__sliderAmount">
        <b>
          BDT {value[0]} - {value[1]}
        </b>
      </div>
    </div>
  );
};

export default PriceRange;
