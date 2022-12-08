import React, { useEffect, useState } from 'react'
import SecondNavbar from '../components/SecondNavbar'
import { BsPlusLg } from 'react-icons/bs'
import PollModal from '../components/PollModal'
import AdminSidebar from '../components/AdminSidebar'
import CandidatesModal from '../components/CandidatesModal'
// import NewPollModal from '../components/NewPollModal'

const AdminDashboard = () => {
  const [showCandidateModal, setShowCandidateModal] = useState(false)

  const openModal = () => {
    setShowCandidateModal(prev => !prev)
  }
  
  return (
    <div className='container flex'>
        <AdminSidebar />
        <div id="second-section" className="w-full">
        <SecondNavbar />
          <div className="justify-left text-left ml-8 pt-3">
            <h1 className='text-purple-700 text-3xl font-bold'>Hello, Jane</h1>
            <p className="text-slate-500 font-semibold pb-3">Welcome to the Voteroo Admin Control</p>
            <p className="text-slate-500 font-medium pb-3 py-2">Here you can create and monitor elections and the electoral process</p>
          </div>

          <div className="flex items-center">
            <button onClick={openModal} className="hover:bg-white border border-black mt-4 ml-8 p-5 items-center text-center justify-center rounded-lg" id="second-section" ><BsPlusLg size={20} className='text-slate-500 font-semibold' /></button>
            <CandidatesModal showCandidateModal={showCandidateModal} setShowModal={setShowCandidateModal}/>
            <div className='pl-5'>
              <p className="text-slate-500 font-semibold">Add a Candidate</p>              
            </div>
          </div>

          <div className="grid grid-cols-2 ml-8 pb-20 pt-40">
            <div className="w-full shadow-2xl p-5 mr-5" id="ongoing-election">
              <h1 className="text-2xl font-semibold pb-1">Activity</h1>
                            
              <div className="flex items-center justify-between py-3">
                <div className="flex items-center">
                  <div className="bg-purple-400 rounded-3xl p-2"></div>
                  <h1 className="text-slate-500 font-semibold px-2">Ongoing</h1>
                </div>
                <div className="flex items-center">
                  <div className="bg-red-400 rounded-3xl p-2"></div>
                  <h1 className="text-slate-500 font-semibold px-2">Pending</h1>
                </div>
                <div className="flex items-center">
                  <div className="bg-green-400 rounded-3xl p-2"></div>
                  <h1 className="text-slate-500 font-semibold px-2">Concluded</h1>
                </div>
              </div>

              <div className="py-2">
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 font-bold pb-3 w-1/2 mr-2">President Student Council</p>
                  <div className="bg-purple-400 rounded-3xl p-2"></div>
                  <p className="text-slate-500 font-semibold px-2">03-12-2022</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 font-bold pb-3 w-1/2 mr-2">Secretary General Student Council</p>
                  <div className="bg-red-400 rounded-3xl p-2"></div>
                  <p className="text-slate-500 font-semibold px-2">Pending</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 font-bold pb-3 w-1/2 mr-2">Financial Secretary Student Council</p>
                  <div className="bg-red-400 rounded-3xl p-2"></div>
                  <p className="text-slate-500 font-semibold px-2">Pending</p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="text-slate-500 font-bold pb-3 w-1/2 mr-2">Director of Sports Student Council</p>
                  <div className="bg-green-400 rounded-3xl p-2"></div>
                  <p className="text-slate-500 font-semibold px-2">Concluded</p>
                </div>
              </div>

            </div> 
            <div className="w-3/4 ml-5 shadow-2xl p-3" id="ongoing-election">
              <h1 className="text-2xl font-semibold pb-3">Live Results</h1>              
            </div>  
            
          </div>

        </div>
    </div>
  )
}

export default AdminDashboard