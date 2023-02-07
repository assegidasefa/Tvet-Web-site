import React from "react";

const about = () => {
  return (
    <div name="about" className="w-full h-96 flex justify-between p-2">
      <div className="flex w-1/2 flex-col">
        <h1 className="text-4xl pb-3 font-bold text-white">Title</h1>
        <h1 className="text-md p-10 font-mono text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h1>
      </div>
      <div className="flex w-1/2 flex-col">
        <h1 className="text-4xl font-bold text-white">Title</h1>
        <h1 className="text-md p-10 font-mono text-center text-white">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s,
        </h1>
      </div>
    </div>
  );
};

export default about;
