import React, { useState } from "react";

import { FaAlignJustify } from "react-icons/fa6";

function Header1() {
  const itemsobj = [
    {
      titel: "Home",
      link: "/",
      id: 1,
    },
    {
      titel: "About",
      link: "/about",
      id: 2,
    },
    {
      titel: "Education",
      link: "/education",
      id: 3,
    },
    {
      titel: "Skills",
      link: "/skills",
      id: 4,
    },
    {
      titel: "Projects",
      link: "/project",
      id: 5,
    },
    {
      titel: "Contact Me",
      link: "/contact",
      id: 6,
    },
  ];
  const [toggle, setToggle] = useState(false);
  const toggleClicked = () => {
    setToggle(!toggle);
  };
  return (
    <header className=" w-[100%]  text-white font-bold bg-[rgb(0,0,0)] sticky top-0 ">
      <div className="max-w-[1200px] mx-auto flex flex-row  justify-between items-center md:py-[20px] py-[15px] px-[20px] sticky">
        <div className="md:text-[20px] text-[25px]">Suman Sahu</div>
        <div className="md:block hidden">
          <ul className="flex md:gap-7 gap-3 ">
            {itemsobj.map((element) => {
              return (
                <li
                  key={element.id}
                  className="md:text-[17px] text-[12px] hover:text-blue-400 "
                >
                  <a href={element.link}>{element.titel}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <div className=" text-[25px] md:hidden blcok" onClick={toggleClicked}>
          <FaAlignJustify />
        </div>
      </div>
      {toggle ? (
        <div className="max-w-[1200px] h-[40vh] bg-white text-black flex justify-center items-center overflow-hidden">
          <ul className=" w-[80%] flex flex-col  gap-5 ">
            {itemsobj.map((element) => {
              return (
                <li key={element.id} className="md:text-[17px] text-[15px]">
                  <a href={element.link}>{element.titel}</a>
                </li>
              );
            })}
          </ul>
        </div>
      ) : null}
    </header>
  );
}

export default Header1;
