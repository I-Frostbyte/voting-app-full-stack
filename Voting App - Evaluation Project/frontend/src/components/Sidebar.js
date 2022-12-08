import React from 'react'
import { Link } from 'react-router-dom'
import { GiVote } from 'react-icons/gi'
import { AiFillHome } from 'react-icons/ai'
import { MdHowToVote } from 'react-icons/md'
import { FaList } from 'react-icons/fa'
import { FiLogOut } from 'react-icons/fi'

const Sidebar = () => {
  return (
    <div className='container object-left w-2/12 border-r border-b border-gray-400 h-1/2'>
        <div className="mb-20 pt-5">
            <Link to="/" className='ml-6 text-xl font-bold text-purple-600 items-center flex'><GiVote size={20} className='mr-2' />Voteroo</Link>
        </div>
        <div className="py-10 mb-32 text-black text-center">
            <Link to="/voter-dashboard" className='py-3 my-3 hover:bg-gray-300 items-center flex'><AiFillHome size={20} className='ml-6 mr-6' />Dashboard</Link>
            <Link to="/voting-page" className='py-3 my-3 hover:bg-gray-300 items-center flex'><MdHowToVote size={20} className='ml-6 mr-6' />Vote</Link>
            <Link to="/guidelines" className='py-3 my-3 hover:bg-gray-300 items-center flex'><FaList size={20} className='ml-6 mr-6' />Guidelines</Link>
        </div>
        <div className="py-3 flex text-center">
            <FiLogOut size={40} className='px-5'/>
            Logout
        </div>
    </div>
  )
}

export default Sidebar