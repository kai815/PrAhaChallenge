/** @jsx jsx */
import { jsx } from '@emotion/react'
// eslint-disable-next-line 
import React from 'react'
import { css } from '@emotion/react';

const SquareStyle = css({
  background: "#fff",
  border: "1px solid #999",
  float: "left",
  fontSize: "24px",
  fontWeight: "bold",
  lineHeight: "34px",
  height: "34px",
  marginRight: "-1px",
  marginTop: "-1px",
  padding: 0,
  textAlign: "center",
  width: "34px",
  "&:focus": {
    outline: "none",
  },
  "&:hover":{
    background: "#ddd",
  }
})

const SquareText = css({
  color:"red"
})

export interface SquarePropsInterface {
  value: string;
  onClick: () => void;
}

export const Square = (props:SquarePropsInterface) => {
  return (
    <button
      css={SquareStyle}
      onClick={() => {
        props.onClick();
      }}
    >
      <span css={SquareText}>{props.value}</span>
    </button>
  );
}
