import React, { useState } from 'react';
import { Board } from "../board/"

export const Game = () => {
  const [ history, setHistory ] = useState(
    [
      {
        squares: Array(9).fill(''),
      },
    ]
  );
  const [ stepNumber, setStepNumber ] = useState(0); 
  const [ xIsNext, setXIsNext ] = useState(true);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares);

  const moves = history.map((step, move) => {
    const desc = move ? 'Go to move #' + move : 'Go to game start';
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `Next Player ${xIsNext ? "X" : "O"}'s turn`;
  }


  const handleClick = (i: number) => {
    const slicedHistory = history.slice(0, stepNumber + 1);
    const current = slicedHistory[slicedHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = xIsNext ? "X" : "O";
    setHistory(slicedHistory.concat([
      {
        squares: squares,
      },
    ]));
    setStepNumber(slicedHistory.length);
    setXIsNext(!xIsNext);
  };

  const jumpTo = (step: number) => {
    console.log("jumpNumber", step);
    setXIsNext(step % 2 === 0);
  };

  return (
    <div className="game">
      <div className="game-board">
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

const calculateWinner = (squares: string[]) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
