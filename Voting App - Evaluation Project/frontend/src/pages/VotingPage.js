import React, { useEffect } from "react";
import SecondNavbar from "../components/SecondNavbar";
import Sidebar from "../components/Sidebar";
import VotingCard from "../components/VotingCard";
import VotingCardData from "../components/VotingCardData";
import { useState } from "react";
import CandidateDetails from "../components/CandidateDetails";
import { useCandidatesContext } from "../hooks/useCandidatesContext";

const VotingPage = () => {
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

  const { candidates, dispatch } = useCandidatesContext();

  useEffect(() => {
    

    <CandidateDetails />;
    const fetchCandidates = async () => {
      const response = await fetch("/api/candidates");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CANDIDATES", payload: json });
      }
    };

    fetchCandidates();
  }, []);

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
            You can only vote for one candidate.{" "}
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 ml-8 pb-20">
          <div id="ongoing-election" className="p-4">
            <div className="flex items-center">
              <div className="bg-purple-400 rounded-3xl p-2"></div>
              <p className="text-slate-500 font-semibold px-2">
                President Student Council
              </p>
            </div>

            <div className="md:grid md:grid-cols-4 grid grid-cols-2 gap-4 p-4 items-center">
              {candidates &&
                candidates.map((candidate, ind) => {
                  return (
                    <VotingCard
                      key={ind}
                      profilepic={candidate.profilepic}
                      name={candidate.name}
                      department={candidate.department}
                      numberOfVotes={candidate.numberOfVotes}
                      id={candidate._id}                      
                    />
                  );
                })}
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
