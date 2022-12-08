import React, { useEffect, useState } from "react";
// import { MdClose } from 'react-icons/md'
import { BsPlusLg } from "react-icons/bs";
import CandidateDetails from "../components/CandidateDetails";
import CandidatesModal from "./CandidatesModal";
import { useCandidatesContext } from "../hooks/useCandidatesContext";

const PollModal = ({ showModal, setShowModal}) => {
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [showCandidateListModal, setShowCandidateListModal] = useState(false);
  const [pollModal, setPollModal] = useState(false);
  const [positionName, setPositionName] = useState("");
  const [error, setError] = useState(null);

  const openCandidateModal = () => {
    setShowCandidateModal((prev) => !prev);
  };

  const openCandidateListModal = () => {
    setShowCandidateListModal((prev) => !prev);
  };

  const openPollModal = () => {
    setPollModal((prev) => !prev);
  };

  const { candidates, dispatch } = useCandidatesContext();

  // const pollCandidateName = pollCandidate.name;
  // const pollCandidateDepartment = pollCandidate.department;
  // const pollCandidateAge = pollCandidate.age;

  const handleSubmit = async (e) => {
    e.preventDefault();

    // const newPollCandidate = {
    //   pollCandidateName,
    //   pollCandidateAge,
    //   pollCandidateDepartment,
    // };

    const poll = { positionName };

    const response = await fetch("/api/candidates/polls", {
      method: "POST",
      body: JSON.stringify(poll),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();

    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      setPositionName("");
      console.log("New Poll Created", json);
    }
  };

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
    <>
      {showModal ? (
        <div className="container" id="hero-first">
          <form onSubmit={handleSubmit}>
            <div className="flex items-center my-3">
              <label for="student-name" className="font-bold">
                Title:
              </label>
              <input
                type="text"
                onChange={(e) => setPositionName(e.target.value)}
                value={positionName}
                id="student-name"
                name="student-name"
                placeholder="Title of Position"
                className="px-5 py-2 rounded-xl ml-48"
              />
            </div>

            <div className="flex items-center">
              <button
                onClick={openPollModal}
                className="hover:bg-white border border-black mt-4 ml-8 p-5 items-center text-center justify-center rounded-lg"
                id="second-section"
              >
                <BsPlusLg size={20} className="text-slate-500 font-semibold" />
              </button>

              <div className="pl-5">
                <p className="text-slate-500 font-semibold">Add Candidates</p>
              </div>
            </div>
            {pollModal ? (
              <div className="grid grid-cols-3 gap-4 p-4 m-3 items-center hover:border hover:border-black">
                {candidates &&
                  candidates.map((candidate) => (
                    <CandidateDetails
                      key={candidate._id}
                      candidate={candidate}
                    />
                  ))}

                <div className="w-1/2 flex items-center">
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

            <button className="bg-white border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white rounded-lg px-3 py-1 ml-60">
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
