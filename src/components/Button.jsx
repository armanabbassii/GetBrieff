import React from 'react';

function Button({ label, onClick, className }) {
  return (
    <button
      className={`border border-black w-full py-2 rounded-md ${className}`}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;