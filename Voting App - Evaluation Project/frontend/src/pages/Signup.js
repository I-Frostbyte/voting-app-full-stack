import React from "react";
import Login1 from "../assets/Login1.jpg";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import LoginButton from "../components/Login";
import { useEffect } from "react";
import { gapi } from "gapi-script";

const clientId =
  "975614919993-ht8pilt54vaht18rpkr4bvdsjuoj18kg.apps.googleusercontent.com";

const Signup = () => {
  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    }

    gapi.load("client:auth2", start);
  });

  return (
    <div className="container pt-5">
      <Navbar />
      <div className="md:grid md:grid-cols-2 grid grid-cols-1">
        <div className="md:mx-2 mx-20 pt-2">
          <img src={Login1} alt="" className="md:ml-20 ml-10" />
        </div>
        <div className="mr-0 ml-20 text-black">
          <div className="py-3">
            <h1 className="text-center justify-center text-5xl font-bold">
              Welcome !
            </h1>
            <p className="text-center justify-center text-slate-500 font-semibold px-24 pt-5">
              Register as a voter on the Voteroo voting platform to vote on your
              preferred candidate.
            </p>
          </div>
          <div className="py-3 text-center">
            <input
              type="number"
              className="rounded-3xl pr-72 pl-5 py-3"
              placeholder="Student Id No:"
            />
          </div>
          <div className="py-3 text-center">
            <input
              type="password"
              className="rounded-3xl pr-72 pl-5 py-3"
              placeholder="Password"
            />
          </div>
          <div className="text-center px-32 pt-5 pb-5">
            <p className="text-slate-500 font-semibold">
              By Clicking the sign up button, you agree with our
            </p>
            <p className="text-purple-700 font-bold">Terms and Conditions</p>
          </div>

          <div className="text-center pb-5 flex items-center justify-between mx-10">
            <button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-20 py-4 my-3 font-bold text-xs">
              Sign up
            </button>
            {/* <br /> */}
            <Link to="/admin">
              <button className="text-white bg-purple-500 hover:bg-white hover:border hover:border-purple-500 hover:text-purple-500 rounded-3xl px-10 py-4 my-3 font-bold text-xs">
                Sign In as an Admin{" "}
              </button>
            </Link>
          </div>
          <div className="text-center pb-10">
            <h1 className="pb-5 text-xl font-bold hover:text-purple-500">OR</h1>
            <div className="right-0">
              <LoginButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// id="admin-button"
