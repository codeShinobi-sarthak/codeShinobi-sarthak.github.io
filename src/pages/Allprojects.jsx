import React from "react";
import ProjectCard from "../components/ProjectCard.jsx";
import Header from "../components/Header.jsx";
import home from "../assets/home.svg";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 

const ProjectShowcase = () => {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate("/");
    };

    // Variants for staggered animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3, // Delay between child animations
            },
        },
    };

    const itemVariants = {
        hidden: {
            opacity: 0,
            y: 50,
            transition: { duration: 0.5 }, // Animation takes 0.5 seconds for hidden state
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 2 }, // Animation takes 0.8 seconds for visible state
        },
    };

    return (
        <motion.section
            className="font-Domine bg-gray-900 text-white h-full"
            initial={{
                opacity: 0,
                boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
            }} // Start invisible with no glow
            animate={{
                opacity: 1,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
            }} // Fade in and add a soft glow
            exit={{ opacity: 0, boxShadow: "0 0 0px rgba(255, 255, 255, 0)" }} // Fade out and remove glow on exit
            transition={{ duration: 1.5, ease: "easeInOut" }} // Smooth fade with ease
        >
            <div className="flex justify-between">
                <Header
                    bgColor="bg-white"
                    textColor="text-black"
                    show={false}
                />

                <button
                    onClick={handleHome}
                    className="size-10 bg-white border-4 border-white rounded-full p-1 hover:-translate-y-1 scale-150 hover:scale-100 duration-500 cursor-pointer relative top-10 right-10">
                    <img
                        src={home}
                        alt="home"
                    />
                </button>
            </div>

            <div className="container mx-auto text-center mt-[100px]">
                <motion.h2
                    className="text-5xl font-bold mb-12"
                    initial={{ opacity: 0, y: -50 }} // Fade and slide down
                    animate={{ opacity: 1, y: 0 }} // Fully visible
                    transition={{ duration: 3 }} // Transition time
                >
                    Project Showcase
                </motion.h2>

                {/* Categories */}
                <motion.div
                    className="flex flex-col items-center justify-center p-10 gap-y-20 w-full"
                    variants={containerVariants} // Apply stagger animation
                    initial="hidden"
                    animate="visible">
                    {/* Monumental Projects */}
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-5 md:gap-y-10 md:p-14 shadow-xl bg-gray-800 p-10 w-[80%] rounded-3xl">
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Simple Tempreture Converter"
                                category="Monumental"
                                description="A simple temperature converter that converts between Celsius, Fahrenheit, . Enter a value in any of the two units and get the equivalent values in the other unit!"
                                hreflink={"https://codeshinobi-sarthak.github.io/Simple-Temperature-Converter/"}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Weather App"
                                category="Monumental"
                                description="A weather app that provides real-time weather updates for any location. Enter a city name and get the current temperature, humidity, and weather conditions!"
                                hreflink={"https://codeshinobi-sarthak.netlify.app/"}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Cinema App"
                                category="Monumental"
                                description="A cinema app that displays a list of movies and their details. Search for movies, view their ratings, and more details in a user-friendly interface!"
                                hreflink={"https://movie-project-codeshinobi.netlify.app/"}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Twitter Clone"
                                category="Monumental"
                                description="A clone Of twitter made using Tailwind CSS."
                                hreflink={
                                    "https://codeshinobi-sarthak.github.io/Twitter-clone-using-tailwind/"
                                }
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Key Event Inspector"
                                category="Monumental"
                                description="A simple web app that helps you inspect the key events. Press any key on your keyboard and get the key code, key, and other details!"
                                hreflink={
                                    "https://codeshinobi-sarthak.github.io/KeyEvent-Inspector/"
                                }
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Tip calculator"
                                category="Monumental"
                                description="A simple tip calculator that helps you calculate the tip amount based on the bill amount and tip percentage. Split the bill among friends and family with ease!"
                                hreflink={
                                    "https://codeshinobi-sarthak.github.io/Tip-Calculator/"
                                }
                            />
                        </motion.div>
                        {/* <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Exercise App"
                                category="Monumental"
                                description="A simple exercise app that helps you search Exercise and get the details of the exercise. And suggest you the exercise based on your search."
                                hreflink={""}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Google keep clone"
                                category="Monumental"
                                description="A clone of Google Keep, a note-taking app. Create, edit, and delete notes with a simple and intuitive interface. Organize your notes with colors and categories!"
                                hreflink={""}
                            />
                        </motion.div> */}
                    </motion.div>

                    {/* Game Projects */}
                    <h3 className="text-3xl font-semibold">Up for a game?</h3>
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-5 shadow-xl bg-gray-800 p-10 rounded-3xl w-[80%]">
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Tic Tack Toe"
                                category="Game"
                                description="Play the classic Tic Tac Toe game with a smooth, interactive interface. Challenge your friends and family to a fun game of Xs and Os!"
                                hreflink={"https://codeshinobi-sarthak.github.io/Tic-Tac-Toe-game/"}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Typing 
                                Game"
                                category="Game"
                                description="Improve your typing speed and accuracy with this engaging typing game. Race against time while typing words in a fun and dynamic environment!"
                                hreflink={"https://codeshinobi-sarthak.github.io/typing-game/"}
                            />
                        </motion.div>
                    </motion.div>

                    {/* 3D Projects */}
                    <h3 className="text-3xl font-semibold">
                        Time to experience true 3D!
                    </h3>
                    <motion.div
                        variants={itemVariants}
                        className="grid grid-cols-2 gap-5 shadow-xl bg-gray-800 p-10 rounded-3xl w-[80%]">
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="Solar-System"
                                category="3D"
                                description="Explore the wonders of our solar system, brought to life with Three.js and React. Dive into an interactive and immersive experience of planets and stars!"
                                hreflink={"https://solar-system-threejs-project.netlify.app/"}
                            />
                        </motion.div>
                        <motion.div variants={itemVariants}>
                            <ProjectCard
                                title="3D Slob"
                                category="3D"
                                description="Experience a dynamic 3D slope created using splines in Three.js. Navigate through smooth curves and gradients for a realistic terrain effect!"
                                hreflink={"https://my.spline.design/practice-1e821111d0558927f47fbb824c7bfdb3/"}
                            />
                        </motion.div>
                    </motion.div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default ProjectShowcase;
