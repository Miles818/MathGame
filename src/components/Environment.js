import React, {useState} from 'react';
import {useContext} from 'react';
import MathQuestion from './MathQuestion';
import MathSolutions from './MathSolutions';
import GameScore from './GameScore';
import StartMenu from './StartMenu';
import StartGameContext from '../context/StartGameContext';
import TurnCount from './TurnCount';

function Environment() {

  const {start} = useContext(StartGameContext);
  
  function beginGame () {
    if (start) {
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