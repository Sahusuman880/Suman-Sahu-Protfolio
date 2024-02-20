import React, { useContext } from "react";
import { ItemContext } from "../Store/store";

function About() {
  const contextObj = useContext(ItemContext);
  const isDarkMode = contextObj.isDarkMode;
  return (
    <section
      className={`w-full md:py-[15px] p-[20px] ${
        isDarkMode ? "bg-gray-800" : "bg-[rgba(22,87,217,0.3)]"
      }`}
    >
      <div
        className={`max-w-[1400px] mx-auto grid md:grid-cols-2 grid-cols-1 items-center my-[10px] ${
          isDarkMode ? "bg-[#100f0ff9] text-[white]" : "bg-white text-[black]"
        } `}
      >
        <div className="flex flex-wrap gap-[50px] md:justify-center md:p-0 p-10">
          <figure>
            <img
              className="max-w-[160px] max-h-[160px] "
              src="profile pic.jpg"
              alt=""
            />
          </figure>
          <div className="flex flex-col gap-5 text-[16px]">
            <h2>
              <span className="font-bold md:mx-2">Name:</span>Suman Sahu
            </h2>
            <h2>
              <span className="font-bold md:mx-2">Profile:</span>MERN stack
              Developer
            </h2>
            <h2>
              <span className="font-bold md:mx-2">Email:</span>
              sahusuman880@gmail.com
            </h2>
            <h2>
              <span className="font-bold md:mx-2">Phone:</span>+91-6370353583
            </h2>
          </div>
        </div>
        <div className="p-[30px]">
          <h1 className="text-[30px] font-bold  ">About me</h1>
          <div className="w-[18%] h-[3px] bg-blue-600"></div>
          <div className="flex flex-col gap-7 text-[18px] my-[20px]">
            <p className=" ">
              Curabitur non nulla sit amet nisl tempus convallis quis ac lectus.
              Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.
              Praesent sapien massa, convallis a pellentesque nec, egestas non
              nisi. Nulla porttitor accumsan tincidunt.
            </p>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet
            </p>
            <p>
              Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a.
              Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum
              ac diam sit amet quam vehicula elementum sed sit amet
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
