// src/components/CustomButton.jsx
import React from "react";

const CustomButton = ({ onClick, children, className }) => {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default CustomButton;
