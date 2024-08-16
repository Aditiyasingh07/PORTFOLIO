import React, { useRef, useEffect } from "react";
import ablogo from "/src/assets/about01.png"
import spring from "/src/assets/icons/spring.png"
import gsap from "gsap";

export const About = () => {

  const springref = useRef(null)

  useEffect(()=>{
    gsap.to(springref.current, {
      rotate: -120,
      duration: 4,
      repeatDelay: 3,
      repeat: -1,
      yoyo: true,
    })
  }, [])


  const downloadFile = () => {
    const link = document.createElement("a");
    link.href = "/Adi.pdf";
    link.download = "Adi.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  return (
    <>
      <section className="md:px-12 md:mt-24 mt-10">
        <div className="text-[#FAF9F6] flex pera justify-between z-10">
          <div className="flex flex-col relative items-center justify-between">
            <div className=" about-section-one">
              <button onClick={downloadFile} className="Btn absolute md:right-[600px] right-32 md:h-10 h-5 md:w-10 w-5 md:top-0 top-10  ">
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
                className=" md:w-[200px] w-20 md:ml-80 ml-0 drop-shadow-[30px_0px_8px_rgba(255,255,255,0.1)]"
                src={ablogo}
                alt="#about"
              />
            <p className=" md:z-50 z-0 md:w-[60%] md:mb-0 mb-10 w-full md:mt-0 mt-4 md:text-[1.2rem] text-xs text-justify md:px-[50px] px-5 md:leading-[35px] leading-[20px] font-serif tracking-[3px] " >
              I am a {" "}
              <span className=" font-bold text-[#fffce1]"> Front End Web Developer</span>{" "}
              and dedicated to crafting engaging and intuitive digital
              experiences. excel at transforming the new design concepts into
              polished and functional websites. I stay updated with <span className=" font-bold text-[#fffce1]">latest
              designs</span>, UI trends, technological developments, allowing me to
              design UIs that the perfectly fit user's project requirements with
              the latest and best design practices.I build functional, beautiful
              and the <span className=" font-bold text-[#fffce1]">user- frendly designs</span>. My commitment to ensuring clients
              receive the best results drives me to deliver excellence in every
              project. Let's collaborate to bring your web development projects
              to fruition with precision and <span className=" font-bold text-[#fffce1]">creativity</span>.
            </p>
            <div className=" md:flex hidden bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-900 opacity-70 md:h-1/2 md:w-[60%] w-[100%] h-1/2 absolute [clip-path:polygon(50%_50%,100%_0%,100%_100%,0%_50%,0%_100%)] md:bottom-[200px] bottom-10 right-0 z-0 blur-3xl"></div>
            </div>
          </div>
          <div ref={springref} className=" absolute md:w-20 w-5 md:right-0 right-7" >
            <img src={spring} alt="springlogo"  />
          </div>
        </div>
      </section>
    </>
  );
};
