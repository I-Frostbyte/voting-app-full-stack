import React, { useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Sidebar from "../components/Sidebar";
import VotingCard from "../components/VotingCard";
import VotingCardData from "../components/VotingCardData";
import { useState } from "react";
import CandidateDetails from "../components/CandidateDetails";
import { useCandidatesContext } from "../hooks/useCandidatesContext";
import PollingCard from "../components/PollingCard";

const VotingPage = (props) => {
  const [showButton, setShowButton] = useState(false)
  const [showPollCard, setShowPollCard] = useState(true)

  const handlePollCard = () => {
    setShowPollCard((prev) => !prev)
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
        <SecondNavbar />
        <div className="justify-left text-left ml-8 pt-3">
          <h1 className="text-purple-700 text-4xl font-bold pb-2">
            Your Vote is Secure, Your Vote Counts
          </h1>
          <p className="text-slate-500 font-bold pb-3">
            You can only vote for one candidate. You can only vote when signed
            in.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          {props.polls &&
            props.polls.map((poll, ind) => {
              return (
                <div className="w-11/12 ml-8">
                  {showPollCard ? (
                    <PollingCard key={ind} title={poll.title} showButton={showButton} controlPollCard={handlePollCard}/>
                  ) : null }                  
                </div>
              );
            })}

          <div id="ongoing-election" className="p-4 ml-8 pb-20 mr-3">
            <div className="flex items-center">
              <div className="bg-purple-400 rounded-3xl p-2"></div>
              <p className="text-slate-500 font-semibold px-2">
                President Student Council
              </p>
            </div>

            
          </div>

          <div id="ongoing-election" className="p-4">
            <div className="flex items-center">
              <div className="bg-red-400 rounded-3xl p-2"></div>
              <p className="text-slate-500 font-semibold px-2">
                Secretary General Student Council
              </p>
            </div>

            <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 p-4 items-center">
              {VotingCardData[1].map((val, ind) => {
                return (
                  <VotingCard
                    key={ind}
                    profilepic={val.profilepic}
                    name={val.name}
                    department={val.department}
                    numberOfVotes={val.numberOfVotes}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VotingPage;
