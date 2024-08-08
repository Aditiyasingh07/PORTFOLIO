import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import "../Skills/Skill.css";

export const Contact = () => {
  return (
    <>
      <section className="h-screen flex mt-20">
        <div className="w-1/2 flex drop-shadow-[30px_0px_10px_rgba(0,0,0,1)]">
          <img
            className="w-[500px] h-[500px] m-auto"
            src="src\assets\contact.png"
            alt=""
          />
        </div>
        <div className=" w-1/2 flex items-center">
          <div className="contact w-1/2">
            <form action="https://formspree.io/f/xpwarpye" method="POST" >
              <div className="flex flex-col mt-10">
                <label
                  htmlFor="Full name"
                  className="text-center font-bold text-white mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="Full name"
                  placeholder="Enter Your Name"
                  required
                  className="h-10 border-none w-full pl-5 rounded-2xl bg-[#b0b0b0] placeholder:text-white mb-5 text-brown-50"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className=" mb-3 text-center font-bold text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  className="h-10 border-none rounded-2xl pl-5 bg-[#b0b0b0] mb-5 text-brown-50 placeholder:text-white"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone no."
                  className="text-center mb-3 font-bold text-white"
                >
                  Contact No.
                </label>
                <input
                  type="number"
                  placeholder="Enter Your contact no"
                  name="Phone no."
                  className=" placeholder:text-white h-10 mb-5 border-none rounded-2xl pl-5 bg-[#b0b0b0] text-brown-50"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-center font-bold mb-3 text-white"
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
                  className=" bg-[#b0b0b0] text-black rounded-2xl placeholder:text-white pl-5 pt-3"
                ></textarea>
              </div>
              <div className=" mt-[-35px] ">
                <div className="w-12 relative top-12 h-12 bg-blue-800 rounded-full"></div>
                <div className="w-12 relative top-20 left-72 mt-[-45px] h-12 bg-yellow-800 rounded-full"></div>
                <input
                  type="submit"
                  value="send"
                  className="glass-card-sub text-2xl rounded-xl w-full py-2"
                />
              </div>
            </form>
          </div>
          <div className="social w-1/2 flex justify-center h-full items-center">
            <div className="flex social-card rounded-3xl bg-[#FAF9F6] w-28 justify-center h-28 flex-wrap ">
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
                    src="src/assets/icons/github.png"
                    alt="#logo"
                    to="https://github.com/Aditiyasingh07"
                    style={{ target: "_blank" }}
                    className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
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
                    src="src/assets/icons/instagram.png"
                    alt="#logo"
                    className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
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
                    src="src/assets/icons/twitter.png"
                    alt="#logo"
                    className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
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
                    src="src/assets/icons/Linkedin.png"
                    alt="#logo"
                    className="h-12 duration-700 p-1 blur-0 hover:blur-[1px]"
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
