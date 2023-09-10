import React from "react";
import { useState,useContext } from "react";
import ReactSwitch from "react-switch";
import { ThemeTogglerCtx } from "../../App";

const ToggleSwitch = ({ value }) => {
  const [checked, setChecked] = useState(false);
  const { setToggleTheme } = useContext(ThemeTogglerCtx);

  const handleChange = (val) => {
    setChecked((val) => !val);
    if (value === "darkMode" && val) {
      // document.body.style.backgroundColor = "black";
      setToggleTheme(true);
    }
    if (value === "darkMode" && !val) {
      // document.body.style.backgroundColor = "white";
      setToggleTheme(false);
    }
  };

  return (
    <div>
      <ReactSwitch checked={checked} onChange={handleChange} />
    </div>
  );
};

export default ToggleSwitch;
