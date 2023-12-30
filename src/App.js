
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
import EnrichmentCourse from './components/EnrichmentCourse';
import OverseasStudies from './components/OverseasStudies';
import  { useState } from 'react';
function App() {
// Create a boolean state with default value as true or false, as you prefer
const [selectedPage, setSelectedPage] = useState(0);

  return (
    <div className="App">
    {/* Pass the state-modifying function to Header */}
    <Header selectPage={(n) => setSelectedPage(n)} />

    {/* Conditionally render ActivityMenu based on the state */}
      {selectedPage === 3 && <OverseasStudies />}
      {selectedPage === 2 && <EnrichmentCourse />}
      {selectedPage === 1 && <ActivityMenu />}
      {selectedPage === 0 && <HeroSection />}
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
