import React, {useState} from 'react';
import MathQuestion from './MathQuestion';
import MathSolutions from './MathSolutions';
import GameScore from './GameScore';
import StartMenu from './StartMenu';
import StartGameContext from '../context/StartGameContext';
import {useContext} from 'react';

function Environment() {

  const {start, startOrStop} = useContext(StartGameContext);

  function beginGame () {
    if (start) {
      return (
      <>
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