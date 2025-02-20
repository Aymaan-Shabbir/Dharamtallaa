import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-gray-100 flex flex-wrap justify-center p-6 min-h-screen mt-20 ">
      {[...Array(10)].map((_, index) => (
        <div
          key={index}
          className="w-60 flex flex-col items-center justify-center border p-5 bg-gray-300 animate-pulse rounded-lg shadow-md m-5"
        >
          <div className="w-40 h-40 bg-gray-400 rounded-lg mb-4"></div>
          <div className="w-3/4 h-6 bg-gray-400 rounded-md mb-2"></div>
          <div className="w-1/2 h-5 bg-gray-400 rounded-md mb-2"></div>
          <div className="w-1/3 h-6 bg-gray-400 rounded-md"></div>
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
