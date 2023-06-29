import React from "react";
import options from "../data/options";
import useChoice from "../useChoice/useChoices";
import GameResult from "./GameResult";

const Game = () => {
    const { playerChoice, computerChoice, playerMessage, computerMessage, result, disabled, handlePlay, volverAJugar } = useChoice()

    return (
        <div>
            <div> ¡Piedra, Papel, Tijera, Lagarto o Spock! </div>

            {options.map((option) => (
                <button key={option.id} disabled={disabled} onClick={() => handlePlay(option.id)} title={option.name}>
                    <img src={option.imagen} alt={option.name} />
                </button>
            ))}

            {playerChoice != null && <div> {playerMessage}  </div>}
            {result != null && <GameResult result={result} />}
            {computerChoice != null && <div>{computerMessage}  </div>}

            <button onClick={volverAJugar}> Volver a jugar</button>
        </div>
    )
}

export default Game;