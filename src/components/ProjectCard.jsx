import React from "react";
import link from "../assets/link.svg";

const ProjectCard = ({ title, category, description="lorem", hreflink}) => {
    // Define background color based on category
    const cardStyles = {
        Monumental:
            "bg-gradient-to-r from-purple-600 via-indigo-500 to-blue-600",
        Game: "bg-gradient-to-r from-red-600 via-yellow-500 to-orange-600",
        "3D": "bg-gradient-to-r from-green-600 via-teal-500 to-blue-500",
    };

    return (
        <div
            className={`h-[250px] w-[90%] p-6 rounded-2xl shadow-lg ${cardStyles[category]} text-white relative transform transition-transform duration-300 scale-100 hover:scale-105 hover:-translate-y-2`}>
            <div className="w-full px-10 text-center">
                <h4 className="text-3xl font-bold mb-8">{title}</h4>
                <p className="text-md">{description}</p>
            </div>

            <a
                href={hreflink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3">
                <button className="text-black py-2 px-4 rounded-lg flex items-center hover:animate-bounce">
                    <img
                        src={link}
                        alt="link icon"
                        className="size-7"
                    />
                </button>
            </a>
        </div>
    );
};

export default ProjectCard;
