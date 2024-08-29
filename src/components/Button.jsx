import React from 'react';

function Button({ label, onClick, className,color }) {



  const colors = {
    "yellow":"bg-yellow-400",
    "blue":"bg-green-400",
  }

  return (
    <button
      className={`border border-black w-full py-2 rounded-md mt-4 ${className} ${colors[color]}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;

// .explain-button {
//   background-color: #bfdbfe;
//   /* Tailwind's bg-blue-200 equivalent */
//   color: #000;
//   margin-top: 1rem;
// }