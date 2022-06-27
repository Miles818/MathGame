import React from 'react';
import StartGameContext from '../context/StartGameContext';
import QuestionContext from '../context/QuestionContext';
import ScoreContext from '../context/ScoreContext';
import {useContext} from 'react';

function GameOverScreen() {

    const {start, startOrStop} = useContext(StartGameContext);
    const {turn, resetTurn} = useContext(QuestionContext);
    const {score, updateScore} = useContext(ScoreContext);

    const resetGame = () => {
        updateScore()
        startOrStop(false)
        resetTurn()
    }

  return (
    <div className="menu">
        <id id="finalscore">FINAL SCORE: {score}</id>
        <button id="resetBtn" onClick={resetGame}>RESET</button>
    </div>
  )
}

export default GameOverScreen