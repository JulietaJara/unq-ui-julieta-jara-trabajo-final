import React, { useState, useEffect } from "react";

const options = [
    {id: 0, name: "Piedra", imagen: "https://img.icons8.com/color/48/rock.png", ganaA: [2, 3]},
    {id: 1, name: "Papel", imagen: "https://img.icons8.com/3d-plastilina/69/file--v2.png", ganaA: [0, 4]},
    {id: 2, name: "Tijera", imagen: "https://img.icons8.com/office/16/cut.png", ganaA:[1, 3]},
    {id: 3, name: "Lagarto", imagen: "https://img.icons8.com/emoji/48/lizard-emoji.png", ganaA:[1, 4]},
    {id: 4, name: "Spock", imagen: "https://img.icons8.com/emoji/48/vulcan-salute-light-skin-tone.png", ganaA:[3, 0]}

];

const Game = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [disabled, setDisabled] = useState(false);

    const randomComputer = () => {
        Math.floor(Math.random()* 5)
    }

    const handlePlay = (choice) => {
        setPlayerChoice(choice)
        setDisabled(true)
        randomComputer()
    }

    return (
        <div>
        <div> ¡Piedra, Papel, Tijera, Lagarto o Spock! </div>
        <div> 
            {options.map((option) => (
                <button key={option.id} disabled={disabled} onClick={() => handlePlay(option.id)} title={option.name}>
                    <img src={option.imagen} alt={option.name} />
                    </button> 
            ))}
        </div>
        </div>
    )
}

export default Game;