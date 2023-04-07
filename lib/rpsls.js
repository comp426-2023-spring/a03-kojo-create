const moves = {
    rps: ['rock', 'paper', 'scissors'],
    rpsls: ['rock', 'paper', 'scissors', 'lizard', 'spock']
  };
  
  function playGame(moveType, move) {
    const possibleMoves = moves[moveType];
    const random = Math.floor(Math.random() * possibleMoves.length);
  
    if (move === undefined) {
      move = possibleMoves[random];
    }
  
    if (!possibleMoves.includes(move)) {
      const errorMsg = `Error: Possible moves for ${moveType} include ${possibleMoves.join(', ')}.`;
      console.error(errorMsg);
      throw new RangeError(errorMsg);
    }
  
    const opponentMove = possibleMoves[random];
    let result;
  
    if (move === opponentMove) {
      result = 'tie';
    } else {
      switch (move) {
        case 'rock':
          result = opponentMove === 'scissors' || opponentMove === 'lizard' ? 'win' : 'lose';
          break;
        case 'paper':
          result = opponentMove === 'rock' || opponentMove === 'spock' ? 'win' : 'lose';
          break;
        case 'scissors':
          result = opponentMove === 'paper' || opponentMove === 'lizard' ? 'win' : 'lose';
          break;
        case 'lizard':
          result = opponentMove === 'paper' || opponentMove === 'spock' ? 'win' : 'lose';
          break;
        case 'spock':
          result = opponentMove === 'rock' || opponentMove === 'scissors' ? 'win' : 'lose';
          break;
      }
    }
  
    return {
      player: move,
      opponent: opponentMove,
      result: result
    };
  }
  
  function rps(move) {
    return playGame('rps', move);
  }
  
  function rpsls(move) {
    return playGame('rpsls', move);
  }
  
  export {rps, rpsls};
  