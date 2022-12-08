import React from 'react'
import SecondNavbar from '../components/SecondNavbar'
import Sidebar from '../components/Sidebar'
import OngoingElection from '../assets/OngoingElection.jpg'

const VoterDashboard = () => {
  return (
    <div className='container flex'>
        <Sidebar />
        <div id="second-section" className='w-full'>
          <SecondNavbar />
          <div className="justify-left text-left ml-8 pt-3">
            <h1 className='text-purple-700 text-3xl font-bold'>Hello, Jane</h1>
            <p className="text-slate-500 font-semibold pb-3">Welcome to the Voteroo voting platform</p>
          </div>
          <div className="grid grid-cols-2 ml-8 pb-20">
            <div className="w-full shadow-2xl p-5 mr-5 mb-10" id="ongoing-election">
              <h1 className="text-2xl font-semibold pb-1">Ongoing Election</h1>
              <p className="text-slate-500 font-semibold pb-3">President Student Council</p>
              <img src={OngoingElection} alt="" />
            </div> 
            <div className="w-3/4 ml-5 shadow-2xl p-3 mb-10" id="ongoing-election">
              <h1 className="text-2xl font-semibold pb-3">Calendar</h1>              
            </div> 

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

export default VoterDashboard