import React from "react";
import {motion} from "framer-motion"

const about = () => {
  return (
    <div className="flex flex-col">
<motion.div
initial={{ opacity: 0 }}
animate={{
  opacity: 1, 
}}
transition={{ delay: 1 , duration:4}}
>
  <h1 className="text-white pb-10 uppercase text-3xl">About</h1>
</motion.div>
    <div name="about" className="w-full h-96 flex justify-between p-2">
      <motion.div 
       initial={{ opacity: 0 , x:-100}}
       animate={{
         opacity: 1, 
         x:0
      
      }}
      transition={{ delay: 1 , duration:4}}
      className="flex w-1/2 flex-col">
        <h1 className="text-4xl pb-3 font-bold text-white">Title</h1>
        <h1 className="p-10 font-mono text-sm text-center text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h1>
      </motion.div>
      <motion.div 
      initial={{ opacity: 0 , x:100}}
      animate={{
        opacity: 1, 
        x:0
     
     }}
     transition={{ delay: 1 , duration:4}}
      className="flex w-1/2 flex-col">
        <h1 className="text-4xl font-bold text-white">Title</h1>
        <h1 className=" p-10 font-mono text-sm text-center text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h1>
      </motion.div>
    </div>
    </div>
  );
};

export default about;
