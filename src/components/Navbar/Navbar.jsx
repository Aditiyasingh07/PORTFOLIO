import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import {Tooltip} from "@material-tailwind/react"
import gsap from "gsap"


export const Navbar = () => {

  const letterref = useRef(null)
   
  useEffect(()=>{
    gsap.to(letterref.current, {
      rotationX: 360,
      duration:2,
      repeat: -1,
      ease: "power1.inOut"
    })
  }, [])

  return (
    <>
      <header className="flex sticky z-50 top-4">
        <nav className="flex w-[80%] items-center h-14 bg-[#FAF9F6] m-auto text-white rounded-l-xl bg-opacity-40 shadow-[0_30px_50px_-10px_rgba(0,0,0,1.3)] px-5 ">
          <div className="flex justify-between flex-wrap items-cente mx-auto max-w-screen-xl w-screen">
            <Link className="flex items-center">
              <img
                src="src/assets/icons/mylogo.png"
                alt="#logo"
                className="h-[60px] bg-[#353935] p-1 rounded-3xl"
              />
              <h1 className="text-4xl flex text-[#FAF9F6] font-bold ml-5" >Ad<div ref={letterref}>i</div></h1>
            </Link>
            <div
              className="hidden items-center w-full lg:flex lg:w-auto lg:order-1"
              id="mobile-menu-2"
            >
              <ul className="nav-items flex font-sans mt-4 font-bold lg:flex-row lg:space-x-8 lg:mt-0">
                <li>
                  <NavLink
                    to="/"
                    smooth={true}
                    className={({ isActive }) =>
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${
                        isActive ? "text-[#353935]" : "text-[#FAF9F6]"
                      } border-gray-100 lg:hover:bg-transparent lg:border-0 lg:p-0 text-[1.2rem] hover:text-orange-700 `
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
                      `block py-2 pr-4 pl-3 duration-200 border-b
                      ${isActive ? "text-[#353935]" : "text-[#FAF9F6]"}
                       border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-[1.2rem]`
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
                      `block py-2 pr-4 pl-3 duration-200 border-b 
                      ${isActive ? "text-[#353935]" : "text-[#FAF9F6]"}
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-[1.2rem]`
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
                      `block py-2 pr-4 pl-3 duration-200 border-b 
                      ${isActive ? "text-[#353935]" : "text-[#FAF9F6]"}
                      border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-[1.2rem]`
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
                      `block py-2 pr-4 pl-3 duration-200 border-b border-gray-100 hover:bg-gray-50
                    ${isActive ? "text-[#353935]" : "text-[#FAF9F6]"}
                     lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0 text-[1.2rem]`
                    }
                  >
                    Contact
                  </NavLink>
                </li>
              </ul>
            </div>
            <div className="social flex items-center">
              <div className="flex bg-[#FAF9F6] rounded-l-2xl bg-opacity-80 ">
              <Link className="flex items-center" to="https://github.com/Aditiyasingh07">
              <Tooltip content="Github"
                    className="bg-[#f5f5f5] text-black"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
              <img
                src="src/assets/icons/github.png"
                alt="#logo"
                to="https://github.com/Aditiyasingh07"
                style={{target: '_blank'}}
                className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
              />
              </Tooltip>
            </Link>
            <Link className="flex items-center" to="/">
            <Tooltip content="Instagram"
                    className="bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
              <img
                src="src/assets/icons/instagram.png"
                alt="#logo"
                className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
              />
              </Tooltip>
            </Link>
            <Link className="flex items-center" to="/">
            <Tooltip content="Twitter X"
                    className="bg-[#000000]"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
              <img
                src="src/assets/icons/twitter.png"
                alt="#logo"
                className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
              />
              </Tooltip>
            </Link>
            <Link className="flex items-center" to="/">
            <Tooltip content="Linkedin"
                    className="bg-[#0077B5]"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
              <img
                src="src/assets/icons/Linkedin.png"
                alt="#logo"
                className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
              />
              </Tooltip>
            </Link>
              </div>
          </div>
            </div>
        </nav>
      </header>
    </>
  );
};


