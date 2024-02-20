import React, { useContext } from "react";
import { ItemContext } from "../Store/store";

function Education() {
  const contextObj = useContext(ItemContext);
  const isDarkMode = contextObj.isDarkMode;
  const obj = [
    {
      id: 1,
      class: "10",
      board: "Board of Secondary Education,Odisha",
      year: "2013-2014",
      institute: "Govt. High School,Balliguda",
      percentage: 76,
    },
    {
      id: 2,
      class: "12",
      board: "CHSE,Odisha",
      year: "2015-2016",
      institute: "Vedbyash Residential College,Berhampur",
      percentage: 64,
    },
    {
      id: 3,
      class: "B.Sc",
      board: "Berhampur University,Berhampur",
      year: "2016-2019",
      institute: "Govt. High School,Balliguda",
      percentage: 62,
      cgpa: 6.78,
    },
    {
      id: 4,
      class: "MCA",
      board: "GIET University,Gunupur",
      year: "2021-2023",
      institute: "GIET University,Gunupur",
      percentage: 85,
      cgpa: 8.99,
    },
  ];
  return (
    <section
      className={`py-[50px] ${
        isDarkMode
          ? "bg-gray-800 text-white"
          : "bg-[rgba(22,87,217,0.3)] text-black"
      }`}
    >
      <h1 className="md:text-[45px] text-[35px] font-bold  text-center">
        Educations
      </h1>
      <div className="w-[15%] h-[4px] mx-auto bg-blue-600 md:my-[10px] my-[5px] md:mb-[10px] mb-[10px]"></div>
      {obj.map((element, index) => {
        return (
          <div
            key={element.id}
            className={` max-w-[1400px] ${
              isDarkMode
                ? "bg-[#100f0ff9] text-[white]"
                : "bg-white text-[black]"
            }  md:px-[30px] px-[15px] my-[12px] rounded-[10px] md:mx-auto mx-4`}
          >
            <div className="py-[10px] ">
              <div className="flex justify-between flex-wrap ">
                {index === 0 || index === 1 ? (
                  <h1 className="md:text-[20px] text-[13px]">
                    {element.class}
                    <sup>th</sup>
                    <span>{`(${element.board})`}</span>
                  </h1>
                ) : (
                  <h1 className="md:text-[20px] text-[13px]">
                    {element.class}
                    <span>{`(${element.board})`}</span>
                  </h1>
                )}

                <h1 className="md:text-[20px] text-[12px]">{element.year}</h1>
              </div>
              <div className="md:text-[16px] text-[13px] my-3 ">
                {element.institute}
              </div>
              <div className="flex items-center">
                {index == 0 || index == 1 ? (
                  <div className="w-16 text-right pr-2">{`${element.percentage}%`}</div>
                ) : (
                  <div className="w-16 text-right pr-2">{`${element.cgpa}`}</div>
                )}

                <div className="flex-grow h-2 bg-gray-300 rounded-full">
                  <div
                    style={{ width: `${element.percentage}%` }}
                    className="h-full bg-blue-600 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}

export default Education;
