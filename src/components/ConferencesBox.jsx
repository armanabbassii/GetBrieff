import React from "react";
import { Link } from "react-router-dom";

function ConferencesBox({ conference }) {
  return (
    <div className="relative bg-white border border-gray-300 p-6 max-w-4xl w-full h-72 shadow-lg">
      <h3 className="text-2xl font-bold text-red-700 mt-2">
        {conference.title}
      </h3>
      {conference.description.map((line, index) => (
        <p key={index} className="mt-2 text-gray-700">
          {line}
        </p>
      ))}
      <Link
        to="/conference-details"
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 px-6 py-2 bg-blue-500 text-white font-semibold"
      >
        See More
      </Link>
    </div>
  );
}

export default ConferencesBox;
