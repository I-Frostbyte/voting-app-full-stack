import React, { useEffect, useContext } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Sidebar from "../components/Sidebar";
import VotingCard from "../components/VotingCard";
import VotingCardData from "../components/VotingCardData";
import { useState } from "react";
import CandidateDetails from "../components/CandidateDetails";
import { useCandidatesContext } from "../hooks/useCandidatesContext";
import PollingCard from "../components/PollingCard";
import ProfileContext from "../context/profileContext";

const VotingPage = (props) => {
  const pollContext = useContext(ProfileContext)

  
  const userVoteStatus = pollContext.loggedUser.voted

  console.log("POLL CONTEXT", pollContext)

  console.log("LOGGED USER", pollContext.loggedUser)

  const userId = pollContext.loggedUser._id

  const [showButton, setShowButton] = useState(false)
  const [showPollCard, setShowPollCard] = useState(true)

  // const userProfile = props.profile

  const handlePollCard = () => {
    setShowPollCard((prev) => !prev)
  }

  const handleGuser = (jn) => {
    props.onGuser(jn)
  }
  // let isClicked = false;
  //     const handleClick = (disable, disabled) => {
  //         isClicked = disable
  //         console.log(isClicked);
  //     }
  // const [candidateVote, setCandidateVote] = useState('0')

  // failed function to update candidateVote State above
  // const chooseVote = (voted) => {
  //   setCandidateVote(voted);
  // }
   

  return (
    <div className="container flex">
      <Sidebar />
      <div className="w-full" id="second-section">
        <SecondNavbar userProfile={pollContext.userProfile} />
        <div className="justify-left text-left ml-8 pt-3">
          <h1 className="text-purple-700 text-4xl font-bold pb-2">
            Your Vote is Secure, Your Vote Counts
          </h1>
          <p className="text-slate-500 font-bold pb-3">
            You can only vote for one candidate. You can only vote when signed
            in.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 pb-20">
          {props.polls &&
            props.polls.map((poll, ind) => {
              return (
                <div className="w-11/12 ml-8">
                  {showPollCard ? (
                    <PollingCard key={ind} title={poll.title} showButton={showButton} controlPollCard={handlePollCard} onGuser={handleGuser} userVoteStatus={userVoteStatus} userId={userId}/>
                  ) : null }                  
                </div>
              );
            })}          
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
