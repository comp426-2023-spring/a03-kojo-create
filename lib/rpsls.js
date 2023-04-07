export {rps, rpsls}

function rps(move) {

    const possibleMoves = ['rock', 'paper', 'scissors'];
    const random = Math.floor(Math.random() * possibleMoves.length);

    if (move === undefined) {
        return {
            player: possibleMoves[random]
        };
    } else if (!possibleMoves.includes(move)){
        console.error('Error: Possible moves include rock, paper, or scissors.')
        throw new RangeError()
    } else {
        move = move.toLowerCase();
        const opponentMove = possibleMoves[random]
        let result
        
        if (move === 'rock') {
            if (opponentMove === 'rock') {
                result = 'tie';
            } else if (opponentMove === 'paper') {
                result = 'lose';
            } else if (opponentMove === 'scissors') {
                result = 'win';
            }
        
        } else if (move === 'paper') {
            if (opponentMove === 'rock') {
                result = 'win';
            } else if (opponentMove === 'paper') {
                result = 'tie';
            } else if (opponentMove === 'scissors') {
                result = 'lose';
            }

        } else if (move === 'scissors') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'tie';
            }
        }
        return {
            player: move,
            opponent: opponentMove,
            result: result
        };
    }
}

function rpsls(move) {

    const possibleMoves = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
    const random = Math.floor(Math.random() * possibleMoves.length);

    if (move === undefined) {
        return {
            player: possibleMoves[random]
        };
    } else if (!possibleMoves.includes(move)) {
        console.error('Error: Move must be rock, paper, scissors, lizard, or spock.')
        throw new RangeError();
    }
    else {
        
        move = move.toLowerCase();
        
        const opponentMove = possibleMoves[random]
        let result
        
        if (move === 'rock') {
            if (opponentMove === 'rock') {
                result = 'tie';
            } else if (opponentMove === 'paper') {
                result = 'lose';
            } else if (opponentMove === 'scissors') {
                result = 'win';
            } else if (opponentMove === 'lizard') {
                result = 'win';
            } else if (opponentMove === 'spock') {
                result = 'lose';
            }
        
        } else if (move === 'paper') {
            if (opponentMove === 'rock') {
                result = 'win';
            } else if (opponentMove === 'paper') {
                result = 'tie';
            } else if (opponentMove === 'scissors') {
                result = 'lose';
            } else if (opponentMove === 'lizard') {
                result = 'lose';
            } else if (opponentMove === 'spock') {
                result = 'win';
            }
        
        } else if (move === 'scissors') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'tie';
            } else if (opponentMove === 'lizard') {
                result = 'win';
            } else if (opponentMove === 'spock') {
                result = 'lose';
            }
       
        } else if (move === 'lizard') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'lose';
            } else if (opponentMove === 'lizard') {
                result = 'tie';
            } else if (opponentMove === 'spock') {
                result = 'win';
            }
        
        } else if (move === 'spock') {
            if (opponentMove === 'rock') {
                result = 'lose';
            } else if (opponentMove === 'paper') {
                result = 'win';
            } else if (opponentMove === 'scissors') {
                result = 'win';
            } else if (opponentMove === 'lizard') {
                result = 'lose';
            } else if (opponentMove === 'spock') {
                result = 'tie';
            }
        }
        return {
            player: move,
            opponent: opponentMove,
            result: result
        };
    }
}