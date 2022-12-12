import React, { useEffect, useState } from "react";
// import { MdClose } from 'react-icons/md'
import { BsPlusLg } from "react-icons/bs";
import CandidateDetails from "../components/CandidateDetails";
import CandidatesModal from "./CandidatesModal";
import { useCandidatesContext } from "../hooks/useCandidatesContext";

const PollModal = ({ showPollModal, setShowPollModal}) => {
  
  const [pollModal, setPollModal] = useState(false);
  const [title, setTitle] = useState("");
  const [error, setError] = useState(null);

  
  const openPollModal = () => {
    setPollModal((prev) => !prev);    
  };   
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    const poll = { title };
    console.log(poll)
    
    const response = await fetch("/api/polls", {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      }      
    });
    
    const json = await response.json();
    

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setTitle("");
      console.log("New Poll Created", json);
    }
  };

  /*
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
  */

  return (
    <>
      {showPollModal ? (
        <div className="container" id="hero-first">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center my-3 ml-48">
              <label htmlFor="student-name" className="font-bold mr-3">
                Title:
              </label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                id="student-name"
                name="student-name"
                placeholder="Title of Position"
                className="pr-10 pl-5 py-2 rounded-xl"
              />
            </div>            

            <button className="bg-white border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg px-3 py-1 ml-72 mt-5">
              CREATE POLL
            </button>
            {error && <div>{error}</div>}
          </form>
        </div>
      ) : null}
    </>
  );
};

export default PollModal;

/*

            <button
                onClick={openCandidateListModal}
                className="bg-white border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg px-3 py-1"
            >
                ADD CANDIDATES
            </button>

<>
                {showCandidateListModal ? (
                  <div className="grid grid-cols-4 gap-10">
                    {candidates &&
                      candidates.map((candidate) => (
                        <CandidateDetails
                          key={candidate._id}
                          candidate={candidate}
                        />
                      ))}

                    <div className="flex items-center">
                      <button
                        onClick={openCandidateModal}
                        className="hover:bg-white border border-black mt-4 ml-8 p-5 items-center text-center justify-center rounded-lg"
                        id="second-section"
                      >
                        <BsPlusLg
                          size={20}
                          className="text-slate-500 font-semibold"
                        />
                      </button>
                      <CandidatesModal
                        showCandidateModal={showCandidateModal}
                        setShowModal={setShowCandidateModal}
                      />

                      <div className="pl-5">
                        <p className="text-slate-500 font-semibold">
                          Add a New Candidate
                        </p>
                      </div>
                    </div>
                  </div>
                ) : null}
              </>

*/
