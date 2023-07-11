import React from "react";
import caritaFeliz from '../images/caritaFeliz.png'
import caritaTriste from '../images/caritaTriste.png'
import empate from '../images/empate.png'
import './GameResult.css';

const GameResult = ({ result }) => {
    const resultMessages = {
        0: <div><strong>Empate</strong><img src= {empate} alt="Imagen de igualdad" className="tamaño-igual" /></div>,
        1: <div><strong>Has ganado esta partida!</strong><img src= {caritaFeliz} alt="Imagen de ganador" className="tamaño-carita" /></div>,
        2: <div><strong>Has perdido esta partida</strong><img src= {caritaTriste} alt="Imagen de perdedor" className="tamaño-carita" /></div>
    };

    return <div>{resultMessages[result] || null}</div>;
};

export default GameResult;