import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import { useVotingContext } from '../hooks/useVotingContext'

const VotingCard = (props) => {    
    const [votes, setVotes]= useState(0)

    // const { disableButton, dispatch } = useVotingContext

    const submitVotes = (e)=>{
        e.preventDefault();

        setVotes(1)

        // dispatch({ type: "DISABLE_BUTTON" });
    }

  return (
    <div className="container">
        <div className="items-center justify-center hover:bg-white hover:border hover:border-black hover:rounded-lg p-3">
            <div className="">
                <img src={props.profilepic} alt="#" className='rounded-full h-32 w-32 ml-12'/>
            </div>
            <p className="p-2 text-center text-slate-500 font-bold">{props.name}</p>
            <p className="p-2 text-center text-slate-500 font-bold">{props.department}</p>
            <div className="flex justify-between items-center">

                <button onClick={(e)=>{                  
                  submitVotes(e)
                }} className="bg-purple-400 text-white hover:bg-white hover:text-purple-400 hover:border hover:border-purple-400 rounded-lg px-4 py-2">VOTE <p>{votes}</p> <p>{ props.numberOfVotes }</p> </button>

                <Link to="/candidate-profile">
                    <button className="bg-white text-purple-400 rounded-lg border border-purple-400 hover:text-white hover:bg-purple-400 py-2 px-1">VIEW DETAILS</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default VotingCard








/*
disabled={props.disabled}
*/