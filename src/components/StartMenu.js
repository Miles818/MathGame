import React from 'react';
import StartGameContext from '../context/StartGameContext';
import {useContext} from 'react';

function StartMenu() {

    const {startOrStop} = useContext(StartGameContext);
    
    const startGame = () => {
        startOrStop(true)
    }
    
    return (
    <div>
        <button id="startBtn" onClick={startGame}>PLAY</button>
    </div>
  )
}

export default StartMenu;