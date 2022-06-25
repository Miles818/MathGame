import React, {useState} from 'react';
import MathQuestion from './MathQuestion';
import MathSolutions from './MathSolutions';
import GameScore from './GameScore';

function Environment() {
  return (
    <div className="environment">
        <GameScore />
        <MathQuestion />
        <MathSolutions />
    </div>
  )
}

export default Environment