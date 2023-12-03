import './NavBar.css';
import { Link as RouterLink} from "react-router-dom";

import Link from "@mui/material/Link";
import Button from "@mui/material/Button";

export default function NavBar() {
  return (
    <div className="NavBar">
      <div className="brand-name">
        <Link component={RouterLink} color="mytheme.main" to="/"><h2>track my partnerships</h2></Link>
      </div>
      <div className="links">

        <Link color="mytheme.dark" component={RouterLink} to="/about">
          about
        </Link>
        <Link color="mytheme.dark" component={RouterLink} to="/login">
          login
        </Link>
        <Link color="mytheme.dark" component={RouterLink} to="/signup">
            <Button variant="contained" color="mytheme" className="sign-up-button" >sign up</Button>
        </Link>
      </div>
    </div>
  );
}

