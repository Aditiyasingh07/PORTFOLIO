import React from "react";
import { Tooltip } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Boxtwo = ()=>{
    return(
        <>
        <div className=" flex items-center mb-3">
                <img
                  src="src\assets\projects\todo.png"
                  alt="#todologo"
                  width="30px"
                />
                <p className="text-[#FAF9F6] ml-3 text-xl ">To-do list</p>
              </div>
              <div className="text-white md:text-xl text-sm text-justify">
                A to-do list helps organize tasks, prioritize activities, track
                progress, and ensure timely completion, enhancing productivity
                and efficiency.
              </div>
              <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] rounded-2xl">
                <Tooltip content="Host link" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://aditiyasingh07.github.io/Todo-React-Project/"} target="_blank">
                  <img src="src\assets\icons\host.png" alt="#hosticon" width="35px" />
                </Link>
                </Tooltip>
                <Tooltip content="Source Code" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://github.com/Aditiyasingh07/Todo-React-Project.git"} target="_blank">
                <img src="src\assets\icons\sourse.svg" alt="#sourceicon" width="20px" />
                </Link>
                </Tooltip>
              </div>
        </>
    )
}