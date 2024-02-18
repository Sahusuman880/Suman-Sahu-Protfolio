import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneVolume } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
function Contact() {
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
    <section className="w-full bg-[rgba(22,87,217,0.3)] md:py-[15px] md:p-[20px] p-[10px] mt-[50px]">
      <div className="max-w-[1300px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center my-[10px]  bg-white">
        <div className=" flex flex-col px-[30px] py-[20px] gap-4 md:m-[50px] m-[15px]">
          <div className="mb-[10px]">
            <h1 className="md:text-[30px] text-[20px] font-semibold">
              Send Message To Me
            </h1>
            <div className="w-[30%] h-[4px]  bg-blue-600 mt-[10px]"></div>
          </div>
          <input
            type="text"
            name=""
            id=""
            className="border-[#8d8686] border-[1px] py-2 px-6  text-black"
            placeholder="Your Name"
          />
          <input
            type="email"
            name=""
            id=""
            className="border-[#776f6f] border-[1px] py-2 px-6  text-black"
            placeholder="Your Email"
          />
          <input
            type="text"
            name=""
            id=""
            className="border-[#776f6f] border-[1px] py-2 px-6  text-black"
            placeholder="Subject"
          />
          <textarea
            name=""
            id=""
            cols="60"
            rows="3"
            className="border-[#776f6f] border-[1px] py-2 px-6  text-black"
            placeholder="Message"
          ></textarea>
          <button className="md:py-[15px] py-[12px] mx-auto  md:w-[40%] w-[60%] bg-blue-600 rounded-[20px] text-white font-semibold hover:bg-blue-500">
            Send Message
          </button>
        </div>
        <div className=" flex flex-col gap-3 md:px-[50px] px-[30px] pb-[18px] ">
          <div className="mb-[10px]">
            <h1 className="md:text-[30px] text-[20px] font-semibold">
              Get in Touch
            </h1>
            <div className="w-[30%] h-[4px]  bg-blue-600 mt-[10px]"></div>
          </div>
          <h1 className="md:text-[18px] text-[16px]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia,
            aperiam. Quasi necessitatibus ipsam illum doloribus recusandae esse
            quas illo, deleniti ratione corrupti est rem, sunt commodi nam quia?
            Veritatis, consequatur?
          </h1>
          <h2 className="md:text-[17px] text-[15px] flex flex-row gap-3 items-center">
            <span className=" text-[blue]">
              <FaLocationDot />
            </span>
            Baliguda,Kandhamal,Odisha-762103
          </h2>
          <h2 className="md:text-[17px] text-[15px] flex flex-row gap-3 items-center">
            <span className=" text-[blue]">
              <FaPhoneVolume />
            </span>
            +91-6370353583
          </h2>
          <h2 className="md:text-[17px] text-[15px] flex flex-row gap-3 items-center">
            <span className=" text-[blue]">
              <MdEmail />
            </span>
            sahusuman880@gmail.com
          </h2>
          <ul className="flex md:gap-5 gap-3 md:my-[20px] my-[10px] justify-center items-center md:justify-start md:items-start">
            {icons.map((element) => {
              return (
                <li className="rounded-[50%] border-[4px] border-[blue] p-[10px] hover:bg-[blue] hover:border-[#c5c8d0] delay-200">
                  <a
                    className="hover:invert"
                    href={element.link}
                    target="_blank"
                  >
                    {element.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Contact;
