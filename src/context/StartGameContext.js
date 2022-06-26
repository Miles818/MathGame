import { createContext, useState } from "react";

const StartGameContext = createContext();

export function StartGameProvider({children}) {

    const [start, setStart] = useState(false);

    const startOrStop = (boolean) => {
        boolean ? setStart(true) : setStart(false);
    }
    
    return(
        <StartGameContext.Provider value={{ start, startOrStop }}>
            {children}
        </StartGameContext.Provider>
    )
}


export default StartGameContext;