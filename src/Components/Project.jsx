import React, { useContext } from "react";
import { ItemContext } from "../Store/store";

function Project() {
  const contextObj = useContext(ItemContext);
  const isDarkMode = contextObj.isDarkMode;
  const obj = [
    {
      id: 1,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
    {
      id: 2,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
    {
      id: 3,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
    {
      id: 4,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
    {
      id: 5,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
    {
      id: 6,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
    {
      id: 7,
      link: "Khatabook.png",
      name: "Khatabook App",
      description:
        "A responsive web page built with React and Redux,Node.js,Express.js and MongoDB, improving coding skills and understanding of MERN stack techniques.",
      tech: "MERN Stack",
    },
  ];
  return (
    <section
      className={`py-[50px]  ${
        isDarkMode ? "bg-gray-800" : "bg-[rgba(22,87,217,0.3)]"
      }`}
    >
      <h1
        className={`md:text-[45px] text-[35px] font-bold  text-center  ${
          isDarkMode ? " text-white" : " text-black"
        }`}
      >
        My Projects
      </h1>
      <div className="w-[15%] h-[4px] mx-auto bg-blue-600 "></div>
      <div className="flex justify-center items-center flex-wrap ">
        {obj.map((element) => {
          return (
            <div
              key={element.id}
              className={` flex flex-col  p-[10px] md:w-[310px] w-[80%]  ${
                isDarkMode
                  ? "bg-[#100f0ff9] text-[white]"
                  : "bg-white text-black"
              } md:m-[20px] m-[10px] rounded-[15px] hover:scale-110 duration-100`}
            >
              <a href="" className="">
                <img
                  className="w-[100%] h-[160px] "
                  src="Khatabook.png"
                  alt=""
                />

                <h1 className="text-[20px] font-bold">Khatabook App</h1>
                <p className="text-[16px] over">
                  A responsive web page built with React and
                  Redux,Node.js,Express.js and MongoDB, improving coding skills
                  and understanding of MERN stack techniques.
                </p>
                <h3 className="text-[16px] font-bold">
                  Tech Stack: <span className="text-blue-600">MERN Stack</span>
                </h3>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Project;
