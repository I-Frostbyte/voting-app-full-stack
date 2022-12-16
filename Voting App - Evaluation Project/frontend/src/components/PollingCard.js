import React, { useState, useEffect, useContext } from "react";
import { BsPlusLg } from "react-icons/bs";
import CandidatesModal from "./CandidatesModal";
import { useCandidatesContext } from "../hooks/useCandidatesContext";
import CandidateDetails from "./CandidateDetails";
import VotingCard from "./VotingCard";
import PollingCardButtons from "./PollingCardButtons";

const PollingCard = (props) => {
    

  const [visibleButton, setVisibleButton] = useState(true);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [voted, setVoted] = useState(props.userVoteStatus);  
  const [showButton, setShowButton] = useState(props.showButton);

  // const userName = pollContext.userProfile.name
  // const email = pollContext.userProfile.email
  // const imageUrl = pollContext.userProfile.imageUrl
  // // const voted = false

  // const googleUser = { userName, email, imageUrl }

  // console.log("GoogleUser", googleUser)  


  // const handleShowButton = () => {
  //   setShowButton(props.showButton);
  // };

  const candidatePoll = props.title;
  const { candidates, dispatch } = useCandidatesContext();
  // const userProfile = props.userProfile;

  const handleVisibleButton = () => {
    props.controlPollCard()
    setVisibleButton((prev) => !prev);    
  };

  const handleCandidateModal = () => {
    setShowCandidateModal((prev) => !prev);
  };

  const handleVoted = () => {
    setVoted(true);
  };

  const handleGuser = (jn) => {
    props.onGuser(jn)
  } 

  useEffect(() => {
    // FETCHING CANDIDATES 
    const fetchCandidates = async () => {
      const response = await fetch("/api/candidates");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CANDIDATES", payload: json });
      }
    };

    fetchCandidates();

    // setLoggedUser(jn)    
  }, []);

  return (
    <div className="container w-full">
      <div className="hover:bg-white hover:border hover:border-black hover:rounded-lg border border-slate-400 rounded-lg p-5">
        <div className="flex items-center">
          <div className="bg-purple-400 rounded-3xl p-2"></div>
          <p className="text-slate-500 font-semibold px-2">{props.title}</p>
        </div>
        <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 p-4 items-center">
          {candidates &&
            candidates
              ?.filter((cand) => cand.position == candidatePoll)
              .map((candidate) => {
                return (
                  <VotingCard
                    key={candidate._id}
                    profilepic={candidate.profilepic}
                    name={candidate.name}
                    department={candidate.department}
                    candidateVotes={candidate.candidateVotes}
                    id={candidate._id}
                    voted={voted}
                    onVoted={handleVoted}
                    onGuser={handleGuser}
                    userId={props.userId}                    
                  />
                );
              })}
        </div>
        {showButton ? (
          <PollingCardButtons
            visibleButton={visibleButton}
            handleVisibleButton={handleVisibleButton}
            handleCandidateModal={handleCandidateModal}
            showCandidateModal={showCandidateModal}
            setShowCandidateModal={setShowCandidateModal}
            candidatePoll={candidatePoll}
          />
        ) : null}
      </div>
    </div>
  );
};

export default PollingCard;
