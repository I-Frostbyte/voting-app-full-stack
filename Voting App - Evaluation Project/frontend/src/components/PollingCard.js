import React, { useState, useEffect } from "react";
import { BsPlusLg } from "react-icons/bs";
import CandidatesModal from "./CandidatesModal";
import { useCandidatesContext } from "../hooks/useCandidatesContext";
import CandidateDetails from "./CandidateDetails";
import VotingCard from "./VotingCard";

const PollingCard = (props) => {
  const [visibleButton, setVisibleButton] = useState("HIDE");
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [voted, setVoted] = useState(false);
  const candidatePoll = props.title;
  const { candidates, dispatch } = useCandidatesContext();
  const userProfile = props.profile;

  const handleVisibleButton = () => {
    setVisibleButton("SHOW");
  };

  const handleCandidateModal = () => {
    setShowCandidateModal((prev) => !prev);
  };

  const handleVoted = () => {
    setVoted(true);
  };

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetch("/api/candidates");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CANDIDATES", payload: json });
      }
    };

    fetchCandidates();
  }, []);  

//   let pl = candidates.filter(
//     candidate => candidate.position == candidatePoll
//   )
// console.log(candidatePoll);
//   console.log(candidates);

//   const value2 = candidates?.filter(cand => cand.position != candidatePoll)
// console.log(value2);


return (
    <div className="container w-full">
      <div className="hover:bg-white hover:border hover:border-black hover:rounded-lg border border-slate-400 rounded-lg p-5">
        <div className="flex items-center">
          <div className="bg-purple-400 rounded-3xl p-2"></div>
          <p className="text-slate-500 font-semibold px-2">{props.title}</p>
        </div>
        <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 p-4 items-center">
          {
            candidates &&
            candidates?.filter(cand => cand.position == candidatePoll)
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
                  userProfile={userProfile}
                />
              );
            })
          }
        </div>
        <div className="flex w-full justify-between items-center mt-5">
          <div className="flex items-center">
            <button
              className="rounded-lg px-3 py-3 mr-2 text-purple-500 bg-white border border-purple-500 hover:bg-purple-500 hover:text-white"
              onClick={handleVisibleButton}
            >
              {visibleButton}
            </button>
            <button className="rounded-lg px-3 py-3 mx-2 text-purple-500 bg-white border border-purple-500 hover:bg-purple-500 hover:text-white">
              VIEW POLL DETAILS
            </button>
          </div>
          <div className="flex items-center">
            <button
              className="hover:bg-purple-500 bg-white border border-purple-500 hover:text-white ml-8 p-3 items-center text-center justify-center rounded-lg"
              id="second-section"
            >
              <BsPlusLg
                size={20}
                className="text-purple-500 hover:text-white font-semibold"
                onClick={handleCandidateModal}
              />
            </button>
            <div className="pl-3">
              <p className="text-slate-500 font-semibold">Add Candidates</p>
            </div>
            <CandidatesModal
              showCandidateModal={showCandidateModal}
              setShowCandidateModal={setShowCandidateModal}
              candidatePoll={candidatePoll}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollingCard;
