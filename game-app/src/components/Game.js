import React from "react";
import options from "../data/options";
import useChoice from "./useChoices"

const Game = () => {
    const {playerChoice, computerChoice, playerMessage, computerMessage, result, disabled, handlePlay, volverAJugar} = useChoice()

    return (
        <div>
        <div> ¡Piedra, Papel, Tijera, Lagarto o Spock! </div>
        <div> 
            {options.map((option) => (
                <button key={option.id} disabled={disabled} onClick={() => handlePlay(option.id)} title={option.name}>
                    <img src={option.imagen} alt={option.name} />
                    </button> 
            ))}

        {playerChoice != null &&
        <div> {playerMessage}  </div> 
        }

        {result != null && (
            <div> 
            {result === 0 && <div> Empate </div>}
            {result === 1 && <div> Has ganado esta partida! </div>}
            {result === 2 && <div> Has perdido esta partida </div>}
            </div>
        )}
        
        {computerChoice != null &&
        <div>{computerMessage}  </div>
        }
        </div>

        <button onClick={volverAJugar}> Volver a jugar</button>
        </div>
    )
}

export default Game;