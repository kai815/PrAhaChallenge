/** @jsx jsx */
import { jsx } from '@emotion/react'
// eslint-disable-next-line 
import React from 'react'
import { Square } from "../square";
import { css } from '@emotion/react';

// const BordTableStyle = css({
//   display:"flex",
//   dlexDirection:"row"
// })

const BordRowStyle = css({
  "&:after":{
    clear:"both",
    contain: "",
    display:"table"
  }
})
export interface BoardPropsInterface {
  squares: string[];
  onClick: (i: number) => void;
}

export const Board = (props:BoardPropsInterface) => {
  const renderSquare = (i: number)=> {
    return (
      <Square
        value={props.squares[i]}
        indexNumber={i}
        onClick={() => props.onClick(i)}
      />
    );
  }
  return (
    <div>
      <div css={BordRowStyle}>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div css={BordRowStyle}>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div css={BordRowStyle}>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
