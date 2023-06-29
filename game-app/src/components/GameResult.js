import React from "react";

const GameResult = ({ result }) => {
  if (result === 0) {
    return <div>Empate</div>;
  } else if (result === 1) {
    return <div>Has ganado esta partida!</div>;
  } else if (result === 2) {
    return <div>Has perdido esta partida</div>;
  } else {
    return null;
  }
};

export default GameResult;
