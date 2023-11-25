
import './App.css';
import Profile from './components/Profile'; // Adjust the path based on your file structure
import PortfolioSection from './components/PortfolioSection'; // Import the PortfolioSection component
import SingaporeLocationTimeline from './components/SingaporeLocationTimeline';
function App() {
  return (
    <div className="App">
      <SingaporeLocationTimeline />
      <div style={{ display: 'none' }}>
        <Profile />
        <PortfolioSection />
      </div>
    </div>
  );
}

export default App;
