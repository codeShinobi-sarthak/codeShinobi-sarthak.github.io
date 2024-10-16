import Intro from "./components/Intro";
import ProjectDisplay from "./components/ProjectDisplay";
import TechStack from "./components/TechStack";
import Contact from "./components/Contact";
import { motion } from "framer-motion";

export default function App() {
    return (
        <motion.div
            className="font-Domine bg-[#F6FB7A]"
            initial={{
                opacity: 0,
                boxShadow: "0 0 0px rgba(255, 255, 255, 0)",
            }} // Start invisible with no glow
            animate={{
                opacity: 1,
                boxShadow: "0 0 20px rgba(255, 255, 255, 0.6)",
            }} // Fade in and add a soft glow
            exit={{ opacity: 0, boxShadow: "0 0 0px rgba(255, 255, 255, 0)" }} // Fade out and remove glow on exit
            transition={{ duration: 1.5, ease: "easeInOut" }} // Transition properties
        >
            <Intro />
            <TechStack />
            <ProjectDisplay />
            <Contact />
        </motion.div>
    );
}
