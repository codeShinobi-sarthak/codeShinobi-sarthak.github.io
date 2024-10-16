import React, { useState } from "react";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import home from "../assets/home.svg";
import work from "../assets/work.svg";
import me from "../assets/me.svg";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

const Nav_btn = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative">
            {/* Toggle Button with Animation */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={handleClick}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                aria-expanded={isOpen} // Accessibility improvement
            >
                <motion.img
                    className="relative top-10 left-24 w-14"
                    key={isOpen ? "close" : "menu"} // key helps with smooth transitions between images
                    src={isOpen ? close : menu}
                    alt={isOpen ? "Close menu" : "Open menu"}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                />
            </motion.button>

            {/* Menu Items with Slide Down Animation */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                    isOpen
                        ? { height: "auto", opacity: 1 }
                        : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className={`absolute top-24 left-24 z-50 rounded-lg p-4 overflow-hidden`} // added z-index and overflow
            >
                <NavLink
                    className="block mb-4"
                    to="/home">
                    <div className="h-14 w-14 bg-white border-2 border-solid shadow-lg border-white rounded-full flex items-center justify-center">
                        <img
                            className="w-6"
                            src={me}
                            alt="Home"
                        />
                    </div>
                </NavLink>

                <NavLink
                    to="/projects"
                    className="block">
                    <div className="h-14 w-14 bg-white border-2 border-solid shadow-lg border-white rounded-full flex items-center justify-center">
                        <img
                            className="w-6"
                            src={work}
                            alt="Work"
                        />
                    </div>
                </NavLink>
            </motion.div>
        </div>
    );
};

export default Nav_btn;
