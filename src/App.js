import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from './Components/Header';
import Navbar from "./Components/Navbar";
import Bollywood from "./Pages/Bollywood";
import Fitness from "./Pages/Fitness";
import Food from "./Pages/Food";
import Hollywood from "./Pages/Hollywood";
import Home from "./Pages/HomePage/Home";
import Technology from "./Pages/Technology";
import Travel from './Pages/Travel';
import Extension from './Extension';

function App() {
  return (
    <div className="App">
      <Header />
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bollywood" element={<Bollywood />} />
            <Route path="/fitness" element={<Fitness />} />
            <Route path="/food" element={<Food />} />
            <Route path="/hollywood" element={<Hollywood />} />
            <Route path="/technology" element={<Technology />} />
            <Route path='/travel' element={<Travel />}/>
            <Route path='/Extension' element={<Extension />}/>
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;