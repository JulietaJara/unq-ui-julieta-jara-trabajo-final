import React from "react";
import "./ButtonReset.css"; 

const ResetButton = ({ onClick }) => {
    return (
        <button className="reset" onClick={onClick}>Volver a jugar</button>
    );
};

export default ResetButton;