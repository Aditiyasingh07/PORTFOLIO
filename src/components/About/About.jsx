import React  from "react";


export const About = () =>{

    const downloadFile = ()=>{
        const link = document.createElement('a')
        link.href = "/Adi.pdf"
        link.download = "Adi.pdf"
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
    }

    return(

        <>
        <section className="px-12">
            <div className="flex justify-end">
            <div className="flex relative top-28 z-50 mt-5 mr-12 justify-center w-1/2">
                <h1 className="text-5xl text-center text-[#FAF9F6] font-extrabold">About</h1>
            </div>
            </div>
            <div className="text-[#FAF9F6] flex pera justify-between z-10">
                <div className="flex items-center justify-between">
             <div className="about-section-one">
             <button onClick={downloadFile} className="Btn ">
   <svg className="svgIcon" viewBox="0 0 384 512" height="1em" xmlns="http://www.w3.org/2000/svg"><path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path></svg>
   <span className="icon2"></span>
   <span className="tooltip">Download</span>
</button>
                <img className=" ml-80 drop-shadow-[30px_0px_10px_rgba(0,0,0,0.25)]" src="/src/assets/about01.png" alt="#about" width="200px" />
             </div>
                <div className=" bg-slate-600 mr-[80px] opacity-40 h-1/2 w-1/2 absolute [clip-path:polygon(50%_50%,100%_0%,100%_100%,0%_50%,0%_100%)] right-0 z-0"></div>
                <p className=" z-50 w-1/2 text-[1.1rem] text-justify px-[50px] leading-[35px] ali tracking-[3px] ">*I am a Front End Web Developer* and dedicated to crafting engaging and intuitive digital experiences. excel at transforming the new design concepts into polished and functional websites. I stay updated with latest designs, UI trends, technological developments, allowing me to design UIs that the perfectly fit user's project requirements with the latest and best design practices.I build functional, beautiful and the user- frendly designs. My commitment to ensuring clients receive the best results drives me to deliver excellence in every project. Let's collaborate to bring your web development projects to fruition with precision and creativity.</p>
                </div>
            </div>
        </section>
        </>
    )
}
