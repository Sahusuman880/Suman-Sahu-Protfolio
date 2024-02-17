import React from "react";

export const Header = () => {
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
      titel: "Contact",
      link: "/contact",
      id: 6,
    },
  ];
  return (
    <>
      <header className="w-full bg-gray-100">
        <div className=" max-w-[1400px] mx-auto flex md:flex-row flex-col justify-between py-[20px] items-center">
          <div className="md:my-0 mb-2">
            <h1 className="text-2xl font-bold   text-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
              Suman Sahu
            </h1>
          </div>
          <div className="md:my-0 mb-3">
            <ul className="flex flex-row gap-3 md:gap-8 md:text-[18px] text-[15px]">
              {itemsobj.map((element) => {
                return (
                  <li key={element.id}>
                    <a
                      href={element.link}
                      className="hover:text-orange-300 text-black"
                    >
                      {element.titel}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="md:items-center self-end md:pr-0 pr-2">
            <button className="bg-orange-500 px-3 py-1 rounded-[15px] hover:bg-orange-400 cursor-pointer font-bold ">
              <a href="tel:6370353583">Hire Me</a>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};
