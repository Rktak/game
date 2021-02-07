import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMovesLeft = current.board.every(el => el !== null);

  return (
    <div className="status-message">
      {winner && 
      <span className={winner ==='X' ?"text-green":"text-orange"}>WINNER IS {winner}
          </span>}
      {!winner &&
        !noMovesLeft &&
        <span className={current.isXNext ?"text-green":"text-orange"}>Next player is {current.isXNext ? 'X' : 'O'}</span>
      }
      {!winner && noMovesLeft && 
      <><span className="text-green">X </span><span className="text-orange">O </span>TIED
          </>}
    </div>
  );
};

export default StatusMessage;
