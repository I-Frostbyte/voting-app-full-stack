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




    