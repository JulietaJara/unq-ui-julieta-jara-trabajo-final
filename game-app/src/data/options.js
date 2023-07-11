import roca from '../images/roca.png'
import papel from '../images/papel.png'
import tijera from '../images/tijera.png'
import lagarto from '../images/lagarto.png'
import spock from '../images/spock.png'


const options = [
    {id: 0, name: "Piedra", imagen: roca, ganaA: [2, 3]},
    {id: 1, name: "Papel", imagen: papel, ganaA: [0, 4]},
    {id: 2, name: "Tijera", imagen: tijera, ganaA:[1, 3]},
    {id: 3, name: "Lagarto", imagen: lagarto, ganaA:[1, 4]},
    {id: 4, name: "Spock", imagen: spock, ganaA:[3, 0]}

];

export default options;