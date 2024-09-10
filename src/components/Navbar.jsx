import { useState } from 'react';

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
    <nav className="bg-slate-100 fixed top-0 left-0 w-full z-20 font-semibold">
      <div className="flex justify-center py-2">
        <ul className="flex space-x-10">
          {/* Dropdown item */}
          <li
            className="relative"
            onMouseEnter={handleMouseEnter} // Show dropdown on hover
            // onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves
          >
            <span className="text-gray-700 cursor-pointer">
              Conferences
            </span>
            {showDropdown && (
              <ul
                className="absolute top-full left-0 bg-blue-100 shadow-md rounded-md mt-2 z-30"
                onMouseEnter={handleMouseEnter} // Keep dropdown open when hovering over dropdown
                onMouseLeave={handleMouseLeave} // Close dropdown when mouse leaves the dropdown
              >
                <li>
                  <a href="#" className="text-gray-700 block px-4 py-2 hover:bg-gray-200">
                    Cypress
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-700 block px-4 py-2 hover:bg-gray-200">
                    Playwright
                  </a>
                </li>
              </ul>
            )}
          </li>

          {/* Other navbar items */}
          <li><a href="#" className="text-gray-700">Try Yourself</a></li>
          <li><a href="#" className="text-gray-700">Register</a></li>
          <li><a href="#" className="text-gray-700">Contribute</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
