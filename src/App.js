
import './App.css';
import Profile from './components/Profile'; // Adjust the path based on your file structure
import PortfolioSection from './components/PortfolioSection'; // Import the PortfolioSection component
import SingaporeLocationTimeline from './components/SingaporeLocationTimeline';
import SingaporeLocationMap from './components/SingaporeLocationMap';
import Header from './components/Header'
import Footer from './components/Footer'
// import Services from './components/Services'
import HeroSection from './components/HeroSection';
import ActivityMenu  from './components/ActivityMenu';
import  { useState } from 'react';
function App() {
// Create a boolean state with default value as true or false, as you prefer
const [showActivityMenu, setShowActivityMenu] = useState(false);

  return (
    <div className="App">
    {/* Pass the state-modifying function to Header */}
    <Header home={() => setShowActivityMenu(false)} toggleActivityMenu={() => setShowActivityMenu(!showActivityMenu)} />

    {/* Conditionally render ActivityMenu based on the state */}
      {showActivityMenu && <ActivityMenu />}
   
      {!showActivityMenu && <HeroSection />}
      <Footer />
      <div style={{ display: 'none' }}>
        <SingaporeLocationMap />
        <SingaporeLocationTimeline /> 
        <Profile />
        <PortfolioSection />
      </div>
    </div>
  );
}

export default App;
