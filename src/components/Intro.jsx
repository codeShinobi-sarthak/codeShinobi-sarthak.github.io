import React from "react";
import { motion } from "framer-motion";
// import home from "../assets/home.svg";
// import work from "../assets/work.svg";
import gitHub from "../assets/gitHub-white.svg";
import linkedin from "../assets/linkdin-white.svg";
import downArrow from "../assets/down-arrow.svg";

import Header from "./Header";

import { NavLink } from "react-router-dom";

const Intro = () => {
    return (
        <section className="min-h-screen">
            <Header
                bgColor="bg-black"
                textColor="text-white"
                show={true}
            />
            <div className="flex justify-between relative">
                <div className=" w-1/2 text-2xl ml-32 mt-20">
                    <div className="border-l-4 border-black pl-5 text-gray-700 ">
                        Hey there! 👋 I’m Sarthak Jain, a passionate developer
                        focused on crafting innovative and efficient solutions
                        through code. From building engaging web applications to
                        exploring the intricacies of data structures and
                        algorithms,
                        <br />
                        <br />
                        I thrive on solving complex problems. My current focus
                        is on full-stack development, where I’m creating dynamic
                        projects using technologies like React, Node.js, and
                        Three.js. <br />
                        <br />
                        I’m always excited to learn and grow, whether it’s
                        mastering new programming concepts or tackling
                        real-world challenges.
                        <br />
                        <br />
                    </div>

                    <span className="flex gap-2">
                        Let’s connect and build something awesome together!
                        <a href="#contact">
                            <img
                                className="size-10 animate-bounce"
                                src={downArrow}
                                alt=""
                            />
                        </a>
                    </span>
                </div>
                <div className="bg-black text-white h-[300px] flex flex-col justify-evenly content-evenly w-[100px] absolute -bottom-24 right-0 p-5">
                    <img
                        className="hover:-translate-y-1 hover:scale-110 duration-300 size-20"
                        src={gitHub}
                        alt=""
                    />
                    <img
                        className="hover:-translate-y-1 hover:scale-110 duration-300  size-20"
                        src={linkedin}
                        alt=""
                    />
                </div>
            </div>
        </section>
    );
};

export default Intro;

// function Intro() {
//     return (
//         <main id="home" className="min-h-screen font-cute relative overflow-hidden">
//             {/* Content Section */}
//             <div className="text-deepGreen flex justify-center flex-col font-bold lg:text-[200px] text-[100px] ml-40">
//                 <div>
//                     <span className="flex justify-end mr-20 text-sunshineYellow">JUST ANOTHER</span>
//                 </div>
//                 <div className="flex justify-evenly">
//                     <span className="flex justify-start text-[150px] text-sunshineYellow ">DEVELOPER</span>
//                     <div className="text-3xl w-1/2">
//                         Hey there! 👋 I’m Sarthak Jain, a passionate developer
//                         focused on crafting innovative and efficient solutions
//                         through code. From building engaging web applications to
//                         exploring the intricacies of data structures and
//                         algorithms, I thrive on solving complex problems. My
//                         current focus is on full-stack development, where I’m
//                         creating dynamic projects using technologies like React,
//                         Node.js, and Three.js.
//                         <br />
//                         <br />
//                         I’m always excited to learn and grow, whether it’s
//                         mastering new programming concepts or tackling
//                         real-world challenges. Right now, I’m diving into graph
//                         theory and working on immersive projects like a solar
//                         system simulation. Let’s connect and build something
//                         awesome together!
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// }
