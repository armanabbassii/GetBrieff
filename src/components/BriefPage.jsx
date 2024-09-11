import React from "react";
import { useNavigate} from  "react-router-dom"
import { Link } from "react-router-dom";

function BriefPage() {
    return (
      <div className="text-center bg-red-200 fixed top-11 left-0 w-full z-10 py-40">
        <h1 className="text-5xl font-bold mb-5">Welcome to the Brief</h1>
        <p className=" text-green-500 font-bold font-mono mb-10"> Summary of the 2025 Cypress Conference in 1 minute!</p>
        <p className="text-lg mb-4">Test your Playwright knowledge with our fun quiz!</p>
      </div>
    );
  }
  
  export default BriefPage;