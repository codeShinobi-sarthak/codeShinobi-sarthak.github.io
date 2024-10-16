import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import link from "../assets/link.svg";

const ProjectDisplay = () => {
    const projects = [
        {
            name: "Weather App",
            Link: "https://codeshinobi-sarthak.netlify.app/",
            description:
                "This application provides real-time weather updates for any location using a weather API. It's built with a focus on simplicity and user experience, making it easy to get weather information quickly and accurately.",
        },
        {
            name: "Cinema App",
            Link: "https://movie-project-codeshinobi.netlify.app/",
            description:
                "This project is a movie application developed using React and Vite. It provides an efficient setup for a modern web development environment, this app lets you search movies and provide deatils about it with the latestest movies using API.",
        },
        {
            name: "Exercise App",
            Link: "null",
            description: "Link available soon.",
        },
        {
            name: "3D Solar-System",
            Link: "https://solar-system-threejs-project.netlify.app/",
            description:
                "This project is a visualization of the solar system using Three.js. It features a 3D representation of the sun and planets orbiting around it. The solar system is created with realistic scaling and orbital mechanics to provide an engaging and educational experience.",
        },
    ];

    return (
        <section className="flex flex-col items-center w-full mt-[300px] mb-[100px] relative px-4 md:px-8">
            <div className="absolute left-10 md:left-20 -top-32">
                <h1 className="text-4xl md:text-6xl font-semibold text-gray-800 underline underline-offset-8 tracking-wide mb-8 md:mb-12">
                    Some of My Work
                </h1>
            </div>

            <AnimatePresence>
                <div className="flex flex-col w-full items-center justify-center space-y-16 md:space-y-20">
                    {projects.map((project, index) => (
                        <React.Fragment key={index}>
                            <motion.div
                                className="flex w-full max-w-6xl items-center gap-10 mt-[50px]"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -50 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}>
                                <div className="flex flex-col w-full">
                                    {/* Project number and text */}
                                    <div className="flex flex-row items-start md:items-center gap-4 md:gap-8">
                                        <div className="text-4xl md:text-[150px] font-bold text-black">
                                            0{index}
                                        </div>
                                        <div className="flex flex-col gap-y-7">
                                            <h2 className="text-2xl md:text-4xl font-semibold text-black">
                                                {project.name}
                                            </h2>
                                            <p className="text-md md:text-2xl text-gray-600 max-w-3xl">
                                                {project.description}
                                            </p>
                                        </div>
                                    </div>
                                    {/* Link icon placed at the end of the description */}
                                    <div className="flex justify-end">
                                        <a
                                            href={project.Link}
                                            className="shrink-0">
                                            <img
                                                className="w-8 h-8 md:w-10 md:h-10 hover:scale-110 transition-transform"
                                                src={link}
                                                alt={`${project.name} link`}
                                            />
                                        </a>
                                    </div>
                                </div>
                            </motion.div>

                            {/* Line break between divs */}
                            {index < projects.length - 1 && (
                                <hr className="w-full max-w-6xl border-2 border-gray-500 my-4" />
                            )}
                        </React.Fragment>
                    ))}
                </div>
            </AnimatePresence>
        </section>
    );
};

export default ProjectDisplay;
