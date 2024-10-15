import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          {/* First Column: Visit Information */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-blue-300">
              Visit the State Theatre
            </h4>
            <p className="text-gray-400">
              <strong>Kalamazoo State Theatre</strong>
              <br />
              404 S Burdick St
              <br />
              Kalamazoo, MI 49007
              <br />
              269-345-6500
              <br />
              <em>Downtown Kalamazoo – Since 1927</em>
            </p>
          </div>

          {/* Second Column: Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-blue-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Shows & Tickets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Map & Directions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Lodging
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Third Column: More Links */}
          <div>
            <h4 className="text-lg font-semibold mb-2 text-blue-300">
              Quick Links
            </h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ / General Rules
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Guest Code of Conduct
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Parking
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Join Our Team
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
