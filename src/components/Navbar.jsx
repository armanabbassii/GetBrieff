import { useState } from "react";

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
    <nav className="bg-green-300 fixed top-0 left-0 w-full z-20 font-semibold mb-0">
      <div className="flex justify-center py-4">
        <ul className="flex space-x-16">
          {/* Dropdown item */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter} // Show dropdown on hover
            onMouseLeave={handleMouseLeave} // Hide dropdown when mouse leaves
          >
            <span className="text-white cursor-pointer duration-200">
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
            <a href="#" className="text-white">
              Articles
            </a>
          </li>
          <li>
            <a href="#" className="text-white">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
