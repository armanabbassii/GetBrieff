import React from "react";

function Navbar (){
    return (
        <nav className="bg-white shadow-md fixed top-0 w-full z-10">
            <div className="countainer mx-auto flex items-center justify-between py-4 px-6">
            {/* <img src="logo.png" alt="Logo" className="h-8" /> */}
            <ul className="flex space-x-6">
                <li><a href="#" className="text-gray-700">store</a></li>
                <li><a href="#" className="text-gray-700">Mac1</a></li>
                <li><a href="#" className="text-gray-700">Mac2</a></li>
                <li><a href="#" className="text-gray-700">Mac3</a></li>
            </ul>
            </div>
        </nav>
    )
}
export default Navbar