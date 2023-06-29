import React from "react";

const GameResult = ({ result }) => {
    const resultMessages = {
        0: "Empate",
        1: "Has ganado esta partida!",
        2: "Has perdido esta partida"
    };

    return <div>{resultMessages[result] || null}</div>;
};

export default GameResult;
