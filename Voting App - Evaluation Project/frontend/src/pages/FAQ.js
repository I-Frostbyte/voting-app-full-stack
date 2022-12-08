import React from 'react'
import FAQ3 from '../assets/FAQ3.jpg'
import { TbNumber1, TbNumber2, TbNumber3, TbNumber4 } from 'react-icons/tb'

const FAQ = () => {
  return (
    <div className='container'>
        <div className="pt-2">
            <h1 className="text-5xl text-center p-2 text-purple-700 font-bold my-3 px-64">Frequently Asked Questions</h1>
        </div>
        <div className="mx-32">
          <img src={FAQ3} alt="" className='pt-3'/>
        </div>

        <div className="flex ml-32 pt-10 items-center">
            <TbNumber1 size={30} className='text-black font-extrabold'/>            
            <h1 className="text-xl font-semibold py-2 text-black px-2">How do I know my vote and information are secured on the platform?</h1>                        
        </div>
        <p className='py-1 ml-40 mr-20'>This platform offers a secured system that protects user's information and votes.</p>

        <div className="flex ml-32 pt-10 items-center">
            <TbNumber2 size={30} className='text-black font-extrabold'/>            
            <h1 className="text-xl font-semibold py-2 text-black px-2">How long does it take for my vote to be counted?</h1>                        
        </div>
        <p className='py-1 ml-40 mr-20'>This is an online voting system that speeds up balot counting process and the vote is counted immediately after the voter cast their vote in favor of their preferred candidate.</p>

        <div className="flex ml-32 pt-10 items-center">
            <TbNumber3 size={30} className='text-black font-extrabold'/>            
            <h1 className="text-xl font-semibold py-2 text-black px-2">How do I get reminders about election date?</h1>                        
        </div>
        <p className='py-1 ml-40 mr-20'>Notifications would be sent to the student mail and dashboard as reminder for the election date.</p>

        <div className="flex ml-32 pt-10 items-center">
            <TbNumber4 size={30} className='text-black font-extrabold'/>            
            <h1 className="text-xl font-semibold py-2 text-black px-2">Would my vote be kept secret and secured?</h1>                        
        </div>
        <p className='pt-1 ml-40 mr-20 pb-10'>The voter's choices are kept top secret and the system is protected and hosted on Google Firebase.</p>
    </div>
  )
}

export default FAQ