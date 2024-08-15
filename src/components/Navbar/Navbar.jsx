import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { Tooltip } from "@material-tailwind/react";
import gsap from "gsap";
import insta from "/src/assets/icons/instagram.png"
import git from "/src/assets/icons/github.png"
import link from "/src/assets/icons/linkedin.png"
import x from "/src/assets/icons/twitter.png"
import mylogo from "/src/assets/icons/mylogo.png"
import cloud from "/src/assets/icons/cloud.png"
import close from "/src/assets/icons/close.svg"

export const Navbar = () => {

  const letterref = useRef(null);

  useEffect(() => {
    gsap.to(letterref.current, {
      rotationX: 360,
      duration: 2,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);

  return (
    <>
      <header className="flex sticky z-50 top-4">
        <nav className="flex w-[90%] items-center h-14 bg-[#FAF9F6] m-auto text-white rounded-l-xl bg-opacity-40 shadow-[0_30px_50px_-10px_rgba(0,0,0,1.3)] md:px-5 px-1 ">
          <div className="flex md:justify-evenly md:px-0 px-1 flex-wrap items-cente mx-auto max-w-screen-xl w-screen">
            <div className="flex items-center ">
              <img
                src={mylogo}
                alt="#logo"
                className=" md:h-[60px] h-[40px] bg-[#353935] p-1 rounded-3xl"
              />
              <h1 className="md:text-4xl text-2xl flex text-[#FAF9F6] font-bold md:ml-5 ml-1">
                Ad<div ref={letterref}>i</div>
              </h1>
            </div>
            <div className=" ">
            <div
              className=" h-full items-center w-full flex "
              id="mobile-menu-2"
            >
              <ul className= "md:static nav-items flex font-serif md:mt-4 mt-[-17px] md:py-0 py-10 font-semibold md:flex-row md:space-x-8 md:w-full absolute top-0 left-0 md:translate-x-0 translate-x-full flex-col w-full text-center md:bg-transparent bg-[#b0b0b0] md:h-10 h-screen ">

              {/* {openMenu ? "font-serif fixed left-0 top-0 font-semibold text-center flex-row translate-x-0 h-[100%] pt-20 w-full bg-[#b0b0b0]" : " translate-x-full font-serif flex flex-col absolute right-0 top-0 text-center w-1/2 font-semibold h-13 md:static md:flex-row md:translate-x-0 md:w-[400px] md:justify-between "} */}
                <li>
                  <NavLink
                    to="/"
                    smooth={true}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                      ${
                        isActive ? "text-[#070707]" : "text-[#FAF9F6]"
                      } md:hover:bg-transparent md:border-0 md:p-0 text-[1.2rem] md:hover:text-orange-700 hover:text-[#070707] `
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/about"
                    smooth={true}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                      ${isActive ? "text-[#070707]" : "text-[#FAF9F6]"}
                       lg:hover:bg-transparent lg:border-0 md:hover:text-orange-700 hover:text-[#070707] lg:p-0 text-[1.2rem]`
                    }
                  >
                    About
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/skill"
                    smooth={true}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 
                      ${isActive ? "text-[#070707]" : "text-[#FAF9F6]"}
                       lg:hover:bg-transparent lg:border-0 md:hover:text-orange-700 hover:text-[#070707] lg:p-0 text-[1.2rem]`
                    }
                  >
                    Skill
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/project"
                    smooth={true}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                      ${isActive ? "text-[#070707]" : "text-[#FAF9F6]"}
                      lg:hover:bg-transparent lg:border-0 md:hover:text-orange-700 hover:text-[#070707] lg:p-0 text-[1.2rem]`
                    }
                  >
                    Project
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/contact"
                    smooth={true}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200
                    ${isActive ? "text-[#353935]" : "text-[#FAF9F6]"}
                     lg:hover:bg-transparent lg:border-0 md:hover:text-orange-700 hover:text-[#070707] lg:p-0 text-[1.2rem]`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            </div>
            <div className="social flex md:ml-0 ml-3 items-center">
              <div className="flex bg-[#FAF9F6] rounded-l-2xl bg-opacity-80 ">
                <Link
                  to="https://github.com/Aditiyasingh07"
                  target="_blank"
                >
                  <Tooltip
                    content="Github"
                    className="bg-[#f5f5f5] text-black font-pera"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={git}
                      alt="#logo"
                      className="md:h-12 h-8 duration-700 p-1 blur-0 hover:scale-50"
                    />
                  </Tooltip>
                </Link>
                <Link className="flex items-center" to="https://www.instagram.com/aditiyasingh73/" target="_blank">
                  <Tooltip
                    content="Instagram"
                    className="bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)] font-pera"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={insta}
                      alt="#logo"
                      className="md:h-12 h-8 duration-700 p-1 blur-0 hover:blur-[1px]"
                    />
                  </Tooltip>
                </Link>
                <Link className="flex items-center" to="https://x.com/Aditiya0singh?t=Nq9FHsDdWZm6mmLizfIPZQ&s=09" target="_blank">
                  <Tooltip
                    content="Twitter X"
                    className="font-pera bg-[#000000]"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={x}
                      alt="#logo"
                      className="md:h-12 h-8 duration-700 p-1 blur-0 hover:blur-[1px]"
                    />
                  </Tooltip>
                </Link>
                <Link className="flex items-center" to="https://www.linkedin.com/in/aditiya-singh-581964316?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank">
                  <Tooltip
                    content="Linkedin"
                    className="bg-[#0077B5] font-pera"
                    animate={{
                      mount: { scale: 1, y: 0 },
                      unmount: { scale: 0, y: 25 },
                    }}
                  >
                    <img
                      src={link}
                      alt="#logo"
                      className="md:h-12 h-8 duration-700 p-1 blur-0 hover:blur-[1px]"
                    />
                  </Tooltip>
                </Link>
              </div>
            </div>
            <Link 
            to={"https://github.com/Aditiyasingh07/PORTFOLIO.git"}
            target="_blank"
            className=" flex md:hidden m-auto w-7 h-7 ">
              <img src={cloud} alt="cloudicon" />
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};
