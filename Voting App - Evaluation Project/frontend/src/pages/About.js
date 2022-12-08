import React from 'react'
import About3 from '../assets/About3.jpg'
import { HiLightBulb} from 'react-icons/hi'
import { GiVote } from 'react-icons/gi'

const About = () => {
  return (
    <div className='container'>
        <div className="pt-2">
          <h1 className="text-5xl text-center p-2 text-purple-700 font-bold my-3 px-64">We aim to make elections easy, seamless and fair</h1>
          <p className="text-center px-32 my-3 text-slate-500 font-semibold">This voting system was made to improve the voting system of Academic and Prolitical enterprises. Electing representatives has been made easy on this App. With just a few clicks, voters are able to cast their ballots in any preferred election.</p>
        </div>
        <div className="mx-32">
          <img src={About3} alt="" className='pt-3'/>
        </div>
        <div className="grid grid-cols-2 pt-3 pb-14 mx-32">
          <div className="justify-left text-white bg-purple-700 rounded-lg px-4 pb-20 pt-10 mr-3" id="first-about-bubble">
            <div className="rounded-3xl bg-white w-1/12 py-2">
              <HiLightBulb color={"purple"} size={30} className='ml-1'/>
            </div>
            <h1 className='text-2xl py-2 font-bold'>The Idea</h1>
            <p className="py-2">The Alpha team conducted an indepth research and saw the need for an online voting system that would speed up electoral process and help students vote in their preferred candidates.</p>
          </div>
          <div className="justify-left text-black rounded-lg px-4 pb-20 pt-10 ml-3" id='second-about-bubble'>
            <div className="rounded-3xl bg-purple-700 w-1/12 py-2">
              <GiVote color={"white"} size={30} className='ml-1'/>
            </div>
            <h1 className='text-2xl py-2 font-bold'>The Solution</h1>
            <p className="py-2">The Alpha team is set to solve the issue of slow electoral process and create a secured platform that ensures fair elections.</p>
          </div>
        </div>
    </div>
  )
}

export default About