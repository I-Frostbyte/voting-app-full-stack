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

function App() {
  return (
    <div className="App" id="hero-first">
      <BrowserRouter>        
        <Routes>
          <Route path='/' element={<Hero />}/>
          <Route path='/about' element={<About />} />
          <Route path="/faqs" element={<FAQ />} />
          <Route path="/register" element={<Signup />} />
          <Route path='/login' element={<Login />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/voter-dashboard' element={<VoterDashboard />} />
          <Route path='/voting-page' element={<VotingPage />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
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
