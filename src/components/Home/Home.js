import './Home.css';
import logo from '../../assets/logo.svg'

import { Link as RouterLink} from "react-router-dom";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function Home() {
  return (
    <div className="Home">
      <div className="slogan">
        <em>track your progress | track your deadlines | track your payments</em>
      </div>

      <div className="main">
        <div className="callout">
            <h1>making you on the ball with partnership deadlines</h1>



        <div className="home-signup-container">
        <Link color="mytheme.dark" component={RouterLink} to="/signup">
                    <Button variant="contained" color="mytheme" className="home-button" >get started</Button>
                </Link>
        </div>
        </div>
        <div className="logo">
            <img src={logo} alt="logo" />
        </div>
      </div>

    </div>
  );
}