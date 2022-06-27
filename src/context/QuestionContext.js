import { createContext, useContext, useState } from "react";
import TurnContext from '../context/TurnContext';

const QuestionContext = createContext();

export function QuestionProvider({children}) {

    const [num, setNum] = useState(Math.floor(Math.random() * (20 + 1)));
    const [turn, setTurn] = useState(10);
    //const {updateTurn} = useContext(TurnContext)

    const updateNum = (input, callback) => {
        callback(input)
        setTurn(turn - 1)
        setNum(Math.floor(Math.random() * (20 + 1)));
    }

    return(
        <QuestionContext.Provider value={{ num, updateNum, turn }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContext;