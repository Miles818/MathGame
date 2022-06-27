import React from 'react';
import QuestionContext from '../context/QuestionContext';
import ScoreContext from '../context/ScoreContext';
import {useContext} from 'react';

function MathSolutions() {

  const {num, updateNum} = useContext(QuestionContext);
  const {updateScore} = useContext(ScoreContext);

  // Function that creates a valid addition expression for 'num'
  const validExpression = () => {
    const n = num - Math.floor(Math.random() * (num + 1));
    return (
    <button className="answerBtn" onClick={() => updateNum(true, updateScore)}>
      {`${n} + ${num - n}`}
      </button>
    )
  }

  // Function that creates an invalid addition expression for 'num'
  const invalidExpression = () => {
    let n1, n2;
    n1 = Math.floor(Math.random() * (20 + 1));
    n2 = Math.floor(Math.random() * (20 + 1));
    if (n1 + n2 === num) return invalidExpression();
    return  (
    <button className="answerBtn" onClick={() => updateNum(false, updateScore)}>
      {`${n1} + ${n2}`}
      </button>
    )
  }

  // Function that generates four buttons with valid and invalid expressions
  const generateAnswers = () => {
    const answers = [];
    const targetIndex = Math.floor(Math.random() * (3 + 1));

    for (let i = 0; i < 4; i++) {
      i === targetIndex ? answers.push(validExpression()) : answers.push(invalidExpression());
    }
    
    return answers;
  }

  return (
    <div className="answer">
      {generateAnswers()}
    </div>
  )
}

export default MathSolutions;