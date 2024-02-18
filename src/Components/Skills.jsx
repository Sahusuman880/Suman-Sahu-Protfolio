import React from "react";
function Skills() {
  const icons = [
    {
      id: 1,
      imgurl:
        "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/html-icon.png",
      name: "HTML",
    },
    {
      id: 2,
      imgurl: "https://cdn-icons-png.flaticon.com/512/5968/5968242.png",
      name: "CSS",
    },
    {
      id: 3,
      imgurl:
        "https://icons.veryicon.com/png/o/business/vscode-program-item-icon/javascript-3.png",
      name: "JavaScript",
    },
    {
      id: 16,
      imgurl: "https://www.svgrepo.com/show/374144/typescript.svg",
      name: "TypeScript",
    },
    {
      id: 4,
      imgurl:
        "https://static-00.iconduck.com/assets.00/tailwind-css-icon-2048x1229-u8dzt4uh.png",
      name: "Tailwind CSS",
    },

    {
      id: 6,
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png",
      name: "React js",
    },
    {
      id: 11,
      imgurl: "https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png",
      name: "Redux.js",
    },
    {
      id: 5,
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/1280px-Sass_Logo_Color.svg.png",
      name: "Sass",
    },
    {
      id: 7,
      imgurl:
        "https://static-00.iconduck.com/assets.00/node-js-icon-454x512-nztofx17.png",
      name: "Node JS",
    },
    {
      id: 8,
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png",
      name: "Express.js",
    },
    {
      id: 9,
      imgurl:
        "https://cdn.iconscout.com/icon/free/png-256/free-mongodb-5-1175140.png",
      name: "MongoDB",
    },
    {
      id: 10,
      imgurl:
        "https://static-00.iconduck.com/assets.00/database-mysql-icon-462x512-6itsq0zm.png",
      name: "MySql",
    },
    {
      id: 12,
      imgurl:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/C_Programming_Language.svg/695px-C_Programming_Language.svg.png",
      name: "C Language",
    },
    {
      id: 13,
      imgurl:
        "https://cdn.iconscout.com/icon/free/png-256/free-java-60-1174953.png",
      name: "Java",
    },
    {
      id: 14,
      imgurl:
        "https://uxwing.com/wp-content/themes/uxwing/download/web-app-development/rest-api-icon.png",
      name: "REST Api",
    },
    {
      id: 15,
      imgurl: "https://cdn-icons-png.flaticon.com/512/25/25231.png",
      name: "GitHub",
    },
  ];

  return (
    <section className="mt-[50px] ">
      <h1 className="md:text-[45px] text-[35px] font-bold  text-center">
        Skills
      </h1>
      <div className="w-[9%] h-[4px] mx-auto bg-blue-600 "></div>
      <div className="max-w-[1400px] mx-auto  ">
        <div className=" flex justify-evenly items-center flex-wrap p-[20px]  md:gap-10 gap-3 ">
          {icons.map((element) => {
            return (
              <div
                key={element.id}
                className="bg-white p-[10px] rounded-[10px]  hover:text-blue-600 font-bold"
              >
                <img
                  className="md:h-[80px] md:w-[80px] h-[50px] w-[50px] hover:scale-110 "
                  src={element.imgurl}
                  alt={element.name}
                />
                <h1 className="text-center md:text-[15px] text-[10px]">
                  {element.name}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
export default Skills;
