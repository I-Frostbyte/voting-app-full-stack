import React, { useContext } from "react";
import { useState, useEffect } from "react";
import Login1 from "../assets/Login1.jpg";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
// import LoginButton from "../components/Login";
// import LogoutButton from '../components/Logout'
import { GoogleLogin } from "react-google-login";
import { gapi } from "gapi-script";
import ProfileContext from "../context/profileContext";

const Signup = (props) => {
  const signupContext = useContext(ProfileContext);

  const [err, setErr] = useState(null);

  // useEffect(() => {
  //   const initClient = () => {
  //     gapi.client.init({
  //       clientId: clientId,
  //       scope: "",
  //     });
  //   };

  //   gapi.load("client:auth2", initClient);
  // }, []);

  const clientId =
    "975614919993-ht8pilt54vaht18rpkr4bvdsjuoj18kg.apps.googleusercontent.com";

  const onSuccess = (res) => {
    signupContext.setUserProfile(res.profileObj);
    localStorage.setItem("GoogleUser", JSON.stringify(res.profileObj));
    const storeUser = localStorage.getItem("GoogleUser");
    console.log(storeUser);

    const userName = res.profileObj.name;
    const email = res.profileObj.email;
    const imageUrl = res.profileObj.imageUrl;

    const newUser = { userName, email, imageUrl };

    // ADDING THE CURRENT LOGGED IN USER TO THE DB

    const addUser = async () => {
      const resp = await fetch("/api/googleUsers", {
        method: "POST",
        body: JSON.stringify(newUser),
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Credentials": true,
        },
        mode: 'no-cors'
      });

      const jn = await resp.json();

      if (!resp.ok) {
        console.log("User not checked.");
        setErr(jn.error);
      }

      if (resp.ok) {
        setErr(null);
        console.log("Google User in Db: ", jn);
      }

      signupContext.setLoggedUser(jn);
    };

    addUser();
  };

  const onFailure = (err) => {
    props.onFailure(err);
  };

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

          <div className="text-center py-3">
            <div className="right-0">
              <div id="signInButton">
                <GoogleLogin
                  clientId={clientId}
                  buttonText="SIGN IN WITH GOOGLE"
                  onSuccess={onSuccess}
                  onFailure={onFailure}
                  cookiePolicy={"single_host_origin"}
                  isSignedIn={true}
                />
              </div>
            </div>
          </div>

          <div className="text-center px-32 pt-5 pb-5">
            <p className="text-slate-500 font-semibold">
              By signing up using Google, you agree with our
            </p>
            <p className="text-purple-700 font-bold">Terms and Conditions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

// id="admin-button"
