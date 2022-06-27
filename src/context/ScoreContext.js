import { createContext, useState } from "react";

const ScoreContext = createContext();

export function ScoreProvider({children}) {

    const [score, setScore] = useState(0);
    const updateScore = (value) => {
        if (typeof value === "boolean") {
            value ? setScore(score + 1) : setScore(score - 1)
        } else {
            setScore(0);
        }
    };
    
    return(
        <ScoreContext.Provider value={{ score, updateScore }}>
            {children}
        </ScoreContext.Provider>
    )
}


export default ScoreContext;