import { Button } from "antd";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";
import { motion } from "framer-motion";

const Home = () => {
  const container = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: container.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/School.json"),
    });
    return () => Lottie.destroy();
  }, []);
  return (
    <div name="home" className=" h-100vh w-full flex flex-col md:flex-row">
      <div className=" w-[100%] md:w-1/2 p-4">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="text-2xl text-white uppercase font-mono font-bold pt-10"
        >
          HULA TVET COLLEGE{" "}
        </motion.h1>
        <motion.h1
          initial={{ opacity: 0, x: -100 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{ delay: 1, duration: 2 }}
          className="text-gray-300 font-mono text-md pt-10 text-left lowercase "
        >
          <span className="text-green-300 uppercase">HULA TVET COLLEGE </span>{" "}
          was ESTaBLIShED AT HULA OR HAGERSLAM IN 2012 G.C. HULA TVET COLEEGE
          HAD BEEN ESTaBLIsHED WITH FOUR DEPARTMENT NAMELY ICT DEPArTMENT ,
          CONSTrCTON DEPRTMENT , metal fabrificaTIoN and BABOO and furniture
          departments IN{" "}
          <span className="text-green-300 ">
            SOUTHERN ETHIOpIA now sidama region{" "}
          </span>{" "}
          . HUla tvet college are it's mission and purpose that needs to link
          organization to the society and legitimizes it's activity according to
          the federal tvet program
        </motion.h1>
        <Button className="w-32 mt-5" ghost>
          Get Started
        </Button>
      </div>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        transition={{ delay: 1, duration: 2 }}
        className=" h-96 w-[100%] bg-green-300 md:bg-red-400 md:w-1/2 "
        ref={container}
      ></motion.div>
    </div>
  );
};

export default Home;
