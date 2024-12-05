import React from 'react';
const Button = ({ label, onClick, type = "button" }) => {
    return (
      <button
        type={type}
        onClick={onClick}
        className="bg-primary text-white px-6 py-2 rounded-lg hover:bg-secondary focus:outline-none"
      >
        {label}
      </button>
    );
  };
  
  export default Button;
  