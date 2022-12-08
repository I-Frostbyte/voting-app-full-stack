import React from 'react'
import Welcome1 from '../assets/Welcome1.jpg'
import Navbar from '../components/Navbar'

const Login = () => {
  return (
    <div className='container pt-5'>
        <Navbar />
        <div className="grid grid-cols-2">
            <div className="mx-2 pt-2">
                <img src={Welcome1} alt="" className='h-5/6 ml-20'/>
            </div>
            <div className="mx-2 text-black">
                <div className="py-3">
                    <h1 className="text-center justify-center text-5xl font-bold">Welcome Back!</h1>
                    <p className="text-center justify-center text-slate-500 font-semibold px-24 pt-5">Welcome back to the Voteroo voting platform. Sign in to vote in your prefered candidate.</p>
                </div>
                <div className="py-3 text-center">
                    <input type="number" className='rounded-3xl pr-72 pl-5 py-3' placeholder='Student Id No:'/>
                </div>
                <div className="py-3 text-center">
                    <input type="password" className='rounded-3xl pr-72 pl-5 py-3' placeholder='Password'/>
                </div>
                <div className="text-center pb-10">
                    <button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-56 py-4 my-3 font-bold text-xs">Login</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Login