import { createContext, useState } from "react";

const QuestionContext = createContext();

export function QuestionProvider({children}) {

    const num = Math.floor(Math.random() * (20 + 1));

    return(
        <QuestionContext.Provider value={{ question: num}}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContext;