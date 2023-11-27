import './NavBar.css';
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="brand-name">
        <Link to="home"><h2>track my partnerships</h2></Link>
      </div>
      <div className="links">
            <Link to="about">about</Link>
            <Link to="creators">creators</Link>
            <Link to="brands">brands</Link>
            <Link to="login">login</Link>
            <Link to="signup">
                <button className="sign-up-button">sign up</button>
            </Link>
      </div>
    </div>
  );
}

