
import './App.css';
import Profile from './components/Profile'; // Adjust the path based on your file structure
import PortfolioSection from './components/PortfolioSection'; // Import the PortfolioSection component
import SingaporeLocationTimeline from './components/SingaporeLocationTimeline';
import SingaporeLocationMap from './components/SingaporeLocationMap';
import Header from './components/Header'
import Footer from './components/Footer'
import Services from './components/Services'
import HeroSection from './components/HeroSection';
function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <Services />
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
