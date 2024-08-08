import { Link } from "react-router-dom";
import "./homepage.scss";

const Homepage = () => {
  return (
    <div className="homepage">
      <div className="left">
        <h1>Focus Boost AI</h1>
        <h2>Supercharge your Focus Boost</h2>
        <h3>
        Welcome to Supercharge Your Focus Boost - your go-to tool for enhancing concentration! Our website offers quick, effective exercises designed to clear your mind and sharpen your focus in just a few minutes. Ready to boost your productivity? Click the button below to start your first exercise.
        </h3>
        <Link to="/dashboard">Get Started</Link>
      </div>
      <div className="right"></div>
      <div className="terms">
        <img src="/logo.png" alt="" />
        <div className="links">
            <Link to="/">Terms of Service</Link>
            <Link o="/">Privacy Policy</Link>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
