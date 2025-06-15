// src/components/NavBar.js
import { Link, useLocation } from "react-router-dom";

export default function NavBar() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";

  return (
    <nav
      className={`fixed top-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        isLandingPage ? "bg-transparent backdrop-blur-md" : "bg-white shadow-md"
      }`}
    >
      <Link
        to="/"
        className="text-4xl text-blue-600 hover:text-blue-800 transition-colors duration-200 font-bold drop-shadow-md"
      >
        Trip Planner
      </Link>
      <div className="flex space-x-16 text-gray-700 font-medium drop-shadow-md">
        <Link
          to="/planner"
          className="text-2xl hover:text-blue-600 transition-colors duration-200"
        >
          Planner
        </Link>
        <Link
          to="/about"
          className="text-2xl hover:text-blue-600 transition-colors duration-200"
        >
          About
        </Link>
      </div>
    </nav>
  );
}
