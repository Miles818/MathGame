import React from 'react';
import QuestionContext from '../context/QuestionContext';
import {useContext} from 'react';

function MathSolutions() {

  const {num} = useContext(QuestionContext);

  function validExpression () {
    const subtractor = num - Math.floor(Math.random() * (num + 1));
    return `${subtractor} + ${num - subtractor}`;
  }

  

  return (
    <div className="answer">
        <button id="bt1">{validExpression()}</button>
        <button id="bt2">Solution</button>
        <button id="bt3">Solution</button>
        <button id="bt4">Solution</button>
    </div>
  )
}

export default MathSolutions;