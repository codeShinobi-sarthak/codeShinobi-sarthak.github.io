import React from "react";

const Hero = () => {
    return (
        <section>
            <div className="text-softOrange flex justify-center flex-col font-bold ml-40">
                <div>
                    <div className="relative lg:text-[300px] text-[100px]">
                        Sarthak
                        <span className="absolute right-40 top-20">Jain</span>
                    </div>
                    <div className="text-4xl w-1/2">
                        Hey there! 👋 I’m Sarthak Jain, a passionate developer
                        focused on crafting innovative and efficient solutions
                        through code. From building engaging web applications to
                        exploring the intricacies of data structures and
                        algorithms, I thrive on solving complex problems. My
                        current focus is on full-stack development, where I’m
                        creating dynamic projects using technologies like React,
                        Node.js, and Three.js. <br />
                        I’m always excited to learn and grow, whether it’s
                        mastering new programming concepts or tackling
                        real-world challenges. Right now, I’m diving into graph
                        theory and working on immersive projects like a solar
                        system simulation. Let’s connect and build something
                        awesome together!
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
