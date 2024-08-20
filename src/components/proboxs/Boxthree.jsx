import React from "react";
import scrap from "/src/assets/projects/Scrap.svg"

export const Boxthree = ()=>{
    return(
        <>
              <div className="flex items-center mb-3">
                <img
                  src={scrap}
                  alt="#scraplogo"
                  className="md:w-[30px] w-[23px]"
                />
                <p className="text-[#FAF9F6] ml-3 font-semibold font-serif md:text-xl text-[1rem]">Scrapwallah</p>
              </div>
              <div className="text-white md:text-xl text-sm font-sans text-justify">
                ScrapWallah offers scrap recycling services vai a website.
                Customers can book trained and verified agents to collect scrap
                from their home or office.
              </div>
         </>
    )
}



{/* <div className=" flex py-1 justify-between px-7 mt-3 bg-[#b0b0b0] rounded-2xl">
                <Tooltip content="Host link" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://aditiyasingh07.github.io/Collage-major-project/"} target="_blank">
                  <img src="src\assets\icons\host.png" alt="#hosticon" width="35px" />
                </Link>
                </Tooltip>
                <Tooltip content="Source Code" 
                className="bg-[#1e1e1e]"
                animate={{
                    mount: { scale: 1, y: 0 },
                    unmount: { scale: 0, y: 25 },
                    }}>
                <Link to={"https://github.com/Aditiyasingh07/Collage-major-project.git"} target="_blank">
                <img src="src\assets\icons\sourse.svg" alt="#sourceicon" width="20px" />
                </Link>
                </Tooltip>
              </div> */}