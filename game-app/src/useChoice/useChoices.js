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

    const handlePlay = (choice) => {
        setPlayerChoice(choice)
        setDisabled(true)
        const randomChoice = Math.floor(Math.random()* 5);

        setTimeout(() => {
            setComputerChoice(randomChoice)
        }, 600);

        setTimeout(() => {
            setResult(getResult(choice, randomChoice))
        }, 500)

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

    const volverAJugar = () => {
        setPlayerChoice(null)
        setComputerChoice(null)
        setResult(null)
        setDisabled(false)
        setPlayerMenssage(null)
        setComputerMenssage(null)
    }

    return{
        playerChoice, computerChoice, result, disabled, playerMessage, computerMessage, handlePlay, volverAJugar
    }
}

export default useChoice