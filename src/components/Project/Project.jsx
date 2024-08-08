import React, { useRef, useEffect } from "react";
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

    tl.fromTo(probox.current, { opacity: 0, x: -100 }, { opacity: 1, x: -0 });
    tl.fromTo(proboxone.current, { opacity: 0, x: 100 }, { opacity: 1, x: 0 });
    tl.fromTo(
      proboxtwo.current,
      { opacity: 0, y: 200 },
      { opacity: 1, y: -10 }
    );
  }, []);

  return (
    <>
      <section
        className=" flex justify-center mt-[250px] items-center h-screen [clip-path:polygon(0%_0%,95%_0%,100%_100%,50%_80%,0%_100%)]"
        ref={pros}
      >
        <div className=" bg-[#b0b0b0] rounded-2xl h-full mx-[20%] p-10 flex justify-center items-center">
          <div className="flex flex-row mt-[-60px] flex-wrap gap-5 items-center justify-center ">
            <div>
            <div
              className="bg-[#353940] p-5 w-[300px] rounded-2xl hover:bg-[#93C572] duration-700 hover:rounded-md "
              ref={probox}
            >
              <Boxone/>
            </div>
            {/* <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] rounded-2xl">
                <Tooltip content="Host link" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://aditiyasingh07.github.io/Collage-major-project/"} target="_blank">
                  <img src="src\assets\icons\host.png" alt="#hosticon" width="35px" />
                </Link>
                </Tooltip>
                <Tooltip content="Source Code" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://github.com/Aditiyasingh07/Collage-major-project.git"} target="_blank">
                <img src="src\assets\icons\sourse.svg" alt="#sourceicon" width="20px" />
                </Link>
                </Tooltip>
              </div> */}
            </div>
            
            <div
              className="bg-[#353940] p-5 w-[300px] rounded-2xl hover:bg-[#AD6D00] duration-700 hover:rounded-md"
              ref={proboxone}
            >
              <Boxtwo/>
            </div>
            <div
              className="bg-[#353940] p-5 w-[300px] rounded-2xl duration-700 hover:bg-[#00008B] hover:rounded-md "
              ref={proboxtwo}
            >
              <Boxthree/>
          </div>
        </div>
        </div>
        <p className="text-5xl text-center text-[#FAF9F6] font-extrabold rotate-90 absolute right-0">
          Projects
        </p>
      </section>
    </>
  );
};
