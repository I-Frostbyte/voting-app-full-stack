import React from 'react'
import { GiVote } from 'react-icons/gi'

const Footer = () => {
  return (
    <div className='flex bg-slate-700 text-white text-sm py-10 justify-between px-10'>
        <div className="block pr-20">
            <a href="#" className='text-xl font-bold text-white flex'><GiVote size={30} className='mr-2' />Voteroo</a>
            <p className='text-sm pt-2 pb-4'>&copy; Copyright 2021 - Allpha Team Technologies</p>
            <p className="text-sm py-10">Limited | All Rights Reserved</p>
        </div>      
        <div className="">
                <h1 className='font-bold py-2'>Product</h1>
                <p className='py-2'>Web App</p>
        </div>
        <div className="">
                <h1 className='font-bold py-2'>Legal</h1>
                <p className='py-3'>Terms and Conditions</p>
                <p className='py-3'>Privacy Policy</p>
                <p className='py-3'>FAQs</p>
        </div>
        <div className="">
                <h1 className='font-bold py-2'>Connect</h1>
                <p className='py-3'>18b Oladimeji Alo Stree off Freedom Way, Lekki, 100001</p>
                <p className='py-3'>Email: The AlphaTeam@womentchesters.org Lagos State</p>
                <p className='py-3'>Phone:(234)813-275-5220</p>
        </div>
        
    </div>
  )
}

export default Footer