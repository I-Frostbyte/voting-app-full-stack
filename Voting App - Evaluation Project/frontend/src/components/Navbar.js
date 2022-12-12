import React from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { GiVote } from "react-icons/gi";
import { GoogleLogout } from "react-google-login";
import { gapi } from "gapi-script";

const Navbar = (props) => {
  useEffect(() => {
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", initClient);
  }, []);

  const clientId =
  "975614919993-ht8pilt54vaht18rpkr4bvdsjuoj18kg.apps.googleusercontent.com";

  const logOut = () => {
    props.onLogout();
  };

  return (
    <div className="pt-3 pb-5">
      <div className="flex justify-between items-center md:visible invisible">
        <div className="">
          <Link
            to="/"
            className="ml-24 text-xl font-bold text-purple-600 items-center flex"
          >
            <GiVote size={40} className="mr-2" />
          </Link>
        </div>
        <div className="flex items-center">
          <Link to="/" className="px-10 font-bold hover:text-slate-500">
            <h1>Home</h1>
          </Link>
          <Link
            to="/about"
            className="px-10 font-bold hover:text-slate-500"
          >
            <h1>About</h1>
          </Link>
          <Link
            to="/contact-us"
            className="px-10 font-bold hover:text-slate-500"
          >
            <h1>Contact Us</h1>
          </Link>
          <Link
            to="/faqs"
            className="px-10 font-bold hover:text-slate-500"
          >
            <h1>FAQs</h1>
          </Link>
          {props.profile ? (
            <div className="flex justify-between items-center">
              <p className="pl-10 font-bold">{props.profile.name}</p>
              <img src={props.profile.imageUrl} alt="#" className="rounded-3xl w-1/6 h" />              
              <button className="rounded-lg mr-2"><GoogleLogout clientId={clientId} buttonText='Log Out' onLogoutSuccess={logOut} /></button>
            </div>
          ) : (
            <div className="flex">
              <Link
                to="/login"
                className="mx-4 text-2xl font-bold hover:text-slate-500"
              >
                <button className="text-purple-500 bg-white rounded-3xl px-9 py-4 m-auto font-bold text-xs border-purple-600 border hover:bg-purple-600 hover:text-white">
                  Log in
                </button>
              </Link>
              <Link
                to="/register"
                className="mr-10 ml-4 text-2xl font-bold hover:text-slate-500"
              >
                <button className="text-purple-500 bg-white hover:bg-purple-600 hover:text-white border border-purple-600 rounded-3xl px-9 py-4 m-auto font-bold text-xs">
                  Register as a Voter
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
