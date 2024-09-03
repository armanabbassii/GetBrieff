function Navbar() {
    return (
      <nav className="bg-slate-100 fixed top-0 left-0 w-full z-10 font-semibold">
        <div className="flex justify-center py-2">
          <ul className="flex space-x-10">
            <li><a href="#" className="text-gray-700">Conferences</a></li>
            <li><a href="#" className="text-gray-700">Try Yourself</a></li>
            <li><a href="#" className="text-gray-700">Register</a></li>
            <li><a href="#" className="text-gray-700">Contribute</a></li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;