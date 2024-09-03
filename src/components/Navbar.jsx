function Navbar() {
    return (
      <nav className="bg-slate-300 fixed top-0 left-0 w-full z-10">
        <div className="flex justify-center py-2">
          <ul className="flex space-x-10">
            <li><a href="#" className="text-gray-700">Cypress Conf</a></li>
            <li><a href="#" className="text-gray-700">Playwright Conf</a></li>
            <li><a href="#" className="text-gray-700">Try Yourself</a></li>
            <li><a href="#" className="text-gray-700">Register</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;