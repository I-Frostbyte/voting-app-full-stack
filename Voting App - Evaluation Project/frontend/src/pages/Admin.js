import React from 'react'
import Admin2 from '../assets/Admin2.jpg'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='container'>
        <Navbar />
        <div className="grid grid-cols-2">
            <div className="mx-2 pt-2">
                <img src={Admin2} alt="" className='h-5/6 ml-20'/>
            </div>
            <div className="mx-2 text-black">
                <div className="py-3">
                    <h1 className="text-center justify-center text-5xl font-bold">Admin Login!</h1>
                    <p className="text-center justify-center text-slate-500 font-semibold px-24 pt-5">Welcome back to the Voteroo voting platform.</p>
                </div>
                <div className="py-3 text-center">
                    <input type="number" className='rounded-3xl pr-72 pl-5 py-3' placeholder='Staff Id No:'/>
                </div>
                <div className="py-3 text-center">
                    <input type="password" className='rounded-3xl pr-72 pl-5 py-3' placeholder='Password'/>
                </div>
                <div className="text-center pb-10">
                    <Link to='/admin-dashboard'><button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-56 py-4 my-3 font-bold text-xs">Login</button></Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Admin