import React from 'react';
import QuestionContext from '../context/QuestionContext';
import { useContext } from 'react';


function TurnCount() {

const {turn} = useContext(QuestionContext)

  return (
    <div className="turn">
        <id>
            {turn} turns left
        </id>
    </div>
  )
}

export default TurnCount