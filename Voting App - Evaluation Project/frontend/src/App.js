import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Hero from './pages/Hero';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Admin from './pages/Admin';
import VoterDashboard from './pages/VoterDashboard';
import VotingPage from './pages/VotingPage';
import AdminDashboard from './pages/AdminDashboard';
import PollingPage from './pages/PollingPage';
import { VotingContextProvider } from './context/VotingContext';
import { useState, useEffect } from 'react';
import { gapi } from 'gapi-script';
import { usePollsContext } from './hooks/usePollsContext';

function App() {

  const [profile, setProfile] = useState([]);

  const { polls, dispatch } = usePollsContext();

  useEffect(() => {
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
    setProfile(res.profileObj)
  };

  const handleLogout = () => {
    setProfile(null)
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res);
  };

  return (
    <div className="App" id="hero-first">
      <BrowserRouter>        
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/about' element={<About />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/register" element={<Signup onLoginSuccess={onSuccess} onLoginFailure={onFailure} profile={profile} onLogout={handleLogout} />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/voter-dashboard' element={<VoterDashboard />} />
          <Route path='/voting-page' element={<VotingPage profile={profile} polls={polls} />} />
          <Route path="/admin-dashboard" element={<AdminDashboard profile={profile} polls={polls} />} />
          <Route path='/polling-page' element={<PollingPage /> } />          
        </Routes>  
        <Footer />
      </BrowserRouter>       
    </div>
  );
}

export default App;

/*
<VotingContextProvider>

</VotingContextProvider>
*/
