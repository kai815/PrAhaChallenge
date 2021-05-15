/** @jsx jsx */
import { jsx } from '@emotion/react'
// eslint-disable-next-line 
import React, { useState } from 'react';
import { Board } from "../board/";
import { Move } from "../move/";
import { Status } from "../status/"
import { css } from '@emotion/react';


const GameStyle = css({
  display: 'flex',
  flexDirection: 'row',
});

const GameInfoStyle =css({
  marginLeft: '20px',
});

export interface GamePropsInterFace {
  history: {squares: string[]}[],
  setHistory: React.Dispatch<React.SetStateAction<{
    squares: any[];
  }[]>>,
  stepNumber:number,
  setStepNumber:React.Dispatch<React.SetStateAction<number>>
};

export const Game = (props:GamePropsInterFace) => {
  
  const {
    history,
    setHistory,
    stepNumber,
    setStepNumber
  } = props;
  const [ xIsNext, setXIsNext ] = useState(true);
  const current = history[stepNumber];
  const winner = calculateWinner(current.squares,stepNumber);

  const handleClick = (i: number) => {
    const slicedHistory = history.slice(0, stepNumber + 1);
    const current = slicedHistory[slicedHistory.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares,stepNumber) || squares[i]) {
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

  return (
    <div css={GameStyle}>
      <div css={GameInfoStyle}>
        <Board
          squares={current.squares}
          onClick={(i) => handleClick(i)}
        />
      </div>
      <div css={GameInfoStyle}>
        <div>
          <Status
            winner={winner}
            xIsNext={xIsNext}
          />
        </div>
        <ol>
          <Move
            history={history}
            setStepNumber={setStepNumber}
            setXIsNext={setXIsNext}
          />
        </ol>
      </div>
    </div>
  );
}

const calculateWinner = (squares: string[], stepNumber:number) => {
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
  //勝者がいなくて全てのステップが終わったら引き分け
  if(stepNumber >= 9){
    return "draw";
  }
  return null;
}
