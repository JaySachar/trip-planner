// src/components/NavBar.js
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between">
      <Link to="/" className="text-2xl text-blue-600 hover:text-blue-800 transition-colors duration-200 font-bold ">
        Trip Planner
      </Link>
      <div className="flex space-x-6 text-gray-600">
        <Link to="/planner" className="hover:text-blue-600 transition-colors duration-200 font-medium">
          Planner
        </Link>
        <Link to="/about" className="hover:text-blue-600 transition-colors duration-200 font-medium">
          About
        </Link>
      </div>
    </nav>
  );
}
