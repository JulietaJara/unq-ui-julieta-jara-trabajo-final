import options from "./options"

const getResult = (playerChoice, computerChoice) => {
    if(playerChoice === computerChoice){
        return 0
    }
    if(options[playerChoice].ganaA.includes(computerChoice)){
        return 1
    }
    return 2
}

export default getResult;