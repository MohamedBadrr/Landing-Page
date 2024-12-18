import React from "react";

export const FeatureBox = ({ icon, title, desc }) => {
  return (
    <div className="text-white element-center flex-col text-center">
      <img
        src={`/src/images/${icon}`}
        alt="icon"
        className="object-contain w-[80px] h-[80px]"
      />
      <h4 className="text-lg font-semibold my-[15px]">{title}</h4>
      <p className="text-sm font-normal">{desc}</p>
    </div>
  );
};
