import React from "react";
import caritaFeliz from '../images/caritaFeliz.png'
import caritaTriste from '../images/caritaTriste.png'
import empate from '../images/empate.png'
import './GameResult.css';

const GameResult = ({ result }) => {
    const resultMessages = {
        0: <div className="result">Empate<img src= {empate} alt="Imagen de igual" className="tamaño-igual" /></div>,
        1: <div className="result">Has ganado esta partida!<img src= {caritaFeliz} alt="Imagen de ganador" className="tamaño-carita" /></div>,
        2: <div className="result">Has perdido esta partida<img src= {caritaTriste} alt="Imagen de perdedor" className="tamaño-carita" /></div>
    };

    return <div>{resultMessages[result] || null}</div>;
};

export default GameResult;