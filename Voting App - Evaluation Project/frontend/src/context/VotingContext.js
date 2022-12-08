// import { createContext, useReducer, useState } from "react";

// export const VotingContext = createContext()

// export const votingButtonReducer = (state, action) => {
//     switch (action.type) {
//         case 'DISABLE_BUTTON':
//             return {
//                 disableButton: action.true
//             }
//         case 'ENABLE_BUTTON':
//             return {
//                 disableButton: action.false
//             }
//         default:
//             return state        

//     }
// }

// export const VotingContextProvider = ({ children }) => {   
//     const [state, dispatch] = useReducer(votingButtonReducer, { disableButton: (false)})
    
//     // const [state, dispatch] = useReducer(votingButtonReducer, { candidates: null
//     // })

        
//     return (
//         <VotingContext.Provider value={{ ...state, dispatch }}>
//             { children }
//         </VotingContext.Provider>
//     )
// }