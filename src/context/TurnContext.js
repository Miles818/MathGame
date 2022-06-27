import { createContext, useState } from "react";

const TurnContext = createContext();

export function TurnProvider({children}) {

    const [turn, setTurn] = useState(10);
    const updateTurn = () => {
        setTurn(turn - 1)
    }
    
    return(
        <TurnContext.Provider value={{ turn, updateTurn }}>
            {children}
        </TurnContext.Provider>
    )
}


export default TurnContext;