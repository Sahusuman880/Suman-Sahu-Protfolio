import React, { useContext } from "react";
import { ItemContext } from "../Store/store";

function Footer() {
  const contextObj = useContext(ItemContext);
  const isDarkMode = contextObj.isDarkMode;
  return (
    <div
      className={`flex flex-col justify-center items-center p-[20px] ${
        isDarkMode
          ? "bg-gray-900 text-white"
          : "bg-[rgba(22,87,217,0.8)] text-black"
      } `}
    >
      <h1>
        &copy; Copyright{" "}
        <span className="font-bold text-[17px]">Suman Sahu</span>. All Rights
        Reserved
      </h1>
      <h1>Designed by Suman Sahu</h1>
    </div>
  );
}

export default Footer;
