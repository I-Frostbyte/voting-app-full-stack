import React from 'react'
import { BsSearch } from 'react-icons/bs'
import {VscBellDot} from 'react-icons/vsc'

const SecondNavbar = () => {
  return (
    <div className='container flex justify-between border-b border-gray-400 items-center p-3'>
        <div className="w-1/2 md:w-8/12 xl:w-1/2 h-1/12 px-5 rounded-lg ml-5 bg-white">
            <section className="w-full h-10 flex items-center">
                <span className="w-10 h-full hidden md:flex items-center">
                    <button>
                        <BsSearch size={20} />
                    </button>
                </span>
                <input type="text" className='w-full h-full font-medium md:pl-2 focus:outline-none' placeholder='Search' />
                {/* <button className="w-28 py-1 flex bg-purple-500 justify-center items-center rounded-2xl text-white font-medium">Search</button> */}
            </section>
        </div>
        <div className="flex items-center">
            <VscBellDot size={20} className='mx-3' />
            {/* <img src="" alt="" /> */}
            <p className='mx-2'>Jane Doe</p>
        </div>
    </div>
  )
}

export default SecondNavbar