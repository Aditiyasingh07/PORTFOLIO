import React, { useRef, useEffect } from "react";
import "@fontsource/aileron";
import gsap from "gsap";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Boxone } from "../proboxs/Boxone";
import { Boxtwo } from "../proboxs/Boxtwo";
import { Boxthree } from "../proboxs/Boxthree";
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
        className=" flex justify-center md:mt-[250px] mt-32 md:h-screen items-center  [clip-path:polygon(0%_0%,95%_0%,100%_100%,50%_80%,0%_100%)]"
        ref={pros}
      >
        <div className=" md:bg-[#b0b0b0] bg-transparent rounded-2xl md:w-[70%] w-[100%] md:mr-0 mr-12 md:ml-0 ml-5 h-full md:p-10 p-1 md:py-0 py-20 flex justify-center items-center">
          <div className=" flex md:w-[85%] gap-5 mt-[-60px] md:flex-wrap md:flex-row flex-col items-center justify-center ">
            <div
              className="bg-[#353940] md:w-[48%] w-[100%] p-5 rounded-2xl hover:bg-[#060651] duration-700"
              ref={probox}
            >
              <Boxone />
              <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] rounded-2xl">
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
                      src="src\assets\icons\host.png"
                      alt="#hosticon"
                      width="35px"
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
                      src="src\assets\icons\sourse.svg"
                      alt="#sourceicon"
                      width="20px"
                    />
                  </Link>
                </Tooltip>
              </div>
            </div>

            <div
              className="bg-[#353940] p-5 md:w-[48%] w-[100%] rounded-2xl hover:bg-[#AD6D00] duration-700"
              ref={proboxone}
            >
              <Boxtwo />
            </div>
            <div
              className="bg-[#353940] p-5 md:w-[48%] w-[100%] md:mt-0 mt-2 rounded-2xl duration-700 hover:bg-[#00008B] md:mb-0 mb-20 "
              ref={proboxtwo}
            >
              <Boxthree />
            </div>
          </div>
        </div>
        <p className="md:text-5xl text-3xl text-center text-[#FAF9F6] font-extrabold rotate-90 absolute md:right-0 md:left-[1200px] left-[270px] ">
          Projects
        </p>
      </section>
    </>
  );
};
