import React, {useState} from 'react';
import QuestionContext from '../context/QuestionContext';
import {useContext} from 'react';

function MathQuestion() {

    //const num = Math.floor(Math.random() * (20 + 1));
    //const [prompt, newPrompt] = useState(num);

  const {num} = useContext(QuestionContext);

  return (
    <div className="mathquestion">
        <h1 id="question">{num}</h1>
    </div>
  )
}

export default MathQuestion