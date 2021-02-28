import React from 'react';
import ReactDOM from 'react-dom';
import {Global, css } from '@emotion/core';
import { Game } from "./components/game"

const GlobalStyle = css({
  body:{
    font:"14px 'Century Gothic', Futura, sans-serif",
    margin: "20px"
  },
  "ol, ul":{
    paddingLeft: "30px",
  }
})

ReactDOM.render(
  <React.Fragment>
    <Global styles={GlobalStyle} />
    <Game />
  </React.Fragment>,
  document.getElementById('root'));
