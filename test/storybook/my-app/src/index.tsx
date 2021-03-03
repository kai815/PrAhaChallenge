import React,{useState} from 'react';
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

const App = () => {
  const [ history, setHistory ] = useState(
    [
      {
        squares: Array(9).fill(''),
      },
    ]
  );
  const [ stepNumber, setStepNumber ] = useState(0);

  return(
    <Game
      history={history}
      setHistory={setHistory}
      stepNumber={stepNumber}
      setStepNumber={setStepNumber}
    />
  )
}

ReactDOM.render(
  <React.Fragment>
    <Global styles={GlobalStyle} />
    <App/>
  </React.Fragment>,
  document.getElementById('root'));
