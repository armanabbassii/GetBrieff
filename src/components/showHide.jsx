// src/components/ShowHide.jsx

import React, { useState, useEffect } from "react";

function ShowHide({ counter, description }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false); // Reset show on counter change
  }, [counter]);

  const onShowClick = () => {
    setShow((prevShow) => !prevShow);
  };

  return (
    <div>
      {/* Explain Button */}
      <button
        onClick={onShowClick}
        className="explain-button bg-blue-200 text-black mt-4 py-2 px-4 rounded-md"
      >
        {show ? "Hide Explanation" : "Show Explanation"}
      </button>

      {/* Explanation details */}
      {show && (
        <h1 className="explain-details border px-6 py-4 rounded-xl mt-4 text-sm">
          {description}
        </h1>
      )}
    </div>
  );
}

export default ShowHide;
