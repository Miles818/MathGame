import React, {useState} from 'react';
import Protagonist from './Protagonist';


function Environment() {


  return (
    <svg width="410" height="610">
        <rect width="400" height="600" fill="#00122B"></rect>
        <Protagonist />
    </svg>
    
  )
}

export default Environment