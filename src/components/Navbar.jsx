import React from "react";
import { useState } from "react";
import Logo from "../assets/Logo.png";

function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  // Show dropdown when mouse enters either the parent or the dropdown
  const handleMouseEnter = () => {
    setShowDropdown(true);
  };

  // Hide dropdown when mouse leaves both the parent and the dropdown
  const handleMouseLeave = () => {
    setShowDropdown(false);
  };

  return (
    <nav className="bg-gray-100/70 backdrop-blur-md fixed top-0 left-0 w-full z-20 font-semibold shadow-md">
      <div className="flex justify-center py-4">
        {/* Logo item */}
        <div className="flex items-center">
          <img src={Logo} alt="logo" className="w-12 h-auto space-x-16 "></img>
        </div>
        <ul className="flex space-x-16 ml-12">
          {/* Dropdown item */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter} // Show dropdown on hover
            onMouseLeave={handleMouseLeave} // Hide dropdown when mouse leaves
          >
            <span className="text-black cursor-pointer duration-200">
              Conferences
            </span>
            {showDropdown && (
              <ul
                className="absolute top-full left-0 bg-stone-200 shadow-md mt-2 z-30"
                onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over dropdown
                onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves the dropdown
              >
                <li>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 hover:bg-gray-200"
                  >
                    Cypress
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 block px-4 py-2 hover:bg-gray-200"
                  >
                    Playwright
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Other navbar items */}
          <li>
            <a href="#" className="text-black">
              Articles
            </a>
          </li>
          {/* <li>
            <a href="#" className="text-black">
              About
            </a>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
