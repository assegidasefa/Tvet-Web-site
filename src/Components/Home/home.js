import { Button } from "antd";
import React, { useEffect, useRef } from "react";
import Lottie from "lottie-web";

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
    <div name="home" className="bg-blue-500 h-96 w-full flex">
      <div className="bg-red-500 w-1/2 p-4">
        <h1 className="text-2xl">Hula Construction And Industrial College </h1>
        <h1>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </h1>
        <Button type="primary">Get Started</Button>
      </div>
      <div className="w-1/2 h-96" ref={container}></div>
    </div>
  );
};

export default Home;
