import React, {useState} from 'react'

function MathQuestion() {

    const num = Math.floor(Math.random() * (20 + 1));

    const [prompt, newPrompt] = useState(num);

  return (
    <div className="mathquestion">
        <h1 id="question">{prompt}</h1>
    </div>
  )
}

export default MathQuestion