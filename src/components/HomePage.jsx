import React from "react";
import { useNavigate} from  "react-router-dom"
import { Link } from "react-router-dom";

function HomePage() {
    return (
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-6">Welcome to the Quiz App</h1>
        <p className="text-lg mb-4">Test your knowledge with our fun quiz!</p>
        <Link
          to="/PlaywrightQuiz"
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Start Quiz
        </Link>
      </div>
    );
  }
  
  export default HomePage;