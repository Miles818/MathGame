import { createContext, useState } from "react";

const QuestionContext = createContext();

export function QuestionProvider({children}) {

    const [num, setNum] = useState(Math.floor(Math.random() * (20 + 1)))

    const updateNum = (input, callback) => {
        callback(input)
        setNum(Math.floor(Math.random() * (20 + 1)));
    }

    return(
        <QuestionContext.Provider value={{ num, updateNum }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContext;