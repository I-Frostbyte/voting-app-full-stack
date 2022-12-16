// const [vote, setVote] = useState(0)
// const [click, setClick] = useState(false)

// let voted = click

// const handleClick = event => {
//     // event.currentTarget.disabled = true
//     event.preventDefault()
//     setVote(1)
//     setClick(true)
// }

// useEffect(() => {
//   const res = fetch(`http://localhost:4000/api/candidates`)
//     .then((res) => res.json())
//     .catch((err) => {
//         console.log(err)
//     })
//     console.log(JSON.stringify(res))

//       }, [])

// FROM BACKEND

// getCandidates

/*
    Candidate.find({}, (err, items) => {
        if(err) {
            console.log(err)
            res.status(500).send('An error occurred', err);
        }
        else {
        }
    })
    */

/*
    const user_id = req.user.id

    const candidates = await Candidate.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(candidates)
    */

//

// POLLING PAGE FORMER MODAL
/*

    import React, { useState } from 'react'
import AdminSidebar from '../components/AdminSidebar'
import SecondNavbar from '../components/SecondNavbar'
import { BsPlusLg } from 'react-icons/bs'
// import CandidatesModal from '../components/CandidatesModal'
import PollModal from '../components/PollModal'

const PollingPage = () => {
    const [showModal, setShowModal] = useState(false);

    const openModal = () => {
        setShowModal(prev => !prev)
    }

  return (
    <div className='container flex'>
        <AdminSidebar />
        <div className="w-full" id="second-section">
            <SecondNavbar />
            <div className="justify-left text-left ml-8 pt-3">
                <h1 className='text-purple-700 text-3xl font-bold'>Hello, Jane</h1>
                <p className="text-slate-500 font-semibold pb-3">Welcome to Poll Control</p>
                <p className="text-slate-500 font-medium pb-3 py-2">Create and control the polls for each election </p>
          </div>

          <div className="flex items-center">
            <button onClick={openModal} className="hover:bg-white border border-black mt-4 ml-8 p-5 items-center text-center justify-center rounded-lg" id="second-section" ><BsPlusLg size={20} className='text-slate-500 font-semibold' /></button>
            <PollModal showModal={showModal} setShowModal={setShowModal}/>
            <div className='pl-5'>
              <p className="text-slate-500 font-semibold">Create a Poll</p>              
            </div>
          </div>
          
        </div>
    </div>
  )
}

export default PollingPage

// "proxy": "https://voting-app-api.onrender.com",

// <p>{votes}</p>



/* POLLING MODAL

<div className="grid grid-cols-4 gap-10">

            {candidates && candidates.map((candidate) => (
                <CandidateDetails key={candidate._id} candidate={candidate} />
            ))}
            
            <div className="flex items-center">
                <button onClick={openCandidateModal} className="hover:bg-white border border-black mt-4 ml-8 p-5 items-center text-center justify-center rounded-lg" id="second-section" ><BsPlusLg size={20} className='text-slate-500 font-semibold' /></button><CandidatesModal showCandidateModal={showCandidateModal} setShowModal={setShowCandidateModal}/>
        
                <div className='pl-5'>
                    <p className="text-slate-500 font-semibold">Add a New Candidate</p>              
                </div>
            </div>


        </div>

*/

/* POLL MODAL - CANDIDATE MODAL SECTION

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

*/

/*  POLLING CARD BUTTONS AND STUFF

<div className="flex w-full justify-between items-center mt-5">
          <div className="flex items-center">
            <button
              className="rounded-lg px-3 py-3 mr-2 text-purple-500 bg-white border border-purple-500 hover:bg-purple-500 hover:text-white"
              onClick={handleVisibleButton}
            >
              {visibleButton ? 'HIDE' : 'SHOW'}
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
        

*/

/*

<div className="text-center pb-5 flex items-center justify-between mx-10">
            <button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-20 py-4 my-3 font-bold text-xs">
              Sign up
            </button>
            {/* <br /> 
            <Link to="/admin">
              <button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-10 py-4 my-3 font-bold text-xs">
                Sign In as an Admin{" "}
              </button>
            </Link>
          </div>

*/
