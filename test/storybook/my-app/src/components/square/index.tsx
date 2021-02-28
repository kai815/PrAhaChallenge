import React from 'react'

interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

export const Square = (props:SquarePropsInterface) => {
  return (
    <button
      className="square"
      onClick={() => {
        props.onClick();
      }}
    >
      {props.value}
    </button>
  );
}
