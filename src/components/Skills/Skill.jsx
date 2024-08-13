import React, { useEffect, useRef } from "react";
import { Tooltip } from "@material-tailwind/react";
import { gsap } from "gsap";
import "./Skill.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import skillogo from "/src/assets/skills/skill.png"
import reactlogo from "/src/assets/skills/reactlogo.png"
import gitlogo from "/src/assets/skills/git.png"
import vscode from "/src/assets/skills/vscodelogo.png"
import fontendlogo from "/src/assets/skills/frontend.png"
import hostlogo from "/src/assets/skills/hosting.png"
import weblogo from "/src/assets/skills/web.png"
import toollogo from "/src/assets/skills/tool.png"
import react from "/src/assets/skills/react.png"
import tailwind from "/src/assets/skills/tailwind.png"
import js from "/src/assets/skills/javascript.png"
import html from "/src/assets/skills/html.png"
import css from "/src/assets/skills/css.png"
import redux from "/src/assets/skills/redux.png"
import git from "/src/assets/skills/github.png"
import vercel from "/src/assets/skills/vercel.svg"
import blog from "/src/assets/projects/blog.png"
import scrap from "/src/assets/projects/Scrap.svg"
import todo from "/src/assets/projects/todo.png"
import npm from "/src/assets/skills/npm.png"
import vs from "/src/assets/skills/vscode.png"

gsap.registerPlugin(ScrollTrigger);

