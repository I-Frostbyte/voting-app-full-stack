import { CandidatesContext } from "../context/CandidateContext";
import { useContext } from "react";

export const useCandidatesContext = () => {
    const context = useContext(CandidatesContext)

    if(!context) {
        throw Error('useCandidatesContext must be used inside a CandidatesContextProvider')
    }

    return context
}