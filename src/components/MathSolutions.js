import React from 'react';
import QuestionContext from '../context/QuestionContext';
import {useContext} from 'react';

function MathSolutions() {

  const {num} = useContext(QuestionContext);

  

  return (
    <div className="answer">
        <button id="bt1">Solution</button>
        <button id="bt2">Solution</button>
        <button id="bt3">Solution</button>
        <button id="bt4">Solution</button>
    </div>
  )
}

export default MathSolutions