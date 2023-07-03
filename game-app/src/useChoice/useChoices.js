import { useState, useEffect } from "react";
import options from "../data/options";
import getResult from "../data/result";

const useChoice = () => {
    const [playerChoice, setPlayerChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState(null);
    const [disabled, setDisabled] = useState(false);
    const [playerMessage, setPlayerMenssage] = useState(null);
    const [computerMessage, setComputerMenssage] = useState(null);
    const [partidaTerminada, setPartidaTerminada] = useState(false);
    const [mostrarBoton, setMostrarBoton] = useState(false);

    const handlePlay = (choice) => {
        setPlayerChoice(choice)
        setDisabled(true)
        const randomChoice = Math.floor(Math.random()* 5);

        setTimeout(() => {
            setComputerChoice(randomChoice)
        }, 800);

        setTimeout(() => {
            setResult(getResult(choice, randomChoice))
        }, 500)
        setPartidaTerminada(true)
        clearTimeout()

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

    useEffect(() => {
        if (partidaTerminada) {
          setTimeout(() => {
            setMostrarBoton(true);
          }, 600); 
        }
      }, [partidaTerminada]);

    const volverAJugar = () => {
        setPlayerChoice(null)
        setComputerChoice(null)
        setResult(null)
        setDisabled(false)
        setPlayerMenssage(null)
        setComputerMenssage(null)
        setPartidaTerminada(false)
        setMostrarBoton(false)
    }

    return{
        playerChoice, computerChoice, result, disabled, playerMessage, computerMessage, partidaTerminada, mostrarBoton, handlePlay, volverAJugar
    }
}

export default useChoice