export const Skill = () => {
  const skillsRef = useRef(null);
  const skillone = useRef(null);
  const skilltwo = useRef(null);
  const skillthree = useRef(null);
  const skillfour = useRef(null);
  const logoone = useRef(null);
  const logotwo = useRef(null);
  const logothree = useRef(null);
  const logofour = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 80%",
        end: "top 30%",
        scrub: true,
      },
    });

    tl.fromTo(
      skillone.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );
    tl.fromTo(
      skilltwo.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );
    tl.fromTo(
      skillthree.current,
      { opacity: 0, x: -400 },
      { opacity: 1, x: 0 }
    );
    tl.fromTo(
      skillfour.current,
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 }
    );

    tl.fromTo(
      logoone.current,
      { opacity: 0, y: 500 },
      { opacity: 1, y: 0 }
    );
    tl.fromTo(
      logotwo.current,
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0 }
    );
    tl.fromTo(
      logothree.current,
      { opacity: 0, y: -500 },
      { opacity: 1, y: 0 }
    );
    tl.fromTo(
      logofour.current,
      { opacity: 0, y: 500 },
      { opacity: 1, y: 0 }
    );
  }, []);

  return (
    <>
      <section className=" md:h-screen h-full w-full mt-12 " ref={skillsRef}>
        <h1 className=" md:text-5xl text-3xl font-pera text-center mb-20 text-[#FAF9F6] font-extrabold">
          Skills
        </h1>
        <div className="flex items-center">
          <div className="pl-7 md:flex hidden">
            <img
              className="drop-shadow-[30px_0px_10px_rgba(255,255,255,0.2)]"
              src={skillogo}
              alt=""
              width="700px"
            />
          </div>
          <div
            className=" flex md:flex-row md:mt-0 mt-[-25px] md:px-0 px-7 flex-col flex-wrap gap-5 w-full justify-center"
          >
            <div className="md:w-1/3 w-full flex relative flex-col gap-y-2" 
            ref={skillone}
            >
              {/*  */}
              <div className=" absolute md:top-0 top-[-30px] right-5">
                  <img
                    src={reactlogo}
                    alt=""
                    width="100px"
                    ref={logoone}
                  />
                </div>
              <div className="z-10 glass-card-sub">
                <img
                  src={fontendlogo}
                  alt="#weblogo"
                  width="30px"
                />
                <h3 className="font-extrabold font-serif md:text-xl text-sm">
                  Front-end<br></br>Devloper
                </h3>
                <p className=" md:text-xl text-sm font-sans mt-2">
                Front-end web development involves designing and building the user interface of websites using React js.
                </p>
                <div className="mt-3 flex md:w-[75%] w-[85%]  justify-around">
                  <Tooltip
                    content="Reactjs"
                    className="bg-[#00d8ff]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={react}
                      alt="#reactlogo"
                      width="30px"
                    />
                  </Tooltip>
                  <Tooltip
                    content="Redux"
                    className="bg-[#764abc]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={redux}
                      alt="#reactlogo"
                      width="30px"
                    />
                  </Tooltip>
                  <Tooltip
                    content="Tailwind"
                    className="bg-[#3490dc]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={tailwind}
                      alt="#tailwindlogo"
                      width="30px"
                    />
                  </Tooltip>
                  <Tooltip
                    content="JavaScript"
                    className="bg-[#f7df1e]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={js}
                      alt="#javascriptlogo"
                      width="30px"
                    />
                  </Tooltip>
                  <Tooltip
                    content="HTML"
                    className="bg-[#e34f26]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={html}
                      alt="#htmllogo"
                      width="30px"
                    />
                  </Tooltip>
                  <Tooltip
                    content="CSS"
                    className="bg-[#002561]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={css}
                      alt="#csslogo"
                      width="30px"
                    />
                  </Tooltip>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex relative flex-col " 
            ref={skilltwo}
            >
              {/*  */}
              <div className=" absolute right-[-20px] top-[-16px]">
              <img
             src={gitlogo} alt="" width="100px" ref={logotwo} />
              </div>
              <div className="glass-card-sub h-full"> 
              <img
                src={hostlogo}
                alt="#weblogo"
                width="30px"
              />
              <h3 className=" font-extrabold font-serif md:text-xl text-sm">
                Hosting & <br></br> Deployement
              </h3>
              <p className="md:text-xl font-sans text-sm mt-2">
              Optimized Hosting and deployment make websites accessible
              online and operational.
              </p>
              <div className="mt-3 flex md:w-1/6 w-[80px] justify-around ">
                <Tooltip
                  content="GitHub"
                  className="bg-[#333]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={git}
                    alt="#reactlogo"
                    width="30px"
                  />
                </Tooltip>
                <Tooltip
                  content="Vercel"
                  className="bg-[#171717]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={vercel}
                    alt="#tailwindlogo"
                    width="30px"
                  />
                </Tooltip>
              </div>
              </div>
            </div>
            <div className="md:w-1/2 w-full flex relative flex-col" 
            ref={skillthree}
            >
              {/*  */}
              <div className=' h-20 w-20 top-[-15px] right-32 rounded-full bg-yellow-800 absolute' ref={logothree}>
                </div>
              <div className=" glass-card-sub h-full">
              <img
                src={weblogo}
                alt="#weblogo"
                width="30px"
              />
              <h3 className=" font-extrabold font-serif md:text-xl text-sm">
                Web <br></br> Applications
              </h3>
              <p className="md:text-xl text-sm font-sans mt-3">
              Explore our web app: user-friendly, efficient, and feature-rich
              solution.
              </p>
              <div className="mt-3 flex md:w-1/4 w-[110px] justify-around ">
                <Tooltip
                  content="Blog Page"
                  className="bg-[#00008B]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={blog}
                    alt="#reactlogo"
                    width="30px"
                  />
                </Tooltip>
                <Tooltip
                  content="ScrapWallha"
                  className="bg-[#93C572]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={scrap}
                    alt="#tailwindlogo"
                    width="30px"
                  />
                </Tooltip>
                <Tooltip
                  content="ToDo"
                  className="bg-[#AD6D00]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={todo}
                    alt="#tailwindlogo"
                    width="30px"
                  />
                </Tooltip>
              </div>
              </div>
            </div>
            <div className="md:w-1/3 w-full flex relative flex-col " 
            ref={skillfour}
            >
              {/*  */}
              <div className=' absolute top-[160px] left-[210px] '>
              <img 
                 src={vscode} alt="" width="100px" ref={logofour} />
              </div>
              <div className="glass-card-sub">
              <img
                src={toollogo}
                alt="#weblogo"
                width="30px"
              />
              <h3 className=" font-extrabold md:text-xl font-serif text-sm">Web Tools</h3>
              <p className="md:text-xl text-sm font-sans mt-3">
                Web tools enhance productivity by streamlining tasks and
                improving efficiency.
              </p>
              <div className="mt-3 flex w-1/3 justify-evenly">
                <Tooltip
                  content="vs code"
                  className="bg-[#0078d7]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={vs}
                    alt="#reactlogo"
                    width="30px"
                  />
                </Tooltip>
                <Tooltip
                  content="npm"
                  className="bg-[#cc3534]"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={npm}
                    alt="#reactlogo"
                    width="30px"
                  />
                </Tooltip>
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};