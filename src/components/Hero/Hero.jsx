import React, { useRef, useEffect } from "react";
import "./hero.css";
import gsap from "gsap";
import { About, Skill, Project, Contact } from "../Index/Index";
import naruto from "/src/assets/naruto.png"
import fan from "/src/assets/icons/fan.svg"

export const Hero = () => {

  const fanref = useRef(null)

  useEffect(()=>{
    gsap.to(fanref.current, {
      rotate: 360,
      duration: 2,
      repeatDelay: 2,
      repeat: -1,
      ease: "power1.inOut",
      // yoyo: true
    })
  }, [])


  return (
    <>
      <div className=" h-full md:mt-[-58px] mt-14">
        <aside className="flex md:flex-row flex-col justify-between rounded-lg">
          <div className=" md:w-1/2 w-full first bg-center md:bg-auto bg-cover mt-[-65px] md:h-auto h-28 [clip-path:polygon(0%_0%,80%_0%,100%_50%,90%_100%,0%_100%)]"></div>
          <div className="sec md:flex-col flex-row-reverse md:w-1/2 w-full flex items-center md:mt-28 mt-5 ">
            <div className=" w-[50%] md:mr-0 mr-5 drop-shadow-[30px_0px_8px_rgba(255,255,255,0.1)]">
              <img src={naruto} alt="#gif" />
            </div>
            <div className="flex font-pera flex-col mt-7 justify-center text-center sub-first h-full text-[#FAF9F6]">
              <div className=" flex justify-between md:ml-0 ml-3 items-center md:w-[103%]">
              <h1 className=" md:ml-20 md:text-[2rem] text-[1rem]">
                Hello, I'm Aditiya Singh
              </h1>
              <div ref={fanref} className="w-8">
                <img src={fan} alt="fanicon" />
              </div>
              </div>
              <div className=" flex justify-center">
                <h1 className="md:text-[4rem] text-[1.5rem] font-bold">
                  Front-End<br></br> Web Devloper
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
