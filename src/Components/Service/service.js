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
    <div name="service" className="w-full h-96 bg-red-400 flex justify-around">
      <div className="w-56 bg-green-200 flex flex-col items-center">
        <h1 className="text-2xl">Theory</h1>
        <div
          className="w-32 flex justify-center items-center"
          ref={theory}
        ></div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h1>
      </div>

      <div className="w-56 bg-green-200 flex flex-col items-center">
        <h1 className="text-2xl">Practice</h1>
        <div
          className="w-32 flex justify-center items-center"
          ref={practice}
        ></div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h1>
      </div>

      <div className="w-56 bg-green-200 flex flex-col items-center">
        <h1 className="text-2xl">Life Skill</h1>
        <div
          className="w-32 flex justify-center items-center"
          ref={lifeSkill}
        ></div>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </h1>
      </div>
    </div>
  );
};

export default Service;
