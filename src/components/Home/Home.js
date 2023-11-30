import './Home.css';
import logo from '../logo.svg'

import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div className="Home">
      <div className="slogan">
        <em>track your progress | track your deadlines | track your payments</em>
      </div>

      <div className="main">
        <div className="callout">
            <h1>making you on the ball with partnership deadlines</h1>

            <Link to="signup">
               <button className="home-button">get started</button>
            </Link>
        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
      </div>

    </div>
  );
}