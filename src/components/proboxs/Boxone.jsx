import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import blog from "/src/assets/projects/blog.png"
import host from "/src/assets/icons/host.png"
import source from "/src/assets/icons/sourse.svg"

export const Boxone = ()=>{
    return(
        <>
        <div className=" hover:scale-105 duration-500 h-full">
        <div className="flex items-center mb-3">
                <img
                  src={blog}
                  alt="#scraplogo"
                  className="md:w-[30px] w-[23px]"
                />
                <p className="text-[#FAF9F6] font-semibold font-serif ml-3 md:text-xl text-[1rem]">Blog</p>
              </div>
              <div className="text-white font-sans md:text-xl text-sm text-justify">
                Welcome to our blog, where we share insights, tips, and stories
                to inspire and inform your daily life.
              </div>
              <div className=" flex py-1 justify-between px-7 mt-10 bg-[#b0b0b0] md:rounded-2xl rounded-md">
                <Tooltip content="Host link" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://blog-web-application-aditiya-singhs-projects.vercel.app/"} target="_blank">
                  <img src={host} alt="#hosticon" className="md:w-[35px] w-[27px]" />
                </Link>
                </Tooltip>
                <Tooltip content="Source Code" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://github.com/Aditiyasingh07/Blog-Web-Application.git"} target="_blank">
                <img src={source} alt="#sourceicon" className="md:w-[20px] w-[17px]" />
                </Link>
                </Tooltip>
              </div>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
              <span>&nbsp;</span>
        </div>
        </>
    )
}