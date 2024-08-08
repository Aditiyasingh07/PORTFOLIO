import React, { useEffect, useRef } from 'react';
import {Tooltip} from "@material-tailwind/react"
import { gsap } from 'gsap';
import "./Skill.css"
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export const Skill = ()=>{


    const skillsRef = useRef(null)
    const skillone = useRef(null)
    const skilltwo = useRef(null)
    const skillthree = useRef(null)
    const skillfour = useRef(null)
    const logoone = useRef(null)
    const logotwo = useRef(null)
    const logothree = useRef(null)
    const logofour = useRef(null)


    useEffect(()=>{
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: skillsRef.current,
                start: 'top 80%',
                end: 'top 30%',
                scrub: true,
              },
        })

        tl.fromTo(skillone.current, { opacity: 0, scale: 2, duration:10}, {opacity: 1, scale: 1, duration:10})
        tl.fromTo(skilltwo.current, { opacity: 0, scale: 0.5, duration:10}, {opacity: 1, scale: 1, duration:10})
        tl.fromTo(skillthree.current, { opacity: 0, scale: 2, duration:10 }, {opacity: 1, scale: 1, duration:10});
        tl.fromTo(skillfour.current, { opacity: 0, scale: 0.5, duration:10 }, {opacity: 1, scale: 1, duration:10});

        tl.fromTo(logoone.current, { opacity: 0, y: 500, duration: 10}, {opacity: 1, y: 0, duration: 10})
        tl.fromTo(logotwo.current, { opacity: 0, y: -500, duration: 10}, {opacity: 1, y: 0, duration: 10})
        tl.fromTo(logothree.current, { opacity: 0, x: -500, duration: 10}, {opacity: 1, x: 0, duration: 10})
        tl.fromTo(logofour.current, { opacity: 0, y: 500, duration: 10}, {opacity: 1, y: 0, duration: 10})
    }, [])

    return(
        <>
        <section className="h-full w-full mt-12 ">
        <h1 className=" text-5xl text-center text-[#FAF9F6] font-extrabold">Skills</h1>
        <span className='glass-icon'>
        <img 
        className=" relative top-[150px] left-[600px]"
        src="src\assets\skills\reactlogo.png" alt="" width="100px" ref={logoone} />
            <img
            className=" relative top-[150px] left-[1200px]"
             src="src\assets\skills\git.png" alt="" width="100px" ref={logotwo} />
            <div className=' h-20 w-20 rounded-full bg-yellow-800 relative top-[230px] left-[560px]' ref={logothree}>
                </div>
                <img
                className='relative top-[255px] left-[1300px]'
                 src="src\assets\skills\vs code.png" alt="" width="100px" ref={logofour} />
        </span>
        <div className="flex items-center">
        <div className="pl-7 mt-[87px]">
            <img 
            className="mt-[-300px]" src="src\assets\skills\skill.png" alt="" width="700px" />
        </div>
        <div className=' mt-[-250px] flex flex-wrap gap-5 w-full justify-center' ref={skillsRef}>
            <div className='w-1/3 flex flex-col gap-y-2 glass-card-sub' ref={skillone}>
            <img src="src\assets\skills\frontend.png" alt="#weblogo" width="30px" />
            <h3 className='font-extrabold'>Front-end<br></br>Devloper</h3>
            <p>Optimized Hosting and deployment make websites accessible online and operational.</p>
            <div className='mt-3 flex w-[75%] justify-around'>
                <Tooltip content="Reactjs"
                className="bg-[#00d8ff]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\react.png" alt="#reactlogo" width="30px" />
                </Tooltip>
                <Tooltip content="Redux"
                className="bg-[#00d8ff]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\redux.png" alt="#reactlogo" width="30px" />
                </Tooltip>
                <Tooltip content="Tailwind"
                className="bg-[#3490dc]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\tailwind.png" alt="#tailwindlogo" width="30px" />
                </Tooltip>
                <Tooltip content="JavaScript"
                className="bg-[#f7df1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\javascript.png" alt="#javascriptlogo" width="30px" />
                </Tooltip>
                <Tooltip content="HTML"
                className="bg-[#e34f26]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\html.png" alt="#htmllogo" width="30px" />
                </Tooltip>
                <Tooltip content="CSS"
                className="bg-[#002561]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\css.png" alt="#csslogo" width="30px" />
                </Tooltip>
            </div>
            </div>
            <div className='w-1/2 flex flex-col gap-y-2 glass-card-sub' ref={skilltwo}>
            <img src="src\assets\skills\hosting.png" alt="#weblogo" width="30px" />
            <h3 className=" font-extrabold">Hosting & <br></br> Deployement</h3>
            <p>Explore our web app: user-friendly, efficient, and feature-rich solution.</p>
            <div className='mt-3 flex w-1/6 justify-around '>
                <Tooltip content="GitHub"
                className="bg-[#333]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\github.png" alt="#reactlogo" width="30px" />
                </Tooltip>
                <Tooltip content="Vercel"
                className="bg-[#171717]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\vercel.svg" alt="#tailwindlogo" width="30px" />
                </Tooltip>
            </div>
            </div>
            <div className='w-1/2 flex flex-col gap-y-2 glass-card-sub' ref={skillthree}>
            <img src="src\assets\skills\web.png" alt="#weblogo" width="30px" />
            <h3 className=" font-extrabold">Web <br></br> Applications</h3>
            <p>Explore our web app: user-friendly, efficient, and feature-rich solution.</p>
            <div className='mt-3 flex w-1/4 justify-around '>
                <Tooltip content="Blog Page"
                className="bg-[#00008B]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\projects\blog.png" alt="#reactlogo" width="30px" />
                </Tooltip>
                <Tooltip content="ToDo"
                className="bg-[#AD6D00]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\projects\todo.png" alt="#tailwindlogo" width="30px" />
                </Tooltip>
                <Tooltip content="ScrapWallha"
                className="bg-[#93C572]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\projects\Scrap.svg" alt="#tailwindlogo" width="30px" />
                </Tooltip>
            </div>
            </div>
            <div className='w-1/3 flex flex-col gap-y-2 glass-card-sub' ref={skillfour}>
            <img src="src\assets\skills\tool.png" alt="#weblogo" width="30px" />
            <h3 className=" font-extrabold">Web Tools</h3>
            <p className=" bg-slate-400 mt-3">Web tools enhance productivity by streamlining tasks and improving efficiency.</p>
            <div className='mt-3 flex w-1/3 justify-evenly'>
                <Tooltip content="vs code"
                className="bg-[#0078d7]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\vscode.png" alt="#reactlogo" width="30px" />
                </Tooltip>
                <Tooltip content="npm"
                className="bg-[#0078d7]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <img src="src\assets\skills\npm.png" alt="#reactlogo" width="30px" />
                </Tooltip>
            </div>
            </div>
        </div>
        </div>
        </section>
        </>
    )
}
