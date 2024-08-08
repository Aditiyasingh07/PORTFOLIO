import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Boxthree = ()=>{
    return(
        <>
        <div className="flex items-center mb-3">
                <img
                  src="src\assets\projects\blog.png"
                  alt="#scraplogo"
                  width="30px"
                />
                <p className="text-[#FAF9F6] ml-3 text-xl">Blog</p>
              </div>
              <div className="text-white">
                Welcome to our blog, where we share insights, tips, and stories
                to inspire and inform your daily life.
              </div>
              <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] rounded-2xl">
                <Tooltip content="Host link" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://blog-web-application-aditiya-singhs-projects.vercel.app/"} target="_blank">
                  <img src="src\assets\icons\host.png" alt="#hosticon" width="35px" />
                </Link>
                </Tooltip>
                <Tooltip content="Source Code" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://github.com/Aditiyasingh07/Blog-Web-Application.git"} target="_blank">
                <img src="src\assets\icons\sourse.svg" alt="#sourceicon" width="20px" />
                </Link>
                </Tooltip>
              </div>
        </>
    )
}