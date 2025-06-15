// src/pages/Home.js
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-50 to-white px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700 mb-4">Plan Your Perfect Trip</h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mb-8">
          Discover hidden gems, build custom itineraries, and make your dream adventure a reality — all in one place.
        </p>
        <Link to="/planner">
          <button className="font-medium px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-md hover:bg-blue-700 transition duration-300">
            Try the Planner
          </button>
        </Link>
      </section>

      {/* Feature Section 1 */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-white px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Customize Your Journey</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
          Tailor every stop, add notes, and visualize your entire trip with ease. Your trip, your way.
        </p>
        <Link to="/planner">
          <button className="font-medium px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-md hover:bg-blue-700 transition duration-300">
            Try the Planner
          </button>
        </Link>
      </section>

      {/* Feature Section 2 */}
      <section className="min-h-screen flex flex-col justify-center items-center bg-gray-50 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">Collaborate with Friends</h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-xl mb-8">
          Plan together in real-time. Share itineraries and ideas to build unforgettable trips as a team.
        </p>
        <Link to="/planner">
          <button className="font-medium font-medium px-8 py-3 bg-blue-600 text-white rounded-full text-lg shadow-md hover:bg-blue-700 transition duration-300">
            Try the Planner
          </button>
        </Link>
      </section>

      {/* Final CTA */}
      <section className="min-h-[60vh] flex flex-col justify-center items-center bg-blue-600 text-white px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Planning Your Next Trip Today</h2>
        <p className="text-lg md:text-xl max-w-lg mb-8">
          It’s free, easy, and built for curious travelers like you.
        </p>
        <Link to="/planner">
          <button className="font-medium px-8 py-3 bg-white text-blue-600 font-semibold rounded-full text-lg shadow-md hover:bg-gray-100 transition duration-300">
            Try the Planner
          </button>
        </Link>
      </section>
    </div>
  );
}
