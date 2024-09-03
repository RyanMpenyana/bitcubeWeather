import React from "react";
import Input from "./Input";
import currentLocationIcon from "../assets/WeatherWhiteIcons/currentlocationIcon.png";
import { useContext } from "react";
import { ThemeContext } from "../Context/Context";
const Header = (props) => {
  const isDarkMode = useContext(ThemeContext);
  return (
    <div className="flex items-center  py-[20px]  px-8 justify-between xl:mb-[49px] xl:px-[77px]">
      <div className="flex flex-col items-center">
        <div>
          <label className="switch mb-1">
            <input onChange={props.handleTheme} type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <h4 className="hidden lg:block lg font-extrabold xl:text-lg">
          {isDarkMode ? "Light mode" : "Dark mode"}
        </h4>
      </div>
      <div>
        <Input
          value={props.value}
          onSubmit={props.onSubmit}
          onChange={props.onChange}
          onClick={props.onClick}
          options={props.options}
        />
      </div>
      <div className="flex items-center lg:h-14 xl:h-[62px]">
        <button className="flex items-center bg-light rounded-[40px] gap-1 h-full xl:text-[22px] text-white lg:font-extrabold lg:px-7 lg:py-4">
          <span>
            <img src={currentLocationIcon} alt="currentLocationIcon" />
          </span>
          <span className="hidden lg:block">Current Location</span>
        </button>
      </div>
    </div>
  );
};

export default Header;
