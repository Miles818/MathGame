import { createContext, useContext, useState } from "react";


// Context to provide question promt, and amount of turns player takes.
const QuestionContext = createContext();

export function QuestionProvider({children}) {

    const [num, setNum] = useState(Math.floor(Math.random() * (20 + 1)));
    const [turn, setTurn] = useState(10);

    const resetTurn = () => {
        setTurn(10);
    }
    const updateNum = (input, callback) => {
        callback(input)
        setTurn(turn - 1)
        setNum(Math.floor(Math.random() * (20 + 1)));
    }

    return(
        <QuestionContext.Provider value={{ num, updateNum, turn, resetTurn }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContext;