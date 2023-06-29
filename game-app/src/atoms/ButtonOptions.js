import React from "react";

const ButtonOptions = ({ option, disabled, handlePlay }) => {
  return (
    <button
      disabled={disabled}
      onClick={() => handlePlay(option.id)}
      title={option.name}
    >
      <img src={option.imagen} alt={option.name} />
    </button>
  );
};

export default ButtonOptions;
