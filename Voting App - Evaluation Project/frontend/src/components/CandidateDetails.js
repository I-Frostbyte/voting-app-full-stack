import React from "react";
import { Link } from "react-router-dom";
import PollModal from "./PollModal";

const CandidateDetails = ({ candidate }) => {

    const newName = candidate.name
    const newDepartment = candidate.department
    const newAge = candidate.age
        
  const handleSubmit = async (e) => {
    e.preventDefault();

    // const pollCandidate = { newName, newDepartment, newAge };

    // // console.log(pollCandidate);

    // <PollModal pollCandidate={JSON.stringify(pollCandidate)} />

    
    // const response = await fetch("/api/candidates/polls", {
    //   method: "POST",
    //   body: JSON.stringify(pollCandidate),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // });
  };
  return (
    <div className="container m-5 bg-white rounded-lg ">
      <div className="items-center justify-center hover:border hover:border-black hover:rounded-lg p-5">
        <div className="">
          <img
            src={candidate.profilepic}
            alt="#"
            className="rounded-full h-32 w-32 ml-12"
          />
        </div>
        <p className="py-2 text-center text-slate-500 font-bold">
          {candidate.name}
        </p>
        <p className="py-2 text-center text-slate-500 font-bold">
          {candidate.age} years old
        </p>
        <p className="py-2 text-center text-slate-500 font-bold ml-8 justify-center">
          {candidate.department}
        </p>
        <div className="grid grid-cols-2 gap-24 pt-3">
          <button
            className="bg-white text-purple-400 rounded-lg border border-purple-400 hover:text-white hover:bg-purple-400 py-2 px-1 text-xs font-semibold"
            onClick={handleSubmit}
          >
            ADD TO POLL
          </button>

          <Link to="/candidate-profile">
            <button className="bg-white text-purple-400 rounded-lg border border-purple-400 hover:text-white hover:bg-purple-400 py-2 px-1 text-xs font-semibold">
              VIEW DETAILS
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CandidateDetails;
