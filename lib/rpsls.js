export {playRps, playRpsls}

function playRps(playerMove) {

    const availableMoves = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * availableMoves.length);

    if (playerMove === undefined) {
        return {
            player: availableMoves[randomIndex]
        };
    } else if (!availableMoves.includes(playerMove)){
        console.error('Error: Available moves are rock, paper, or scissors.')
        throw new RangeError()
    } else {
        playerMove = playerMove.toLowerCase();
        const computerMove = availableMoves[randomIndex];
        let result;

        switch(playerMove) {
            case 'rock':
                result = (computerMove === 'rock') ? 'tie' :
                         (computerMove === 'paper') ? 'lose' : 'win';
                break;
            case 'paper':
                result = (computerMove === 'paper') ? 'tie' :
                         (computerMove === 'scissors') ? 'lose' : 'win';
                break;
            case 'scissors':
                result = (computerMove === 'scissors') ? 'tie' :
                         (computerMove === 'rock') ? 'lose' : 'win';
                break;
        }

        return {
            player: playerMove,
            computer: computerMove,
            result: result
        };
    }
}

function playRpsls(playerMove) {

    const availableMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const randomIndex = Math.floor(Math.random() * availableMoves.length);

    if (playerMove === undefined) {
        return {
            player: availableMoves[randomIndex]
        };
    } else if (!availableMoves.includes(playerMove)) {
        console.error('Error: Available moves are rock, paper, scissors, lizard, or spock.')
        throw new RangeError();
    } else {
        playerMove = playerMove.toLowerCase();
        const computerMove = availableMoves[randomIndex];
        let result;

        switch(playerMove) {
            case 'rock':
                result = (computerMove === 'rock') ? 'tie' :
                         (computerMove === 'paper' || computerMove === 'spock') ? 'lose' : 'win';
                break;
            case 'paper':
                result = (computerMove === 'paper') ? 'tie' :
                         (computerMove === 'scissors' || computerMove === 'lizard') ? 'lose' : 'win';
                break;
            case 'scissors':
                result = (computerMove === 'scissors') ? 'tie' :
                         (computerMove === 'rock' || computerMove === 'spock') ? 'lose' : 'win';
                break;
            case 'lizard':
                result = (computerMove === 'lizard') ? 'tie' :
                         (computerMove === 'rock' || computerMove === 'scissors') ? 'lose' : 'win';
                break;
            case 'spock':
                result = (computerMove === 'spock') ? 'tie' :
                         (computerMove === 'paper' || computerMove === 'lizard') ? 'lose' : 'win';
                break;
        }

        return {
            player: playerMove,
            computer: computerMove,
            result: result
        };
    }
}
