import React from "react";

const GameResult = ({ result }) => {
    const resultMessages = {
        0: <strong>Empate</strong>,
        1: <strong>Has ganado esta partida!</strong>,
        2: <strong>Has perdido esta partida</strong>
    };

    return <div>{resultMessages[result] || null}</div>;
};

export default GameResult;