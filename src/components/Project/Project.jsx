import React, { useRef, useEffect } from "react";
import "@fontsource/aileron";
import gsap from "gsap";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Boxthree } from "../proboxs/Boxthree";
import { Boxtwo } from "../proboxs/Boxtwo";
import { Boxone } from "../proboxs/Boxone";
import host from "/src/assets/icons/host.png"
import source from "/src/assets/icons/sourse.svg"
// import { Projectone } from "../Index/Index";

gsap.registerPlugin(ScrollTrigger);

export const Project = () => {
  const pros = useRef(null);
  const probox = useRef(null);
  const proboxone = useRef(null);
  const proboxtwo = useRef(null);


  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: pros.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(probox.current, { opacity: 0, scaleX: 0.5 }, { opacity: 1, scaleX: 1 });
    tl.fromTo(proboxone.current, { opacity: 0, scaleY: 0.5 }, { opacity: 1, scaleY: 1 });
    tl.fromTo(
      proboxtwo.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );
  }, []);

  return (
    <>
      <section
        className=" flex justify-center md:mt-[200px] mt-[400px] md:h-screen items-center  [clip-path:polygon(0%_0%,95%_0%,100%_100%,50%_80%,0%_100%)]"
        ref={pros}
      >
        <div className=" md:bg-[#b0b0b0] bg-transparent rounded-2xl md:w-[70%] w-[100%] h-full md:p-10 p-7 md:py-0 py-20 flex justify-center items-center">
          <div className=" flex md:w-[85%] gap-5 mt-[-60px] md:flex-wrap md:flex-row flex-col items-center justify-center ">
          <p className=" md:hidden flex md:mb-0 mb-8 md:mt-0 mt-14 md:text-5xl text-3xl font-pera text-center text-[#FAF9F6] font-extrabold ">
          Projects
        </p>
            <div
              className="bg-[#353940] md:w-[48%] md:h-1/2 h-1/2 w-[100%] md:p-8 p-5 rounded-2xl hover:bg-[#060651] duration-700"
              ref={probox}
            >
              <Boxone />
            </div>

            <div
              className="bg-[#353940] md:p-8 p-5  md:w-[48%] w-[100%] rounded-2xl hover:bg-[#7e4705] duration-700"
              ref={proboxone}
            >
              <div className=" hover:scale-105 duration-500">
              <Boxtwo />
              </div>
            </div>
            <div
              className="bg-[#353940] md:p-8 p-5 md:w-[48%] w-[100%] md:mt-0 mt-2 rounded-2xl duration-700 hover:bg-[#004a4b] md:mb-0 mb-20 "
              ref={proboxtwo}
            >
              <div className=" hover:scale-105 duration-500">
              <Boxthree />
              <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] md:rounded-2xl rounded-md">
                <Tooltip
                  content="Host link"
                  className="bg-[#1e1e1e]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <Link
                    to={
                      "https://aditiyasingh07.github.io/Collage-major-project/"
                    }
                    target="_blank"
                  >
                    <img
                      src={host}
                      alt="#hosticon"
                      className="md:w-[35px] w-[27px]"
                    />
                  </Link>
                </Tooltip>
                <Tooltip
                  content="Source Code"
                  className="bg-[#1e1e1e]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <Link
                    to={
                      "https://github.com/Aditiyasingh07/Collage-major-project.git"
                    }
                    target="_blank"
                  >
                    <img
                      src={source}
                      alt="#sourceicon"
                      className="md:w-[20px] w-[17px]"
                    />
                  </Link>
                </Tooltip>
              </div>
              </div>
            </div>
          </div>
        </div>
        <p className="md:text-5xl text-3xl md:flex hidden text-center text-[#FAF9F6] font-extrabold md:rotate-90 absolute md:right-[-17px] font-pera ">
          Projects
        </p>
      </section>
    </>
  );
};
