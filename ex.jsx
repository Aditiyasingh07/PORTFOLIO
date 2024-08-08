{/* <div className=" flex flex-col w-full h-full justify-center items-center">
        <div className=" p-5 flex justify-center gap-5 flex-wrap"
        ref={skillsRef}>
            <div className='w-1/3 '
            ref={skillone}>
            <div className=' relative top-[100px]' ref={logoone}>
                <img src="src\assets\skills\reactlogo.png" alt="" width="100px" />
            </div>
            <div className="text-[#FAF9F6] glass-card p-5 rounded-2xl">
                <img src="src\assets\skills\web.png" alt="#weblogo" width="30px" />
                <h3 className=" font-extrabold">Web <br></br> Applications</h3>
                <p className="bg-slate-400 mt-3">Explore our web app: user-friendly, efficient, and feature-rich solution.</p>
                <div className="coding-icons flex mt-7 justify-around bg-slate-500 h-[30px] ">
                    <Tooltip content="HTML"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\html.png" alt="" />
                    </Tooltip>
                    <Tooltip content="JavaScript" 
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\javascript.png" alt="" />
                    </Tooltip>
                    <Tooltip content="Reactjs"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\react.png" alt="" />
                    </Tooltip>
                    <Tooltip content="Tailwind" 
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\tailwind.png" alt="" />
                    </Tooltip>
                    <Tooltip content="CSS" animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                    <img src="src\assets\skills\css.png" alt="" />
                    </Tooltip>
                </div>
            </div>
            </div>
            <div className='w-1/2'
            ref={skilltwo}>
            <div className=' relative top-64 'ref={logotwo}>
                <img src="src\assets\skills\git.png" alt="" width="100px" />
            </div>
            <div className="text-[#FAF9F6] glass-card p-5 rounded-2xl">
                <img src="src\assets\skills\hosting.png" alt="#hostinglogo" width= "30px" />
                <h3 className=" font-extrabold">Hosting & <br></br> Deployement</h3>
                <p className=" bg-slate-400 mt-3">Optimized Hosting and deployment make websites accessible online and operational.</p>
                <div className="coding-icons flex mt-7 justify-around bg-slate-500 h-[30px] w-1/4 ">
                    <Tooltip content="Github"
                    className=" bg-blue-gray-50"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\github.png" alt="" />
                    </Tooltip>
                    <Tooltip content="HTML"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\html.png" alt="" />
                    </Tooltip>
                </div>
            </div>
            </div>
            <div className='w-1/2 mt-[-78px]' ref={skillthree}>
                <div className=' relative top-32 right-8 h-20 w-20 rounded-full bg-yellow-600'ref={logothree}>
                </div>
            <div className="text-[#FAF9F6] glass-card p-5 rounded-2xl">
                <img src="src\assets\skills\web.png" alt="#weblogo" width="30px" />
                <h3 className=" font-extrabold">Web <br></br> Applications</h3>
                <p className="bg-slate-400 mt-3">Explore our web app: user-friendly, efficient, and feature-rich solution.</p>
                <div className="coding-icons flex mt-7 justify-around bg-slate-500 h-[30px] ">
                    <Tooltip content="HTML"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\html.png" alt="" />
                    </Tooltip>
                    <Tooltip content="JavaScript" 
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\javascript.png" alt="" />
                    </Tooltip>
                    <Tooltip content="Reactjs"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\react.png" alt="" />
                    </Tooltip>
                    <Tooltip content="Tailwind" 
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\tailwind.png" alt="" />
                    </Tooltip>
                    <Tooltip content="CSS" animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                    <img src="src\assets\skills\css.png" alt="" />
                    </Tooltip>
                </div>
            </div>
            </div>
            <div className='w-1/3 mt-[-100px]'
            ref={skillfour}>
                <div className=' inline relative top-52 left-20'ref={logofour}>
                    <img src="src\assets\skills\vs code.png" alt="" width="100px" />
                </div>
            <div className="text-[#FAF9F6] glass-card p-5 rounded-2xl">
                <img src="src\assets\skills\tool.png" alt="#toollogo" width="30px" />
                <h3 className=" font-extrabold">Web Tools</h3>
                <p className=" bg-slate-400 mt-3">Web tools enhance productivity by streamlining tasks and improving efficiency.</p>
                <div className="coding-icons flex mt-7 justify-around bg-slate-500 h-[30px] ">
                    <Tooltip content="HTML"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\html.png" alt="" />
                    </Tooltip>
                    <Tooltip content="JavaScript" 
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\javascript.png" alt="" />
                    </Tooltip>
                    <Tooltip content="Reactjs"
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\react.png" alt="" />
                    </Tooltip>
                    <Tooltip content="Tailwind" 
                    animate={{
                        mount: { scale: 1, y: 0 },
                        unmount: { scale: 0, y: 25 },
                        }}>
                    <img src="src\assets\skills\tailwind.png" alt="" />
                    </Tooltip>
                    <Tooltip content="CSS" animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                    <img src="src\assets\skills\css.png" alt="" />
                    </Tooltip>
                </div>
            </div>
            </div>
        </div>
        </div> */}