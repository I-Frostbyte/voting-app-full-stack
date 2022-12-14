import React, { useContext, useState } from "react";
import ProfilePicAlt from '../assets/profile-picture-alternative.png'
import { Link } from "react-router-dom";
// import { useEffect } from "react";
import { useVotingContext } from "../hooks/useVotingContext";
import ProfileContext from "../context/profileContext";

const VotingCard = (props) => {
  // const [votes, setVotes] = useState(0)
  const [error, setError] = useState(null);  
  
  const voteContext = useContext(ProfileContext)

  console.log("VoteContext", voteContext)  

  const candidateId = props.id;  

  // useEffect(() => {
  // }, [])

  // CLICK BUTTON ACTION

  const submitVotes = async (e) => {
    e.preventDefault();
    
    props.onVoted();

    const response = await fetch("/api/candidates/" + candidateId, {
      method: "PATCH",      
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json;

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      // setVotes(0)
      console.log("candidate updated: ", json);
    }
    
    const rep = await fetch('/api/googleUsers/' + props.userId, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const repjson = await rep.json

    if(!rep.ok){
      setError(repjson.error)
    }
    if(rep.ok){
      setError(null)
      console.log('user db updated', repjson)         
    }

    
  };

  return (
    <div className="container">
      <div className="items-center justify-center hover:bg-slate-200 hover:border hover:border-black hover:rounded-lg p-3">
        <div className="">
          <img
            src={ProfilePicAlt}
            alt={ProfilePicAlt}
            className="rounded-full h-32 w-32 ml-8"
          />
        </div>
        <p className="p-2 text-center text-slate-500 font-bold">{props.name}</p>
        <p className="p-2 text-center text-slate-500 font-bold">
          {props.department}
        </p>
        {voteContext.userProfile ? (
          <div className="flex justify-between items-center">
            <button
              onClick={(e) => {
                submitVotes(e);
              }}
              className="bg-purple-500 text-white hover:bg-white hover:text-purple-500 hover:border hover:border-purple-500 rounded-lg md:px-4 px-1 py-2 disabled:opacity-50"
              disabled={props.voted ? true : false}
            >
              VOTE{" "}
            </button>

            <Link to="/candidate-profile">
              <button className="bg-white text-purple-500 rounded-lg border border-purple-500 hover:text-white hover:bg-purple-500 py-2 md:px-1 px-1">
                VIEW DETAILS
              </button>
            </Link>
          </div>                 
         ) : (
            <Link to="/candidate-profile" className="ml-16">
              <button className="hover:bg-white hover:text-purple-500 rounded-lg border border-purple-500 text-white bg-purple-500 py-2 md:px-1 px-5 span">
                VOTES : <p className="px-2">{props.candidateVotes}</p>                
              </button>
            </Link>
        )}
         
      </div>
    </div>
  );
};

export default VotingCard;

/*
disabled={props.disabled}
*/
