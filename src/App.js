import React from 'react';
import './App.css';
import Environment from './components/Environment';
import {QuestionProvider} from './context/QuestionContext';
import {ScoreProvider} from './context/ScoreContext';

function App() {

  return (
    <QuestionProvider>
      <ScoreProvider>
        <div className="math-game" >
          <h1>Math Game</h1>
          <Environment />
        </div>
      </ScoreProvider>
    </QuestionProvider>
  );
}

export default App;
