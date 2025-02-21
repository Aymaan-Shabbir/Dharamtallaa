import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu toggle

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [btn, setBtn] = useState("Light");

  const btnToggle = () => {
    setBtn(btn === "Light" ? "Dark" : "Light");
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-gray-950 text-white flex justify-between items-center w-full p-3 shadow-lg flex-wrap z-10">
      <h1 className="text-lg font-bold">DHARAMTALLA.COM</h1>

      {/* Hamburger Menu Button */}
      <button className="sm:hidden p-2" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Menu Items */}
      <ul
        className={`sm:flex items-center gap-3 text-m sm:text-sm absolute sm:static top-14 left-0 w-full bg-gray-950 sm:bg-transparent p-4 sm:p-0 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <li
          className="cursor-pointer hover:text-gray-300 p-2"
          onClick={closeMenu}
        >
          <Link to="/">HOME.</Link>
        </li>
        <li
          className="cursor-pointer hover:text-gray-300 p-2"
          onClick={closeMenu}
        >
          <Link to="/kids">KIDS.</Link>
        </li>
        <li
          className="cursor-pointer hover:text-gray-300 p-2"
          onClick={closeMenu}
        >
          <Link to="/men">MEN.</Link>
        </li>
        <li
          className="cursor-pointer hover:text-gray-300 p-2"
          onClick={closeMenu}
        >
          <Link to="/women">WOMEN.</Link>
        </li>
        <li
          className="cursor-pointer hover:text-gray-300 p-2"
          onClick={closeMenu}
        >
          <Link to="/about">ABOUT.</Link>
        </li>
        <li
          className="cursor-pointer hover:text-gray-300 p-2"
          onClick={closeMenu}
        >
          <Link to="/grocery">GROCERY.</Link>
        </li>
        <li className="p-2">
          <button
            onClick={btnToggle}
            className="border border-white px-2 py-2 rounded-lg font-semibold transition duration-300 hover:bg-white hover:text-black"
          >
            {btn}
          </button>
        </li>
      </ul>
    </nav>
  );
};
