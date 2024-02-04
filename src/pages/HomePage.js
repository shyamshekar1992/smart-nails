import MenuBar from "../components/Menubar";
import Footer from "../components/Footer";
import LandingPage from "../components/LandingPage";
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom

function HomePage() {
    const navigate = useNavigate(); // Use useNavigate to access the navigate function

    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
  
  export default HomePage;
