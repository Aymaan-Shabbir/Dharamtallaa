import { Accordian } from "./accordian";
import { useState } from "react";

const Men = () => {
  const [showList, setShowList] = useState("");
  return (
    <div className="h-full w-screen flex items-start justify-start">
      <div className="h-full max-w-5xl flex items-start justify-between flex-col mt-5">
        <h1 className="text-lg  p-1 text-gray-700 font-bold">Refine by:</h1>
        {["Brand", "Gender", "Price", "Ocassion", "Size"].map(
          (title, index) => (
            <Accordian
              key={index}
              title={title}
              open={showList === index ? true : false}
              setOpen={() => setShowList(index)}
            />
          )
        )}
      </div>
      <div>hellllo</div>
    </div>
  );
};
export default Men;
