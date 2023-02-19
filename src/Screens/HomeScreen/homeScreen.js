import React from "react";
import Navbar from "../../Components/Navbar/navbar";
import About from "../../Components/About/about";
import Contact from "../../Components/Contact/contact";
import Service from "../../Components/Service/service";
import Home from "../../Components/Home/home";

const homeScreen = () => {
  return (
    <div className="bg-[#0a192f] w-screen">
      <h1>hey</h1>
      {/* <Navbar /> */}
      {/* <Home/> */}
      {/* <About/> */}
      <Service />
      {/* <Contact /> */}
    </div>
  );
};

export default homeScreen;
