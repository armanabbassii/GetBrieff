import React, { useState } from "react";
import ConferencesBox from "./ConferencesBox"; // Reuse the ConferencesBox component
import { ArticlesBox } from "../constants/ArticlesBox"; // Import ArticlesBox data

function Articles() {
  const [currentArticle, setCurrentArticle] = useState(0);

  const handleNext = () => {
    setCurrentArticle((prev) =>
      prev === ArticlesBox.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrev = () => {
    setCurrentArticle((prev) =>
      prev === 0 ? ArticlesBox.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-[#FBF7EF] text-center py-10 relative mt-1 border border-gray-500">
      {/* Title Section */}
      <div className="text-center">
        <h1 className="text-4xl font-bold text-black">
          <span className="text-red-500">GetBrief.</span> Articles
        </h1>
        <p className="mt-4 text-gray-600">
          Watch select INBOUND sessions on demand. Tune in to our Main Stage and
          HubSpot Heroes programming on our YouTube channel.
        </p>
      </div>

      {/* ArticlesBox Section */}
      <div className="mt-10 flex justify-center relative">
        <ConferencesBox conference={ArticlesBox[currentArticle]} />
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
          {ArticlesBox.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentArticle
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

      {/* Show More Articles Button */}
      <div className="text-center mt-8">
        <button className="px-4 py-2 bg-[#FAC710] text-black font-semibold">
          Show More Articles
        </button>
      </div>
    </div>
  );
}

export default Articles;
