import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero4 from '../assets/Hero4.jpg'
import Hero3 from '../assets/Hero3.jpg'
import BarChart1 from '../assets/BarChart1.png'
import { FaLock, FaVoteYea } from 'react-icons/fa'
import { MdTimeline } from 'react-icons/md'
import { TbNumber1, TbNumber2, TbNumber3} from 'react-icons/tb'
import Navbar from '../components/Navbar'
// import { config } from 'dotenv'


const Hero = () => {

  return (
    
    <div className='hero-container'>
        <Navbar />
        <div className="pt-2 grid grid-cols-2 mx-10 justify-between">
            <div className="justify-left w-full px-10 mt-36">
                <h1 className='p-2 text-black font-bold text-5xl my-3'>Fast, Secured and Accessible Voting System</h1>
                <p className='p-2 my-3 text-slate-500 font-semibold'>Let's make voting and elections easy for you. This is designed to ensure a secured voting session.</p>
                <Link to="/register"><button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-10 py-4 mt-2 font-bold text-xs">Register as a Voter</button></Link>
                <Link to="/voting-page"><button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-10 py-4 mt-2 ml-3 font-bold text-xs">View Voter Dashboard</button></Link>
            </div>
            <div className="grid grid-cols-1">
                <img src={Hero4} alt="FirstHeroImage" className='' />
            </div>
        </div>

        <div className="bg-purple-900 text-white py-10 m-auto " id="second-hero">
            <div className='justify-center text-center align-center m-auto pb-16'>
                <h2 className='font-extrabold text-4xl p-5'>Our Features</h2>
                <p className='font-medium'>Secured System that guarantee seamless Elections</p>
            </div>
            <div className="grid grid-cols-3 mx-10 pb-16 justify-between">
                <div className="text-center">
                    <FaLock className='m-auto' size={75} />
                    <h1 className='px-1 pt-10 pb-2 font-bold text-xl'>Secured Platform</h1>
                    <p className='p-1'>With our platform, your data is secured </p>
                </div>
                <div className="text-center">
                    <FaVoteYea className='m-auto' size={75} />
                    <h1 className='px-1 pt-10 pb-2 font-bold text-xl'>Vote Online</h1>
                    <p className='p-1'>With just a few clicks, you can vote for your preferred candidates</p>
                </div>
                <div className="text-center">
                    <MdTimeline className='m-auto' size={75} />
                    <h1 className='px-1 pt-10 pb-2 font-bold text-xl'>Real Time Results</h1>
                    <p className='p-1'>View real time voting results and scores for each candidate</p>
                </div>
            </div>
        </div>

        <div className="py-16">
            <div className="text-center pb-20">
                <h1 className="font-bold py-2 text-purple-600 text-2xl">How it works</h1>
                <p className="py-1">It's simple and easy to use with these 3 steps</p>
            </div>
            <div className="grid grid-cols-2 mx-10">
            <div className="">
                <div className="flex m-auto pb-10 items-center">
                    <TbNumber1 size={30} className='text-purple-500 font-extrabold'/>
                    <div className="block px-2">
                        <h1 className="text-xl font-semibold py-2 text-purple-500">Sign up</h1>
                        <p className='py-1'>Create an account on the platform to vote.</p>
                    </div>
                </div>
                <div className="flex m-auto py-10 items-center">
                    <TbNumber2 size={30} className='text-purple-500 font-extrabold'/>
                    <div className="block px-2">
                        <h1 className="text-xl font-semibold py-2 text-purple-500">Vote</h1>
                        <p className='py-1'>Vote for your preferred candidate.</p>
                    </div>
                </div>
                <div className="flex m-auto py-10 items-center">
                    <TbNumber3 size={30} className='text-purple-500 font-extrabold'/>
                    <div className="block px-2">
                        <h1 className="text-xl font-semibold py-2 text-purple-500">View Election Results</h1>
                        <p className='p-1'>View election result of various candidates</p>
                    </div>
                </div>
            </div>
            <div className="">
                <img src={Hero3} alt="Hero3Image" />
            </div>
            </div>
        </div>

        <div className="bg-purple-900 py-12 flex justify-between text-white">
            <div className="mx-10 w-1/2">
                <img src={BarChart1} alt="placeholderImage" />
            </div>
            <div className="justify-left w-1/2 ml-64">
                <h1 className='py-2 text-5xl font-bold'>View Live Results</h1>
                <p className='py-10 w-3/4'>View live results of the election instantly on our home page without logging in. You can also check out the electoral candidate page via the link below</p>
                <Link to="/candidates">
                    <button className="bg-white text-purple-700 hover:bg-purple-600 hover:text-white rounded-3xl px-10 py-4 text-sm">View candidates profile</button>
                </Link>
            </div>
        </div>

        <div className="container py-20 pt-2">
            <div className="text-center">
                <h1 className="text-purple-600 font-bold text-3xl pt-12 pb-2">Monitor the voting process</h1>
                <p className="pb-16 text-slate-500">Track the number of votes and voters with our real time counter</p>
            </div>
            <div className="grid grid-cols-3">
                <div className="mx-5">
                    <img src={Hero3} alt="placeholderimage" />
                </div>
                <div className="mx-5">
                    <img src={Hero3} alt="placeholderimage" />
                </div>
                <div className="mx-5">
                    <img src={Hero3} alt="placeholderimage" />
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero