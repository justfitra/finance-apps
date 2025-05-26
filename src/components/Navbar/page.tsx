"use client";

import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <>
      <nav className="flex items-center bg-dark justify-center px-24 fixed z-50 py-6 w-full">
        <div className="flex justify-between max-w-7xl w-full">
          <div>
            <h1 className="text-2xl font-bold text-center">
              Finance <span className="text-primary">App.</span>
            </h1>
          </div>
          <ul className=" gap-8 font-medium hidden sm:flex">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <div className="flex sm:hidden">
            <FontAwesomeIcon icon={faBars} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
