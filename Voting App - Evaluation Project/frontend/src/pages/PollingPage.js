import React, { useState, useEffect } from "react";
import AdminSidebar from "../components/AdminSidebar";
import SecondNavbar from "../components/SecondNavbar";
import { BsPlusLg } from "react-icons/bs";
// import CandidatesModal from "../components/CandidatesModal";
import PollModal from "../components/PollModal";
import { useCandidatesContext } from "../hooks/useCandidatesContext";
// import CandidateDetails from "../components/CandidateDetails";
import PollDetails from "../components/PollDetails";
// import { FaHourglassEnd } from "react-icons/fa";

const PollingPage = () => {
  const [showModal, setShowModal] = useState(false);
  const [showCandidateModal, setShowCandidateModal] = useState(false);
  const [pollModal, setPollModal] = useState(false)
  const [polls, setPolls] = useState(null);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const openCandidateModal = () => {
    setShowCandidateModal((prev) => !prev);
  };

  const openPollModal = () => {
    setPollModal((prev) => !prev);
  }

  const { candidates, dispatch } = useCandidatesContext();

  useEffect(() => {
    const fetchCandidates = async () => {
      const response = await fetch("/api/candidates");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_CANDIDATES", payload: json });
      }
    };

    const fetchPolls = async () => {
      const response = await fetch("/api/candidates/polls");
      const json = await response.json();

      if (response.ok) {
        setPolls(json);
      }
    };

    fetchCandidates();
    fetchPolls();
}, []);

  return (
    <div className="container flex">
      <AdminSidebar />
      <div className="w-full" id="second-section">
        <SecondNavbar />
        <div className="justify-left text-left ml-8 pt-3">
          <h1 className="text-purple-700 text-3xl font-bold">Hello, Jane</h1>
          <p className="text-slate-500 font-semibold pb-3">
            Welcome to Poll Control
          </p>
          <p className="text-slate-500 font-medium pb-3 py-2">
            Create and control the polls for each election{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 w-full py-7">
          <div className="">
            {polls &&
              polls.map((poll) => <PollDetails key={poll._id} poll={poll} />)}
            
          </div>

          <div className="flex items-center">
            <button
              onClick={openModal}
              className="hover:bg-white border border-black mt-4 ml-8 p-5 items-center text-center justify-center rounded-lg"
              id="second-section"
            >
              <BsPlusLg size={20} className="text-slate-500 font-semibold" />
            </button>
            <PollModal showModal={showModal} setShowModal={setShowModal} />
            <div className="pl-5">
              <p className="text-slate-500 font-semibold">Create a Poll</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PollingPage;
