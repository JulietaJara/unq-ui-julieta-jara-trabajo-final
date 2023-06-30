import React from "react";
import "./ButtonOptions.css"; 

const ButtonOptions = ({ option, disabled, handlePlay }) => {
  return (
    <button
    className="options"
      disabled={disabled}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      <img src={option.imagen} alt={option.name} />
    </button>
  );
};

export default ButtonOptions;
