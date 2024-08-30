// src/components/ShowHide.jsx

import React from "react";
import { useState, useEffect } from "react";
import Button from "./button";

function ShowHide({ counter, description }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(false); // Reset show on counter change
  }, [counter]);

  
  const onShowClick = () => {
      setShow((prevShow) => !prevShow);
    };
    
    {/* easier to understand onShowClick function*/ }
    //   const onShowClick = () => {
    //     if (show == false) {
    //       setShow(true);
    //     } else {
    //       setShow(false);
    //     }
    //   };

  return (
    <div>
      {/* Explain Button */}
      <Button
        color= "blue"
        label="Explain"
        className="text-black mt-4"
        onClick={onShowClick}
      />
      {/* Explanation details */}
      {show && (
        <h1 className="explain-details">
          {description}
        </h1>
      )}
    </div>
  );
}

export default ShowHide;
