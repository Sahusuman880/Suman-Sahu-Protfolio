import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";

function Banner1() {
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
    <section className=" h-[100vh]  text-white bg-[url(bg-1-modified.jpg)] bg-cover bg-top flex  items-end ">
      <div className=" md:pl-[50px] pl-[10px] md:pt-0 pb-[100px]">
        <h1 className="md:text-[70px] text-[40px] font-bold md:text-start text-center">
          I am Suman Sahu
        </h1>
        <div>
          <h2 className="md:text-start text-center md:text-[50px] text-[20px]">
            Frontend Developer
          </h2>
        </div>
        <ul className="flex md:gap-5 gap-3 md:my-[20px] my-[10px] justify-center items-center md:justify-start md:items-start">
          {icons.map((element) => {
            return (
              <li className="rounded-[50%] bg-blue-600 p-[10px] hover:bg-blue-400 delay-200">
                <a className="hover:invert" href={element.link} target="_blank">
                  {element.icon}
                </a>
              </li>
            );
          })}
        </ul>
        <a
          href="Suman Resume.pdf"
          download="Suman Resume"
          target="_blank"
          rel="noreferrer"
          className="flex justify-center items-center md:justify-start md:items-start md:my-0 my-5"
        >
          <button className="bg-blue-600 px-3 py-1 rounded-[15px] hover:bg-blue-400 cursor-pointer  text-white">
            Download CV
          </button>
        </a>
      </div>
    </section>
  );
}

export default Banner1;
