import { UserContext } from "../utils/UserContext";
import { Accordian } from "./Accordian";
import { useState, useContext } from "react";

const Men = () => {
  const [showList, setShowList] = useState("");
  const user = useContext(UserContext);
  console.log(user);
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
      <div>
        <h1>{user.name}</h1>
        <h1>{user.email}</h1>
      </div>
    </div>
  );
};
export default Men;
