import React from "react";
import { Link } from "react-router-dom";

function ConferencesBox({ conference }) {
  return (
    <div className="relative bg-white border border-gray-300 rounded-md p-10 mx-auto max-w-4xl shadow-lg">
      <h2 className="text-xl font-semibold text-gray-700">Report</h2>
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
        className="inline-block mt-4 px-6 py-2 bg-blue-500 text-white rounded-md font-semibold"
      >
        See More
      </Link>
    </div>
  );
}

export default ConferencesBox;
