import React from "react";
import { motion } from "framer-motion";

const about = () => {
  const languages = [
    "Theory",
    "ICT department_ hardware and networking",
    "database administration system",
    "metal fabrication department",
    "practical",
    "metal work",
    "metal welding",
    "mechanical work",
    "construction department",
    "on site building",
    "masonry work",
    "building drawing",
    "construction work",
    " Bamboo and furture department",
    "bamboo work",
    "wood work",
    "Furniture work",
  ];

  return (
    <div className="flex flex-col">
      <motion.div
        initial={{ opacity: 0 }}
        // animate={{
        //   opacity: 1,
        // }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 1, duration: 2 }}
      >
        <h1 className="text-white pb-10 uppercase text-3xl">About</h1>
      </motion.div>
      <div
        name="about"
        className=" h-screen md:h-96 flex justify-between p-2 w-full flex-col md:flex-row overscroll-x-auto overflow-x-auto no-scrollbar"
      >
        <motion.div
          initial={{ opacity: 0, x: "-400px" }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="flex w-full md:w-1/2 flex-col"
        >
          <h1 className="text-4xl pb-3 font-bold text-white">Mission</h1>
          <h1 className="p-10 font-mono text-sm text-center text-gray-300">
            <span className="text-green-300">hula tvet college</span> are it's
            mission and purpose that needs to link organization to the society
            and legitimizes it's activity according to the federal tvet program
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "400px" }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="flex w-full md:w-1/2 flex-col"
        >
          <h1 className="text-4xl font-bold text-white">
            Courses Under Hula tvet college
          </h1>
          <ul className="w-full skills-list flex flex-wrap gap-x-4 lg:gap-x-10  pl-10 text-sm tracking-wide leading-5">
            {languages.map((tech, index) => {
              return (
                <li
                  key={`${tech}-1`}
                  className="flex font-mono text-[13px] lg:text-sm text-white tracking-tighter lg:tracking-normal items-center text-xs justify-between before:my-1 relative before:content-['▹'] before:absolute before:items-center before:text-accent before:text-xl before:leading-3 before:-ml-4 "
                >
                  {tech}
                </li>
              );
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default about;
