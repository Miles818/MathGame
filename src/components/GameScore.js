import React from 'react';
import ScoreContext from '../context/ScoreContext';
import {useContext} from 'react';

function GameScore() {

  const {score} = useContext(ScoreContext);

  return (
    <div className="score">
        <id>
            SCORE: {score}
        </id>
    </div>
  )
}

export default GameScore;