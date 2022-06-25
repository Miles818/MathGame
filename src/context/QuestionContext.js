import { createContext, useState } from "react";

const QuestionContext = createContext();

export function QuestionProvider({children}) {


    const [num, setNum] = useState(Math.floor(Math.random() * (20 + 1)))

    //const num = Math.floor(Math.random() * (20 + 1));

    return(
        <QuestionContext.Provider value={{ num }}>
            {children}
        </QuestionContext.Provider>
    )
}

export default QuestionContext;