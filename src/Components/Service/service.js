import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { motion } from "framer-motion";

const Service = () => {
  const fabric = useRef(null);
  const construction = useRef(null);
  const furniture = useRef(null);
  const network = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: network.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/network.json"),
    });

    Lottie.loadAnimation({
      container: furniture.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/furniture.json"),
    });

    Lottie.loadAnimation({
      container: construction.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/construction.json"),
    });

    Lottie.loadAnimation({
      container: fabric.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/fabric.json"),
    });
    return () => Lottie.destroy();
  }, []);
  return (
    <div className="flex flex-col items-center">
      <div>
        <h1 className="text-green-300 pb-10 uppercase text-3xl">Our Service</h1>
      </div>

      <div
        name="service"
        className="w-[70%] h-100vh flex flex-col gap-2 md:flex-row justify-around mb-5"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="w-64 p-2  flex flex-col items-center bg-gray-500 rounded-xl"
        >
          <h1 className="text-md text-white pt-3 mb-3">
            ICT DEPARTMENT HAEDWARE AND NETWORKING DATA BASE ADMINISTRATION
          </h1>
          <div
            className="w-32 flex justify-center items-center"
            ref={network}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="w-64 p-2 flex flex-col items-center bg-gray-500 rounded-xl"
        >
          <h1 className="text-md text-white pt-3 mb-3">
            BABOO AND FURNITURE WORK DEP'T
          </h1>
          <div
            className="w-36 rounded-lg flex justify-center items-center py-5"
            ref={furniture}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="w-64 p-2 flex flex-col items-center bg-gray-500 rounded-xl"
        >
          <h1 className="text-md text-white pt-3 mb-3">
            CONSTRUCTION DEPARTMENT
          </h1>
          <div
            className="w-32 flex justify-center items-center py-5"
            ref={construction}
          ></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="w-64 p-2  flex flex-col items-center bg-gray-500 rounded-xl"
        >
          <h1 className="text-md text-white pt-3">
            {" "}
            METAL FABRICATION WORK DEPARTMENT
          </h1>
          <div
            className="w-32 flex justify-center items-center py-5"
            ref={fabric}
          ></div>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
