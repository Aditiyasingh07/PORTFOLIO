import React from "react";
import { useRef, useEffect } from "react";
import {gsap} from "gsap"
import ablogo from "/src/assets/about01.png"

export const About = () => {
  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/Adi.pdf";
    link.download = "Adi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const textani = useRef(null)

  useEffect(()=>{
    gsap.fromTo(
      textani.current,
      { y: 500, opacity: 0, duration: 15 },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
        scrollTrigger: {
          trigger: textani.current,
          start: "top 50%",
          end: "top 90%",
          scrub: true,
        },
      }
    )
  }, [])


  return (
    <>
      <section className="px-12 md:mt-24">
        <div className="text-[#FAF9F6] flex pera justify-between z-10">
          <div className="flex flex-col relative items-center justify-between">
            <div className=" about-section-one">
              <button onClick={downloadFile} className="Btn absolute md:right-[600px] right-32 md:top-0 top-10  ">
                <svg
                  className="svgIcon"
                  viewBox="0 0 384 512"
                  height="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
                </svg>
                <span className="icon2"></span>
                <span className="tooltip">Download</span>
              </button>
            </div>
            <div className=" flex md:flex-row flex-col justify-between items-center relative">
            <img
                className=" md:w-[200px] w-20 md:ml-80 ml-0 drop-shadow-[30px_0px_10px_rgba(0,0,0,0.25)]"
                src={ablogo}
                alt="#about"
              />
            <p className=" z-50 md:w-[60%] md:mb-0 mb-10 w-full md:mt-0 mt-4 md:text-[1.1rem] text-sm text-justify md:px-[50px] md:leading-[35px] leading-[20px] font-sans ali tracking-[3px] " ref={textani}>
              I am a Front End{" "}
              <span className=" font-bold text-[#ffffff]">Web Developer</span>{" "}
              and dedicated to crafting engaging and intuitive digital
              experiences. excel at transforming the new design concepts into
              polished and functional websites. I stay updated with latest
              designs, UI trends, technological developments, allowing me to
              design UIs that the perfectly fit user's project requirements with
              the latest and best design practices.I build functional, beautiful
              and the user- frendly designs. My commitment to ensuring clients
              receive the best results drives me to deliver excellence in every
              project. Let's collaborate to bring your web development projects
              to fruition with precision and creativity.
            </p>
            <div className=" bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-900 opacity-70 md:h-1/2 md:w-[60%] w-[100%] h-1/2 absolute [clip-path:polygon(50%_50%,100%_0%,100%_100%,0%_50%,0%_100%)] md:bottom-[200px] bottom-10 right-0 z-0 blur-3xl"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
