import React from "react";
import "./Button.scss";

function Button({ children, onClick, className }) {
  const getClick = () => {
    onClick ? onClick() : null;
  };

  return (
    <button onClick={getClick} className={`default-button ${className}`}>
      {children}
    </button>
  );
}

export default Button;
