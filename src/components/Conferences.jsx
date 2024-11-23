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
    <div className="bg-[#F0FCF8] text-center py-10 relative border border-gray-500 mt-1">
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

      {/* ConferencesBox Section */}
      <div className="mt-10 flex justify-center relative">
        <ConferencesBox conference={conferencesBox[currentConference]} />
      </div>

      {/* Navigation and Dots Section */}
      <div className="mt-6 flex items-center justify-center space-x-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="w-10 h-10 bg-gray-200 text-black font-semibold rounded-full shadow hover:bg-gray-300 flex justify-center items-center"
        >
          ←
        </button>

        {/* Carousel Dots */}
        <div className="flex items-center space-x-2">
          {conferencesBox.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentConference
                  ? "bg-blue-500"
                  : "bg-gray-200 border border-gray-500"
              }`}
            ></span>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="w-10 h-10 bg-gray-200 text-black font-semibold rounded-full shadow hover:bg-gray-300 flex justify-center items-center"
        >
          →
        </button>
      </div>
      {/* Divider Line */}
      <hr className="border-t-2 border-gray mt-5 mb-6 mx-auto max-w-4xl" />
      {/* Show More Conferences Button */}
      <div className="text-center mt-8">
        <button className="px-4 py-2 bg-[#FAC710] text-black font-semibold">
          Show More Conferences
        </button>
      </div>
    </div>
  );
}

export default Conferences;
