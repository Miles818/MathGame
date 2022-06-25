import React from 'react';
import QuestionContext from '../context/QuestionContext';
import {useContext} from 'react';

function MathSolutions() {

  const {num} = useContext(QuestionContext);

  function validExpression () {
    const subtractor = num - Math.floor(Math.random() * (num + 1));
    return (<button onClick="">{`${subtractor} + ${num - subtractor}`}</button>)
  }



  function generateAnswers () {
    const answerArr = [];
    let targetIndex = Math.floor(Math.random() * (3 + 1));
    for (let i = 0; i < 4; i++) {
      if (i === targetIndex) {
        answerArr.push(validExpression())
      } else {
        answerArr.push(invalidExpression())
      }
    }
   return answerArr;
  }

  function invalidExpression () {
    let n1, n2;
    n1 = Math.floor(Math.random() * (20 + 1));
    n2 = Math.floor(Math.random() * (20 + 1));
    // while (n1 + n2 === num) {
    //   n1 = Math.floor(Math.random() * (20 + 1));
    //   n2 = Math.floor(Math.random() * (20 + 1));
    // }

    if (n1 + n2 === num) return invalidExpression();
    return  (<button onClick="">{`${n1} + ${n2}`}</button>)
  }


  return (
    <div className="answer">
      {generateAnswers()}
        {/* <button id="bt1">{validExpression()}</button>
        <button id="bt2">Solution</button>
        <button id="bt3">Solution</button>
        <button id="bt4">Solution</button> */}
    </div>
  )
}

export default MathSolutions;