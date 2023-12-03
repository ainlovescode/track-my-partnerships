import './Login.css';

import TextField from '@mui/material/TextField';

import Button from '@mui/material/Button';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    console.log('Submit. Email: ', email, ' password: ', password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="Login">


      <div className="login-background"></div>

      <div className="login-container">
        <div className="login-box">
          <h1>Welcome back!</h1>


          <div className="login-form">
            <TextField
              type="email"
              className="email-field"
              label="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="filled"
              sx={{mb: '0.5em'}}
            />
            <TextField
              type="password"
              className="password-field"
              label="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="filled"
              sx={{mb: '0.5em'}}
            />


            <Button className="login-button"
              sx={{my: '0.5em', backgroundColor: 'mytheme.main'}}
              variant="contained"
              onClick={() => handleSubmit()}>
                Login
            </Button>


          </div>

        </div>
      </div>

    </div>
  );
}
