import React from "react";
// import Typed from "react-typed";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Banner() {
  const icons = [
    {
      link: "https://www.facebook.com/profile.php?id=100011899396929",
      icon: <FaFacebook />,
    },
    {
      link: "https://www.instagram.com/suman.sahu._/",
      icon: <RiInstagramFill />,
    },
    {
      link: "https://www.linkedin.com/in/suman-sahu-6043a3219",
      icon: <FaLinkedin />,
    },
    { link: "https://twitter.com/Sahusuman880", icon: <FaXTwitter /> },
    { link: "https://github.com/Sahusuman880", icon: <FaGithub /> },
  ];
  return (
    <section className=" w-[100%] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
      <div className=" max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-5  md:py-[70px] py-[30px] px-[20px] items-center ">
        <div className="md:order-1 order-2 text-white md:p-[25px] p-[15px] ">
          <h3 className="md:my-[5px] my-[2px] md:text-[17px] text-[15px] ">
            Hi, I am
          </h3>
          <h1 className="md:my-[5px] my-[2px] md:text-[35px] text-[24px] font-bold">
            Suman Sahu
          </h1>
          <h2 className="md:my-[5px] my-[2px] md:text-[25px] text-[19px]">
            And I am a Frontend Developer
          </h2>
          <p className="md:my-[5px] my-[3px] md:text-[15px] text-[13px]">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur
            sed aperiam voluptates aspernatur quas! Aut optio blanditiis omnis
            reiciendis consequatur.
          </p>
          <ul className="flex md:gap-5 gap-3 md:my-[20px] my-[10px]">
            {icons.map((element) => {
              return (
                <li className="rounded-[50%] bg-black p-[10px] hover:bg-orange-500 delay-200">
                  <a href={element.link}>{element.icon}</a>
                </li>
              );
            })}
          </ul>
          <button className="bg-orange-500 px-3 py-1 rounded-[15px] hover:bg-orange-400 cursor-pointer  text-white ">
            Contact Me
          </button>
        </div>

        <div className=" md:order-2 order-1 md:my-[5px] my-[2px]">
          <img
            className=" md:h-[300px] md:w-[300px] h-[180px] w-[180px] mx-auto rounded-[50%]"
            src="profile pic.jpg"
            alt=""
          />
        </div>
      </div>
    </section>
  );
}

export default Banner;
