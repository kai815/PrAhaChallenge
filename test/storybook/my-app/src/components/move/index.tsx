import React from 'react';
import { Desc } from "./Desc";

export interface MovePropsInterFace{
  history:{squares:string[]}[],
  setStepNumber:React.Dispatch<React.SetStateAction<number>>,
  setXIsNext:React.Dispatch<React.SetStateAction<boolean>>,
}

export const Move = (props:MovePropsInterFace) => {
  const { history, setStepNumber, setXIsNext } = props;
  const jumpTo = (step: number) => {
    setStepNumber(step);
    setXIsNext(step % 2 === 0);
  };
  return (
  <>  
    {
      history.map((hist:{squares:string[]}, move:number)=>{
        return (
        <li key={move}>
          <button onClick={() => jumpTo(move)}>
            <Desc move={move} />
          </button>
        </li>
        )
      })
    }
  </>
  )
}
