import React from "react";
// import {Navbar} from "../Index/Index"
import { Link } from "react-router-dom";


export const Projectone = ()=>{
    return(
        <>
        {/* <Navbar/> */}
        <section className=" w-full h-screen bg-blue-gray-500 ">
            <h1>ScrapWallah</h1>
            <div>
                <img src="src\assets\management.png" alt="" width='50px' />
                <img src="" alt="" />
                <img src="" alt="" />
                <img src="" alt="" />
            </div>
            <div>
                <h3>Description</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sequi dicta ab sed doloribus voluptatibus reprehenderit quas totam libero similique aperiam. Magnam facilis earum dignissimos sequi ullam, quisquam ipsum ab possimus optio molestiae id inventore nam sint ipsam delectus provident ea vitae, veritatis perferendis neque error est obcaecati! Nihil, vero quisquam.</p>
            </div>
            <div>
                <img src="" alt="" />
                <Link 
                to="https://github.com/Aditiyasingh07/Collage-major-project.git">

                    https://github.com/Aditiyasingh07/Collage-major-project.git
                </Link>
            </div>
        </section>
        </>
    )
}