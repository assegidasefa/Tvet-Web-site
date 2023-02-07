import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

const Service = () => {
  const theory = useRef(null);
  const practice = useRef(null);
  const lifeSkill = useRef(null);

  useEffect(() => {
    Lottie.loadAnimation({
      container: theory.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/Theory.json"),
    });

    Lottie.loadAnimation({
      container: practice.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/practice.json"),
    });

    Lottie.loadAnimation({
      container: lifeSkill.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: require("../../assets/lifeSkill.json"),
    });
    return () => Lottie.destroy();
  }, []);
  return (


    <div name="service" className="w-full h-80 flex justify-around mb-5">
    
      <div className="w-56  flex flex-col items-center bg-gray-500 rounded-xl">
        <h1 className="text-2xl text-white pt-3">Theory</h1>
        <div
          className="w-32 flex justify-center items-center"
          ref={theory}
        ></div>
        <h1 className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h1>
      </div>

      <div className="w-56 bg-green-200 flex flex-col items-center bg-gray-500 rounded-xl">
        <h1 className="text-2xl text-white pt-3">Practice</h1>
        <div
          className="w-32 flex justify-center items-center py-5"
          ref={practice}
          ></div>
        <h1 className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h1>
      </div>

      <div className="w-56 bg-green-200 flex flex-col items-center bg-gray-500 rounded-xl">
        <h1 className="text-2xl text-white pt-3">Life Skill</h1>
        <div
          className="w-32 flex justify-center items-center py-5"
          ref={lifeSkill}
        ></div>
        <h1 className="text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h1>
      </div>
    </div>
  );
};

export default Service;
