import React from "react";

const Contact = () => {
    return (
        <section
            id="Contact"
            className="bg-black text-white w-full flex justify-between items-center py-32 px-16 md:px-40">
            {/* Contact Heading */}
            <div className="text-7xl md:text-8xl font-semibold tracking-wider">
                Say Hello
            </div>

            {/* Contact Information */}
            <div className="border-l-4 border-gray-500 pl-10 font-bold flex flex-col justify-between text-xl md:text-3xl h-full gap-y-10">
                <a
                    href="mailto:codeshinobi.sarthak@gmail.com"
                    className="transition hover:text-gray-400  hover:-translate-y-3 hover:scale-110 duration-300">
                    codeshinobi.sarthak@gmail.com
                </a>
                <a
                    href="tel:+917078821942"
                    className="transition  hover:text-gray-400 hover:-translate-y-3 hover:scale-110 duration-300 ">
                    +91 7078821942
                </a>
            </div>

            {/* Subtle animation for border */}
            <style jsx>{`
                section:hover .border-l-4 {
                    border-color: #888;
                    transition: border-color 0.5s ease;
                }
            `}</style>
        </section>
    );
};

export default Contact;
