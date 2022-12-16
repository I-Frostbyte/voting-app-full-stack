import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Hero from "./pages/Hero";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Admin from "./pages/Admin";
import VoterDashboard from "./pages/VoterDashboard";
import VotingPage from "./pages/VotingPage";
import AdminDashboard from "./pages/AdminDashboard";
import PollingPage from "./pages/PollingPage";
import { VotingContextProvider } from "./context/VotingContext";
import React, { useState, useEffect } from "react";
import { gapi } from "gapi-script";
import { usePollsContext } from "./hooks/usePollsContext";
import { useAuthContext } from "./hooks/useAuthContext";
import ProfileContext from "./context/profileContext";

function App() {
  const [userProfile, setUserProfile] = useState([]);
  const [loggedUser, setLoggedUser] = useState(null)
  const [gUser, setGUser] = useState({});

  const { polls, dispatch } = usePollsContext();

  const { admin } = useAuthContext();

  useEffect(() => {
    
    setUserProfile(localStorage.getItem('GoogleUser'))
    
    const initClient = () => {
      gapi.client.init({
        clientId: clientId,
        scope: "",
      });
    };

    gapi.load("client:auth2", initClient);

    const fetchPolls = async () => {
      const response = await fetch("/api/polls");
      const json = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_POLLS", payload: json });
      }
    };

    fetchPolls();
  }, []);

  const clientId =
    "975614919993-ht8pilt54vaht18rpkr4bvdsjuoj18kg.apps.googleusercontent.com";

  const onSuccess = (res) => {
    // console.log(res.profileObj)    
    // setUserProfile(res.profileObj)
    // console.log(userProfile)    
  };

  const onGuser = (jn) => {
    setGUser(jn)
  }

  // const handleLogout = () => {
  //   setProfile(null);
  // };

  const onFailure = (err) => {
    console.log("LOGIN FAILED! res: ", err);
  };

  const profileControls = {
    userProfile: userProfile,
    setUserProfile,
    gUser: gUser,
    setGUser,
    loggedUser: loggedUser,
    setLoggedUser
  };


  return (
    <ProfileContext.Provider value={profileControls}>
      <div className="App" id="hero-first">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/about" element={<About />} />
            <Route path="/faqs" element={<FAQ />} />
            <Route
              path="/register"
              element={
                <Signup
                  onSuccess={onSuccess}                  
                  onFailure={onFailure}                  
                />
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<Admin admin={admin} />} />
            <Route
              path="/voter-dashboard"
              element={<VoterDashboard />}
            />
            <Route
              path="/voting-page"
              element={<VotingPage polls={polls} onGuser={onGuser} />}
            />
            <Route
              path="/admin-dashboard"
              element={<AdminDashboard admin={admin} polls={polls} />}
            />
            <Route path="/polling-page" element={<PollingPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </ProfileContext.Provider>
  );
}

export default App;

/*
<VotingContextProvider>

</VotingContextProvider>
*/
