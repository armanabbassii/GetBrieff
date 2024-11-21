import React, { useState } from "react";
import ConferencesBox from "./ConferencesBox";
import { conferencesBox } from "../constants/ConferencesBox";

function Conferences() {
  const [currentConference, setCurrentConference] = useState(0);

  const handleNext = () => {
    setCurrentConference((prev) =>
      prev === conferencesBox.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentConference((prev) =>
      prev === 0 ? conferencesBox.length - 1 : prev - 1
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
        <ConferencesBox conference={conferencesBox[currentConference]} />
      </div>

      {/* Carousel Dots */}
      <div className="flex justify-center mt-4">
        {conferencesBox.map((_, index) => (
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
