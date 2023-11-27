import React from 'react'
import { Routes, Route,BrowserRouter } from 'react-router-dom'

import './App.css';

import Home from './Home/Home.js'
import NavBar from './NavBar/NavBar'
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
              </Routes>
           </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;
