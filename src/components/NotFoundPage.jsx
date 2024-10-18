// src/components/NotFoundPage.jsx
import React from "react";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800">SORRY</h1>
      <p className="mt-4 text-xl text-gray-600">We couldn't find that page</p>
      <p className="mt-2 text-blue-600">
        Try searching or go to
        <a href="/" className="underline">
          {" "}
          GetBrieff's Home Page
        </a>
        .
      </p>
    </div>
  );
};

export default NotFoundPage;
