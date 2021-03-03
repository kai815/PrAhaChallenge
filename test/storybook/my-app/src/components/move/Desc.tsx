import React from 'react'

export interface DescPropsInterFace {
  move:number
}
export const Desc = (props:DescPropsInterFace) => {
  const desc = props.move ? 'Go to move #' + props.move : 'Go to game start';
  return (
    <>{desc}</>
  )
}
