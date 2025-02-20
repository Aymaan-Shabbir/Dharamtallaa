import { useState } from "react";
import { Link } from "react-router-dom";
export const Navbar = () => {
  const [btn, setBtn] = useState("Light");

  const btnToggle = () => {
    setBtn(btn === "Light" ? "Dark" : "Light");
  };

  return (
    <div className="bg-gray-950 text-white flex justify-evenly items-center w-full p-1 py-3 shadow-lg flex-wrap ">
      <h1 className="text-lg font-bold">DHARAMTALLA.COM</h1>
      <ul className="flex items-center gap-3 text-m sm:text-sm">
        <li className="cursor-pointer hover:text-gray-300 ">
          <Link to="/">HOME.</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="kids">KIMDS.</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/men">MEN.</Link>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <Link to="/women">woMEN.</Link>
        </li>
        <li>
          <button
            onClick={btnToggle}
            className="border border-white px-2 py-2 rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-black"
          >
            {btn}
          </button>
        </li>
      </ul>
    </div>
  );
};
