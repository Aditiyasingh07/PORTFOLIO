import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "../Skills/Skill.css";
import contact from "/src/assets/contact.png"
import insta from "/src/assets/icons/instagram.png"
import git from "/src/assets/icons/github.png"
import link from "/src/assets/icons/linkedin.png"
import x from "/src/assets/icons/twitter.png"

export const Contact = () => {
  return (
    <>
      <section className="md:h-screen h-full flex md:flex-row flex-col md:mt-20 mt-0">
        <div className="md:w-1/2 w-full flex md:mt-0 mt-[-55px]  drop-shadow-[30px_0px_10px_rgba(0,0,0,1)]">
          <img
            className="md:w-[500px] w-[200px] md:h-[500px] h-[200px] m-auto"
            src={contact}
            alt=""
          />
        </div>
        <div className=" md:w-1/2 w-full flex items-center ">
          <div className="contact md:w-1/2 w-[60%] md:mx-0 mx-5">
            <form action="https://formspree.io/f/xpwarpye" method="POST" >
              <div className="flex flex-col mt-10">
                <label
                  htmlFor="Full name"
                  className="text-center md:text-xl text-sm font-bold text-white mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="Full name"
                  placeholder="Enter Your Name"
                  required
                  className="h-10 w-full pl-5 placeholder:text-xs placeholder:text-blue-gray-800 rounded-2xl bg-[#b0b0b0] mb-5 text-[#070707]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className=" mb-3 text-center font-bold md:text-xl text-sm text-[#070707]"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  className="h-10 outline-none rounded-2xl pl-5 bg-[#b0b0b0] mb-5 text-[#070707] placeholder:text-xs placeholder:text-blue-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone no."
                  className="text-center md:text-xl text-sm mb-3 font-bold text-[#070707]"
                >
                  Contact No.
                </label>
                <input
                  type="number"
                  placeholder="Enter Your contact no"
                  name="Phone no."
                  className=" placeholder:text-xs placeholder:text-blue-gray-800 h-10 mb-5 outline-none rounded-2xl pl-5 bg-[#b0b0b0] text-[#070707]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-center md:text-xl text-sm font-bold mb-3 text-white"
                >
                  Message
                </label>
                <textarea
                  name="message"
                  id=""
                  cols="30"
                  rows="10"
                  required
                  placeholder="Enter Your Massage"
                  className=" bg-[#b0b0b0] text-[#070707] outline-none rounded-2xl placeholder:text-xs placeholder:text-blue-gray-800 pl-5 pt-3"
                ></textarea>
              </div>
              <div className=" mt-5 relative ">
                <div className="w-12 absolute h-12 bg-blue-800 rounded-full"></div>
                <div className="w-12 absolute top-5 md:right-20 left-48 h-12 bg-yellow-800 rounded-full"></div>
                <input
                  type="submit"
                  value="Send"
                  className="glass-card-sub md:text-2xl text-xl rounded-xl w-full py-2"
                />
              </div>
            </form>
          </div>
          <div className="social w-1/2 flex justify-center h-full items-center">
            <div className="flex social-card rounded-3xl bg-[#FAF9F6]  md:w-28 w-20 justify-center md:h-28 h-20 flex-wrap ">
              <Link
                className="flex items-center"
                to="https://github.com/Aditiyasingh07"
              >
                <Tooltip
                  content="Github"
                  className="bg-[#f5f5f5] text-black"
                  animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                  }}
                >
                  <img
                    src={git}
                    alt="#logo"
                    to="https://github.com/Aditiyasingh07"
                    style={{ target: "_blank" }}
                    className="md:h-12 h-8 duration-700 p-1 blur-0 hover:blur-[1px]"
                  />
                </Tooltip>
              </Link>
              <Link className="flex items-center" to="/">
                <Tooltip
                  content="Instagram"
                  className="bg-[linear-gradient(45deg,#f09433_0%,#e6683c_25%,#dc2743_50%,#cc2366_75%,#bc1888_100%)]"
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
              <Link className="flex items-center" to="/">
                <Tooltip
                  content="Twitter X"
                  className="bg-[#000000]"
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
              <Link className="flex items-center" to="/">
                <Tooltip
                  content="Linkedin"
                  className="bg-[#0077B5]"
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
        </div>
      </section>
    </>
  );
};
