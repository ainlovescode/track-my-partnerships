import React from 'react'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

import './App.css';

import NavBar from './NavBar/NavBar'
import Home from './Home/Home.js'
import Login from './Login/Login.js'
import Footer from './Footer/Footer'

function App() {
  return (
    <div className="App">
      <div className="App-main">
          <BrowserRouter>
              <header className="App-header">
                  <NavBar />
              </header>
              <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/home" element={<Home/>}/>
                <Route path="/login" element={<Login/>}/>
              </Routes>
           </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
