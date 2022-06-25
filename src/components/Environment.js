import React, {useState} from 'react';
import Protagonist from './Protagonist';
import MathQuestion from './MathQuestion';
import MathSolutions from './MathSolutions';

function Environment() {


  return (
    // <svg className="environment" width="700" height="600">
    //     <rect width="700" height="600" fill="#00122B"></rect>
    //     <Protagonist />
    //     <div id="rect"></div>
    // </svg>  
    <div className="environment">
        {/* <Protagonist /> */}
        <MathQuestion />
        <MathSolutions />
    </div>
  )
}

export default Environment