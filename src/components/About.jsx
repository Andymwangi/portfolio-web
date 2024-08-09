import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";
import resumeFile from "../assets/Anderson Mwangi Resume.pdf"; 

const About = () => {
  return (
    <div id="about" className="about-section border-b border-neutral-900 pb-20">
      <h2 className="my-20 text-center text-4xl">
        About
        <span className="text-neutral-500"> Me</span>
      </h2>
      <div className="flex flex-wrap">
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl" src={aboutImg} alt="about" />
          </div>
        </motion.div>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex flex-col items-center lg:items-start">
            <p className="my-2 max-w-xl py-4">{ABOUT_TEXT}</p>
            <div className="mt-6 flex flex-col space-y-4 lg:space-y-0 lg:flex-row lg:space-x-4">
              <a
                href={resumeFile}
                download="AndersonResume.pdf"
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-blue-700 transition-colors duration-300"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="px-6 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-800 transition-colors duration-300"
              >
                Contact Me
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
