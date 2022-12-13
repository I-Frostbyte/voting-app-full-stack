import React from "react";
import CandidatesModal from "./CandidatesModal";
import { BsPlusLg } from "react-icons/bs";

const PollingCardButtons = (props) => {

    

  return (
    <div className="container">
      <div className="flex w-full justify-between items-center mt-5">
        <div className="flex items-center">
          <button
            className="rounded-lg px-3 py-3 mr-2 text-purple-500 bg-white border border-purple-500 hover:bg-purple-500 hover:text-white"
            onClick={props.handleVisibleButton}
          >
            {props.visibleButton ? "HIDE" : "SHOW"}
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
              onClick={props.handleCandidateModal}
            />
          </button>
          <div className="pl-3">
            <p className="text-slate-500 font-semibold">Add Candidates</p>
          </div>
          <CandidatesModal
            showCandidateModal={props.showCandidateModal}
            setShowCandidateModal={props.setShowCandidateModal}
            candidatePoll={props.candidatePoll}
          />
        </div>
      </div>
    </div>
  );
};

export default PollingCardButtons;
