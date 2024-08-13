import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import todo from "/src/assets/projects/todo.png"
import host from "/src/assets/icons/host.png"
import source from "/src/assets/icons/sourse.svg"

export const Boxtwo = ()=>{
    return(
        <>
        <div className=" flex items-center mb-3">
                <img
                  src={todo}
                  alt="#todologo"
                  className="md:w-[30px] w-[23px]"
                />
                <p className="text-[#FAF9F6] ml-3 font-semibold font-serif md:text-xl text-[1rem] ">To-do list</p>
              </div>
              <div className="text-white md:text-xl font-sans text-sm text-justify">
                A to-do list helps organize tasks, prioritize activities, track
                progress, and ensure timely completion, enhancing productivity
                and efficiency.
              </div>
              <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] md:rounded-2xl rounded-md">
                <Tooltip content="Host link" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://aditiyasingh07.github.io/Todo-React-Project/"} target="_blank">
                  <img src={host} alt="#hosticon" 
                  className="md:w-[35px] w-[27px]" />
                </Link>
                </Tooltip>
                <Tooltip content="Source Code" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://github.com/Aditiyasingh07/Todo-React-Project.git"} target="_blank">
                <img src={source} alt="#sourceicon" 
                className="md:w-[20px] w-[17px]" />
                </Link>
                </Tooltip>
              </div>
        </>
    )
}