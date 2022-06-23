import React, {useState} from 'react';
import Protagonist from './Protagonist';


function Environment() {


  return (
    // <svg className="environment" width="700" height="600">
    //     <rect width="700" height="600" fill="#00122B"></rect>
    //     <Protagonist />
    //     <div id="rect"></div>
    // </svg>  
    <div className="environment">
        <Protagonist />
    </div>
  )
}

export default Environment