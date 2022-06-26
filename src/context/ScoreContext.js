import { createContext, useState } from "react";

const ScoreContext = createContext();

export function ScoreProvider({children}) {

    const [score, setScore] = useState(0);

    const updateScore = (boolean) => boolean ? setScore(score + 1) : setScore(score - 1);
    
    return(
        <ScoreContext.Provider value={{ score, updateScore }}>
            {children}
        </ScoreContext.Provider>
    )
}


export default ScoreContext;