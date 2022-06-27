import React, {useState} from 'react';
import {useContext} from 'react';
import MathQuestion from './MathQuestion';
import MathSolutions from './MathSolutions';
import GameScore from './GameScore';
import StartMenu from './StartMenu';
import StartGameContext from '../context/StartGameContext';
import TurnCount from './TurnCount';
import QuestionContext from '../context/QuestionContext';
import GameOverScreen from './GameOverScreen';

function Environment() {

  const {start, startOrStop} = useContext(StartGameContext);
  const {turn, resetTurn} = useContext(QuestionContext);
  
  function beginGame () {
    if (turn === 0) {
      return(<GameOverScreen />)
    } else if (start) {
      return (
      <>
      <TurnCount />
      <GameScore />
      <MathQuestion />
      <MathSolutions />
      </>
      )
    } else {
      return(<StartMenu />)
    }
  }

  return (
    <div className="environment">
      {beginGame()}
    </div> 
  )
}

export default Environment;