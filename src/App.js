import React from 'react';
import './App.css';
import Environment from './components/Environment';
import {QuestionProvider} from './context/QuestionContext';
import {ScoreProvider} from './context/ScoreContext';
import {StartGameProvider} from './context/StartGameContext';
import {TurnProvider} from './context/TurnContext';


function App() {

  return (
    <QuestionProvider>
      <StartGameProvider>
        <ScoreProvider>
          <TurnProvider>
            <div className="math-game" >
              <h1>Math Game</h1>
              <Environment />
            </div>
          </TurnProvider>
        </ScoreProvider>
      </StartGameProvider>
    </QuestionProvider>
  );
}

export default App;
