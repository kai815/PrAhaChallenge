import React from 'react'

export interface StatusPropsInterFace{
  winner:string | null | undefined,
  xIsNext:boolean
}

export const Status = (props:StatusPropsInterFace) => {
  const { winner, xIsNext } = props;
  let status;
  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = `次のプレイヤー ${xIsNext ? "X" : "O"}'s turn`;
  }
  return (
    <>{status}</>
  )
}
