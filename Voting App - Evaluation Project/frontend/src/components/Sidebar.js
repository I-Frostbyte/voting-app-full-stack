import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GiVote } from "react-icons/gi";
import { AiFillHome } from "react-icons/ai";
import { MdHowToVote } from "react-icons/md";
import { FaList } from "react-icons/fa";
// import { GoogleLogout } from "react-google-login";
// import ProfileContext from "../context/profileContext";
import { FiLogOut } from "react-icons/fi";
const Sidebar = () => {
  return (
    <div className="container object-left w-2/12 border-r border-b border-gray-400 h-1/2">
      <div className="md:mb-20 m-0 pt-5 md:visible invisible">
        <Link
          to="/"
          className="ml-6 text-xl font-bold text-purple-600 items-center flex"
        >
          <GiVote size={20} className="mr-2" />
          Voteroo
        </Link>
      </div>
      <div className="mb-20 pt-5 md:invisible visible">
        <Link
          to="/"
          className="ml-6 text-xl font-bold text-purple-600 items-center flex"
        >
          <GiVote size={40} className="mr-2" />
        </Link>
      </div>
      <div className="md:py-10 my-10 mb-32 text-black text-center">
        <Link
          to="/voter-dashboard"
          className="md:py-3 my-3 hover:bg-gray-300 text-center right-0 flex"
        >
          <AiFillHome size={20} className="md:ml-6 md:mr-6 ml-3" />
          <p className="md:visible invisible ">Dashboard</p>
        </Link>
        <Link
          to="/voting-page"
          className="md:py-3 my-3 hover:bg-gray-300 text-center right-0 flex"
        >
          <MdHowToVote size={20} className="md:ml-6 md:mr-6 ml-3" />
          <p className="md:visible invisible ">Vote</p>
        </Link>
        <Link
          to="/guidelines"
          className="md:py-3 my-3 hover:bg-gray-300 text-center right-0 flex"
        >
          <FaList size={20} className="md:ml-6 md:mr-6 ml-3" />
          <p className="md:visible invisible ">Guidelines</p>
        </Link>
      </div>
      <div className="md:py-3 my-3 flex text-center">
        <button>
          <FiLogOut size={40} className="px-5" />
          <p className="md:visible invisible ">Logout</p>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
