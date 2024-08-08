
import React from "react";
import "./hero.css"
import { About, Skill, Project, Contact } from "../Index/Index";

export const Hero = ()=> {

//     const locref = useRef(null)

//     useEffect(()=>{
//         gsap.to(locref.current, {
//             rotationX: 360,
//             duration: 3,
//             delay:2,
//             repeat: -1,
//             ease: "power1.inOut"
//     })
// },[])

    return (
        <>
        <div className="w-full h-full mt-[-58px]">
            <aside className="flex rounded-lg">
                <div className=" w-1/2 first bg-center mt-[-65px] [clip-path:polygon(0%_0%,80%_0%,100%_50%,90%_100%,0%_100%)]">
                </div>
                <div className="loader"></div>
                <div className="sec flex-col w-1/2 flex p-10 items-center mt-28">
                    <div className=" drop-shadow-[30px_50px_10px_rgba(0,0,0,0.55)]">
                    <img src="src/assets/naruto.png" alt="#gif" width= "300px" />
                    </div>
                <div className="flex flex-col mt-7 justify-center text-center sub-first h-full text-[#FAF9F6]">
                    <h1 className=" text-[2rem]">Hello, I'm Aditiya Singh</h1>
                    <div className="dev flex justify-center">
                    <h1 className="name text-[4rem] font-bold"> Front-End Web Devloper</h1>
                    </div>
                    </div>
                </div>
            </aside>
        </div>
        <About/>
        <Skill/>
        <Project/>
        <Contact/>
        </>
            );
}

