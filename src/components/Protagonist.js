import React from 'react';

function Protagonist() {
  return (
    <svg className="protagonist">
        {/* <circle cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="red" /> */}
        <polygon points="50,5 25,50 75,50"/>
    </svg>
    // <polygon className="protagonist" points="50,5 25,50 75,50"/>
  )
}

export default Protagonist;