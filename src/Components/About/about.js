import React from "react";

const about = () => {
  return (
    <div className="flex flex-col">
<div>
  <h1 className="text-white pb-10 uppercase text-3xl">About</h1>
</div>
    <div name="about" className="w-full h-96 flex justify-between p-2">
      <div className="flex w-1/2 flex-col">
        <h1 className="text-4xl pb-3 font-bold text-white">Title</h1>
        <h1 className="p-10 font-mono text-sm text-center text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h1>
      </div>
      <div className="flex w-1/2 flex-col">
        <h1 className="text-4xl font-bold text-white">Title</h1>
        <h1 className=" p-10 font-mono text-sm text-center text-gray-300">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h1>
      </div>
    </div>
    </div>
  );
};

export default about;
