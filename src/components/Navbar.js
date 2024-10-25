import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-black bg-opacity-50 fixed top-0 left-0 w-full z-50 transition duration-300 flex justify-between items-center">
      <div className="container mx-auto px-4 flex items-center">
        <Link
          className="text-white text-lg flex items-center no-underline flex-1"
          to="/"
        >
          <img
            src={require("../assets/logo-bg-free.png")}
            alt="logo"
            className="max-w-[40px] h-auto"
          />
          PakTravels
        </Link>
        <button
          className="text-white lg:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="material-icons">menu</span>
        </button>
        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } lg:flex space-x-6 lg:space-x-6 flex-1 justify-center`}
        >
          <Link className="text-white no-underline" to="/about">
            About
          </Link>
          <Link className="text-white no-underline" to="/dashboard">
            Dashboard
          </Link>
          <Link className="text-white no-underline" to="/contact">
            Contact
          </Link>
        </div>
        <div className="flex space-x-4 flex-1 justify-end">
          <Link
            to="/login"
            className="text-white border border-white px-4 py-2 no-underline"
          >
            Sign In
          </Link>
          <Link
            to="/signup"
            className="text-white bg-primary px-4 py-2 no-underline"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
