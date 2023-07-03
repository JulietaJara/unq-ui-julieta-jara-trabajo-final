import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './Game.css';
import options from "../data/options";
import useChoice from "../useChoice/useChoices";
import GameResult from "./GameResult";
import ButtonOptions from "../atoms/ButtonOptions";
import ButtonReset from "../atoms/ButtonReset";

const Game = () => {
    const { playerChoice, computerChoice, playerMessage, computerMessage, result, disabled, mostrarBoton, handlePlay, volverAJugar } = useChoice()

    return (
        <div className="container-juego" >
            <div className="title-juego"> ¡Piedra, Papel, Tijera, Lagarto o Spock! </div>
            <div className="styles">
                <div className="comencemos"> ¡Comencemos! Elige una opción: </div>
                <div className="button-container">
                    {options.map((option) => (
                        <ButtonOptions
                            key={option.id}
                            option={option}
                            disabled={disabled}
                            handlePlay={handlePlay}
                        />
                    ))}
                </div>

                {playerChoice != null && <div> {playerMessage}  </div>}
                {result != null && <GameResult result={result} />}
                {computerChoice != null && <div>{computerMessage}  </div>}

                {mostrarBoton && <ButtonReset onClick={volverAJugar} />}
            </div>
        </div>
    )
}

export default Game;