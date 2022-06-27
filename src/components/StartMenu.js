import React from 'react';
import StartGameContext from '../context/StartGameContext';
import {useContext} from 'react';

function StartMenu() {

    const {startOrStop} = useContext(StartGameContext);
    
    const startGame = () => {
        startOrStop(true)
    }
    
    return (
    <div className="menu">
        <text id="menuTxt">
            Select the button with the correct 
            math expression for the number shown to you. 
            Your score is shown in the top left. You have 10 attempts!
            Good Luck!
        </text>
        <button id="startBtn" onClick={startGame}>PLAY</button>
    </div>
  )
}

export default StartMenu;