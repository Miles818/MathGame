import React from 'react';
import './App.css';
import Environment from './components/Environment';
import {QuestionProvider} from './context/QuestionContext'

function App() {

  return (
    <QuestionProvider>
      <div className="math-game" >
        <h1>Math Game</h1>
        <Environment />
      </div>
    </QuestionProvider>
  );
}

export default App;
