import React from "react";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

const Header = ({ bgColor, textColor, show }) => {
    return (
        <div className="flex justify-between w-full">
            {/* Dynamic background and text colors based on props */}
            <div
                className={`w-1/2 p-10 flex justify-evenly font-bold text-4xl ${bgColor} ${textColor}`}>
                <NavLink
                    jsx="true"
                    to="/all-projects"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? "pending"
                            : isActive
                            ? `active text-3xl relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer ${textColor}`
                            : `text-3xl relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer ${textColor}`
                    }>
                    Projects
                </NavLink>

                <Link
                    to="Contact"
                    spy={true}
                    smooth={true}
                    duration={1000}
                    className={`text-3xl relative after:bg-white after:absolute after:h-1 after:w-0 after:bottom-0 after:left-0 hover:after:w-full after:transition-all after:duration-500 cursor-pointer ${textColor}`}>
                    Contact
                </Link>
            </div>

            {/* Some decorative box */}
            {show && (
                <div className="w-[600px] h-[300px] z-50 border-black border-r-4 border-t-4 absolute top-20 right-14"></div>
            )}
        </div>
    );
};

export default Header;
