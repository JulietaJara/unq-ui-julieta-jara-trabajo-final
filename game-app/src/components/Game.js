import React, { useState, useEffect } from "react";
import options from "../data/options";
import getResult from "../data/result";

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [playerMessage, setPlayerMenssage] = useState(null);
    const [computerMessage, setComputerMenssage] = useState(null);

    const handlePlay = (choice) => {
        setPlayerChoice(choice)
        setDisabled(true)
        const randomChoice = Math.floor(Math.random()* 5);

        setTimeout(() => {
            setComputerChoice(randomChoice)
        });

        setTimeout(() => {
            setResult(getResult(choice, randomChoice))
        })

        clearTimeout()

    }

    const volverAJugar = () => {
        setPlayerChoice(null)
        setComputerChoice(null)
        setResult(null)
        setDisabled(false)
        setPlayerMenssage(null)
        setComputerMenssage(null)
    }

    useEffect(() => {
        if(playerChoice != null){
            setPlayerMenssage(
                `Has elegido ${options[playerChoice]?.name}!`
            );
        }
    }, [playerChoice]);

    useEffect(() => {
        if(computerChoice != null){
            setComputerMenssage(
                `La computadora ha elegido ${options[computerChoice]?.name}`            );
        }
    }, [computerChoice]);

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