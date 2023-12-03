import {Routes, Route, BrowserRouter} from 'react-router-dom';

import './App.css';

import NavBar from '../components/NavBar/NavBar';
import Home from '../components/Home/Home.js';
import Login from '../components/Login/Login.js';
import Footer from '../components/Footer/Footer';

import {createTheme, ThemeProvider} from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mytheme: {
      main: '#FF7DB3',
      light: '#FFF2F7',
      dark: '#380017',
      contrastText: '#FFF2F7',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>

      <div className="App">
        <div className="App-main">
          <BrowserRouter>
            <header className="App-header">
              <NavBar />
            </header>
            <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/login" element={<Login/>}/>
            </Routes>
          </BrowserRouter>
        </div>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
