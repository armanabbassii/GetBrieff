import React, { useState } from "react";
import { Link } from "react-router-dom";

// ConferencesBox Component
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

// Conferences Component
function Conferences() {
  const [currentConference, setCurrentConference] = useState(0);

  const conferences = [
    {
      title: "CYPRESS Conf 2024",
      description: [
        "1. About conference: Get inspired by the work of millions of top-rated designers & agencies around the world. Automatically run them in your continuous integration builds.",
        "2. Agencies around the world. Automatically run them in your continuous integration builds.",
      ],
    },
    {
      title: "React Summit 2024",
      description: [
        "1. Learn about the latest React features and best practices from top experts.",
        "2. Collaborate with other developers to build innovative solutions.",
      ],
    },
    {
      title: "JavaScript Conf 2024",
      description: [
        "1. Explore the future of JavaScript and its ecosystem.",
        "2. Gain hands-on experience with cutting-edge tools and frameworks.",
      ],
    },
  ];

  const handleNext = () => {
    setCurrentConference((prev) =>
      prev === conferences.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentConference((prev) =>
      prev === 0 ? conferences.length - 1 : prev - 1
    );
  };

  return (
    <div className="py-10">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">
          <span className="text-red-500">GetBrief.</span> Conferences
        </h1>
        <p className="mt-4 text-gray-600">
          Watch select INBOUND sessions on demand. Tune in to our Main Stage and
          HubSpot Heroes programming on our YouTube channel.
        </p>
      </div>

      {/* Main Section */}
      <div className="relative mt-10 flex items-center justify-center">
        {/* Prev & Next Buttons */}
        <div className="absolute -left-16 flex flex-col items-center">
          <button
            onClick={handlePrev}
            className="mb-4 w-12 h-12 bg-gray-200 text-black flex items-center justify-center rounded-full shadow hover:bg-gray-300"
          >
            ←
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 bg-gray-200 text-black flex items-center justify-center rounded-full shadow hover:bg-gray-300"
          >
            →
          </button>
        </div>

        {/* ConferencesBox */}
        <ConferencesBox conference={conferences[currentConference]} />
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-4">
        {conferences.map((_, index) => (
          <span
            key={index}
            className={`w-3 h-3 mx-1 rounded-full ${
              index === currentConference
                ? "bg-teal-500"
                : "bg-teal-200 border border-teal-500"
            }`}
          ></span>
        ))}
      </div>

      {/* Show More Conferences Button */}
      <div className="text-center mt-8">
        <button className="px-4 py-2 bg-yellow-500 text-black font-semibold rounded-md">
          Show More Conferences
        </button>
      </div>
    </div>
  );
}

export default Conferences;
