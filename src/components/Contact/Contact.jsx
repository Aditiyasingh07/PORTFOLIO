import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import "../Skills/Skill.css";
import "./contact.css"
import contact from "/src/assets/contact.png"
import insta from "/src/assets/icons/instagram.png"
import git from "/src/assets/icons/github.png"
import link from "/src/assets/icons/linkedin.png"
import x from "/src/assets/icons/twitter.png"
import u from "/src/assets/icons/u.svg"
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const Contact = () => {

  const boxoneani = useRef(null)
  const boxtwoani = useRef(null)

  useEffect(()=>{
    gsap.to(boxoneani.current, {
      x: 30,
      duration: 4,
      repeat: -1,
      yoyo: true,
     })
  }, [])

  useEffect(()=>{
    gsap.to(boxtwoani.current, {
      x: -30,
      duration: 4,
      repeat: -1,
      yoyo: true,
     })
  }, [])


  const shapeRef = useRef(null);

  useEffect(() => {
    gsap.to(shapeRef.current, {
      x: window.innerWidth - 200, // Moves the shape across the screen
      scrollTrigger: {
        trigger: shapeRef.current,
        start: 'top center', // Start animation when the top of the shape hits the center of the viewport
        end: 'bottom top', // End animation when the bottom of the shape reaches the top of the viewport
        scrub: true, // Smoothly animate the shape as you scroll
      }
    });
  }, []);

  return (
    <>
      <section className="md:h-screen h-full flex md:flex-row flex-col md:mt-20 mt-0">
        <div className="md:w-1/2 w-full flex md:mt-0 mt-[-55px]  drop-shadow-[30px_0px_10px_rgba(0,0,0,1)]">
          <img
            className="md:w-[500px] drop-shadow-[30px_0px_10px_rgba(255,255,255,0.1)] w-[200px] md:h-[500px] h-[200px] m-auto"
            src={contact}
            alt=""
          />
        </div>
        <div className=" md:w-1/2 w-full flex items-center ">
          <div className="contact md:w-1/2 w-[80%] md:ml-0 ml-3">
            <form action="https://formspree.io/f/xpwarpye" method="POST" >
              <div className="flex flex-col mt-10">
                <label
                  htmlFor="Full name"
                  className="text-center font-serif md:text-xl text-sm font-bold text-white mb-3"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  name="Full name"
                  placeholder="Enter Your Name"
                  required
                  className="md:h-10 h-8 w-full pl-5 placeholder:text-xs placeholder:text-blue-gray-800 outline-none md:rounded-2xl rounded-md bg-[#b0b0b0] mb-5 text-[#070707]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="email"
                  className=" mb-3 text-center font-bold md:text-xl text-sm font-serif text-white"
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  required
                  name="email"
                  className="md:h-10 h-8 outline-none md:rounded-2xl rounded-md pl-5 bg-[#b0b0b0] mb-5 text-[#070707] placeholder:text-xs placeholder:text-blue-gray-800"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="phone no."
                  className="text-center md:text-xl text-sm mb-3 font-bold font-serif text-white"
                >
                  Contact No.
                </label>
                <input
                  type="number"
                  placeholder="Enter Your contact no"
                  name="Phone no."
                  className=" placeholder:text-xs placeholder:text-blue-gray-800 md:h-10 h-8 mb-5 outline-none md:rounded-2xl rounded-md pl-5 bg-[#b0b0b0] text-[#070707]"
                />
              </div>
              <div className="flex flex-col">
                <label
                  htmlFor="message"
                  className="text-center md:text-xl text-sm font-bold mb-3 font-serif text-white "
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
                  className=" bg-[#b0b0b0] text-[#070707] outline-none md:rounded-2xl rounded-md placeholder:text-xs placeholder:text-blue-gray-800 pl-5 pt-3 md:h-full h-20"
                ></textarea>
              </div>
              <div className=" mt-5 relative ">
                <div className="w-12 absolute h-12 bg-blue-800 rounded-full" 
                ref={boxoneani}
                ></div>
                <div className="w-12 absolute top-5 md:right-[150px] left-[100px] h-12 bg-yellow-800 rounded-full" 
                ref={boxtwoani}
                ></div>
                <input
                  type="submit"
                  value="Send"
                  className="glass-card-sub font-pera font-semibold md:text-3xl text-2xl rounded-xl w-full py-2"
                />
              </div>
            </form>
          </div>
          <div className="social md:w-1/2 w-9 md:ml-0 ml-3 flex justify-center h-full items-center">
            <div className="flex social-card rounded-3xl bg-[#FAF9F6] justify-center flex-wrap ">
              <Link
                className="flex items-center"
                to="https://github.com/Aditiyasingh07"
              >
                <Tooltip
                  content="Github"
                  placement="right"
                  className="bg-[#f5f5f5] text-black font-pera"
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
                  placement="right"
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
              <Link className="flex items-center" to="/">
                <Tooltip
                  content="Twitter X"
                  placement="right"
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
              <Link className="flex items-center" to="/">
                <Tooltip
                  content="Linkedin"
                  placement="right"
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
        </div>
      </section>
    </>
  );
};
