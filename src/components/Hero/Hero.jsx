import React from "react";
import "./hero.css";
import { About, Skill, Project, Contact } from "../Index/Index";
import naruto from "/src/assets/naruto.png"

export const Hero = () => {
  return (
    <>
      <div className=" h-full md:mt-[-58px] mt-14">
        <aside className="flex md:flex-row flex-col justify-between rounded-lg">
          <div className=" md:w-1/2 w-full first bg-center md:bg-auto bg-cover mt-[-65px] md:h-auto h-28 [clip-path:polygon(0%_0%,80%_0%,100%_50%,90%_100%,0%_100%)]"></div>
          <div className="loader"></div>
          <div className="sec md:flex-col flex-row-reverse md:w-1/2 w-full flex items-center md:mt-28 mt-[-60px] ">
            <div className=" w-[50%] md:mr-0 mr-5 drop-shadow-[30px_50px_10px_rgba(0,0,0,0.55)]">
              <img src={naruto} alt="#gif" />
            </div>
            <div className="flex flex-col mt-7 justify-center text-center sub-first h-full text-[#FAF9F6]">
              <h1 className=" md:text-[2rem] text-[1rem]">
                Hello, I'm Aditiya Singh
              </h1>
              <div className="dev flex justify-center">
                <h1 className="name md:text-[4rem] text-[1.5rem] font-bold">
                  Front-End Web Devloper
                </h1>
              </div>
            </div>
          </div>
        </aside>
      </div>
      <About />
      <Skill />
      <Project />
      <Contact />
    </>
  );
};
