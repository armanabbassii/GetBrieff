import React from "react";
import { Link } from "react-router-dom";

function Conferences() {
  return (
    <section className="bg-[#f7fafc] text-center py-20 text-gray-800">
      <h1 className="text-4xl font-bold">
        <span className="text-red-500">GetBrief.</span> Conferences
      </h1>
      <p className="mt-4 text-gray-600">
        Watch select INBOUND sessions on demand. Tune in to our Main Stage and
        HubSpot Heroes programming on our YouTube channel.
      </p>

      <div className="mt-10 bg-white border border-gray-300 p-10 mx-auto max-w-4xl shadow-lg">
        <h2 className="text-xl font-semibold text-gray-700">Report</h2>
        <h3 className="text-2xl font-bold text-red-700 mt-2">
          CYPRESS Conf 2024
        </h3>
        <p className="mt-4 text-gray-700">
          1. About conference: Get inspired by the work of millions of top-rated
          designers & agencies around the world. Automatically run them in your
          continuous integration builds.
        </p>
        <p className="mt-2 text-gray-700">
          2. Agencies around the world. Automatically run them in your
          continuous integration builds.
        </p>
        <Link
          to="/conference-details"
          className="inline-block mt-6 px-6 py-2 bg-blue-500 text-white font-semibold"
        >
          See More
        </Link>
      </div>

      {/* <div className="mt-8 flex justify-center space-x-4">
        <button className="text-2xl">⬅️</button>
        <button className="text-2xl">➡️</button>
      </div> */}
      {/* Divider Line */}
      <hr className="border-t-2 border-gray mt-10 mb-6 mx-auto max-w-4xl" />
      <div className="flex justify-center mt-10">
        <Link
          to="/more-conferences"
          className="bg-yellow-400 px-4 py-3 font-semibold text-black"
        >
          Show More Conferences
        </Link>
      </div>
    </section>
  );
}

export default Conferences;
