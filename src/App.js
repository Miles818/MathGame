import React from 'react';
import './App.css';
import Environment from './components/Environment';
import {QuestionProvider} from './context/QuestionContext';
import {ScoreProvider} from './context/ScoreContext';
import {StartGameProvider} from './context/StartGameContext';


function App() {

  return (
    <QuestionProvider>
      <StartGameProvider>
        <ScoreProvider>
          
            <div className="math-game" >
              <h1>Match Expressions!</h1>
              <Environment />
            </div>
          
        </ScoreProvider>
      </StartGameProvider>
    </QuestionProvider>
  );
}

export default App;
