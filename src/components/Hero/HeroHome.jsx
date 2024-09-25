import React from "react";
import { Link } from "react-router-dom";

function HeroHome() {
  return (
    <div className="hero-section py-20">
      <h1 className="text-5xl font-bold mb-5">Welcome to the Brrrief</h1>
      <p className="text-red-500 font-bold font-mono mb-10">
        Summary of the 2025 Cypress Conference in 1 minute!
      </p>
      <p className="text-lg mb-4">
        Test your Playwright knowledge with our fun quiz!
      </p>
      <Link
        to="/PlaywrightQuiz"
        className="bg-blue-500 text-white py-2 px-4 rounded-md"
      >
        Start Quiz
      </Link>
      <p className="mt-2 py-4 px-8">
        <Link
          to="/BriefPage"
          className="bg-red-500 text-white py-2 px-4 rounded-md"
        >
          Brief Conf
        </Link>
      </p>
    </div>
  );
}

export default HeroHome;
