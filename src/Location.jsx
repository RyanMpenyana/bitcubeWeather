import React from "react";

const Location = ({ location , time, date = "Thursday, 31 Aug" }) => {
  return (
    <div className="font-poppins shadow-md mb-7 rounded-[30px] pt-[30px] pb-[25px] md:w-[250px] flex justify-center items-center lg:w-[510px] lg:pt-[53px] lg:pb-[50px]">
      <div className="location">
        <h3 className="font-bold text-2xl mb-[16px] lg:text-4xl">{location}</h3>
        <div className="lg:h-36 flex flex-col justify-end">
          <h1 className="text-5xl font-bold lg:mb-[2px] lg:text-8xl">{time}</h1>
          <p className="text-xl font-normal">{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
